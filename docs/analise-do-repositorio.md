# Análise do repositório AeroBeach

## Visão geral

O repositório **AeroBeach** é uma aplicação web para gerenciamento e consulta de torneios de beach tennis, organizada em dois grandes módulos:

- **backend**: API em TypeScript com Express + routing-controllers + Prisma
- **frontend**: SPA em React + Vite + TypeScript

A estrutura indica um sistema focado em:

- listagem de torneios
- visualização de detalhes de um torneio
- autenticação de usuário
- inscrição de atletas em torneios, especialmente em **duplas**
- persistência local via **SQLite**

O projeto também possui arquivos de infraestrutura e pipelines de build, o que sugere uso em ambiente de deploy próprio.

---

## Stack tecnológica

| Camada | Tecnologias |
|---|---|
| Backend | Node.js, TypeScript, Express, routing-controllers, typedi, Prisma, SQLite |
| Autenticação | bcrypt, jsonwebtoken |
| Validação/DTOs | class-validator, class-transformer |
| Frontend | React 19, Vite, TypeScript, React Router, React Query, Axios, React-Bootstrap, Bootstrap |
| Testes | Jest, Supertest |
| Infra | Docker, Traefik, Caddy, Nginx |
| CI/CD | Workflows Forgejo em `.forgejo/workflows/` |

---

## Estrutura do repositório

### Raiz

- `README.md` — atualmente quase vazio
- `LICENSE`
- `backend/`
- `frontend/`
- `infra/`
- `.forgejo/workflows/`

### Observação

A separação entre frontend e backend está bem clara, o que facilita manutenção, deploy independente e leitura do código.

---

## Backend

### Organização geral

O backend está estruturado com foco em:

- controladores HTTP anotados com decorators
- serviços separados da camada de rota
- acesso ao banco centralizado em `DatabaseService`
- DTOs para entrada de dados

Arquivos relevantes:

- `backend/src/app.ts`
- `backend/src/controllers/*`
- `backend/src/services/*`
- `backend/src/DTOs/*`
- `backend/prisma/schema.prisma`

### Aplicação principal

O arquivo `backend/src/app.ts` configura:

- `routing-controllers`
- CORS habilitado
- validação automática
- carregamento de controllers, middlewares e interceptors por glob
- checagem de autorização via `AuthService`

### Rotas identificadas

#### `POST /auth/login`

- recebe `email` e `password`
- valida credenciais no `AuthService`
- retorna `{ accessToken }` em caso de sucesso

#### `GET /torneios`

- lista torneios com paginação
- aceita `page` e `perPage`

#### `POST /torneios`

- cria novo torneio
- atualmente a autorização está comentada

#### `GET /torneios/latest`

- retorna o torneio mais recente

#### `GET /torneios/:id`

- busca detalhes de um torneio específico

#### `POST /torneios/:id/inscrever`

- realiza inscrição em categoria
- voltada para inscrição de dupla

#### `GET /counter` e `POST /counter`

- endpoint simples de contador

#### `GET /isServerAlive`

- endpoint de saúde básico

---

## Modelo de dados

O schema Prisma usa **SQLite** como banco local.

### Entidades principais

| Entidade | Papel |
|---|---|
| `Torneios` | evento principal |
| `Categorias` | categorias associadas ao torneio |
| `Jogadores` | atletas |
| `Inscricoes` | vínculo entre jogador e categoria em um torneio |
| `Duplas` | vínculo entre dois jogadores em uma categoria |
| `Usuarios` | autenticação e papéis |
| `Contador` | contador auxiliar |

### Enums relevantes

- `TipoTorneio`: masculino, feminino, misto
- `CategoriaTorneio`: iniciante, d, c, b, a, open
- `SituacaoTorneio`: aberto, cancelado, realizando, concluído
- `ModalidadeTorneio`: duplas, simples
- `Role`: user, player, admin

### Observações de domínio

O schema mostra que o sistema foi desenhado para trabalhar com:

- torneios multi-categoria
- inscrições individuais ou em dupla
- controle de situação e modalidade
- usuários com perfis diferentes

---

## Regras de negócio observadas

### Autenticação

O `AuthService`:

- busca usuário por e-mail
- valida senha com `bcrypt`
- gera token JWT com validade de 3 horas
- decodifica token para autorização

### Inscrição em torneio

O `DatabaseService.subscribeTournamentAsDouble()`:

- exige dois jogadores
- valida existência do torneio
- impede inscrição após o prazo limite
- cria/atualiza usuários e jogadores
- impede inscrição duplicada na mesma categoria
- cria inscrições e a dupla em transação

### Criação de torneio

Existe validação para impedir inconsistência entre datas:

- a data limite de inscrição não pode ser maior que a data de início

---

## Frontend

### Organização geral

O frontend é uma SPA com:

- React Router para navegação
- React Query para cache e busca de dados
- Axios para comunicação com a API
- React-Bootstrap para interface

### Páginas identificadas

| Rota | Página | Função |
|---|---|---|
| `/` | HomePage | mostra o torneio mais recente |
| `/login` | Login | autenticação |
| `/torneios` | TorneiosPage | lista torneios paginados |
| `/torneios/:id` | TorneioDetalhesPage | detalhes e categorias do torneio |
| `/profile` | Profile | ainda em construção |

### Componentes principais

- `Header`
- `Footer`
- `CardTorneios`
- `CardCategorias`
- `AeroPagination`
- `Avatar`

### Fluxo de dados

O frontend consome a API com hooks específicos:

- `useUltimoTorneio()`
- `useListarTorneios()`
- `useTorneioById()`
- `useEfetuarLogin()`

Esse padrão deixa a camada de UI relativamente limpa e facilita manutenção.

### Autenticação no frontend

O login:

- envia email e senha para `/auth/login`
- salva o token no `localStorage`
- atualiza o `AuthContext`
- injeta o token nos headers do Axios

---

## Infraestrutura e deploy

### Docker e proxy

O repositório contém arquivos para orquestração e reverse proxy:

- `infra/docker-compose.yaml` com **Traefik**
- `infra/Caddyfile`
- `frontend/infra/aero-beach-fe.conf`
- `backend/start.sh`

### Pipeline Forgejo

Há workflows para backend e frontend em `.forgejo/workflows/` com etapas de:

- checkout
- cache de dependências
- instalação
- build
- testes
- geração de artefatos
- build de imagem Docker

Isso indica um processo automatizado de CI/CD com suporte a branch `development` e `master`.

---

## Qualidade e cobertura de testes

### Backend

Há testes com Jest e Supertest, mas parte deles ainda é bem básica. O backend já possui infraestrutura de testes, porém ainda parece haver espaço para ampliar a cobertura funcional dos endpoints principais.

### Frontend

O frontend ainda tem o script de teste como placeholder (`echo TODO`), então a cobertura de testes na interface parece inexistente no momento.

---

## Pontos fortes

- Separação clara entre frontend e backend
- Stack moderna e produtiva
- Uso de Prisma com schema bem definido
- Arquitetura modular no backend
- Consumo de API organizado por hooks no frontend
- Presença de infraestrutura e CI/CD

---

## Pontos de atenção

- `README.md` raiz está praticamente vazio
- `Profile` ainda está em construção
- o frontend não possui testes reais ainda
- alguns trechos de UI indicam pendências de evolução funcional
- a autorização em `POST /torneios` parece estar temporariamente comentada

---

## Conclusão

O AeroBeach é um sistema em estágio intermediário de evolução, com boa base arquitetural para um produto de torneios esportivos. O backend já cobre regras importantes de autenticação, torneios e inscrições, enquanto o frontend entrega uma navegação funcional para consulta e login.

O repositório está organizado de forma coerente e pronto para receber novas implementações, especialmente nas áreas de:

- cadastro de torneios
- perfil do usuário
- testes automatizados
- refinamento da experiência de inscrição

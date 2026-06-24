# Plano de ação — AeroBeach

## 1. Objetivo do produto

O AeroBeach é uma plataforma para gestão de arenas de beach tennis. A solução deve atender três públicos:

> Pesquisa de referência para o MVP: `docs/planejamento/pesquisas/benchmark-arenas-beach-tennis.md`
> Base consolidada de fontes: `docs/planejamento/pesquisas/fontes-sites-beach-tennis.json`

- **visitantes**: acessam a área pública para ver campeonatos, rankings, jogadores e informações da arena
- **administradores**: autenticados, gerenciam a operação da arena, torneios e regras do sistema
- **jogadores**: autenticados, conseguem se cadastrar, entrar em campeonatos e acompanhar sua participação

---

## 2. Leitura do código atual

### O que já existe

**Backend**
- autenticação por login com JWT
- serviços de domínio para usuários, torneios, inscrições e duplas
- schema Prisma com entidades de torneios, categorias, usuários, jogadores, inscrições e duplas
- endpoints para listar torneios, obter o último torneio e detalhar torneio por ID
- fluxo de inscrição de dupla em torneio

**Frontend**
- SPA em React com navegação básica
- home com o torneio mais recente
- listagem de torneios com paginação
- tela de detalhes do torneio e categorias
- tela de login
- estrutura inicial de contexto de autenticação

**Infra/qualidade**
- Docker e proxies já previstos
- pipelines de build em Forgejo
- testes iniciais no backend

### Lacunas principais

- não existe ainda a **área pública completa** da arena
- não existe **painel administrativo**
- não existe **área do jogador** bem definida
- rankings e páginas institucionais ainda não estão implementados
- cobertura de testes no frontend está praticamente ausente
- o README raiz estava vazio e precisava ser expandido com o entendimento do produto

---

## 3. Direção de produto expandida

### 3.1 Área pública

A área pública deve apresentar a arena como vitrine oficial:

- página inicial com destaques
- campeonatos futuros e em andamento
- ranking de jogadores e/ou duplas
- listagem e perfil público de jogadores
- páginas institucionais: sobre, contato, localização, regras, parceiros

### 3.2 Área administrativa

A área autenticada de administração deve permitir:

- cadastro e edição de torneios
- criação e manutenção de categorias
- gestão de status do torneio
- visualização de inscrições e participantes
- operação de rankings e conteúdo da arena
- gerenciamento de usuários com permissão administrativa

### 3.3 Área do jogador

A área autenticada do jogador deve permitir:

- cadastro e atualização de perfil
- inscrição em campeonatos
- visualização de inscrições ativas e históricas
- consulta de categorias disponíveis e situação do torneio
- acompanhamento de ranking e desempenho

---

## 4. Estratégia de implementação

A implementação deve seguir uma ordem que preserve valor cedo e reduza retrabalho.

### Fase 1 — Fundamentos

Objetivo: organizar a base técnica e alinhar o modelo do domínio.

Entregas:
- revisar nomenclatura e estrutura do projeto
- consolidar README e documentação de planejamento
- validar fluxo atual de autenticação e contexto de sessão
- definir papéis do sistema: visitante, jogador, administrador
- preparar contratos de API para o restante das features

### Fase 2 — Área pública

Objetivo: entregar a experiência pública da arena.

Entregas:
- home pública institucional
- campeonatos futuros e em andamento
- rankings públicos
- páginas públicas de jogadores
- páginas institucionais complementares

### Fase 3 — Autenticação e cadastro

Objetivo: formalizar login e onboarding de usuários.

Entregas:
- cadastro de jogadores
- login funcional e persistente
- proteção de rotas por perfil
- recuperação de sessão no carregamento da aplicação

### Fase 4 — Administração

Objetivo: permitir que administradores operem a arena.

Entregas:
- dashboard administrativo
- CRUD de torneios
- CRUD de categorias
- visão de inscrições e duplas
- publicação e alteração de status dos eventos

### Fase 5 — Jornada do jogador

Objetivo: permitir inscrição e acompanhamento pelo atleta.

Entregas:
- área do jogador autenticado
- inscrição em campeonatos
- histórico de participações
- exibição do status das inscrições

### Fase 6 — Rankings e reputação

Objetivo: tornar a arena viva com dados de desempenho.

Entregas:
- ranking por jogador
- ranking por dupla
- filtros por categoria e período
- integração com inscrições/resultados

### Fase 7 — Qualidade e operação

Objetivo: estabilizar para evolução contínua.

Entregas:
- testes automatizados de backend e frontend
- documentação de API e fluxo de telas
- ajustes de deploy
- observabilidade mínima e validações de produção

---

## 5. Backlog cronológico sugerido

Abaixo está a ordem sugerida para execução. Cada item pode virar uma issue individual.

### 01. Fundação do domínio e arquitetura

**Meta:** padronizar o que significa usuário, jogador, admin, torneio, categoria e inscrição.

- revisar entidades do Prisma e DTOs
- validar regras de negócio já existentes
- organizar contratos de API
- reduzir inconsistências de nomenclatura

### 02. Home pública da arena

**Meta:** criar uma vitrine pública com conteúdo institucional e destaques.

- hero/banner da arena
- próximos campeonatos
- ranking resumido
- atalhos para login e inscrição

### 03. Lista pública de campeonatos

**Meta:** exibir torneios com navegação clara e filtros básicos.

- listagem de eventos
- paginação ou carregamento progressivo
- status do campeonato
- filtros por situação e data

### 04. Detalhe público do campeonato

**Meta:** mostrar informações completas de um torneio e suas categorias.

- detalhes principais
- categorias disponíveis
- regras de inscrição
- chamada para ação de participação

### 05. Cadastro e login de jogadores

**Meta:** permitir que o jogador crie conta e acesse o sistema.

- cadastro inicial
- login persistente
- recuperação de sessão
- proteção de rotas autenticadas

### 06. Área do jogador

**Meta:** permitir que o atleta gerencie sua presença no sistema.

- perfil do jogador
- inscrições ativas
- histórico de campeonatos
- status por categoria

### 07. Admin: painel e gestão de torneios

**Meta:** dar autonomia para a arena operar torneios.

- dashboard administrativo
- CRUD de torneios
- CRUD de categorias
- alteração de status e datas

### 08. Admin: visão operacional de inscrições

**Meta:** acompanhar quem está inscrito e em qual categoria.

- listagem de inscrições
- visão de duplas
- filtros por torneio/categoria/status
- ações operacionais básicas

### 09. Rankings públicos e internos

**Meta:** exibir desempenho dos jogadores e duplas.

- ranking público
- filtros por modalidade/categoria
- evolução temporal
- integração com resultados futuros

### 10. Testes, documentação e estabilização

**Meta:** preparar o projeto para crescer com segurança.

- testes unitários e de integração
- testes de interface nos fluxos críticos
- documentação de API e fluxo de autenticação
- revisão de CI/CD e deploy

---

## 6. Critérios de pronto para a fase inicial

A fase inicial será considerada pronta quando houver:

- planejamento registrado no repositório
- issues abertas em ordem cronológica
- entendimento claro do estado atual e das próximas entregas
- base documental suficiente para começar as implementações

---

## 7. Observações técnicas do código atual

- o backend já possui uma base interessante para evoluir regras de negócio
- o frontend precisa ganhar consolidação de fluxo autenticado e telas administrativas
- a área pública deve ser tratada como vitrine principal do produto
- rankings e páginas de jogadores devem ser implementados em paralelo ao amadurecimento do modelo de dados

---

## 8. Próxima etapa recomendada

Criar e priorizar as issues em sequência, usando este plano como guia:

1. fundação do domínio
2. área pública
3. cadastro/login
4. área do jogador
5. área administrativa
6. rankings
7. qualidade e operação

---

## 9. Mapa das issues abertas no Forgejo

### Issues do MVP criadas nesta etapa

| Ordem sugerida | Issue | Tema | Link |
|---|---:|---|---|
| 1 | #95 | Base de domínio e contratos da plataforma | `https://git.lhprovedor.com.br/leandro/aero-beach/issues/95` |
| 2 | #96 | Área pública da arena | `https://git.lhprovedor.com.br/leandro/aero-beach/issues/96` |
| 3 | #97 | Cadastro de jogadores e autenticação completa | `https://git.lhprovedor.com.br/leandro/aero-beach/issues/97` |
| 4 | #98 | Autorização por perfil e base do painel administrativo | `https://git.lhprovedor.com.br/leandro/aero-beach/issues/98` |
| 5 | #99 | Área autenticada do jogador | `https://git.lhprovedor.com.br/leandro/aero-beach/issues/99` |
| 6 | #100 | Rankings e dados públicos da arena | `https://git.lhprovedor.com.br/leandro/aero-beach/issues/100` |
| 7 | #101 | Testes, documentação e estabilização | `https://git.lhprovedor.com.br/leandro/aero-beach/issues/101` |

### Leitura prática do backlog

O fluxo cronológico recomendado fica assim:

1. consolidar domínio e contratos
2. entregar a área pública da arena
3. fechar cadastro/login e persistência de sessão
4. estruturar autorização por perfil e painel administrativo
5. entregar a área autenticada do jogador
6. implementar rankings e visão pública de dados esportivos
7. estabilizar com testes, documentação e ajustes de deploy

### Observação operacional

Nesta revisão, o backlog foi alinhado ao estado atual do repositório e às novas issues abertas no Forgejo. As referências antigas #88–#94 foram substituídas por issues válidas do MVP, mantendo a ordem cronológica sugerida.

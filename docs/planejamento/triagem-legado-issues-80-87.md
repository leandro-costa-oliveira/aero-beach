# Triagem do legado — issues #80 a #87

## Objetivo

Registrar a triagem inicial do legado relacionada às issues **#80 a #87**, organizando a sequência mais segura para continuar a evolução do AeroBeach.

O foco desta etapa é separar o que já está pronto, o que depende de ajustes estruturais e o que ainda é apenas um rascunho ou referência histórica.

---

## Leitura do estado atual do código

Ao revisar o repositório, aparecem alguns pontos que ainda indicam trabalho de legado pendente:

- `console.log` espalhados em telas e testes
- `TODO` em camadas de frontend e backend
- tipagem provisória em partes do frontend
- testes com comportamento de rascunho ou sem asserts úteis
- páginas ainda em construção, como `Profile`
- rotas de navegação anunciadas no layout, mas sem implementação completa

### Exemplos observados

- `frontend/src/pages/TorneioDetalhesPage.tsx`
  - logs de debug (`console.log(id)` e `console.log(torneio)`)
- `frontend/src/pages/Profile.tsx`
  - página de perfil ainda como placeholder
- `frontend/src/hooks/useCadastrarTorneio.ts`
  - DTO local provisório com comentário de substituição futura
- `frontend/src/api/torneio.t.ts`
  - comentário indicando que o model do backend ainda não foi integrado
- `backend/tests/Tournament.controller.spec.ts`
  - `console.log(response)` dentro do teste de integração
- `backend/tests/Auth.controller.spec.ts`
  - teste ainda essencialmente vazio, aguardando reimplementação
- `backend/src/services/AuthService.ts`
  - comentário indicando evolução pendente para usuários sem `salt`

---

## Triagem das issues #80 a #87

| Issue | Área | Estado | Leitura da triagem | Ordem sugerida |
|---|---|---|---|---:|
| #80 | BE | aberta | Endpoint para adicionar categoria ao torneio. É um ponto de apoio do fluxo administrativo e depende da base de torneios/categorias estar estável. | 3 |
| #81 | FE | aberta | Página de cadastro do torneio. É a porta de entrada para o fluxo de criação de evento. | 2 |
| #82 | FE | aberta | Página para adicionar categoria ao torneio. Depende do endpoint do backend e do fluxo de detalhe do torneio. | 4 |
| #83 | FE | aberta | Card de jogadores na página do torneio. Depende de a tela de detalhe já expor os dados necessários de forma consistente. | 5 |
| #84 | FE | aberta | Rotas `/admin` e `/torneios/add`. É a base estrutural do fluxo administrativo no frontend. | 1 |
| #85 | N/D | aberta | Issue herdada/sem descrição útil. Precisa ser reescrita em tarefa concreta ou substituída por issue nova. | 6 |
| #86 | BE | fechada | Conserto de testes do torneio após a issue49. Serve como referência histórica; não exige ação imediata. | - |
| #87 | N/D | aberta | Issue herdada/sem descrição útil. Também precisa ser reescrita em tarefa concreta ou substituída por issue nova. | 7 |

---

## Ordem recomendada de execução

### 1. #84 — Rotas `/admin` e `/torneios/add`

Motivo:
- cria a estrutura de navegação para o backoffice
- dá base para a página de cadastro do torneio
- reduz retrabalho nas próximas telas administrativas

### 2. #81 — Página de cadastro do torneio

Motivo:
- entrega o primeiro fluxo funcional de criação de torneio no frontend
- permite validar a API já existente ou os ajustes necessários no backend

### 3. #80 — Endpoint para adicionar categoria ao torneio

Motivo:
- habilita o passo seguinte do fluxo administrativo
- evita que a tela de categoria fique sem suporte de backend

### 4. #82 — Adicionar categoria ao torneio

Motivo:
- completa o fluxo iniciado no detalhe do torneio
- depende de rota, tela base e endpoint confiável

### 5. #83 — Card de jogadores

Motivo:
- melhora a tela de detalhe do torneio com informação útil
- depende de o detalhe do torneio já estar estável e livre de ruído de debug

### 6. #85 — Consolidar ou substituir

Motivo:
- a issue não tem contexto suficiente para execução segura
- deve virar uma tarefa concreta ou ser absorvida por outra issue mais específica

### 7. #87 — Consolidar ou substituir

Motivo:
- mesma situação da issue #85
- não vale iniciar desenvolvimento sem redefinir o objetivo real

---

## O que já parece pronto o suficiente para seguir

- backend com base funcional de autenticação e torneios
- listagem de torneios no frontend
- tela de detalhe do torneio já existente
- infraestrutura de deploy e pipelines já presentes

Isso significa que a triagem do legado não começa do zero; ela serve para **limpar a rota** antes de expandir o produto.

---

## Pendências de legado que devem ser tratadas em paralelo

Mesmo com o backlog #80-#87, alguns pontos do código merecem correção enquanto a implementação avança:

- remover logs de debug
- substituir placeholders de página por telas reais
- revisar testes antigos ou fracos
- alinhar tipagens compartilhadas entre frontend e backend
- reduzir comentários `TODO` quando a implementação concreta existir

---

## Resultado desta etapa

A triagem inicial conclui que o caminho mais seguro para continuar o projeto é:

1. estruturar as rotas do admin
2. finalizar o cadastro de torneio
3. garantir o endpoint de categoria
4. fechar o fluxo de categoria no frontend
5. melhorar o detalhe do torneio com os jogadores
6. limpar as issues herdadas sem descrição clara

Após a reorganização do backlog, as issues legadas `#46` e `#80–#94` foram fechadas ou absorvidas pelo novo MVP, deixando `#95–#101` como o conjunto ativo de trabalho.

Esse documento permanece como referência histórica da fase de legado antes da consolidação do roadmap.

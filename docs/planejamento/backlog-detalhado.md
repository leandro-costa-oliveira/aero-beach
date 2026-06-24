# Backlog detalhado por milestone

Este documento complementa o plano de ação do AeroBeach com a versão **bite size** do backlog.

- As issues `#95` a `#101` funcionam como **epics / issues-mãe** de cada milestone.
- As issues `#102` a `#131` são as entregas pequenas, prontas para execução pela equipe.
- Labels e milestones já foram aplicados no Forgejo.

---

## M1 — Fundação do domínio

**Epic:** `#95 — MVP 01 — Base de domínio e contratos da plataforma`

A definição das entidades centrais está em `docs/planejamento/entidades-do-dominio.md` e a triagem operacional desta milestone está em `docs/planejamento/triagem-m1-fundacao.md`.

| Issue / doc | Tema | Link |
|---|---|---|
| `docs/planejamento/entidades-do-dominio.md` | Definição das entidades centrais do domínio | `docs/planejamento/entidades-do-dominio.md` |
| #103 | Ajustar schema Prisma do MVP | https://git.lhprovedor.com.br/leandro/aero-beach/issues/103 |
| #104 | Definir contratos e DTOs compartilhados | https://git.lhprovedor.com.br/leandro/aero-beach/issues/104 |
| #105 | Padronizar validação e erros da API | https://git.lhprovedor.com.br/leandro/aero-beach/issues/105 |

---

## M2 — Área pública

**Epic:** `#96 — MVP 02 — Área pública da arena`

Os wireframes de referência desta frente estão em `docs/planejamento/wireframes-frontend.md`.

| Issue | Tema | Wireframe | Link |
|---|---|---|---|
| #106 | Estruturar home pública | home pública | `docs/planejamento/wireframes-frontend.md` |
| #107 | Criar seção de campeonatos em destaque | campeonatos em destaque | `docs/planejamento/wireframes-frontend.md` |
| #108 | Criar bloco de ranking e resumo público | ranking e resumo público | `docs/planejamento/wireframes-frontend.md` |
| #109 | Ajustar rotas e navegação pública | navegação pública | `docs/planejamento/wireframes-frontend.md` |

---

## M3 — Cadastro e autenticação

**Epic:** `#97 — MVP 03 — Cadastro de jogadores e autenticação completa`

Os wireframes de referência desta frente estão em `docs/planejamento/wireframes-frontend.md`.

| Issue | Tema | Wireframe | Link |
|---|---|---|---|
| #110 | Implementar cadastro de jogador | cadastro de jogador | `docs/planejamento/wireframes-frontend.md` |
| #111 | Revisar login e persistência de sessão | login | `docs/planejamento/wireframes-frontend.md` |
| #112 | Recuperar sessão no carregamento | recuperação de sessão | `docs/planejamento/wireframes-frontend.md` |
| #113 | Cobrir autenticação com testes | fluxo de autenticação | `docs/planejamento/wireframes-frontend.md` |

---

## M4 — Administração

**Epic:** `#98 — MVP 04 — Autorização por perfil e base do painel administrativo`

Os wireframes de referência da interface administrativa estão em `docs/planejamento/wireframes-frontend.md`.

| Issue | Tema | Wireframe | Link |
|---|---|---|---|
| #114 | Estruturar rotas /admin | /admin | `docs/planejamento/wireframes-frontend.md` |
| #115 | Criar lista de ações administrativas | painel admin | `docs/planejamento/wireframes-frontend.md` |
| #116 | Proteger ações administrativas por perfil | acesso restrito | `docs/planejamento/wireframes-frontend.md` |
| #117 | Implementar cadastro de torneio | cadastro de torneio | `docs/planejamento/wireframes-frontend.md` |
| #118 | Endpoint para adicionar categoria ao torneio | formulário de categoria | `docs/planejamento/wireframes-frontend.md` |
| #119 | Tela para adicionar categoria ao torneio | formulário de categoria | `docs/planejamento/wireframes-frontend.md` |

---

## M5 — Jornada do jogador

**Epic:** `#99 — MVP 05 — Área autenticada do jogador`

Os wireframes de referência desta frente estão em `docs/planejamento/wireframes-frontend.md`.

| Issue | Tema | Wireframe | Link |
|---|---|---|---|
| #120 | Criar página de perfil autenticado | perfil do jogador | `docs/planejamento/wireframes-frontend.md` |
| #121 | Exibir inscrições ativas | inscrições ativas | `docs/planejamento/wireframes-frontend.md` |
| #122 | Exibir histórico de participação | histórico | `docs/planejamento/wireframes-frontend.md` |
| #123 | Mostrar status por torneio e categoria | status por torneio | `docs/planejamento/wireframes-frontend.md` |

---

## M6 — Rankings

**Epic:** `#100 — MVP 06 — Rankings e dados públicos da arena`

Os wireframes de referência desta frente estão em `docs/planejamento/wireframes-frontend.md`.

| Issue | Tema | Wireframe | Link |
|---|---|---|---|
| #124 | Criar ranking público de jogadores | ranking de jogadores | `docs/planejamento/wireframes-frontend.md` |
| #125 | Criar ranking de duplas | ranking de duplas | `docs/planejamento/wireframes-frontend.md` |
| #126 | Adicionar filtros por categoria e período | filtros de ranking | `docs/planejamento/wireframes-frontend.md` |
| #127 | Expor dados de ranking no backend | contrato de ranking | `docs/planejamento/wireframes-frontend.md` |

---

## M7 — Qualidade e operação

**Epic histórica:** `#101 — MVP 07 — Testes, documentação e estabilização` (fechada após o desdobramento em `#128` a `#131`)

| Issue | Tema | Link |
|---|---|---|
| #128 | Ampliar testes do backend | https://git.lhprovedor.com.br/leandro/aero-beach/issues/128 |
| #129 | Criar testes de frontend dos fluxos críticos | https://git.lhprovedor.com.br/leandro/aero-beach/issues/129 |
| #130 | Atualizar documentação do produto e fluxos | https://git.lhprovedor.com.br/leandro/aero-beach/issues/130 |
| #131 | Revisar CI/CD, deploy e limpeza final | https://git.lhprovedor.com.br/leandro/aero-beach/issues/131 |

---

## Leitura prática da ordem de execução

1. Fundação do domínio (`#102`–`#105`)
2. Área pública (`#106`–`#109`)
3. Cadastro e autenticação (`#110`–`#113`)
4. Administração (`#114`–`#119`)
5. Jornada do jogador (`#120`–`#123`)
6. Rankings (`#124`–`#127`)
7. Qualidade e operação (`#128`–`#131`)

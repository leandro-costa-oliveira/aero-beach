# Triagem da Milestone M1 — Fundação do domínio

## Objetivo

Esta triagem detalha a execução da **M1 — Fundação do domínio**, que corresponde à issue-mãe `#95 — MVP 01 — Base de domínio e contratos da plataforma`.

A intenção aqui é transformar um tópico amplo em um conjunto de entregas pequenas, sequenciais e fáceis de delegar para a equipe.

---

## Leitura executiva

A M1 não deve ser tratada como uma única tarefa grande. Ela precisa ser executada como uma cadeia de dependências:

1. **mapear o domínio**
2. **refletir esse domínio no schema**
3. **formalizar os contratos compartilhados**
4. **padronizar validação e erros da API**

Isso reduz retrabalho nas milhas seguintes (`M2` a `M7`) e evita que o frontend e o backend cresçam com formatos inconsistentes.

---

## Issues do grupo M1

| Ordem | Issue | Tema | Dependência principal |
|---|---:|---|---|
| 1 | `docs/planejamento/entidades-do-dominio.md` | Definição das entidades centrais do domínio | nenhuma |
| 2 | #103 | Ajustar schema Prisma do MVP | documento de entidades |
| 3 | #104 | Definir contratos e DTOs compartilhados | documento de entidades e #103 |
| 4 | #105 | Padronizar validação e erros da API | #104 |

---

## Recomendações por issue

### #102 — Mapear entidades centrais do domínio

**Papel da issue:** abrir a base conceitual do MVP.

**Resultado esperado:**
- lista clara de entidades centrais
- relações principais entre elas
- dependências de domínio conhecidas
- pontos ainda ambíguos documentados como pendência

**Critério de aceite:**
- a equipe consegue discutir o domínio sem improvisar nomes ou estruturas
- a próxima issue já tem base suficiente para o schema

---

### #103 — Ajustar schema Prisma do MVP

**Papel da issue:** transformar a leitura do domínio em estrutura persistida.

**Resultado esperado:**
- modelos Prisma alinhados ao MVP
- nomes e relações consistentes
- pontos de divergência justificados

**Critério de aceite:**
- o schema reflete o domínio acordado
- não existem modelos contraditórios com a leitura da issue #102

---

### #104 — Definir contratos e DTOs compartilhados

**Papel da issue:** eliminar formatos improvisados entre frontend e backend.

**Resultado esperado:**
- contratos mínimos para autenticação, torneios e categorias
- DTOs reutilizáveis e previsíveis
- padronização do que entra e sai da API

**Critério de aceite:**
- o frontend não precisa adivinhar o formato dos payloads
- os contratos acompanham o domínio e o schema já acordados

---

### #105 — Padronizar validação e erros da API

**Papel da issue:** fechar a base com consistência operacional.

**Resultado esperado:**
- formato único de erro
- regras mínimas de validação
- retorno previsível para o frontend

**Critério de aceite:**
- erros e validações seguem um padrão único
- o frontend pode tratar falhas sem exceções por endpoint

---

## Sequência recomendada de execução

A ordem recomendada é:

1. **#102** — domínio
2. **#103** — persistência
3. **#104** — contratos
4. **#105** — validação/erros

### Motivo

Se a equipe começar por contratos ou validação sem alinhar o domínio, vai surgir retrabalho. O fluxo acima reduz risco e deixa o MVP mais estável para as próximas milestones.

---

## Observação para gestão do backlog

- `#95` deve permanecer como issue-mãe / epic da milestone.
- As issues `#102` a `#105` são as tarefas executáveis.
- Se surgir ambiguidade durante a implementação, ela deve voltar para este documento antes de contaminar as milestones seguintes.

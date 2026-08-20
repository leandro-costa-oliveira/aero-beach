# AeroBeach

Plataforma para gestão de arenas de beach tennis.

## Visão geral

O **AeroBeach** será uma plataforma completa para uma arena de beach tennis, com três frentes principais:

1. **Página pública da arena**
   - campeonatos futuros e em andamento
   - rankings
   - jogadores
   - informações institucionais da arena

2. **Área autenticada para administradores**
   - cadastro e gestão de torneios
   - publicação e organização de categorias
   - controle operacional da arena
   - gestão de conteúdos administrativos e regras de negócio

3. **Área autenticada para jogadores**
   - cadastro no site
   - atualização de perfil
   - inscrição em campeonatos
   - acompanhamento de participação e histórico

## Situação atual do código

O repositório já possui uma base funcional com:

- **backend** em TypeScript + Express + Prisma
- **frontend** em React + Vite + React Query
- autenticação por JWT
- listagem e detalhamento de torneios
- estrutura inicial de inscrições em torneios
- infraestrutura de deploy e CI/CD

## MVP em andamento

O plano de MVP está sendo organizado em camadas para reduzir retrabalho e entregar valor cedo:

1. **Base de domínio e contratos**
2. **Área pública da arena**
3. **Cadastro e autenticação completa**
4. **Autorização por perfil e painel administrativo**
5. **Área autenticada do jogador**
6. **Rankings e dados públicos**
7. **Testes, documentação e estabilização**

O detalhamento está em:

- `docs/planejamento/plano-de-acao.md`

As issues de acompanhamento do MVP foram abertas no Forgejo e seguem a mesma ordem do plano.

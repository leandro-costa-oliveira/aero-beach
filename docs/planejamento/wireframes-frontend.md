# Wireframes de referência — issues de frontend

Este documento reúne wireframes simples para orientar as issues de frontend do roadmap.

A ideia não é definir visual final, e sim dar ao time uma referência comum de estrutura, hierarquia e blocos principais.

---

## M2 — Área pública

### #106 — Estruturar home pública

```text
┌──────────────────────────────────────────────────────────────┐
│ LOGO                                   [Entrar] [Cadastrar]  │
├──────────────────────────────────────────────────────────────┤
│ HERO                                                         │
│ Título principal                                             │
│ Texto curto de contexto                                      │
│ [Ver campeonatos]   [Ver ranking]                            │
├──────────────────────────────────────────────────────────────┤
│ CAMPEONATOS EM DESTAQUE                                      │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                       │
│ │ card     │ │ card     │ │ card     │                       │
│ └──────────┘ └──────────┘ └──────────┘                       │
├──────────────────────────────────────────────────────────────┤
│ RANKING RESUMIDO                                             │
│ 1. Jogador A                                                 │
│ 2. Jogador B                                                 │
│ 3. Jogador C                                                 │
└──────────────────────────────────────────────────────────────┘
```

### #107 — Criar seção de campeonatos em destaque

```text
┌──────────────────────────────────────────────────────────────┐
│ CAMPEONATOS EM DESTAQUE                                      │
├──────────────────────────────────────────────────────────────┤
│ ┌──────────────────────┐  ┌──────────────────────┐           │
│ │ Nome do campeonato   │  │ Nome do campeonato   │           │
│ │ Categoria / data     │  │ Categoria / data     │           │
│ │ Status               │  │ Status               │           │
│ │ [Ver detalhes]       │  │ [Ver detalhes]       │           │
│ └──────────────────────┘  └──────────────────────┘           │
│ ┌──────────────────────┐  ┌──────────────────────┐           │
│ │ Nome do campeonato   │  │ Nome do campeonato   │           │
│ │ Categoria / data     │  │ Categoria / data     │           │
│ │ Status               │  │ Status               │           │
│ │ [Ver detalhes]       │  │ [Ver detalhes]       │           │
│ └──────────────────────┘  └──────────────────────┘           │
└──────────────────────────────────────────────────────────────┘
```

### #108 — Criar bloco de ranking e resumo público

```text
┌──────────────────────────────────────────────────────────────┐
│ RANKING E RESUMO                                             │
├──────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────┐ ┌──────────────────────────┐ │
│ │ Top jogadores                │ │ Resumo da arena          │ │
│ │ 1. ...                       │ │ Torneios ativos: 12      │ │
│ │ 2. ...                       │ │ Jogadores: 240           │ │
│ │ 3. ...                       │ │ Categorias: 18           │ │
│ └──────────────────────────────┘ └──────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

### #109 — Ajustar rotas e navegação pública

```text
┌──────────────────────────────────────────────────────────────┐
│ LOGO  Home  Campeonatos  Ranking  Perfil  [Entrar]          │
├──────────────────────────────────────────────────────────────┤
│ Breadcrumb / rota atual                                     │
│ Conteúdo da página                                           │
└──────────────────────────────────────────────────────────────┘
```

---

## M4 — Administração

### #119 — Tela para adicionar categoria ao torneio

```text
┌──────────────────────────────────────────────────────────────┐
│ Admin > Torneios > Adicionar categoria                        │
├──────────────────────────────────────────────────────────────┤
│ Torneio: [ seletor ]                                         │
│ Nome da categoria: [____________________]                   │
│ Tipo / faixa / regra: [_________________]                   │
│ Observações: [________________________________________]     │
│                                                              │
│ [Cancelar]                                         [Salvar] │
└──────────────────────────────────────────────────────────────┘
```

---

## M3 — Cadastro e autenticação

### #110 — Implementar cadastro de jogador

```text
┌──────────────────────────────────────────────────────────────┐
│ CADASTRO DE JOGADOR                                          │
├──────────────────────────────────────────────────────────────┤
│ Nome completo: [____________________________________]       │
│ E-mail:        [____________________________________]       │
│ Telefone:      [____________________________________]       │
│ Categoria:     [ seletor ]                                   │
│ Foto:          [ upload ]                                    │
│                                                              │
│ [Cancelar]                                           [Salvar]│
└──────────────────────────────────────────────────────────────┘
```

### #111 — Revisar login e persistência de sessão

```text
┌──────────────────────────────────────────────────────────────┐
│ LOGIN                                                        │
├──────────────────────────────────────────────────────────────┤
│ E-mail:    [____________________________________]           │
│ Senha:     [____________________________________]           │
│ [ ] Manter sessão ativa                                      │
│                                                              │
│ [Entrar]                                                     │
│ Esqueci minha senha                                          │
└──────────────────────────────────────────────────────────────┘
```

### #112 — Recuperar sessão no carregamento

```text
┌──────────────────────────────────────────────────────────────┐
│ RECUPERAÇÃO DE SESSÃO                                        │
├──────────────────────────────────────────────────────────────┤
│ [ carregando... ]                                            │
│ Se o token existir, redirecionar para a área autenticada.    │
│ Se não existir, mostrar login.                               │
└──────────────────────────────────────────────────────────────┘
```

### #113 — Cobrir autenticação com testes

```text
┌──────────────────────────────────────────────────────────────┐
│ FLUXO DE AUTENTICAÇÃO                                        │
├──────────────────────────────────────────────────────────────┤
│ Login -> armazenamento do token -> bootstrap da sessão       │
│ Login inválido -> feedback de erro                           │
│ Sessão expirada -> retorno ao login                          │
└──────────────────────────────────────────────────────────────┘
```

---

## M4 — Administração

### #114 — Estruturar rotas /admin

```text
┌──────────────────────────────────────────────────────────────┐
│ /admin                                                       │
├──────────────────────────────────────────────────────────────┤
│ Menu lateral                                                 │
│ - Torneios                                                   │
│ - Categorias                                                 │
│ - Jogadores                                                  │
│ - Rankings                                                   │
│                                                              │
│ Área de conteúdo                                             │
└──────────────────────────────────────────────────────────────┘
```

### #115 — Criar lista de ações administrativas

```text
┌──────────────────────────────────────────────────────────────┐
│ PAINEL ADMIN                                                 │
├──────────────────────────────────────────────────────────────┤
│ [Novo torneio] [Nova categoria] [Ajustar ranking]            │
│ [Gerenciar jogadores] [Ver relatórios]                       │
└──────────────────────────────────────────────────────────────┘
```

### #116 — Proteger ações administrativas por perfil

```text
┌──────────────────────────────────────────────────────────────┐
│ ACESSO RESTRITO                                              │
├──────────────────────────────────────────────────────────────┤
│ Você não tem permissão para ver esta página.                 │
│ [Voltar]                                                     │
└──────────────────────────────────────────────────────────────┘
```

### #117 — Implementar cadastro de torneio

```text
┌──────────────────────────────────────────────────────────────┐
│ CADASTRO DE TORNEIO                                          │
├──────────────────────────────────────────────────────────────┤
│ Nome do torneio: [____________________________]             │
│ Data:            [____/____/____]                            │
│ Local:           [____________________________]             │
│ Formato:         [ seletor ]                                 │
│ Status:          [ seletor ]                                 │
│                                                              │
│ [Cancelar]                                           [Salvar]│
└──────────────────────────────────────────────────────────────┘
```

### #119 — Tela para adicionar categoria ao torneio

```text
┌──────────────────────────────────────────────────────────────┐
│ Admin > Torneios > Adicionar categoria                        │
├──────────────────────────────────────────────────────────────┤
│ Torneio: [ seletor ]                                         │
│ Nome da categoria: [____________________]                   │
│ Tipo / faixa / regra: [_________________]                   │
│ Observações: [________________________________________]     │
│                                                              │
│ [Cancelar]                                         [Salvar] │
└──────────────────────────────────────────────────────────────┘
```

---

## M5 — Jornada do jogador

### #120 — Criar página de perfil autenticado

```text
┌──────────────────────────────────────────────────────────────┐
│ PERFIL DO JOGADOR                                            │
├──────────────────────────────────────────────────────────────┤
│ Foto  Nome                                                    │
│ Dados principais                                              │
│                                                              │
│ [Inscrições ativas] [Histórico] [Status]                     │
└──────────────────────────────────────────────────────────────┘
```

### #121 — Exibir inscrições ativas

```text
┌──────────────────────────────────────────────────────────────┐
│ INSCRIÇÕES ATIVAS                                            │
├──────────────────────────────────────────────────────────────┤
│ Torneio A  | Categoria X | Pendente                          │
│ Torneio B  | Categoria Y | Confirmado                        │
└──────────────────────────────────────────────────────────────┘
```

### #122 — Exibir histórico de participação

```text
┌──────────────────────────────────────────────────────────────┐
│ HISTÓRICO                                                    │
├──────────────────────────────────────────────────────────────┤
│ Torneio A | 2024 | 3º lugar                                  │
│ Torneio B | 2023 | Participou                               │
└──────────────────────────────────────────────────────────────┘
```

### #123 — Mostrar status por torneio e categoria

```text
┌──────────────────────────────────────────────────────────────┐
│ STATUS POR TORNEIO                                           │
├──────────────────────────────────────────────────────────────┤
│ Torneio A                                                     │
│ - Categoria X: confirmado                                    │
│ - Categoria Y: aguardando                                    │
└──────────────────────────────────────────────────────────────┘
```

---

## M6 — Rankings

### #124 — Criar ranking público de jogadores

```text
┌──────────────────────────────────────────────────────────────┐
│ RANKING DE JOGADORES                                         │
├──────────────────────────────────────────────────────────────┤
│ 1. Jogador A | pontos                                         │
│ 2. Jogador B | pontos                                         │
│ 3. Jogador C | pontos                                         │
└──────────────────────────────────────────────────────────────┘
```

### #125 — Criar ranking de duplas

```text
┌──────────────────────────────────────────────────────────────┐
│ RANKING DE DUPLAS                                            │
├──────────────────────────────────────────────────────────────┤
│ 1. Dupla A                                                    │
│ 2. Dupla B                                                    │
│ 3. Dupla C                                                    │
└──────────────────────────────────────────────────────────────┘
```

### #126 — Adicionar filtros por categoria e período

```text
┌──────────────────────────────────────────────────────────────┐
│ FILTROS DE RANKING                                           │
├──────────────────────────────────────────────────────────────┤
│ Categoria: [ seletor ]  Período: [ seletor ]  [Aplicar]      │
└──────────────────────────────────────────────────────────────┘
```

---

## Como usar este documento

- Cada issue de frontend deve referenciar o wireframe correspondente.
- Se a tela mudar durante a implementação, este arquivo deve ser atualizado para manter a referência alinhada.
- O objetivo é reduzir ambiguidade antes do desenvolvimento começar.

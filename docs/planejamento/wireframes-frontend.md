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

## Como usar este documento

- Cada issue de frontend deve referenciar o wireframe correspondente.
- Se a tela mudar durante a implementação, este arquivo deve ser atualizado para manter a referência alinhada.
- O objetivo é reduzir ambiguidade antes do desenvolvimento começar.

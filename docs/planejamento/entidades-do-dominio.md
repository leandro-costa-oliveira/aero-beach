# Entidades centrais do domínio

Este documento consolida a leitura de domínio da milestone **M1 — Fundação do domínio** e serve como base para a implementação do schema Prisma e dos contratos compartilhados.

## Propósito

Antes de mexer no schema, é preciso alinhar *o que existe* no produto e *como os conceitos se relacionam*.

A intenção aqui não é descrever implementação técnica, e sim registrar o vocabulário do domínio para que o time trabalhe com o mesmo entendimento.

---

## Entidades centrais

### 1. Usuário

Representa a conta de acesso à plataforma.

**Responsabilidades do domínio:**
- autenticação
- identificação do perfil
- controle de acesso
- vínculo com a área autenticada

**Observações:**
- nem todo usuário precisa ser administrador
- o usuário é a base de entrada para os fluxos autenticados

---

### 2. Jogador

Representa a pessoa participante dos torneios.

**Responsabilidades do domínio:**
- exibir dados públicos e autenticados do atleta
- participar de inscrições e categorias
- aparecer em rankings e histórico

**Observações:**
- um usuário pode representar um jogador, mas o conceito de jogador é mais amplo do que acesso
- o jogador pode existir como entidade de negócio mesmo quando a conta ainda não estiver totalmente ativa

---

### 3. Torneio

Representa a competição organizada na plataforma.

**Responsabilidades do domínio:**
- agrupar categorias
- concentrar inscrições
- sustentar a visualização pública e administrativa

**Observações:**
- o torneio é uma unidade central de organização do produto
- várias áreas da aplicação derivam dele: público, admin, jogador e rankings

---

### 4. Categoria

Representa a divisão competitiva dentro de um torneio.

**Responsabilidades do domínio:**
- separar grupos por nível, modalidade ou regra
- organizar inscrições e partidas
- facilitar consulta e filtragem pública

**Observações:**
- uma categoria sempre pertence a um torneio
- o vínculo com torneio precisa ser explícito no modelo

---

### 5. Inscrição

Representa a participação de um jogador em um torneio/categoria.

**Responsabilidades do domínio:**
- registrar participação
- controlar status da presença
- conectar jogador, torneio e categoria

**Observações:**
- é a entidade que costura boa parte dos fluxos do MVP
- pode ser a base para status ativo, histórico e elegibilidade

---

### 6. Resultado

Representa o desfecho esportivo de uma inscrição ou participação.

**Responsabilidades do domínio:**
- registrar performance
- alimentar histórico
- suportar rankings e estatísticas públicas

**Observações:**
- não deve ser tratado apenas como dado de exibição
- precisa ser modelado de forma consistente para não quebrar os rankings futuros

---

## Relações principais

| Origem | Relação | Destino | Observação |
|---|---|---|---|
| Usuário | pode representar | Jogador | vínculo de conta com perfil de atleta |
| Torneio | possui | Categoria | uma competição pode ter várias divisões |
| Jogador | participa por meio de | Inscrição | inscrição liga o atleta ao evento |
| Inscrição | pertence a | Torneio | a participação sempre referencia um torneio |
| Inscrição | pode pertencer a | Categoria | a divisão competitiva pode ser explicitada |
| Resultado | deriva de | Inscrição | desempenho ligado à participação |

---

## Regras de leitura do domínio

1. **Usuário não é sinônimo de jogador.**
   - usuário é acesso
   - jogador é participação esportiva

2. **Torneio é a unidade central do produto.**
   - todas as áreas do MVP orbitam o torneio

3. **Categoria depende do torneio.**
   - não faz sentido existir isolada neste contexto

4. **Inscrição é a peça de ligação mais importante.**
   - ela conecta acesso, competição e status de participação

5. **Resultado alimenta a visão pública.**
   - sem resultado coerente, rankings e histórico ficam frágeis

---

## Impacto direto nas próximas etapas

Este documento serve como base para:

- `#103 — Ajustar schema Prisma do MVP`
- `#104 — Definir contratos e DTOs compartilhados`
- `#105 — Padronizar validação e erros da API`

Também deve ser usado como referência quando o time discutir telas públicas, admin e área do jogador.

---

## Conclusão

Se a equipe mantiver estas entidades estáveis, o resto do MVP fica mais previsível e menos sujeito a retrabalho.

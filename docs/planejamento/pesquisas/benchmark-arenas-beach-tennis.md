# Pesquisa de referência — plataformas de gestão de arenas de beach tennis

**Data da pesquisa:** 24/06/2026  
**Objetivo:** entender como outros sites de gestão/agenda de arenas de beach tennis funcionam para servir de base ao desenho do MVP do AeroBeach.

## Resumo executivo

A pesquisa mostrou 3 padrões principais:

1. **SaaS de gestão operacional da arena**  
   Ex.: BT Match, SisQuad, Cucco/HD Arena Beach.  
   Foco em agenda, reservas, aulas, clientes, financeiro, regras de preço e operação diária.

2. **Marketplace/portal de atletas e clubes**  
   Ex.: Quadras Online, MatchZoom.  
   Foco em descoberta de quadras, reserva online, matchmaking, eventos e ranking.

3. **Agenda simples/white-label**  
   Ex.: Arena On Play.  
   Foco em calendário visual e reserva por quadra/horário, com pouca complexidade extra.

## Leitura consolidada dos sites

| Site | URL | Como funciona | O que se destaca |
|---|---|---|---|
| **BT Match** | https://btmatch.com.br/ | SaaS com demo de operação real da arena. O gestor navega por módulos como agenda, relatórios de ocupação, aulas/turmas, clientes, CRM, financeiro, PDV, torneios e configurações. A agenda tem visão por dia/semana/mês/quadra, nova reserva, lista de espera, bloqueios e busca. | Bem completo para operação de arena. Mostra uma visão muito parecida com um ERP vertical de esportes. |
| **SisQuad** | https://sisquad.com.br/ | Sistema voltado a arenas de beach tennis, futevôlei e vôlei de praia. O produto é apresentado como solução completa com reservas, mensalistas recorrentes, escolinha, tabela de preços granular, cupons, aluguel de equipamentos, financeiro e integrações de pagamento. | Muito forte em regras de negócio avançadas: preço por horário/modalidade, campanhas, recorrência e automação via API/MCP. |
| **Quadras Online** | https://www.quadras.online/ | Plataforma para jogadores encontrarem quadras, clubes e horários disponíveis, com reserva em poucos cliques. A comunicação é mais de marketplace/app para o jogador do que de sistema interno de gestão. | Forte no lado público: descoberta, comunidade, professores, eventos, ranking e cadastro gratuito. |
| **MatchZoom** | https://matchzoom.com/ | Site bilíngue com foco em reserva instantânea, busca de parceiros, pagamento seguro, clubes próximos, calendário e ranking. Tem visão clara para jogador e para clubes. | Boa referência de posicionamento “book sports courts & find players”, com ênfase em experiência do atleta e clubes. |
| **Arena On Play** | https://arenaonplay.online/ | Interface de agenda/cadastro com calendário visual por dia/semana/mês, seleção de quadras, criação de reservas por slot e acesso via login/cadastro. | Modelo mais simples e direto, bom para entender o mínimo necessário de operação diária. |
| **HD Arena Beach / Cucco** | https://hdarenabeach.cucco.com.br/ | O site mostra um fluxo de onboarding/implantação: completar dados do negócio, políticas, serviços e agendas para então disponibilizar o sistema aos clientes. Há áreas para clientes, planilhas e estatísticas. | Muito útil para pensar um “wizard” de configuração inicial e um backoffice de ativação da arena. |

## Observações por produto

### 1) BT Match

**Fluxo observado**
- entrada no sistema com tour guiado;
- navegação por módulos operacionais;
- agenda com visão diária por quadra;
- criação de reservas e lista de espera;
- gestão de aulas e turmas;
- clientes e financeiro;
- PDV e torneios.

**Impressão geral**
- produto maduro, com narrativa de substituição de planilhas e WhatsApp;
- pensa a arena como operação completa, não só agenda.

### 2) SisQuad

**Fluxo observado**
- landing page muito detalhada, explicando dores da arena;
- módulos já “em produção” e roadmap separado;
- reservas recorrentes com RRULE;
- regras de preço granulares;
- cupons, equipamentos e cobrança recorrente;
- integrações com PIX, Stripe e Mercado Pago;
- foco em automação e integração por API/webhooks.

**Impressão geral**
- é a referência mais forte para regras de negócio complexas;
- mostra uma evolução de produto para automação operacional e financeira.

### 3) Quadras Online

**Fluxo observado**
- o jogador procura quadras/modalidades;
- reserva rapidamente;
- encontra parceiros, professores e eventos;
- cria conta gratuita;
- a plataforma tem discurso de comunidade, rankings e torneios.

**Impressão geral**
- menos “backoffice” e mais portal público;
- bom modelo para inspirar vitrine e descoberta de arenas.

### 4) MatchZoom

**Fluxo observado**
- reservas instantâneas;
- busca de jogadores e clubes próximos;
- pagamentos seguros;
- calendário e ranking;
- visão separada para players e clubs.

**Impressão geral**
- posicionamento claro de ecossistema, não apenas software interno;
- bom para pensar a jornada do atleta.

### 5) Arena On Play

**Fluxo observado**
- calendário visual por período;
- seleção de quadras via checkbox;
- navegação por mês/semana/dia;
- criação de agendamento por slot;
- login/cadastro e link de suporte via WhatsApp.

**Impressão geral**
- é a visão mais “agenda pura”; útil como benchmark de simplicidade.

### 6) HD Arena Beach / Cucco

**Fluxo observado**
- após criar a conta, o sistema pede a configuração do negócio em etapas;
- o gestor completa dados, políticas, serviços e agendas;
- depois a arena fica pronta para clientes.

**Impressão geral**
- excelente referência para onboarding e implantação sem fricção.

## Padrões que se repetem

- **Calendário/agenda é o centro do produto.**
- **Reserva online** aparece em todos os sites.
- **Pagamentos** são parte importante da jornada.
- **Aulas/turmas/mensalistas** aparecem como diferenciais fortes em produtos mais maduros.
- **Torneios e rankings** entram como camada de comunidade e retenção.
- **WhatsApp e suporte rápido** são praticamente padrão de comunicação.
- **Configuração inicial guiada** reduz atrito de adoção.
- **Preço granular e recorrência** são diferenciais fortes para arenas reais.

## Implicações para o MVP do AeroBeach

Para o MVP, a pesquisa sugere priorizar:

1. **Agenda visual da arena**
   - visão por dia/semana/mês
   - por quadra
   - criação e cancelamento de reservas

2. **Fluxo público + autenticado**
   - vitrine da arena
   - login/cadastro
   - área do jogador para reservas e histórico

3. **Operação básica da arena**
   - gestão de quadras
   - clientes
   - aulas/turmas ou mensalistas, se fizerem parte do negócio

4. **Pagamentos e confirmação**
   - pelo menos um fluxo simples de pagamento/confirmação
   - integração com Pix/cartão pode entrar cedo se for parte do go-to-market

5. **Onboarding do gestor**
   - wizard ou checklist de configuração inicial
   - cadastro da arena, políticas e serviços

## Features que parecem boas candidatas para fases posteriores

- matchmaking/encontro de parceiros
- rankings avançados
- PDV/bar/comandas
- multiunidade
- cupons e campanhas sofisticadas
- tabela de preços por combinação muito granular
- automações com IA/WhatsApp
- BI avançado
- aluguel de equipamentos
- PWA/app mobile

## Conclusão

O mercado já mostra duas direções claras:

- **software operacional pesado**, voltado ao dono da arena;
- **plataforma pública/community-first**, voltada ao jogador.

Para o AeroBeach, o MVP tende a ficar mais forte se começar pelo núcleo operacional — agenda, reservas, quadras, clientes e pagamentos — e depois evoluir para a camada pública/comunitária (torneios, rankings e matchmaking).

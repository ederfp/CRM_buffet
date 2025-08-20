PRD — Sistema Web de CRM para Buffet In House
Visão Geral
Desenvolver um sistema web de CRM completo, focado em operações de um Buffet in House (atendimento em domicílio/empresas), cobrindo todo o ciclo: atração de leads, orçamentos, propostas e contratos, planejamento de eventos, gestão de produção (cardápio, insumos, equipe e logística), execução (checklists e conferências), financeiro (propostas, fatura, parcelas, cobranças) e pós-evento (NPS, upsell, fidelização).

Objetivo: aumentar taxa de conversão, previsibilidade de produção e margem por evento, reduzindo erros operacionais e retrabalho.

KPIs-chave:

Taxa de conversão de lead→contrato (%)

Ticket médio por evento (R$)

Margem por evento (%)

Acurácia de custos (orçado vs. real, %)

Pontualidade de tarefas (SLA, %)

NPS pós-evento

Tempo médio de resposta a leads (min)

Públicos:

Comercial (vendas, atendimento)

Produção/Operações (chefs, cozinha, logística)

Financeiro (contas a pagar/receber)

Gestores (direção)

Cliente final (portal do cliente)

Escopo inicial (MVP): CRM comercial, orçamentos/propostas, agenda e conflitos, cadastro de cardápios/itens, cálculo básico de custos, checklist de produção, financeiro essencial, portal do cliente para aprovações e pagamentos.

Fora de escopo (fase 1): app móvel offline, BI avançado, roteirização com GPS, integrações fiscais complexas (NF-e/NFS-e), marketplace.

Problemas a Resolver
Perda de leads e follow-up inconsistente.

Orçamentos sem padronização e baixa visibilidade de margem.

Conflitos de agenda (data/hora/equipe/recursos).

Estouro de custos por falha no controle de insumos e porções.

Falta de visibilidade do status do evento para cliente e time.

Cobranças manuais e inadimplência.

Pouco reaproveitamento de informações entre pré, durante e pós-evento.

Objetivos de Produto
Centralizar relacionamento e histórico por cliente/evento.

Orçar com precisão por pessoa e por cardápio, com custos e markup.

Evitar overbooking com agenda de recursos e equipe.

Automatizar propostas, contratos, assinaturas e cobranças.

Guiar a produção com checklists e ordens de produção.

Medir satisfação (NPS) e gerar oportunidades de upsell.

Requisitos Funcionais
1) CRM e Vendas
Cadastro de leads e empresas: fontes, tags, persona, LGPD/consentimento.

Pipeline Kanban configurável (Etapas: Novo lead, Qualificado, Proposta, Negociação, Fechado ganho/perdido).

Registro de interações: e-mail, WhatsApp, telefone, visitas; upload de anexos.

Tarefas e lembretes com SLA; alertas de follow-up.

Geração de orçamento/proposta a partir da oportunidade.

Modelos de e-mail/WhatsApp para templates de contato.

Razões de perda (análise).

Critérios de aceite:

Criar lead em <10s com campos mínimos.

Mover oportunidade entre etapas por arrastar-e-soltar.

Notificação automática de atraso de tarefa.

2) Catálogo, Cardápios e Cálculo de Custos
Catálogo de itens: pratos, bebidas, locação (cadeiras, louças), serviços (garçom, chef, montagem).

Fichas técnicas: rendimento por porção, custo unitário, perdas (%) e tempo de preparo.

Cardápios e combos por tipo de evento (corporativo, casamento, infantil, coffee break).

Regras por pessoa: cálculo automático de quantidades e custos.

Markup por categoria e por evento; sugestão de preço de venda e margem.

Tabela de substituições (itens alternativos).

Impressão/compartilhamento do cardápio para aprovação.

Critérios de aceite:

Ao informar nº de convidados e cardápio, sistema calcula quantidades/custos/margem.

Editar markup e ver impacto em margem em tempo real.

3) Orçamentos, Propostas e Contratos
Templates de proposta com identidade visual e cláusulas padrão.

Várias versões de orçamento por evento (A/B).

Descontos por item e por pedido; taxas (deslocamento, taxa de serviço).

Cronograma de pagamento (sinal, parcelas, saldo).

Aprovação online; assinatura eletrônica (registro de IP, data/hora).

Geração de contrato automático a partir da proposta aprovada.

Critérios de aceite:

Link compartilhável de proposta com status de visualização e aprovação.

Registro de trilha de auditoria (quem, quando, o quê).

4) Agenda e Gestão de Recursos
Calendário/agenda por data e horário com status (pré-reserva, reservado, produção, concluído).

Controle de conflitos por recursos escassos: equipe, veículos, equipamentos, utensílios.

Bloqueio de datas e turnos; capacidade máxima por dia/turno.

Alocação de equipe por evento (cozinha, garçons, líder, motorista), com horários.

Critérios de aceite:

Ao confirmar um evento, sistema detecta conflitos de recursos e sugere remanejamento.

Visual por dia/semana/mês; filtro por recurso/equipe.

5) Planejamento e Produção
Ordem de Produção (OP) por evento: lista de compras, mise en place, preparo, despacho.

Checklists personalizáveis por tipo de evento.

Lista de compras consolidada por período (considerando eventos da semana).

Etiquetas e impressão de picking.

Briefing do evento (endereço, horários, contato, regras do local).

Checklist de palco/estação (equipamentos, mesas, decoração, energia).

Registro de ocorrências e não conformidades.

Critérios de aceite:

Gerar automaticamente OP com base no cardápio aprovado e nº de convidados.

Checklist utilizável em mobile web com marcação offline-lite (cache) e sincronização.

6) Estoque e Compras
Cadastro de insumos, unidades de medida, conversões (kg→porções).

Entradas/saídas; lote e validade (opcional).

Solicitação de compra a partir da OP; fornecedores; comparação de preços.

Custo médio e valorização de estoque.

Critérios de aceite:

Lista de compras consolidada considera saldo de estoque.

Alertas de validade e estoque mínimo.

7) Financeiro
Contas a receber: geração de cobranças (PIX, boleto, cartão via integração), conciliação.

Contas a pagar: fornecedores, folha de equipe eventual (diaristas).

Centro de custo por evento e categoria; DRE simplificado por período.

Emissão de recibos e relatórios de inadimplência.

Reembolsos e adiantamentos de equipe.

Impostos e retenções simples (configuráveis).

Critérios de aceite:

Ao aprovar proposta, títulos são gerados automaticamente conforme cronograma.

Dashboard mostra margem por evento (receita-custos diretos).

8) Portal do Cliente
Acesso seguro por link/token.

Visualizar proposta, aprovar/assinar, pagar, enviar lista de convidados (opcional), informar restrições alimentares e preferências.

Linha do tempo do evento; troca de mensagens/documentos.

Solicitar alterações (workflow de reaprovação).

Critérios de aceite:

Cliente acompanha status e consegue pagar online pelo portal.

9) Relatórios e Dashboards
Comercial: funil, conversão por canal, tempo de resposta, motivos de perda.

Operações: eventos por período, consumo por item, aproveitamento de equipe.

Financeiro: DRE por mês, margem por evento, aging de recebíveis, custos por categoria.

Satisfação: NPS por evento, por tipo, por equipe.

Critérios de aceite:

Exportação CSV/XLSX; filtros por período, tipo de evento, canal, vendedor.

10) Configurações e Admin
Tabelas: tipos de evento, unidades, categorias, taxas e políticas.

Perfis e permissões (RBAC).

Personalização de templates (proposta, contrato, e-mails).

Logs/auditoria.

Requisitos Não Funcionais
Arquitetura: Web responsivo (mobile-first para checklists/portal cliente).

Segurança: autenticação com MFA opcional; criptografia em repouso e trânsito; segregação por empresa; logs.

LGPD: consentimento de marketing, base legal, anonimização ao encerrar relacionamento, DPA e exportação de dados.

Performance: carregamento de telas <2s em 95º percentil; buscas <500ms para até 100k registros.

Disponibilidade: 99.5% mensal (MVP); backups diários; RPO≤24h.

Escalabilidade: horizontal para leitura; filas para tarefas pesadas (cálculos, PDFs, e-mails).

Observabilidade: métricas, logs centralizados e alertas.

Integrações (futuras/etapas)
Pagamentos: PIX imediato, boleto, cartão via gateway local.

E-mail/SMTP e WhatsApp Business API para mensagens.

Assinatura eletrônica (provedor local) ou mecanismo nativo com trilha de auditoria.

Calendários (Google/Microsoft).

Emissão fiscal (NFS-e/NF-e) em fase posterior.

Jornada do Usuário (Fluxo End-to-End)
Lead chega via formulário/site ou cadastro manual.

Qualificação e agendamento de visita/degustação.

Proposta gerada a partir do cardápio escolhido; cálculo de custos e margem; envio do link.

Aprovação online, assinatura e pagamento do sinal.

Evento confirmado: bloqueio de agenda, alocação de equipe e recursos.

Geração de OP, checklist e lista de compras consolidada.

Execução: conferências, ocorrências, ajustes.

Fechamento: conferência de custos reais vs. orçado; baixa de recebíveis; NPS; criação de tarefa de upsell.

Requisitos de Dados
Entidades principais:

Pessoa/Empresa (cliente, contato)

Lead/Oportunidade

Evento (data, local, tipo, convidados)

Proposta/Contrato/Parcelas

Cardápio/Item/Composição

Recurso (equipamento, veículo, espaço)

Equipe (fixo/diarista/terceiro)

OP/Checklist/Ocorrência

Estoque/Movimentação/Compra

Receita/Despesa/Centro de Custo

Interação/Atividade/Anexo

Relacionamentos:

Cliente 1:N Oportunidades

Oportunidade 1:1 Proposta (N versões)

Evento 1:N OP/Checklists

Evento N:M Recursos e Equipe

Cardápio N:M Itens (com quantidades por pessoa)

Evento 1:N Recebíveis e 1:N Despesas

Item 1:N Movimentações de estoque

Campos críticos:

Custos diretos por item (insumos, hora/equipe, aluguel)

Markup e preço de venda

Status com timestamps (funil e produção)

Logs de aprovação/assinatura

Requisitos de UX
Navegação por módulos: Comercial, Eventos, Produção, Financeiro, Relatórios, Configurações.

Busca global com atalhos (ex.: “/” para focar busca).

Kanban no CRM; calendário no módulo de Eventos.

Editores com pré-visualização de proposta/contrato.

Mobile web otimizado para checklists e portal do cliente.

Acessibilidade: contraste AA, navegação por teclado.

Métricas de Sucesso e Metas
+25% na taxa de conversão em 3-6 meses.

-30% no tempo de resposta a leads.

-15% em estouro de custos de produção.

0 overbooking de recursos (alertas e bloqueios).

NPS≥70 em 6 meses.

Redução de 40% em inadimplência >15 dias via cobrança automatizada.

Roadmap Proposto
Fase 0 — Fundações (2-3 semanas)

Autenticação, RBAC, modelos de dados base, templates, logs, auditoria.

Fase 1 — MVP Comercial+Agenda (4-6 semanas)

CRM (leads, pipeline, tarefas), catálogo básico, proposta v1, agenda com conflitos, aprovação/assinatura simples, portal do cliente v1, recebíveis (PIX/boleto via link), dashboards básicos.

Fase 2 — Produção+Custos (4-6 semanas)

Fichas técnicas e porcionamento, OP e checklists, lista de compras consolidada, estoque e compras, margem por evento, relatórios operacionais.

Fase 3 — Financeiro+Pós-venda (4-6 semanas)

DRE simples, contas a pagar, conciliação básica, NPS, automações de upsell e campanhas segmentadas.

Fase 4 — Integrações e Otimizações (contínuo)

Gateways adicionais, WhatsApp oficial, calendário, assinatura avançada, fiscais, BI.

Critérios de Qualidade e Testes
Casos de teste para: cálculo de custo/margem, detecção de conflitos, geração de propostas e contratos, criação de OP, lista de compras com estoque, fluxo de pagamento, trilha de auditoria.

Testes de carga: 200 usuários concorrentes, 10k eventos/ano, 100k contatos.

Segurança: testes de autorização, injeção, XSS, CSRF; backups e restore testados.

Riscos e Mitigações
Complexidade de custos e porções: começar por fichas técnicas simplificadas e validar com pilotos.

Adoção do time: onboarding guiado, templates prontos, importação de dados.

Integrações de pagamento/WhatsApp: oferecer múltiplos provedores e fallback por e-mail/SMS.

LGPD: consentimento claro e exclusão/anonimização sob demanda.

Requisitos de Implementação Técnica (sugestão)
Front-end: SPA responsiva (ex.: React/Vue) com state management.

Back-end: API REST com filas para jobs (PDF, e-mail, cálculo consolidado).

Banco: relacional para consistência (PostgreSQL) + cache (Redis).

Arquivos: storage S3-compatível.

Infra: contêineres e deploy contínuo; monitoramento e logs centralizados.

Entregáveis
Protótipo navegável das telas chave (Kanban CRM, Proposta, Agenda, Evento, OP, Financeiro, Portal do Cliente).

APIs documentadas (OpenAPI).

Conjunto de templates (proposta, contrato, e-mails).

Plano de testes e dados de seed.

Manual rápido e onboarding interativo.

Se desejar, posso transformar este PRD em:

Backlog detalhado (user stories com critérios de aceite).

Protótipo de telas prioritárias.

Modelo de dados inicial (DER).

Plano de implementação por sprints.
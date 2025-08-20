flowchart TD
%% LAYOUT GERAL DO SISTEMA
A[Login / Cadastro] --> B{Autenticação}
B -- Sucesso --> C[Dashboard]
B -- Esqueceu senha --> B1[Recuperar senha]
B -- Falha --> A

%% DASHBOARD PRINCIPAL
C --> C1[Visão Geral: KPIs, Próximas tarefas, Eventos do dia]
C --> D[Comercial (CRM)]
C --> E[Eventos & Agenda]
C --> F[Produção]
C --> G[Estoque & Compras]
C --> H[Financeiro]
C --> I[Relatórios]
C --> J[Configurações]
C --> K[Portal do Cliente (link externo/impersonate)]

%% COMERCIAL (CRM)
subgraph CRM_Comercial
D --> D1[Leads: Lista / Busca / Filtros]
D1 --> D2[Cadastro Rápido de Lead]
D1 --> D3[Importar Leads (CSV)]
D1 --> D4[Ver Lead]
D4 --> D5[Timeline: Interações, Anexos, Tarefas]
D4 --> D6[Qualificar Lead -> Oportunidade]
D6 --> D7[Pipeline Kanban]
D7 --> D8[Arrastar estágio]
D7 --> D9[Agendar Tarefa/Follow-up]
D7 --> D10[Gerar Proposta]
D7 --> D11[Perdido: Motivo/Concorrente]
D10 --> P1[Selecionar Cardápio/Serviços]
P1 --> P2[Definir Convidados, Local, Data]
P2 --> P3[Custos, Markup, Preço]
P3 --> P4[Gerar Proposta PDF/Link]
P4 --> P5[Enviar por E-mail/WhatsApp]
P5 --> P6[Acompanhar Visualização]
P6 --> P7{Cliente Aprova?}
P7 -- Não --> P8[Revisar Versão / Negociar]
P7 -- Sim --> P9[Gerar Contrato + Assinatura]
P9 --> P10[Definir Cronograma de Pagamento]
P10 --> EV1[Confirmar Evento]
end

%% PORTAL DO CLIENTE
subgraph Portal_Cliente
K --> KC1[Login por Link/Token]
KC1 --> KC2[Ver Proposta/Contrato]
KC2 --> KC3[Solicitar Ajustes]
KC2 --> KC4[Aprovar & Assinar]
KC2 --> KC5[Pagamentos: PIX/Boleto/Cartão]
KC2 --> KC6[Enviar Informações: convidados, restrições alimentares, preferências]
KC2 --> KC7[Mensagens/Arquivos]
KC5 --> KC8[Comprovante & Status]
end

%% EVENTOS & AGENDA
subgraph Eventos_Agenda
E --> EV1[Confirmar Evento (do Comercial)]
E --> E1[Calendário: Dia/Semana/Mês]
E1 --> E2[Filtros: Tipo, Equipe, Recursos]
E1 --> E3[Detectar Conflitos de Recursos]
E3 --> E4[Sugestão de Remanejamento]
EV1 --> E5[Detalhe do Evento]
E5 --> E6[Briefing: Endereço, Horários, Contatos]
E5 --> E7[Alocar Equipe & Veículos]
E5 --> E8[Reservar Equipamentos/Utensílios]
E5 --> E9[Checklist Pré-Evento]
end

%% PRODUÇÃO
subgraph Producao
F --> PR1[Gerar OP a partir do Evento/Cardápio]
PR1 --> PR2[Lista de Compras (consolidar semana)]
PR1 --> PR3[Mise en place & Preparo]
PR1 --> PR4[Picking & Etiquetas]
PR1 --> PR5[Checklist de Saída/Retorno]
PR3 --> PR6[Registrar Ocorrências / Não Conformidades]
PR5 --> PR7[Execução no Local: Checklists Mobile]
PR7 --> PR8[Encerramento do Evento]
end

%% ESTOQUE & COMPRAS
subgraph Estoque_Compras
G --> S1[Cadastro de Insumos & Conversões]
G --> S2[Entradas/Saídas, Lotes/Validade]
PR2 --> S3[Solicitações de Compra]
S3 --> S4[Comparar Fornecedores/Preços]
S4 --> S5[Gerar Pedido de Compra]
S5 --> S6[Baixa de Estoque por OP]
S2 --> S7[Alertas: Mínimo/Validade]
end

%% FINANCEIRO
subgraph Financeiro
H --> F1[Contas a Receber]
H --> F2[Contas a Pagar]
H --> F3[Centro de Custo por Evento]
P10 --> F1
KC5 --> F1
F1 --> F1a[Emissão de Cobranças: PIX/Boleto/Cartão]
F1a --> F1b[Conciliação & Baixa]
F2 --> F2a[Fornecedores & Folha Eventual]
F3 --> F4[Margem por Evento (Receita - Custos Diretos)]
end

%% RELATÓRIOS
subgraph Relatorios
I --> R1[Comercial: Funil, Conversão, Tempo de Resposta, Motivos de Perda]
I --> R2[Operações: Consumo, Aproveitamento de Equipe, Eventos por Período]
I --> R3[Financeiro: DRE, Aging, Inadimplência]
I --> R4[Satisfação: NPS por Evento/Tipo/Equipe]
R1 --> R5[Exportar CSV/XLSX]
R2 --> R5
R3 --> R5
R4 --> R5
end

%% CONFIGURAÇÕES
subgraph Configuracoes
J --> CFG1[Empresa, Branding, Templates (Proposta/Contrato/E-mails)]
J --> CFG2[Usuários, Perfis & Permissões (RBAC)]
J --> CFG3[Tabelas: Tipos de Evento, Categorias, Unidades, Taxas]
J --> CFG4[Integrações: Pagamentos, E-mail/SMTP, WhatsApp, Calendários]
J --> CFG5[Políticas: LGPD, Logs & Auditoria]
end

%% PÓS-EVENTO E FIDELIZAÇÃO
PR8 --> X1[Apuração de Custos Reais vs. Orçado]
PR8 --> X2[Gerar NPS e Pesquisa]
X2 --> X3[Registrar Feedback & Oportunidades]
X1 --> X4[Atualizar Margem do Evento]
X3 --> D9[Criar Tarefa de Upsell/Follow-up]

%% ATALHOS E NAVEGAÇÃO
C1 --> D
C1 --> E
C1 --> H
D5 --> D9
E5 --> PR1
PR2 --> S3
F4 --> I

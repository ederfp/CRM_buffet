# Buffet CRM - Sistema de Gestão para Buffet In House

Um sistema completo de CRM (Customer Relationship Management) desenvolvido especificamente para buffets que atendem eventos em domicílio e empresas.

## 🚀 Funcionalidades

### MVP Implementado

#### 🏠 Dashboard
- Visão geral com KPIs principais (taxa de conversão, ticket médio, leads novos, eventos)
- Cards com métricas em tempo real
- Lista de leads recentes com status
- Próximos eventos com detalhes
- Tarefas pendentes e alertas
- Timeline de atividades recentes

#### 👥 CRM Comercial
- Cadastro e gerenciamento de leads
- Pipeline de vendas com status (Novo, Qualificado, Proposta, Negociação, Ganho, Perdido)
- Filtros por status e busca avançada
- Modal para criação rápida de novos leads
- Informações detalhadas de clientes e contatos
- Integração com API REST para backend

#### 📅 Eventos & Agenda
- Calendário de eventos com visualização por status
- Gerenciamento de tipos de eventos (Corporativo, Casamento, Infantil, Coffee Break, etc.)
- Detalhes de eventos (local, convidados, equipe, valor)
- Sistema de alertas para conflitos de agenda
- Visualização de equipe alocada
- Status de produção e confirmação

#### 🍳 Produção
- Ordens de Produção (OP) com numeração automática
- Checklists de produção com progresso visual
- Lista de compras consolidada por prioridade
- Gestão de equipe por evento
- Controle de status (Planejado, Em Produção, Concluído)
- Alertas de estoque crítico e pedidos atrasados

#### 🛠️ Tecnologia

- **Frontend**: Next.js 15 com App Router
- **Linguagem**: TypeScript 5
- **Estilização**: Tailwind CSS 4
- **Componentes UI**: shadcn/ui
- **Banco de Dados**: SQLite com Prisma ORM
- **Backend**: API REST com Next.js API Routes
- **Estado**: React Hooks (estado local)

#### 🗄️ Banco de Dados

Schema completo com as seguintes entidades principais:

- **Company**: Empresas do sistema
- **User**: Usuários com roles (Admin, Manager, Sales, Operations, Finance, Viewer)
- **Customer**: Clientes (Pessoa Física/Jurídica)
- **Lead**: Leads do CRM com status e qualificação
- **Opportunity**: Oportunidades de negócio
- **Event**: Eventos com detalhes e status
- **Proposal**: Propostas comerciais
- **ProductionOrder**: Ordens de produção
- **Item**: Itens do cardápio com fichas técnicas
- **TeamMember**: Membros da equipe
- **Resource**: Recursos (equipamentos, veículos)

## 🎯 Objetivos do Sistema

### KPIs Principais
- **Taxa de conversão** de lead→contrato (%)
- **Ticket médio** por evento (R$)
- **Margem** por evento (%)
- **Acurácia de custos** (orçado vs. real, %)
- **Pontualidade de tarefas** (SLA, %)
- **NPS** pós-evento
- **Tempo médio de resposta** a leads (min)

### Problemas Resolvidos
- ✅ Perda de leads e follow-up inconsistente
- ✅ Orçamentos sem padronização e baixa visibilidade de margem
- ✅ Conflitos de agenda (data/hora/equipe/recursos)
- ✅ Estouro de custos por falha no controle de insumos
- ✅ Falta de visibilidade do status do evento
- ✅ Cobranças manuais e inadimplência

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
# Clonar o repositório
git clone <repository-url>
cd buffet-crm

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Rodar migrações do banco de dados
npm run db:push

# Iniciar o servidor de desenvolvimento
npm run dev
```

### Variáveis de Ambiente
```env
DATABASE_URL="file:./dev.db"
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── leads/         # Leads API
│   │   └── customers/     # Customers API
│   ├── crm/               # CRM Page
│   ├── events/            # Events Page
│   ├── production/        # Production Page
│   ├── page.tsx           # Dashboard
│   └── layout.tsx         # Root Layout
├── components/
│   ├── layout/            # Layout Components
│   │   └── dashboard-layout.tsx
│   ├── crm/              # CRM Components
│   │   └── new-lead-modal.tsx
│   ├── dashboard/        # Dashboard Components
│   │   └── dashboard-content.tsx
│   └── ui/               # shadcn/ui Components
├── lib/
│   ├── db.ts             # Prisma Client
│   ├── utils.ts          # Utility Functions
│   └── socket.ts         # Socket.io (para uso futuro)
└── prisma/
    └── schema.prisma     # Database Schema
```

## 🎨 UI/UX Design

### Principais Características
- **Design Responsivo**: Mobile-first para checklists e portal do cliente
- **Navegação Intuitiva**: Menu lateral com acesso rápido a todos os módulos
- **Status Visuais**: Badges coloridos para rápido reconhecimento de status
- **Kanban no CRM**: Visualização por estágios do pipeline
- **Calendário Integrado**: Para gestão de eventos e recursos
- **Filtros Avançados**: Busca e filtragem em todas as listagens

### Acessibilidade
- Navegação por teclado
- Contraste AA (WCAG)
- Semântica HTML5 adequada
- Labels e descrições para screen readers

## 🔄 Fluxo de Trabalho

### 1. Atração de Leads
- Lead chega via formulário/site ou cadastro manual
- Qualificação e agendamento de visita/degustação
- Acompanhamento no pipeline de vendas

### 2. Propostas e Contratos
- Geração de proposta a partir do cardápio escolhido
- Cálculo automático de custos e margem
- Envio do link para aprovação online
- Assinatura eletrônica com trilha de auditoria

### 3. Planejamento de Eventos
- Confirmação do evento com bloqueio de agenda
- Alocação de equipe e recursos
- Geração de Ordem de Produção
- Lista de compras consolidada

### 4. Execução e Produção
- Checklists de produção com progresso
- Controle de qualidade e ocorrências
- Registro de não conformidades
- Acompanhamento em tempo real

### 5. Pós-evento
- Apuração de custos reais vs. orçado
- Geração de NPS e pesquisa de satisfação
- Análise de margem final
- Criação de oportunidades de upsell

## 📈 Roadmap Futuro

### Fase 1 - MVP (✅ Concluído)
- [x] Dashboard com KPIs
- [x] CRM Comercial básico
- [x] Gestão de Eventos
- [x] Produção e Checklists
- [x] API REST básica

### Fase 2 - Expansão
- [ ] Portal do Cliente
- [ ] Financeiro completo (DRE, contas a pagar/receber)
- [ ] Estoque e compras avançado
- [ ] Relatórios e dashboards analíticos

### Fase 3 - Integrações
- [ ] Gateway de pagamentos (PIX, Boleto, Cartão)
- [ ] WhatsApp Business API
- [ ] Assinatura eletrônica avançada
- [ ] Integração com calendários (Google/Outlook)

### Fase 4 - Otimizações
- [ ] BI e analytics avançado
- [ ] App móvel offline
- [ ] Roteirização com GPS
- [ ] Integrações fiscais (NF-e/NFS-e)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🆘 Suporte

Para suporte, envie um email para suporte@buffetcrm.com ou abra uma issue no GitHub.

---

**Desenvolvido com ❤️ para o mercado de buffets brasileiros**
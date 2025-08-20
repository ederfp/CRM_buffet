#  Buffet CRM - Gestão Completa para Eventos

**Buffet CRM** é um sistema web completo e robusto, desenhado para otimizar a gestão de buffets e empresas de eventos. A plataforma centraliza e automatiza todo o ciclo de vida de um evento, desde a captação do lead até a análise pós-evento, garantindo mais eficiência, lucratividade e satisfação para os clientes.

---

## ✨ Principais Funcionalidades

O sistema foi projetado para resolver os maiores desafios do setor, com um conjunto de funcionalidades que cobrem todas as áreas do seu negócio:

- **Gestão Comercial (CRM):**
  - Pipeline de vendas no formato Kanban (Novo, Qualificado, Proposta, etc.).
  - Cadastro detalhado de leads e clientes.
  - Registro de interações (e-mails, chamadas, reuniões).
  - Agendamento de tarefas e lembretes de follow-up.

- **Orçamentos e Propostas Inteligentes:**
  - Criação de catálogos de produtos, serviços e cardápios.
  - Fichas técnicas com cálculo de custos, porções e margem de lucro em tempo real.
  - Geração de propostas personalizadas com identidade visual.
  - Aprovação online e assinatura eletrônica simplificada.

- **Gestão de Eventos e Agenda:**
  - Calendário centralizado com visão de todos os eventos.
  - Controle de conflitos de agenda para equipes e recursos.
  - Alocação de staff (chefs, garçons, logística) por evento.

- **Planejamento e Produção:**
  - Geração automática de Ordens de Produção (OP) a partir de propostas.
  - Checklists de tarefas personalizáveis para garantir a execução perfeita.
  - Lista de compras consolidada, otimizando o uso de insumos.

- **Módulo Financeiro:**
  - Geração automática de cobranças (PIX, boleto, etc.).
  - Controle de contas a pagar e a receber.
  - Visão clara da lucratividade e margem por evento.

- **Portal do Cliente:**
  - Área exclusiva para o cliente acompanhar o status da proposta, aprovar, realizar pagamentos e comunicar-se com a equipe.

---

## 🚀 Stack de Tecnologia

Este projeto foi construído com tecnologias modernas e escaláveis para garantir a melhor performance e experiência de usuário.

- **Frontend:**
  - [**Next.js**](https://nextjs.org/) - Framework React para produção.
  - [**React**](https://react.dev/) - Biblioteca para construção de interfaces.
  - [**TypeScript**](https://www.typescriptlang.org/) - JavaScript com tipagem estática.
  - [**Tailwind CSS**](https://tailwindcss.com/) - Framework de estilização utility-first.
  - [**Shadcn/UI**](https://ui.shadcn.com/) - Componentes de UI reusáveis e acessíveis.
  - [**Zustand**](https://zustand-demo.pmnd.rs/) - Gerenciamento de estado.

- **Backend:**
  - [**Node.js**](https://nodejs.org/) - Ambiente de execução JavaScript.
  - [**Express.js**](https://expressjs.com/) (via `server.ts`) - Framework para criação do servidor e APIs.
  - [**Socket.IO**](https://socket.io/) - Para funcionalidades em tempo real.

- **Banco de Dados & ORM:**
  - [**Prisma**](https://www.prisma.io/) - ORM de próxima geração para Node.js e TypeScript.
  - **SQLite** (padrão) / **PostgreSQL** (recomendado para produção).

---

## ⚙️ Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento.

**Pré-requisitos:**
- [Node.js](https://nodejs.org/en/) (v20 ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

**1. Clone o Repositório:**
```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
```

**2. Instale as Dependências:**
```bash
npm install
```

**3. Configure o Banco de Dados:**
- Renomeie o arquivo `.env.example` para `.env.local`.
- Configure a variável `DATABASE_URL` com a string de conexão do seu banco de dados. Para usar o SQLite padrão, o valor pode ser: `file:./dev.db`.

**4. Aplique as Migrações do Banco de Dados:**
Este comando irá criar o banco de dados (se não existir) e aplicar o schema definido.
```bash
npx prisma db push
```

**5. Execute o Servidor de Desenvolvimento:**
O projeto utiliza `nodemon` para reiniciar o servidor automaticamente ao detectar alterações.
```bash
npm run dev
```

Após a execução, a aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

---

### Comandos Úteis do Projeto

- `npm run build`: Compila a aplicação para produção.
- `npm run start`: Inicia o servidor em modo de produção.
- `npm run lint`: Executa o linter para análise de código.
- `npx prisma generate`: Gera o cliente Prisma após alterações no `schema.prisma`.
- `npx prisma migrate dev`: Cria uma nova migração de banco de dados.

---

<img width="1917" height="865" alt="image" src="https://github.com/user-attachments/assets/2a7714c9-7d7b-41f4-9144-99b3ae2db694" />

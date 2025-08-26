"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Database,
  Palette,
  Globe,
  CreditCard,
  Users,
  Building,
  Mail,
  Phone,
  MapPin,
  Save,
  RefreshCw
} from "lucide-react";
import UserModal from "@/components/settings/user-modal";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  
  // Dados mockados para demonstração
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "João Silva",
      email: "joao@buffetcrm.com",
      role: "Administrador",
      status: "ativo",
      lastLogin: "2024-01-15 14:30"
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria@buffetcrm.com",
      role: "Gerente",
      status: "ativo",
      lastLogin: "2024-01-15 10:15"
    },
    {
      id: 3,
      name: "Pedro Oliveira",
      email: "pedro@buffetcrm.com",
      role: "Vendedor",
      status: "inativo",
      lastLogin: "2024-01-10 16:45"
    }
  ]);

  const [companyInfo, setCompanyInfo] = useState({
    name: "Buffet CRM",
    email: "contato@buffetcrm.com",
    phone: "(11) 1234-5678",
    address: "Rua das Flores, 123 - São Paulo, SP",
    website: "www.buffetcrm.com",
    taxId: "12.345.678/0001-90"
  });

  const settingsTabs = [
    { id: "general", name: "Geral", icon: Settings },
    { id: "company", name: "Empresa", icon: Building },
    { id: "users", name: "Usuários", icon: Users },
    { id: "notifications", name: "Notificações", icon: Bell },
    { id: "security", name: "Segurança", icon: Shield },
    { id: "integrations", name: "Integrações", icon: Database },
    { id: "billing", name: "Faturamento", icon: CreditCard }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ativo":
        return <Badge className="bg-green-100 text-green-800">Ativo</Badge>;
      case "inativo":
        return <Badge className="bg-gray-100 text-gray-800">Inativo</Badge>;
      case "pendente":
        return <Badge className="bg-yellow-100 text-yellow-800">Pendente</Badge>;
      default:
        return <Badge>Ativo</Badge>;
    }
  };

  const handleSaveSettings = () => {
    alert("Configurações salvas com sucesso!");
  };

  const handleRestoreDefaults = () => {
    if (confirm("Tem certeza que deseja restaurar as configurações padrão? Esta ação não pode ser desfeita.")) {
      alert("Configurações restauradas para os valores padrão!");
    }
  };

  const handleAddUser = (newUser: any) => {
    setUsers([...users, newUser]);
  };

  const handleEditUser = (updatedUser: any) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  const handleEditClick = (user: any) => {
    setEditingUser(user);
    setShowUserModal(true);
  };

  const handleNotificationConfig = (type: string) => {
    alert(`Configurando notificações de ${type}...`);
  };

  const handleSecurityAction = (action: string) => {
    alert(`Configurando ${action}...`);
  };

  const handleIntegrationConnect = (service: string) => {
    alert(`Conectando ao serviço ${service}...`);
  };

  const handleBillingAction = (action: string) => {
    alert(`Ação de faturamento: ${action}...`);
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
            <p className="text-gray-600 mt-1">Gerencie as configurações do sistema</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleSaveSettings}>
              <Save className="h-4 w-4 mr-2" />
              Salvar Alterações
            </Button>
            <Button variant="outline" onClick={handleRestoreDefaults}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Restaurar Padrão
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-lg">Categorias</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <nav className="space-y-1">
                {settingsTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                      activeTab === tab.id ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700" : ""
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span className="font-medium">{tab.name}</span>
                  </button>
                ))}
              </nav>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* General Settings */}
            {activeTab === "general" && (
              <Card>
                <CardHeader>
                  <CardTitle>Configurações Gerais</CardTitle>
                  <CardDescription>
                    Configurações básicas do sistema
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome do Sistema</label>
                      <Input defaultValue="Buffet CRM" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Timezone</label>
                      <Input defaultValue="America/Sao_Paulo" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Idioma</label>
                      <Input defaultValue="Português (Brasil)" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Moeda</label>
                      <Input defaultValue="BRL - Real Brasileiro" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Company Settings */}
            {activeTab === "company" && (
              <Card>
                <CardHeader>
                  <CardTitle>Informações da Empresa</CardTitle>
                  <CardDescription>
                    Dados cadastrais da sua empresa
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Razão Social</label>
                      <Input defaultValue={companyInfo.name} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CNPJ</label>
                      <Input defaultValue={companyInfo.taxId} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input defaultValue={companyInfo.email} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefone</label>
                      <Input defaultValue={companyInfo.phone} />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Endereço</label>
                      <Input defaultValue={companyInfo.address} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Website</label>
                      <Input defaultValue={companyInfo.website} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Users Settings */}
            {activeTab === "users" && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Gerenciamento de Usuários</CardTitle>
                      <CardDescription>
                        Gerencie acesso e permissões dos usuários
                      </CardDescription>
                    </div>
                    <UserModal 
                      open={showUserModal} 
                      onOpenChange={setShowUserModal} 
                      onSave={handleAddUser} 
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {users.map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline">{user.role}</Badge>
                          {getStatusBadge(user.status)}
                          <Button variant="outline" size="sm" onClick={() => handleEditClick(user)}>Editar</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Notifications Settings */}
            {activeTab === "notifications" && (
              <Card>
                <CardHeader>
                  <CardTitle>Preferências de Notificação</CardTitle>
                  <CardDescription>
                    Configure como e quando receber notificações
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Novos Leads</div>
                        <div className="text-sm text-gray-500">Notificar sobre novos leads recebidos</div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleNotificationConfig('Novos Leads')}>Configurar</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Eventos Confirmados</div>
                        <div className="text-sm text-gray-500">Notificar sobre confirmações de eventos</div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleNotificationConfig('Eventos Confirmados')}>Configurar</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Relatórios Semanais</div>
                        <div className="text-sm text-gray-500">Receber relatórios por email</div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleNotificationConfig('Relatórios Semanais')}>Configurar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Security Settings */}
            {activeTab === "security" && (
              <Card>
                <CardHeader>
                  <CardTitle>Configurações de Segurança</CardTitle>
                  <CardDescription>
                    Gerencie segurança e acesso ao sistema
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Autenticação de Dois Fatores</div>
                        <div className="text-sm text-gray-500">Proteja sua conta com 2FA</div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleSecurityAction('Autenticação de Dois Fatores')}>Ativar</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Política de Senhas</div>
                        <div className="text-sm text-gray-500">Definir requisitos de senha</div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleSecurityAction('Política de Senhas')}>Configurar</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Log de Acesso</div>
                        <div className="text-sm text-gray-500">Visualizar histórico de acessos</div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleSecurityAction('Log de Acesso')}>Ver Logs</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Integrations Settings */}
            {activeTab === "integrations" && (
              <Card>
                <CardHeader>
                  <CardTitle>Integrações</CardTitle>
                  <CardDescription>
                    Conecte com outros serviços e ferramentas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Email Marketing</div>
                        <div className="text-sm text-gray-500">Integre com Mailchimp, SendGrid</div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleIntegrationConnect('Email Marketing')}>Conectar</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Pagamentos</div>
                        <div className="text-sm text-gray-500">Integre com Stripe, PayPal</div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleIntegrationConnect('Pagamentos')}>Conectar</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Calendário</div>
                        <div className="text-sm text-gray-500">Sincronize com Google Calendar</div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleIntegrationConnect('Calendário')}>Conectar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Billing Settings */}
            {activeTab === "billing" && (
              <Card>
                <CardHeader>
                  <CardTitle>Faturamento</CardTitle>
                  <CardDescription>
                    Gerencie seu plano e pagamentos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg bg-blue-50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">Plano Atual</div>
                      <Badge className="bg-blue-100 text-blue-800">Premium</Badge>
                    </div>
                    <div className="text-2xl font-bold">R$ 299/mês</div>
                    <div className="text-sm text-gray-600">Próxima cobrança: 15/02/2024</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Histórico de Pagamentos</div>
                        <div className="text-sm text-gray-500">Ver todas as transações</div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleBillingAction('Histórico de Pagamentos')}>Ver Histórico</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Método de Pagamento</div>
                        <div className="text-sm text-gray-500">Cartão de crédito •••• 4242</div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleBillingAction('Método de Pagamento')}>Alterar</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <div className="font-medium">Faturas</div>
                        <div className="text-sm text-gray-500">Baixar faturas em PDF</div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleBillingAction('Faturas')}>Ver Faturas</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      
      <UserModal 
        open={showUserModal} 
        onOpenChange={setShowUserModal} 
        onSave={editingUser ? handleEditUser : handleAddUser} 
        user={editingUser} 
      />
    </DashboardLayout>
  );
}
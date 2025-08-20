"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  DollarSign, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Plus
} from "lucide-react";

const kpiData = [
  {
    title: "Taxa de Conversão",
    value: "32%",
    change: "+5%",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "Ticket Médio",
    value: "R$ 2.450",
    change: "+12%",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Leads Novos",
    value: "24",
    change: "+8%",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Eventos Este Mês",
    value: "12",
    change: "+2",
    icon: Calendar,
    color: "text-purple-600",
  },
];

const recentLeads = [
  {
    id: 1,
    name: "Empresa ABC Ltda",
    status: "qualified",
    source: "Indicação",
    value: "R$ 3.200",
    date: "2024-01-15",
  },
  {
    id: 2,
    name: "Casamento João & Maria",
    status: "proposal",
    source: "Instagram",
    value: "R$ 8.500",
    date: "2024-01-14",
  },
  {
    id: 3,
    name: "Corporate Event XYZ",
    status: "negotiation",
    source: "Site",
    value: "R$ 5.100",
    date: "2024-01-13",
  },
  {
    id: 4,
    name: "Aniversário Infantil",
    status: "new",
    source: "Facebook",
    value: "R$ 1.800",
    date: "2024-01-12",
  },
];

const upcomingEvents = [
  {
    id: 1,
    name: "Evento Corporativo ABC",
    date: "2024-01-20",
    time: "19:00",
    guests: 150,
    status: "confirmed",
  },
  {
    id: 2,
    name: "Casamento João & Maria",
    date: "2024-01-25",
    time: "20:00",
    guests: 200,
    status: "production",
  },
  {
    id: 3,
    name: "Coffee Break Reunião",
    date: "2024-01-18",
    time: "10:00",
    guests: 30,
    status: "confirmed",
  },
];

const getStatusBadge = (status: string) => {
  const statusConfig = {
    new: { label: "Novo", variant: "secondary" as const },
    qualified: { label: "Qualificado", variant: "default" as const },
    proposal: { label: "Proposta", variant: "secondary" as const },
    negotiation: { label: "Negociação", variant: "default" as const },
    confirmed: { label: "Confirmado", variant: "default" as const },
    production: { label: "Produção", variant: "secondary" as const },
  };
  
  const config = statusConfig[status as keyof typeof statusConfig] || { label: status, variant: "secondary" as const };
  return <Badge variant={config.variant}>{config.label}</Badge>;
};

export default function DashboardContent() {
  return (
    <div className="p-6 space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi) => (
          <Card key={kpi.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {kpi.title}
              </CardTitle>
              <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className="text-xs text-green-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />
                {kpi.change} vs mês anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Leads Recentes</CardTitle>
                <CardDescription>Últimos leads cadastrados no sistema</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Novo Lead
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{lead.name}</h4>
                      {getStatusBadge(lead.status)}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <span>{lead.source}</span>
                      <span>•</span>
                      <span>{lead.date}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{lead.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Próximos Eventos</CardTitle>
                <CardDescription>Eventos confirmados e em produção</CardDescription>
              </div>
              <Button size="sm" variant="outline">
                Ver Todos
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{event.name}</h4>
                      {getStatusBadge(event.status)}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {event.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {event.time}
                      </span>
                      <span>{event.guests} convidados</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Button size="sm" variant="ghost">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts and Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Tarefas Pendentes</CardTitle>
            <CardDescription>Ações que precisam da sua atenção</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <div className="flex-1">
                  <p className="font-medium text-yellow-800">Aprovar proposta - Casamento João & Maria</p>
                  <p className="text-sm text-yellow-600">Prazo: 2 dias</p>
                </div>
                <Button size="sm" variant="outline">Aprovar</Button>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <Clock className="h-5 w-5 text-blue-600" />
                <div className="flex-1">
                  <p className="font-medium text-blue-800">Confirmar equipe - Evento Corporativo ABC</p>
                  <p className="text-sm text-blue-600">Prazo: 5 dias</p>
                </div>
                <Button size="sm" variant="outline">Confirmar</Button>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div className="flex-1">
                  <p className="font-medium text-green-800">Reunião de follow-up - Empresa XYZ</p>
                  <p className="text-sm text-green-600">Hoje às 14:00</p>
                </div>
                <Button size="sm" variant="outline">Detalhes</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>Últimas atualizações do sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-sm">
                <p className="font-medium">Novo lead cadastrado</p>
                <p className="text-gray-500">Empresa ABC Ltda - há 2 horas</p>
              </div>
              <div className="text-sm">
                <p className="font-medium">Proposta aprovada</p>
                <p className="text-gray-500">Casamento João & Maria - há 5 horas</p>
              </div>
              <div className="text-sm">
                <p className="font-medium">Evento concluído</p>
                <p className="text-gray-500">Coffee Break Reunião - há 1 dia</p>
              </div>
              <div className="text-sm">
                <p className="font-medium">Pagamento recebido</p>
                <p className="text-gray-500">Evento Corporativo XYZ - há 2 dias</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
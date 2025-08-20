"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar as CalendarIcon, 
  Clock,
  MapPin,
  Users,
  DollarSign,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  AlertTriangle
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const eventsData = [
  {
    id: 1,
    name: "Evento Corporativo ABC",
    type: "CORPORATE",
    date: "2024-01-20",
    time: "19:00",
    endDate: "2024-01-21",
    endTime: "01:00",
    guests: 150,
    venue: {
      name: "Espaço Corporativo ABC",
      address: "Av. Paulista, 1000 - São Paulo, SP"
    },
    status: "confirmed",
    value: 8500,
    customer: "Empresa ABC Ltda",
    contact: "João Silva - (11) 99999-8888",
    notes: "Evento de lançamento de produto, needs setup completo",
    team: [
      { name: "Carlos Chef", role: "Chef Coordenador" },
      { name: "Ana Garçom", role: "Gerente de Salão" },
      { name: "Roberto Motorista", role: "Logística" }
    ]
  },
  {
    id: 2,
    name: "Casamento João & Maria",
    type: "WEDDING",
    date: "2024-01-25",
    time: "20:00",
    endDate: "2024-01-26",
    endTime: "04:00",
    guests: 200,
    venue: {
      name: "Salão de Festas Bela Vista",
      address: "R. das Flores, 500 - São Paulo, SP"
    },
    status: "production",
    value: 15000,
    customer: "João & Maria Santos",
    contact: "Maria Santos - (11) 98888-7777",
    notes: "Casamento elegante, janela de 3 horas para setup",
    team: [
      { name: "Pedro Chef", role: "Chef Executivo" },
      { name: "Juliana Garçom", role: "Coordenadora" },
      { name: "Lucas Motorista", role: "Transporte" }
    ]
  },
  {
    id: 3,
    name: "Coffee Break Reunião",
    type: "COFFEE_BREAK",
    date: "2024-01-18",
    time: "10:00",
    endDate: "2024-01-18",
    endTime: "12:00",
    guests: 30,
    venue: {
      name: "Empresa XYZ Corp",
      address: "Av. Brigadeiro Faria Lima, 2000 - São Paulo, SP"
    },
    status: "confirmed",
    value: 1200,
    customer: "Empresa XYZ",
    contact: "Carlos Oliveira - (11) 97777-6666",
    notes: "Reunião mensal de diretoria, coffee break simples",
    team: [
      { name: "Mariana Auxiliar", role: "Atendimento" }
    ]
  },
  {
    id: 4,
    name: "Aniversário Infantil",
    type: "KIDS",
    date: "2024-01-22",
    time: "15:00",
    endDate: "2024-01-22",
    endTime: "18:00",
    guests: 50,
    venue: {
      name: "Salão de Festas Infantil",
      address: "R. das Crianças, 300 - São Paulo, SP"
    },
    status: "pre-reserved",
    value: 2800,
    customer: "Ana Costa",
    contact: "Ana Costa - (11) 96666-5555",
    notes: "Festa tema super-heróis, bolo personalizado",
    team: []
  }
];

const getStatusBadge = (status: string) => {
  const statusConfig = {
    "pre-reserved": { label: "Pré-reservado", variant: "secondary" as const },
    "reserved": { label: "Reservado", variant: "default" as const },
    "confirmed": { label: "Confirmado", variant: "default" as const },
    "production": { label: "Produção", variant: "secondary" as const },
    "done": { label: "Concluído", variant: "default" as const },
    "cancelled": { label: "Cancelado", variant: "destructive" as const },
  };
  
  const config = statusConfig[status as keyof typeof statusConfig] || { label: status, variant: "secondary" as const };
  return <Badge variant={config.variant}>{config.label}</Badge>;
};

const getTypeIcon = (type: string) => {
  const typeConfig = {
    CORPORATE: { icon: "🏢", label: "Corporativo" },
    WEDDING: { icon: "💍", label: "Casamento" },
    KIDS: { icon: "🎈", label: "Infantil" },
    COFFEE_BREAK: { icon: "☕", label: "Coffee Break" },
    COCKTAIL: { icon: "🍹", label: "Coquetel" },
    LUNCH: { icon: "🍽️", label: "Almoço" },
    DINNER: { icon: "🍽️", label: "Jantar" },
    OTHER: { icon: "📅", label: "Outro" }
  };
  
  return typeConfig[type as keyof typeof typeConfig] || { icon: "📅", label: type };
};

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [date, setDate] = useState<Date | undefined>(new Date());

  const filteredEvents = eventsData.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || event.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    all: eventsData.length,
    "pre-reserved": eventsData.filter(e => e.status === "pre-reserved").length,
    "reserved": eventsData.filter(e => e.status === "reserved").length,
    "confirmed": eventsData.filter(e => e.status === "confirmed").length,
    "production": eventsData.filter(e => e.status === "production").length,
    "done": eventsData.filter(e => e.status === "done").length,
    "cancelled": eventsData.filter(e => e.status === "cancelled").length,
  };

  const upcomingEvents = eventsData
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Eventos & Agenda</h1>
            <p className="text-gray-600">Gerencie eventos, agenda e recursos</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Novo Evento
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Events List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {Object.entries(statusCounts).map(([status, count]) => (
                <Card 
                  key={status} 
                  className={`cursor-pointer transition-colors ${
                    selectedStatus === status ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => setSelectedStatus(status)}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold">{count}</div>
                    <div className="text-xs text-gray-600 capitalize">
                      {status === "all" ? "Todos" : status === "pre-reserved" ? "Pré-reservados" : 
                       status === "reserved" ? "Reservados" : status === "confirmed" ? "Confirmados" :
                       status === "production" ? "Produção" : status === "done" ? "Concluídos" : "Cancelados"}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Search and Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Buscar eventos por nome ou cliente..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Mais Filtros
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Events List */}
            <Card>
              <CardHeader>
                <CardTitle>Eventos</CardTitle>
                <CardDescription>
                  {filteredEvents.length} eventos encontrados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-start space-x-4">
                        <div className="text-2xl">{getTypeIcon(event.type).icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium">{event.name}</h3>
                            {getStatusBadge(event.status)}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                            <span className="flex items-center">
                              <CalendarIcon className="h-3 w-3 mr-1" />
                              {event.date} {event.time}
                            </span>
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {event.guests} convidados
                            </span>
                            <span className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              {event.venue.name}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 mt-2">
                            <strong>Cliente:</strong> {event.customer} • <strong>Contato:</strong> {event.contact}
                          </div>
                          {event.notes && (
                            <p className="text-sm text-gray-600 mt-1">{event.notes}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="font-semibold text-green-600">R$ {event.value.toLocaleString()}</div>
                          <div className="text-xs text-gray-500">
                            {event.team.length} pessoas na equipe
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              Ver Detalhes
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Editar Evento
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Users className="h-4 w-4 mr-2" />
                              Gerenciar Equipe
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Confirmar Evento
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Cancelar Evento
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Calendário</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Próximos Eventos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-sm">{event.name}</h4>
                        <span className="text-lg">{getTypeIcon(event.type).icon}</span>
                      </div>
                      <div className="text-xs text-gray-500 space-y-1">
                        <div className="flex items-center">
                          <CalendarIcon className="h-3 w-3 mr-1" />
                          {event.date} {event.time}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {event.guests} convidados
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {event.venue.name}
                        </div>
                      </div>
                      {getStatusBadge(event.status)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                  Alertas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm font-medium text-yellow-800">Conflito de agenda</p>
                    <p className="text-xs text-yellow-600">Dois eventos no mesmo dia: 25/01</p>
                  </div>
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm font-medium text-red-800">Equipe incompleta</p>
                    <p className="text-xs text-red-600">Casamento João & Maria sem motorista</p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm font-medium text-blue-800">Pagamento pendente</p>
                    <p className="text-xs text-blue-600">Evento Corporativo ABC - 50% restante</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
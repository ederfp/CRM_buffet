"use client";

import { useState } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Search, 
  Filter, 
  Utensils, 
  Package, 
  ShoppingCart,
  ClipboardList,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  Calendar,
  MapPin,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Printer
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const productionOrders = [
  {
    id: 1,
    number: "OP-2024-001",
    eventName: "Evento Corporativo ABC",
    eventDate: "2024-01-20",
    status: "planned",
    guests: 150,
    items: [
      { name: "Salgados Assortidos", quantity: 300, unit: "un" },
      { name: "Bolo Corporativo", quantity: 2, unit: "un" },
      { name: "Bebidas", quantity: 75, unit: "L" }
    ],
    team: [
      { name: "Carlos Chef", role: "Chef Coordenador" },
      { name: "Ana Garçom", role: "Gerente de Salão" }
    ],
    checklist: {
      total: 12,
      completed: 8
    }
  },
  {
    id: 2,
    number: "OP-2024-002",
    eventName: "Casamento João & Maria",
    eventDate: "2024-01-25",
    status: "in_progress",
    guests: 200,
    items: [
      { name: "Jantar Completo", quantity: 200, unit: "porções" },
      { name: "Bolo de Casamento", quantity: 1, unit: "un" },
      { name: "Vinhos", quantity: 40, unit: "garrafas" }
    ],
    team: [
      { name: "Pedro Chef", role: "Chef Executivo" },
      { name: "Juliana Garçom", role: "Coordenadora" },
      { name: "Lucas Motorista", role: "Transporte" }
    ],
    checklist: {
      total: 18,
      completed: 12
    }
  },
  {
    id: 3,
    number: "OP-2024-003",
    eventName: "Coffee Break Reunião",
    eventDate: "2024-01-18",
    status: "done",
    guests: 30,
    items: [
      { name: "Cafés", quantity: 5, unit: "L" },
      { name: "Pães e Doces", quantity: 60, unit: "un" }
    ],
    team: [
      { name: "Mariana Auxiliar", role: "Atendimento" }
    ],
    checklist: {
      total: 6,
      completed: 6
    }
  }
];

const shoppingList = [
  {
    id: 1,
    item: "Farinha de Trigo",
    quantity: 50,
    unit: "kg",
    neededFor: ["OP-2024-001", "OP-2024-002"],
    priority: "high",
    status: "pending"
  },
  {
    id: 2,
    item: "Ovos",
    quantity: 120,
    unit: "dz",
    neededFor: ["OP-2024-001", "OP-2024-002"],
    priority: "high",
    status: "ordered"
  },
  {
    id: 3,
    item: "Carne Bovina",
    quantity: 80,
    unit: "kg",
    neededFor: ["OP-2024-002"],
    priority: "medium",
    status: "pending"
  },
  {
    id: 4,
    item: "Vinho Tinto",
    quantity: 40,
    unit: "garrafas",
    neededFor: ["OP-2024-002"],
    priority: "medium",
    status: "pending"
  },
  {
    id: 5,
    item: "Café Especial",
    quantity: 10,
    unit: "kg",
    neededFor: ["OP-2024-003"],
    priority: "low",
    status: "received"
  }
];

const getStatusBadge = (status: string) => {
  const statusConfig = {
    draft: { label: "Rascunho", variant: "secondary" as const },
    planned: { label: "Planejado", variant: "default" as const },
    "in_progress": { label: "Em Produção", variant: "secondary" as const },
    done: { label: "Concluído", variant: "default" as const },
    pending: { label: "Pendente", variant: "secondary" as const },
    ordered: { label: "Pedido", variant: "default" as const },
    received: { label: "Recebido", variant: "default" as const },
  };
  
  const config = statusConfig[status as keyof typeof statusConfig] || { label: status, variant: "secondary" as const };
  return <Badge variant={config.variant}>{config.label}</Badge>;
};

const getPriorityBadge = (priority: string) => {
  const priorityConfig = {
    high: { label: "Alta", variant: "destructive" as const },
    medium: { label: "Média", variant: "default" as const },
    low: { label: "Baixa", variant: "secondary" as const },
  };
  
  const config = priorityConfig[priority as keyof typeof priorityConfig] || { label: priority, variant: "secondary" as const };
  return <Badge variant={config.variant}>{config.label}</Badge>;
};

export default function ProductionPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [activeTab, setActiveTab] = useState("orders");

  const filteredOrders = productionOrders.filter(order => {
    const matchesSearch = order.eventName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.number.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    all: productionOrders.length,
    draft: productionOrders.filter(o => o.status === "draft").length,
    planned: productionOrders.filter(o => o.status === "planned").length,
    "in_progress": productionOrders.filter(o => o.status === "in_progress").length,
    done: productionOrders.filter(o => o.status === "done").length,
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Produção</h1>
            <p className="text-gray-600">TENDÊNCIAS GASTRONÓMICAS - Gerencie ordens de produção, checklists e compras</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nova OP
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="orders">Ordens de Produção</TabsTrigger>
            <TabsTrigger value="shopping">Lista de Compras</TabsTrigger>
            <TabsTrigger value="checklists">Checklists</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                      {status === "all" ? "Todas" : status === "draft" ? "Rascunho" : 
                       status === "planned" ? "Planejadas" : status === "in_progress" ? "Em Produção" : "Concluídas"}
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
                      placeholder="Buscar OPs por evento ou número..."
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

            {/* Production Orders */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredOrders.map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{order.number}</CardTitle>
                        <CardDescription>{order.eventName}</CardDescription>
                      </div>
                      {getStatusBadge(order.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Event Info */}
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {order.eventDate}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {order.guests} convidados
                        </span>
                      </div>

                      {/* Items Preview */}
                      <div>
                        <h4 className="font-medium text-sm mb-2">Itens Principais</h4>
                        <div className="space-y-1">
                          {order.items.slice(0, 3).map((item, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{item.name}</span>
                              <span>{item.quantity} {item.unit}</span>
                            </div>
                          ))}
                          {order.items.length > 3 && (
                            <div className="text-xs text-gray-500">
                              +{order.items.length - 3} itens
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Team */}
                      <div>
                        <h4 className="font-medium text-sm mb-2">Equipe</h4>
                        <div className="space-y-1">
                          {order.team.map((member, index) => (
                            <div key={index} className="flex justify-between text-sm">
                              <span>{member.name}</span>
                              <span className="text-gray-500">{member.role}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Checklist Progress */}
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium text-sm">Checklist</h4>
                          <span className="text-xs text-gray-500">
                            {order.checklist.completed}/{order.checklist.total}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${(order.checklist.completed / order.checklist.total) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex justify-between pt-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3 mr-1" />
                          Ver Detalhes
                        </Button>
                        <Button size="sm" variant="outline">
                          <Printer className="h-3 w-3 mr-1" />
                          Imprimir
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shopping" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Lista de Compras Consolidada</CardTitle>
                    <CardDescription>Itens necessários para produção dos eventos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {shoppingList.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium">{item.item}</h4>
                              {getPriorityBadge(item.priority)}
                              {getStatusBadge(item.status)}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                              Quantidade: {item.quantity} {item.unit}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              Necessário para: {item.neededFor.join(", ")}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-3 w-3 mr-1" />
                              Editar
                            </Button>
                            <Button size="sm">
                              {item.status === "pending" ? "Pedir" : "Ver"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Resumo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Total de Itens</span>
                        <span className="font-medium">{shoppingList.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Pendentes</span>
                        <span className="font-medium text-orange-600">
                          {shoppingList.filter(i => i.status === "pending").length}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Pedidos</span>
                        <span className="font-medium text-blue-600">
                          {shoppingList.filter(i => i.status === "ordered").length}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Recebidos</span>
                        <span className="font-medium text-green-600">
                          {shoppingList.filter(i => i.status === "received").length}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Alerts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                      Alertas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm font-medium text-red-800">Estoque crítico</p>
                        <p className="text-xs text-red-600">Farinha de trigo em falta - necessário para 2 eventos</p>
                      </div>
                      <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="text-sm font-medium text-yellow-800">Pedido atrasado</p>
                        <p className="text-xs text-yellow-600">Ovos - fornecedor não confirmou entrega</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="checklists" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productionOrders.map((order) => (
                <Card key={order.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{order.number}</CardTitle>
                        <CardDescription>{order.eventName}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          {order.checklist.completed}/{order.checklist.total}
                        </div>
                        <div className="text-xs text-gray-500">tarefas</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-600 h-3 rounded-full" 
                          style={{ width: `${(order.checklist.completed / order.checklist.total) * 100}%` }}
                        ></div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Preparação dos ingredientes</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Montagem do cardápio</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-yellow-600" />
                          <span className="text-sm">Embalagem e transporte</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 border-2 border-gray-300 rounded"></div>
                          <span className="text-sm">Setup no local</span>
                        </div>
                      </div>

                      <Button size="sm" className="w-full">
                        Ver Checklist Completo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
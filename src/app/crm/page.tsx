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
  Users, 
  Calendar, 
  DollarSign,
  Phone,
  Mail,
  MapPin,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import NewLeadModal from "@/components/crm/new-lead-modal";

const leadsData = [
  {
    id: 1,
    name: "Empresa ABC Ltda",
    type: "company",
    contact: "João Silva",
    email: "joao@abc.com",
    phone: "(11) 99999-8888",
    source: "Indicação",
    status: "qualified",
    value: 3200,
    createdAt: "2024-01-15",
    lastContact: "2024-01-16",
    notes: "Interessado em evento corporativo para 150 pessoas"
  },
  {
    id: 2,
    name: "Casamento João & Maria",
    type: "person",
    contact: "Maria Santos",
    email: "maria.santos@email.com",
    phone: "(11) 98888-7777",
    source: "Instagram",
    status: "proposal",
    value: 8500,
    createdAt: "2024-01-14",
    lastContact: "2024-01-15",
    notes: "Casamento para 200 convidados, data preferencial junho"
  },
  {
    id: 3,
    name: "Corporate Event XYZ",
    type: "company",
    contact: "Carlos Oliveira",
    email: "carlos@xyzcorp.com",
    phone: "(11) 97777-6666",
    source: "Site",
    status: "negotiation",
    value: 5100,
    createdAt: "2024-01-13",
    lastContact: "2024-01-14",
    notes: "Evento de lançamento de produto, precisa de orçamento urgente"
  },
  {
    id: 4,
    name: "Aniversário Infantil",
    type: "person",
    contact: "Ana Costa",
    email: "ana.costa@email.com",
    phone: "(11) 96666-5555",
    source: "Facebook",
    status: "new",
    value: 1800,
    createdAt: "2024-01-12",
    lastContact: "2024-01-12",
    notes: "Festa de 5 anos, tema super-heróis"
  },
  {
    id: 5,
    name: "Coffee Break Reunião",
    type: "company",
    contact: "Roberto Almeida",
    email: "roberto@empresa.com",
    phone: "(11) 95555-4444",
    source: "Indicação",
    status: "won",
    value: 1200,
    createdAt: "2024-01-10",
    lastContact: "2024-01-11",
    notes: "Reunião mensal de equipe, 30 pessoas"
  }
];

const getStatusBadge = (status: string) => {
  const statusConfig = {
    new: { label: "Novo", variant: "secondary" as const },
    qualified: { label: "Qualificado", variant: "default" as const },
    proposal: { label: "Proposta", variant: "secondary" as const },
    negotiation: { label: "Negociação", variant: "default" as const },
    won: { label: "Ganho", variant: "default" as const },
    lost: { label: "Perdido", variant: "destructive" as const },
  };
  
  const config = statusConfig[status as keyof typeof statusConfig] || { label: status, variant: "secondary" as const };
  return <Badge variant={config.variant}>{config.label}</Badge>;
};

const getTypeIcon = (type: string) => {
  return type === "company" ? 
    <div className="p-2 bg-blue-100 rounded-full">
      <Users className="h-4 w-4 text-blue-600" />
    </div> :
    <div className="p-2 bg-green-100 rounded-full">
      <Users className="h-4 w-4 text-green-600" />
    </div>;
};

export default function CRMPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showNewLeadModal, setShowNewLeadModal] = useState(false);

  const filteredLeads = leadsData.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || lead.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    all: leadsData.length,
    new: leadsData.filter(l => l.status === "new").length,
    qualified: leadsData.filter(l => l.status === "qualified").length,
    proposal: leadsData.filter(l => l.status === "proposal").length,
    negotiation: leadsData.filter(l => l.status === "negotiation").length,
    won: leadsData.filter(l => l.status === "won").length,
    lost: leadsData.filter(l => l.status === "lost").length,
  };

  const handleLeadCreated = () => {
    // Refresh leads data or show success message
    console.log("Lead created successfully");
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">CRM Comercial</h1>
            <p className="text-gray-600">TENDÊNCIAS GASTRONÓMICAS - Gerencie leads, oportunidades e follow-ups</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <Button onClick={() => setShowNewLeadModal(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Novo Lead
            </Button>
          </div>
        </div>

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
                  {status === "all" ? "Todos" : status === "new" ? "Novos" : 
                   status === "qualified" ? "Qualificados" : status === "proposal" ? "Propostas" :
                   status === "negotiation" ? "Negociação" : status === "won" ? "Ganhos" : "Perdidos"}
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
                  placeholder="Buscar leads por nome, contato ou email..."
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

        {/* Leads Table */}
        <Card>
          <CardHeader>
            <CardTitle>Leads e Oportunidades</CardTitle>
            <CardDescription>
              {filteredLeads.length} leads encontrados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredLeads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    {getTypeIcon(lead.type)}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{lead.name}</h3>
                        {getStatusBadge(lead.status)}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {lead.contact}
                        </span>
                        <span className="flex items-center">
                          <Mail className="h-3 w-3 mr-1" />
                          {lead.email}
                        </span>
                        <span className="flex items-center">
                          <Phone className="h-3 w-3 mr-1" />
                          {lead.phone}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {lead.source}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{lead.notes}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold text-green-600">R$ {lead.value.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">{lead.createdAt}</div>
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
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="h-4 w-4 mr-2" />
                          Agendar Contato
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <DollarSign className="h-4 w-4 mr-2" />
                          Criar Proposta
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* New Lead Modal */}
        <NewLeadModal
          isOpen={showNewLeadModal}
          onClose={() => setShowNewLeadModal(false)}
          onSuccess={handleLeadCreated}
        />
      </div>
    </DashboardLayout>
  );
}
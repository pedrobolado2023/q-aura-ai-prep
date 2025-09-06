import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Users, DollarSign, ShoppingCart, Edit, Save } from "lucide-react";

// Mock data - in a real app, this would come from your backend
const mockData = {
  sales: {
    today: 12,
    week: 89,
    total: 1247,
    revenue: 61353.30
  },
  customers: [
    { email: "maria.silva@email.com", date: "2024-01-15", amount: 49.90 },
    { email: "joao.santos@email.com", date: "2024-01-15", amount: 49.90 },
    { email: "ana.costa@email.com", date: "2024-01-14", amount: 49.90 },
    { email: "carlos.lima@email.com", date: "2024-01-14", amount: 49.90 },
  ],
  settings: {
    price: "49,90",
    description: "Prepare-se de forma inteligente com questões criadas por IA, baseadas em fontes reais."
  }
};

const AdminDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [settings, setSettings] = useState(mockData.settings);
  const [tempSettings, setTempSettings] = useState(mockData.settings);

  const handleSave = () => {
    setSettings(tempSettings);
    setIsEditing(false);
    // Here you would save to your backend
    console.log("Settings saved:", tempSettings);
  };

  const handleCancel = () => {
    setTempSettings(settings);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Dashboard <span className="text-primary">Q-Aura</span>
          </h1>
          <p className="text-muted-foreground">Painel administrativo do seu micro SaaS</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 glass-effect border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Vendas Hoje</p>
                <p className="text-3xl font-bold text-primary">{mockData.sales.today}</p>
              </div>
              <ShoppingCart className="w-8 h-8 text-primary/60" />
            </div>
          </Card>

          <Card className="p-6 glass-effect border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Vendas Semana</p>
                <p className="text-3xl font-bold text-primary">{mockData.sales.week}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary/60" />
            </div>
          </Card>

          <Card className="p-6 glass-effect border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Vendas</p>
                <p className="text-3xl font-bold text-primary">{mockData.sales.total}</p>
              </div>
              <Users className="w-8 h-8 text-primary/60" />
            </div>
          </Card>

          <Card className="p-6 glass-effect border-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Receita Total</p>
                <p className="text-2xl font-bold text-green-500">
                  R$ {mockData.sales.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-green-500/60" />
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Settings Panel */}
          <Card className="p-6 glass-effect border-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Configurações</h2>
              <Button
                variant={isEditing ? "default" : "outline"}
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit className="w-4 h-4 mr-2" />
                {isEditing ? "Cancelar" : "Editar"}
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold mb-2 block">Preço (R$)</label>
                <Input
                  value={isEditing ? tempSettings.price : settings.price}
                  onChange={(e) => setTempSettings({ ...tempSettings, price: e.target.value })}
                  disabled={!isEditing}
                  className="glass-effect"
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Descrição do Produto</label>
                <Textarea
                  value={isEditing ? tempSettings.description : settings.description}
                  onChange={(e) => setTempSettings({ ...tempSettings, description: e.target.value })}
                  disabled={!isEditing}
                  rows={3}
                  className="glass-effect"
                />
              </div>

              {isEditing && (
                <div className="flex gap-2 pt-4">
                  <Button onClick={handleSave} className="flex-1">
                    <Save className="w-4 h-4 mr-2" />
                    Salvar Alterações
                  </Button>
                  <Button variant="outline" onClick={handleCancel}>
                    Cancelar
                  </Button>
                </div>
              )}
            </div>
          </Card>

          {/* Customer List */}
          <Card className="p-6 glass-effect border-0">
            <h2 className="text-xl font-semibold mb-6">Clientes Recentes</h2>
            
            <div className="space-y-4">
              {mockData.customers.map((customer, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{customer.email}</p>
                      <p className="text-sm text-muted-foreground">{customer.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-500">
                        R$ {customer.amount.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                  </div>
                  {index < mockData.customers.length - 1 && (
                    <Separator className="mt-4 opacity-50" />
                  )}
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-6">
              Ver Todos os Clientes
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
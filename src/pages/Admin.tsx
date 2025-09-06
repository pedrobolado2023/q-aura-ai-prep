import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Lock } from "lucide-react";
import AdminDashboard from "@/components/AdminDashboard";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simple password authentication - in production, use proper authentication
  const handleLogin = () => {
    if (password === "admin123") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Senha incorreta. Tente novamente.");
      setPassword("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  if (isAuthenticated) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md p-8 glass-effect border-0">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="text-2xl font-bold mb-2">
            Área <span className="text-primary">Administrativa</span>
          </h1>
          
          <p className="text-muted-foreground">
            Insira sua senha para acessar o dashboard
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <Input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="glass-effect border-primary/20 focus:border-primary"
            />
            {error && (
              <p className="text-destructive text-sm mt-2">{error}</p>
            )}
          </div>

          <Button 
            onClick={handleLogin} 
            className="w-full py-6 button-glow"
          >
            Acessar Dashboard
          </Button>

          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Acesso restrito apenas para administradores
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Admin;
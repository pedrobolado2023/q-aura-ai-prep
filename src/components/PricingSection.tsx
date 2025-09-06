import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, Crown } from "lucide-react";
import { useState } from "react";

const features = [
  "Questões ilimitadas geradas por IA",
  "Banco de questões de todos os concursos",
  "Atualizações constantes de conteúdo",
  "Relatórios de desempenho",
  "Suporte prioritário 24/7",
  "Acesso vitalício"
];

const PricingSection = () => {
  const [email, setEmail] = useState("");

  const handlePurchase = () => {
    if (!email) {
      alert("Por favor, insira seu e-mail antes de continuar.");
      return;
    }
    
    if (!email.includes("@")) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // Redirect to payment (placeholder for now)
    window.open("https://checkout.stripe.com/pay/example", "_blank");
  };

  return (
    <section id="plans" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforme seu <span className="text-primary">Estudo Agora</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Acesso completo ao Q-Aura por um preço único e justo.
          </p>
        </div>

        <Card className="glass-effect border-2 border-primary/20 p-8 lg:p-12 hover:shadow-glow smooth-transition">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Crown className="w-4 h-4" />
              <span className="text-sm font-semibold">PLANO PREMIUM</span>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Acesso Completo ao Q-Aura</h3>
            
            <div className="mb-6">
              <span className="text-5xl font-bold">R$ 49</span>
              <span className="text-xl text-muted-foreground">,90</span>
              <div className="text-muted-foreground mt-2">Pagamento único • Acesso vitalício</div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-500 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold">67% DE DESCONTO</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">O que você vai receber:</h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Seu melhor e-mail:
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass-effect border-primary/20 focus:border-primary"
                />
              </div>

              <Button 
                onClick={handlePurchase}
                size="lg" 
                className="w-full py-6 text-lg button-glow hover:scale-105 smooth-transition animate-pulse-glow"
              >
                Garantir Meu Acesso Agora
              </Button>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
                  <Crown className="w-4 h-4" />
                  <span>Pagamento 100% seguro</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Garantia de 30 dias ou seu dinheiro de volta
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
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
    <section id="plans" className="py-32 px-6 relative">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Transforme seu <span className="gradient-text">Estudo Agora</span>
          </h2>
          <p className="text-2xl text-muted-foreground">
            Acesso completo ao Q-Aura por um preço único e justo.
          </p>
        </div>

        <Card className="glass-effect-strong border-2 border-primary/30 p-10 lg:p-16 hover:glow-intense spring-transition relative overflow-hidden">
          {/* Ambient glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 rounded-xl" />
          
          <div className="text-center mb-10 relative">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-primary/40 text-primary mb-8 pulse-glow">
              <Crown className="w-5 h-5 text-primary-glow" />
              <span className="text-base font-bold tracking-wide">PLANO PREMIUM</span>
            </div>
            
            <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 gradient-text">Acesso Completo ao Q-Aura</h3>
            
            <div className="mb-8">
              <span className="text-7xl lg:text-8xl font-black gradient-text">R$ 49</span>
              <span className="text-3xl text-muted-foreground">,90</span>
              <div className="text-lg text-muted-foreground mt-3 font-medium">Pagamento único • Acesso vitalício</div>
            </div>

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mb-10 pulse-glow">
              <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-base font-bold">67% DE DESCONTO</span>
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
                  className="glass-effect-strong border-primary/40 focus:border-primary-glow text-lg py-4"
                />
              </div>

              <Button 
                onClick={handlePurchase}
                size="lg" 
                className="w-full py-8 text-xl font-bold button-glow hover:scale-110 spring-transition glow-intense pulse-glow"
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
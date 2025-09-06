import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />
      
      {/* Floating orbs with glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl floating" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-primary-glow/30 rounded-full blur-2xl floating" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-accent/15 rounded-full blur-3xl floating" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/6 right-1/3 w-20 h-20 bg-primary-glow/25 rounded-full blur-xl floating" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="fade-in-down">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-effect-strong mb-8 pulse-glow">
            <Sparkles className="w-5 h-5 text-primary-glow animate-pulse" />
            <span className="text-sm font-medium text-foreground">Powered by ChatGPT 5.0</span>
          </div>
        </div>

        <h1 className="text-7xl lg:text-9xl font-extrabold mb-8 fade-in-up">
          <span className="gradient-text">
            Q-Aura
          </span>
        </h1>

        <h2 className="text-3xl lg:text-5xl font-light mb-10 text-muted-foreground fade-in-up delay-200 leading-tight">
          <span className="text-foreground font-medium">Inteligência Artificial</span> a Serviço da Sua <span className="text-primary-glow">Aprovação</span>
        </h2>

        <p className="text-xl lg:text-2xl max-w-4xl mx-auto mb-16 text-muted-foreground fade-in-up delay-300 leading-relaxed">
          Gerador de questões de <span className="text-primary font-semibold">alta precisão</span> para concursos públicos, potencializado pelo ChatGPT 5.0. 
          Transforme seu estudo com conteúdo <span className="text-primary-glow font-semibold">verificado e otimizado</span>.
        </p>

        <div className="fade-in-up delay-500">
          <Button
            onClick={scrollToPlans}
            size="lg"
            className="group px-12 py-8 text-xl font-semibold button-glow hover:scale-110 spring-transition glow-intense"
          >
            Comece Agora
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 spring-transition" />
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 fade-in-up delay-700">
          <p className="text-sm text-muted-foreground/60 mb-4">Confiado por milhares de estudantes</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">98%</div>
            <div className="w-px h-6 bg-border" />
            <div className="text-sm">Taxa de Aprovação</div>
            <div className="w-px h-6 bg-border" />
            <div className="text-2xl font-bold">10k+</div>
            <div className="w-px h-6 bg-border" />
            <div className="text-sm">Questões Geradas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
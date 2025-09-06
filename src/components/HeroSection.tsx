import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary-glow/40 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-primary/20 rounded-full animate-pulse delay-500" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="fade-in-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8">
            <Sparkles className="w-4 h-4 text-primary-glow" />
            <span className="text-sm text-muted-foreground">Powered by ChatGPT 5.0</span>
          </div>
        </div>

        <h1 className="text-6xl lg:text-8xl font-bold mb-6 fade-in-up">
          <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Q-Aura
          </span>
        </h1>

        <h2 className="text-2xl lg:text-4xl font-light mb-8 text-muted-foreground fade-in-up delay-200">
          Inteligência Artificial a Serviço da Sua Aprovação
        </h2>

        <p className="text-lg lg:text-xl max-w-3xl mx-auto mb-12 text-muted-foreground/80 fade-in-up delay-300">
          Gerador de questões de alta precisão para concursos públicos, potencializado pelo ChatGPT 5.0. 
          Transforme seu estudo com conteúdo verificado e otimizado.
        </p>

        <div className="fade-in-up delay-500">
          <Button
            onClick={scrollToPlans}
            size="lg"
            className="group px-8 py-6 text-lg button-glow hover:scale-105 smooth-transition"
          >
            Comece Agora
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 smooth-transition" />
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
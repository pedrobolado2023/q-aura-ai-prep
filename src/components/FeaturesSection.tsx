import { Bot, BookOpen, Target, Zap, Shield, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "IA de Última Geração",
    description: "Questões criadas pelo ChatGPT 5.0 com precisão científica e linguagem atualizada.",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: BookOpen,
    title: "Conteúdo Verificado",
    description: "Baseado em fontes reais e atualizadas dos principais concursos públicos do país.",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    icon: Target,
    title: "Foco Personalizado",
    description: "Questões direcionadas especificamente para o seu concurso de interesse.",
    gradient: "from-pink-600 to-red-500"
  },
  {
    icon: Zap,
    title: "Otimização de Tempo",
    description: "Estude de forma mais eficiente com questões que realmente importam.",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Cada questão passa por validação rigorosa antes de chegar até você.",
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    icon: TrendingUp,
    title: "Resultados Comprovados",
    description: "Método testado e aprovado por milhares de concurseiros aprovados.",
    gradient: "from-green-500 to-blue-500"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-32 px-6 relative">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Por que escolher o <span className="gradient-text">Q-Aura</span>?
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Revolucione seus estudos com a tecnologia mais avançada de geração de questões.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group p-10 glass-effect-strong hover:glow-intense spring-transition hover:scale-105 border-0 relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 spring-transition" />
                
                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-8 glow-effect`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 group-hover:gradient-text spring-transition">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
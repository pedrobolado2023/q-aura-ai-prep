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
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Por que escolher o <span className="text-primary">Q-Aura</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolucione seus estudos com a tecnologia mais avançada de geração de questões.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group p-8 glass-effect hover:shadow-glow smooth-transition hover:scale-105 border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary smooth-transition">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
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
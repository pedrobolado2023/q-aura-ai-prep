import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Aprovada TRT - SP",
    avatar: "/placeholder.svg",
    initials: "MS",
    content: "O Q-Aura foi fundamental na minha aprovação. As questões são muito bem elaboradas e realmente simulam o que cai na prova. Recomendo!",
    rating: 5
  },
  {
    name: "João Santos",
    role: "Aprovado Receita Federal",
    avatar: "/placeholder.svg", 
    initials: "JS",
    content: "Impressionante a qualidade das questões geradas. Em 3 meses de estudo com o Q-Aura consegui minha tão sonhada aprovação.",
    rating: 5
  },
  {
    name: "Ana Costa",
    role: "Aprovada INSS",
    avatar: "/placeholder.svg",
    initials: "AC",
    content: "A IA realmente entende o padrão das questões. Economizei muito tempo focando apenas no que realmente importa para o concurso.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            O que dizem nossos <span className="text-primary">aprovados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milhares de concurseiros já transformaram seus estudos com o Q-Aura.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="p-8 glass-effect border-0 hover:shadow-glow smooth-transition hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
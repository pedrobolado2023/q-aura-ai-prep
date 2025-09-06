import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-primary/20 glass-effect-strong relative">
      {/* Footer ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      <div className="container mx-auto relative z-10">
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">
            <span className="gradient-text">Q-Aura</span>
          </h3>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            Transformando a preparação para concursos públicos com inteligência artificial.
          </p>

          <Separator className="my-8 opacity-50" />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="/termos" 
              className="hover:text-primary-glow spring-transition font-medium"
            >
              Termos de Serviço
            </a>
            
            <div className="hidden sm:block w-px h-4 bg-border" />
            
            <a 
              href="/privacidade" 
              className="hover:text-primary-glow spring-transition font-medium"
            >
              Política de Privacidade
            </a>
            
            <div className="hidden sm:block w-px h-4 bg-border" />
            
            <a 
              href="/contato" 
              className="hover:text-primary-glow spring-transition font-medium"
            >
              Contato
            </a>
          </div>

          <Separator className="my-8 opacity-50" />

          <p className="text-xs text-muted-foreground">
            © 2024 Q-Aura. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="container mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Q-Aura
            </span>
          </h3>
          
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Transformando a preparação para concursos públicos com inteligência artificial.
          </p>

          <Separator className="my-8 opacity-50" />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="/termos" 
              className="hover:text-primary smooth-transition"
            >
              Termos de Serviço
            </a>
            
            <div className="hidden sm:block w-px h-4 bg-border" />
            
            <a 
              href="/privacidade" 
              className="hover:text-primary smooth-transition"
            >
              Política de Privacidade
            </a>
            
            <div className="hidden sm:block w-px h-4 bg-border" />
            
            <a 
              href="/contato" 
              className="hover:text-primary smooth-transition"
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
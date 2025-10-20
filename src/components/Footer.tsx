import { Mail, Instagram, MessageCircle, Heart } from "lucide-react";

/**
 * RODAPÉ DO SITE
 * 
 * COMO PERSONALIZAR:
 * 1. Para trocar os links de contato: edite as constantes abaixo
 * 2. Para mudar o texto: edite os elementos de texto
 * 3. Para adicionar/remover redes sociais: modifique o array 'socialLinks'
 */

// 📧 EDITE AQUI: E-mail de contato
const EMAIL = "psicologia@exemplo.com.br";

// 📱 EDITE AQUI: Usuário do Instagram (sem @)
const INSTAGRAM_USERNAME = "psicologa.exemplo";

// 📱 EDITE AQUI: Número do WhatsApp (formato internacional)
const WHATSAPP_NUMBER = "5511999999999";

const Footer = () => {
  // Links de redes sociais - EDITE AS CONSTANTES ACIMA
  const socialLinks = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      color: "hover:text-green-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: `https://instagram.com/${INSTAGRAM_USERNAME}`,
      color: "hover:text-pink-600"
    },
    {
      icon: Mail,
      label: "E-mail",
      href: `mailto:${EMAIL}`,
      color: "hover:text-primary"
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Conteúdo principal do rodapé */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              {/* ✏️ EDITE AQUI: Nome da psicóloga */}
              Psicologia & Bem-Estar
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              {/* ✏️ EDITE AQUI: Texto descritivo curto */}
              Espaço de acolhimento e cuidado emocional. 
              Terapia individualizada para ansiedade, autoestima e autoconhecimento.
            </p>
          </div>

          {/* Coluna 2: Links úteis */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">
              Navegação
            </h3>
            <nav className="flex flex-col gap-2">
              <a 
                href="#sobre" 
                className="text-background/80 hover:text-background transition-smooth text-sm"
              >
                Sobre Mim
              </a>
              <a 
                href="#servicos" 
                className="text-background/80 hover:text-background transition-smooth text-sm"
              >
                Serviços
              </a>
              <a 
                href="#depoimentos" 
                className="text-background/80 hover:text-background transition-smooth text-sm"
              >
                Depoimentos
              </a>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">
              Entre em Contato
            </h3>
            
            {/* Redes sociais - EDITE OS LINKS NAS CONSTANTES ACIMA */}
            <div className="flex gap-4 mb-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-background/80 ${link.color} transition-smooth`}
                    aria-label={link.label}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
            
            {/* E-mail - EDITE NA CONSTANTE ACIMA */}
            <p className="text-background/80 text-sm">
              {EMAIL}
            </p>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-background/20 pt-6">
          <div className="text-center text-background/60 text-sm">
            <p>
              {/* ✏️ EDITE AQUI: Texto de copyright */}
              © {currentYear} Psicologia & Terapia. Todos os direitos reservados.
            </p>
            <p className="mt-2 text-xs">
              CRP: XXXXX/XX {/* ✏️ EDITE AQUI: Número do CRP */}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

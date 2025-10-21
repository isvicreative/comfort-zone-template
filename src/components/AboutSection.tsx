import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import psychologistPhoto from "@/assets/psychologist.jpg";

/**
 * SEÇÃO SOBRE MIM
 * 
 * COMO PERSONALIZAR:
 * 1. Para trocar a foto da psicóloga: substitua o arquivo psychologist.jpg na pasta src/assets/
 * 2. Para editar o texto: modifique os parágrafos abaixo
 * 3. Para mudar o número do WhatsApp: edite WHATSAPP_NUMBER
 * 4. Para personalizar a mensagem do WhatsApp: edite WHATSAPP_MESSAGE
 */

// 📱 EDITE AQUI: Número do WhatsApp (formato internacional sem + ou espaços)
const WHATSAPP_NUMBER = "5551997652633"; // Exemplo: 5511999999999

// 💬 EDITE AQUI: Mensagem padrão ao clicar no botão
const WHATSAPP_MESSAGE = "Olá! Gostaria de agendar uma sessão de terapia.";

const AboutSection = () => {
  // Gera o link do WhatsApp
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;


  return (
    <section id="sobre" className="py-16 md:py-24 px-4 bg-gradient-to-br from-background to-accent/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* 🖼️ Imagem da Psicóloga */}
          <div className="order-2 md:order-1">
            <div className="relative">
              {/* Elemento decorativo de fundo */}
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-secondary/40 rounded-full -z-10" />
              
              {/* Foto da psicóloga - TROQUE AQUI A IMAGEM */}
              <img
                src={psychologistPhoto}
                alt="Psicóloga"
                className="rounded-2xl shadow-elegant w-full max-w-md mx-auto object-cover aspect-[3/4]"
              />
            </div>
          </div>

          {/* 📝 Texto sobre a profissional */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                Sobre Mim
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              {/* ✏️ EDITE AQUI: Título da seção */}
              Cuidando da sua saúde emocional
            </h2>

            {/* ✏️ EDITE AQUI: Texto descritivo sobre a psicóloga */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Olá! Sou psicóloga clínica especializada em terapia cognitivo-comportamental, 
                com experiência em atendimento a adultos que buscam superar ansiedade, 
                fortalecer a autoestima e promover o autoconhecimento.
              </p>
              
              <p>
                Meu compromisso é oferecer um espaço seguro, acolhedor e livre de julgamentos, 
                onde você possa se expressar livremente e encontrar caminhos para o seu bem-estar 
                emocional e mental.
              </p>
              
              <p>
                Acredito que cada pessoa tem seu próprio ritmo e história. Por isso, minha 
                abordagem é individualizada, respeitando suas necessidades e objetivos 
                terapêuticos.
              </p>
            </div>

            {/* 🔘 Botão de agendamento via WhatsApp */}
            <div className="mt-8">
              {/* 📱 TROQUE O NÚMERO DO WHATSAPP NA CONSTANTE ACIMA */}
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-elegant transition-smooth font-semibold"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Agendar Sessão
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { Users, Video, Brain, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/**
 * SEÇÃO DE SERVIÇOS
 * 
 * COMO PERSONALIZAR:
 * 1. Para editar os serviços: modifique o array 'services' abaixo
 * 2. Para trocar os ícones: escolha outros ícones do lucide-react
 * 3. Para adicionar/remover serviços: adicione/remova itens no array
 * 
 * Ícones disponíveis: https://lucide.dev/icons/
 */

const ServicesSection = () => {
  // 📝 EDITE AQUI: Lista de serviços oferecidos
  const services = [
    {
      // Escolha um ícone do lucide-react
      icon: Users,
      // ✏️ Título do serviço
      title: "Psicoterapia Individual",
      // ✏️ Descrição do serviço
      description: "Atendimento personalizado focado nas suas necessidades emocionais, com abordagem acolhedora e profissional."
    },
    {
      icon: Video,
      title: "Terapia Online",
      description: "Sessões por videoconferência com a mesma qualidade do atendimento presencial, no conforto da sua casa."
    },
    {
      icon: Brain,
      title: "Ansiedade",
      description: "Técnicas comprovadas para gerenciar e superar a ansiedade, recuperando sua paz interior e qualidade de vida."
    },
    {
      icon: Sparkles,
      title: "Autoestima",
      description: "Trabalho focado no fortalecimento da autoconfiança e valorização pessoal através do autoconhecimento profundo."
    }
  ];

  return (
    <section id="servicos" className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            {/* ✏️ EDITE AQUI: Título da seção */}
            Como posso ajudar você
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {/* ✏️ EDITE AQUI: Subtítulo da seção */}
            Serviços personalizados para o seu bem-estar emocional
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <Card 
                key={index}
                className="border-none shadow-soft hover:shadow-elegant transition-smooth bg-card group cursor-default"
              >
                <CardContent className="p-6 text-center">
                  {/* Ícone do serviço */}
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/50 group-hover:bg-primary/10 transition-smooth">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Título do serviço - EDITE NO ARRAY ACIMA */}
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Descrição do serviço - EDITE NO ARRAY ACIMA */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

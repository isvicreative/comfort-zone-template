import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

/**
 * SEÇÃO DE DEPOIMENTOS
 * 
 * COMO PERSONALIZAR:
 * 1. Para editar os depoimentos: modifique o array 'testimonials' abaixo
 * 2. Para adicionar/remover depoimentos: adicione/remova itens no array
 * 3. Os depoimentos podem ser navegados manualmente ou ficam estáticos
 */

const TestimonialsSection = () => {
  // 📝 EDITE AQUI: Lista de depoimentos
  const testimonials = [
    {
      // ✏️ Texto do depoimento
      text: "A terapia me ajudou a entender melhor minhas emoções e a lidar com a ansiedade de forma muito mais saudável. Sou muito grata pelo acolhimento e profissionalismo.",
      // ✏️ Nome do cliente (pode usar iniciais por privacidade)
      name: "M.S.",
      // ✏️ Informação adicional (opcional)
      role: "Paciente há 8 meses"
    },
    {
      text: "Encontrei um espaço seguro onde posso ser eu mesma sem julgamentos. As sessões online são práticas e tão eficazes quanto o presencial. Recomendo muito!",
      name: "A.L.",
      role: "Terapia online"
    },
    {
      text: "O trabalho focado em autoestima transformou minha vida. Aprendi a me valorizar e a estabelecer limites saudáveis. Cada sessão é um passo importante no meu autoconhecimento.",
      name: "J.P.",
      role: "Paciente há 1 ano"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 px-4 bg-gradient-to-br from-secondary/20 to-accent/20">
      <div className="max-w-4xl mx-auto">
        
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            {/* ✏️ EDITE AQUI: Título da seção */}
            O que dizem meus pacientes
          </h2>
          <p className="text-muted-foreground text-lg">
            {/* ✏️ EDITE AQUI: Subtítulo da seção */}
            Histórias reais de transformação e bem-estar
          </p>
        </div>

        {/* Depoimento atual */}
        <div className="relative">
          <Card className="border-none shadow-elegant bg-card">
            <CardContent className="p-8 md:p-12">
              {/* Ícone de aspas */}
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              
              {/* Texto do depoimento - EDITE NO ARRAY ACIMA */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 font-light italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              {/* Autor do depoimento */}
              <div className="border-t border-border pt-6">
                <p className="font-semibold text-foreground">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Botões de navegação */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white shadow-soft hover:shadow-elegant text-primary p-3 rounded-full transition-smooth"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white shadow-soft hover:shadow-elegant text-primary p-3 rounded-full transition-smooth"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Indicadores */}
        {testimonials.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-smooth ${
                  index === currentTestimonial
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;

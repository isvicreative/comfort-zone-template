import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

/**
 * HERO CAROUSEL COMPONENT
 * 
 * Carrossel automático de imagens no topo da página
 * 
 * COMO PERSONALIZAR:
 * 1. Para trocar as imagens: substitua os arquivos hero-1.jpg, hero-2.jpg, hero-3.jpg na pasta src/assets/
 * 2. Para mudar as legendas: edite o array 'slides' abaixo
 * 3. Para ajustar o tempo de transição: mude o valor em SLIDE_INTERVAL (está em milissegundos, 5000 = 5 segundos)
 * 4. Para adicionar/remover slides: adicione/remova itens no array 'slides'
 */

// ⏱️ TEMPO DE TRANSIÇÃO ENTRE SLIDES (em milissegundos)
const SLIDE_INTERVAL = 5000; // 5 segundos

const HeroCarousel = () => {
  // 📝 EDITE AQUI: Legendas e imagens de cada slide
  const slides = [
    {
      image: hero1,
      title: "Você merece cuidado emocional",
      subtitle: "Psicoterapia acolhedora e profissional"
    },
    {
      image: hero2,
      title: "Terapia para ansiedade e bem-estar",
      subtitle: "Encontre equilíbrio e paz interior"
    },
    {
      image: hero3,
      title: "Seu espaço seguro de autoconhecimento",
      subtitle: "Fortaleça sua autoestima e confiança"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Troca automática de slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Navegação manual
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Imagem de fundo */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay escuro para melhor legibilidade do texto */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Conteúdo do slide */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl font-light opacity-90">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-smooth"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-smooth"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Indicadores de slide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-smooth ${
              index === currentSlide
                ? "bg-white w-8 md:w-12"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;

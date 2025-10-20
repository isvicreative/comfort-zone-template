/**
 * PÁGINA PRINCIPAL DO SITE
 * 
 * Esta é a página inicial que reúne todos os componentes do site.
 * 
 * ESTRUTURA:
 * - HeroCarousel: Carrossel de imagens no topo
 * - AboutSection: Seção "Sobre Mim"
 * - ServicesSection: Serviços oferecidos
 * - TestimonialsSection: Depoimentos de clientes
 * - Footer: Rodapé com links de contato
 * - WhatsAppButton: Botão flutuante do WhatsApp
 * 
 * Para editar cada seção, acesse o componente correspondente na pasta src/components/
 */

import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Carrossel de imagens hero */}
      <HeroCarousel />
      
      {/* Seção sobre a psicóloga */}
      <AboutSection />
      
      {/* Seção de serviços */}
      <ServicesSection />
      
      {/* Seção de depoimentos */}
      <TestimonialsSection />
      
      {/* Rodapé */}
      <Footer />
      
      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />
    </main>
  );
};

export default Index;

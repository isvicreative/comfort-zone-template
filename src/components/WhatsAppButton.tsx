import { MessageCircle } from "lucide-react";

/**
 * BOTÃO FLUTUANTE DO WHATSAPP
 * 
 * Botão fixo no canto inferior direito da tela
 * 
 * COMO PERSONALIZAR:
 * 1. Para trocar o número do WhatsApp: edite WHATSAPP_NUMBER abaixo
 * 2. Para mudar a mensagem padrão: edite WHATSAPP_MESSAGE
 * 3. Para mudar a posição: ajuste as classes 'bottom-' e 'right-'
 */

// 📱 EDITE AQUI: Número do WhatsApp (formato internacional sem + ou espaços)
const WHATSAPP_NUMBER = "5551997652633"; // Exemplo: 5511999999999

// 💬 EDITE AQUI: Mensagem padrão ao clicar no botão
const WHATSAPP_MESSAGE = "Olá! Gostaria de saber mais sobre a terapia.";

const WhatsAppButton = () => {
  // Gera o link do WhatsApp
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;


  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-elegant hover:shadow-2xl transition-smooth group"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Ícone do WhatsApp */}
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      
      {/* Tooltip que aparece ao passar o mouse */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
        Fale conosco
      </span>
      
      {/* Indicador de "pulse" (pulsação) */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
    </a>
  );
};

export default WhatsAppButton;

import { MessageCircle, Phone } from "lucide-react";
import { whatsappLink } from "../common/whatsappmessage";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-brownish text-surface rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:scale-105 hover:bg-[#222] transition-all duration-300 group cursor-pointer"
      aria-label="Agendar via WhatsApp"
    >
      {/* Ícone Minimalista do WhatsApp */}
      <MessageCircle />
      {/* Tooltip Editorial (Aparece no Hover) */}
      <span className="absolute right-16 px-4 py-2 bg-surface text-brownish border border-border font-sans text-[10px] uppercase tracking-widest whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300">
        Agendar Consulta
      </span>
    </a>
  );
}

import { whatsappLink } from "../common/whatsappmessage";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-surface pointer-events-none">
      {/* Logo / Nome */}
      <a
        href="#inicio"
        className="font-serif text-2xl tracking-tight hover:opacity-70 transition-opacity pointer-events-auto"
      >
        Dra. Anelisa Patron
      </a>

      {/* Navegação + CTA */}
      <div className="hidden md:flex items-center gap-10 pointer-events-auto">
        <nav className="flex gap-8 font-sans text-xs uppercase tracking-widest font-medium">
          <a href="#sobre" className="hover:opacity-70 transition-opacity">
            Quem Sou
          </a>
          <a
            href="#tratamentos"
            className="hover:opacity-70 transition-opacity"
          >
            Tratamentos
          </a>
          <a
            href="#depoimentos"
            className="hover:opacity-70 transition-opacity"
          >
            Depoimentos
          </a>
          <a
            href="#localizacao"
            className="hover:opacity-70 transition-opacity"
          >
            Localização
          </a>
        </nav>

        {/* Botão de Destaque para WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-surface text-surface px-6 py-2.5 font-sans text-xs uppercase tracking-widest hover:bg-surface hover:text-ink transition-colors duration-300"
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  );
}

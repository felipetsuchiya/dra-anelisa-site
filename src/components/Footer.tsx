import { whatsappLink } from "../common/whatsappmessage";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer
      id="agendar"
      className="bg-brownish text-surface py-32 px-8 flex flex-col items-center justify-center text-center min-h-[70vh]"
    >
      <Reveal>
        <span className="font-mono text-xs text-surface/50 uppercase tracking-widest mb-8 block">
          Instituto Derma Soul — Curitiba
        </span>
      </Reveal>

      <Reveal delay={100}>
        <h2 className="font-serif text-5xl md:text-7xl mb-12 tracking-tight">
          Pronta para realçar <br /> a sua melhor versão?
        </h2>
      </Reveal>

      <Reveal delay={200}>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-surface mb-10 rounded-2xl cursor-pointer text-brownish px-8 py-4 font-sans text-sm tracking-widest uppercase hover:bg-[#54463f] transition-colors inline-block"
        >
          Agendar Consulta
        </a>
      </Reveal>

      <Reveal
        delay={300}
        className="w-full max-w-5xl flex justify-between items-center border-t border-surface/10 pt-8 font-sans text-xs text-surface/50"
      >
        <div>
          &copy; {new Date().getFullYear()} Dra. Anelise Patron. CRBM 6 4304.
        </div>
        <div>Desenvolvido por Opem Studio</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-surface transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-surface transition-colors">
            WhatsApp
          </a>
        </div>
      </Reveal>
    </footer>
  );
}

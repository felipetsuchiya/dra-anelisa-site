import { Reveal } from "./Reveal";
import hero from "../assets/hero.jpg";
import { whatsappLink } from "../common/whatsappmessage";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-200 w-full bg-ink overflow-hidden flex items-end px-8 pb-16"
    >
      {/* Adicionado 'object-top' para alinhar a imagem a partir de cima e não cortar a persona */}
      <img
        src={hero}
        alt="Dra Anelise"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-60"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent"></div>

      <div className="relative z-10 max-w-5xl">
        <Reveal delay={100}>
          <div className="font-mono text-xs text-surface/70 uppercase tracking-widest mb-6">
            Curitiba, PR — Instituto DermaSoul
          </div>
        </Reveal>
        <Reveal delay={200}>
          <h1 className="font-serif text-6xl md:text-8xl text-surface leading-none tracking-[-0.03em] mb-8">
            Refinamento facial <br /> estruturado na ciência.
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <p className="font-sans text-lg text-surface/80 max-w-md font-light leading-relaxed">
              Protocolos injetáveis e tecnologia de ponta para restauro da
              anatomia, devolvendo a melhor versão de quem você é.
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brownish mt-10 rounded-2xl cursor-pointer text-surface px-8 py-4 font-sans text-sm tracking-widest uppercase hover:bg-[#54463f] transition-colors inline-block"
          >
            Agendar Consulta
          </a>
        </Reveal>
      </div>
    </section>
  );
}

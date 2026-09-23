import { Reveal } from "./Reveal";
import hero from "../assets/hero.webp";

export function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de agendar uma avaliação com a Dra. Anelise!",
  );
  const whatsappNumber = "5541999434737";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section
      id="inicio"
      className="relative h-screen min-h-150 md:min-h-200 w-full bg-ink overflow-hidden flex items-end px-6 md:px-8 pb-12 md:pb-16"
    >
      {/* 
        CORREÇÃO DA IMAGEM: 
        No mobile (padrão), usamos object-[75%_top] para focar mais na direita da imagem. 
        No desktop (md:), voltamos para object-top. 
        Dica: Se ela ainda estiver um pouco cortada, mude o 75% para 85% ou right.
      */}
      <img
        src={hero}
        alt="Dra Anelise"
        className="absolute inset-0 w-full h-full object-cover object-[75%_top] md:object-top opacity-60"
      />

      {/* Escureci um pouco mais a base no mobile para o texto ficar 100% legível */}
      <div className="absolute inset-0 bg-linear-to-t from-ink/95 via-ink/40 to-transparent md:from-ink/80 md:via-ink/20"></div>

      <div className="relative z-10 max-w-5xl w-full">
        <Reveal delay={100}>
          <div className="font-mono text-[10px] md:text-xs text-surface/70 uppercase tracking-widest mb-4 md:mb-6">
            Curitiba, PR — Instituto DermaSoul
          </div>
        </Reveal>

        <Reveal delay={200}>
          {/* Fonte reduzida no mobile (text-5xl) para evitar quebra excessiva */}
          <h1 className="font-serif text-5xl md:text-8xl text-surface leading-[1.05] tracking-[-0.03em] mb-6 md:mb-8">
            Refinamento facial <br className="hidden md:block" /> estruturado na
            ciência.
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            {/* Texto de apoio levemente menor no mobile */}
            <p className="font-sans text-base md:text-lg text-surface/80 max-w-md font-light leading-relaxed">
              Protocolos injetáveis e tecnologia de ponta para restauro da
              anatomia, devolvendo a melhor versão de quem você é.
            </p>
          </div>

          {/* Botão com largura total (w-full) no mobile para facilitar o clique */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brownish mt-8 md:mt-10 rounded-2xl cursor-pointer text-surface px-6 md:px-8 py-4 font-sans text-xs md:text-sm tracking-widest uppercase hover:bg-[#54463f] transition-colors inline-block text-center w-full md:w-auto"
          >
            Agendar Consulta
          </a>
        </Reveal>
      </div>
    </section>
  );
}

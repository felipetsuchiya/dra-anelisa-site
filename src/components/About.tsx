import { Reveal } from "./Reveal";
import Perfil from "../assets/perfil.webp";

export function About() {
  return (
    <section id="sobre" className="py-32 px-8 bg-surface">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        {/* Imagem Editorial (Esquerda) */}
        <div className="w-full md:w-5/12 relative">
          <Reveal>
            <div className="relative aspect-3/4 w-full bg-canvas">
              <img
                src={Perfil}
                alt="Dra. Anelisa Patron"
                className="w-full h-full object-cover border border-border"
              />
              {/* Micro-UI Detail (Faux interface element) */}
              <div className="absolute -bottom-6 -right-6 bg-surface border border-border px-6 py-3 font-mono text-[10px] text-ink uppercase tracking-widest shadow-[0_2px_12px_rgba(0,0,0,0.02)] hidden md:block">
                Diretora Clínica _ DermaSoul
              </div>
            </div>
          </Reveal>
        </div>

        {/* Conteúdo Tipográfico (Direita) */}
        <div className="w-full md:w-7/12 flex flex-col justify-center">
          <Reveal delay={100}>
            <span className="font-mono text-xs text-ink-muted uppercase tracking-widest block mb-6">
              O Manifesto
            </span>
          </Reveal>

          <Reveal delay={200}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink tracking-tight mb-10 leading-[1.1]">
              Ciência e beleza para <br className="hidden lg:block" />
              elevar sua autoestima.
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col gap-6 font-sans text-lg text-ink-muted font-light leading-relaxed max-w-2xl">
              <p>
                Sou Anelisa Patron, Biomédica Esteta apaixonada pela área de
                estética e pelo impacto que ela pode ter na autoestima e
                bem-estar das pessoas. Minha jornada começou com o sonho de
                cursar medicina, mas ao longo do caminho, descobri minha
                verdadeira vocação em cuidar da pele e da alma.
              </p>
              <p>
                Acredito na naturalidade e no respeito à individualidade.
                Prefiro realçar a beleza que já existe, sem modificar a
                fisionomia, e sempre priorizo a segurança e o bem-estar em todos
                os procedimentos. Na DermaSoul, não cuido apenas da pele, mas
                também da alma, proporcionando uma experiência completa de
                autoamor e autoconfiança.
              </p>
            </div>
          </Reveal>

          {/* Assinatura ou elemento visual de encerramento da seção */}
          <Reveal delay={400}>
            <div className="mt-12 pt-8 border-t border-border inline-block">
              <span className="font-serif text-3xl italic text-ink">
                Dra. Anelisa Patron
              </span>
              <span className="block font-mono text-[10px] text-ink-muted uppercase tracking-widest mt-2">
                CRBM 6 4304
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

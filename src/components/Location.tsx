import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section
      id="localizacao"
      className="py-32 px-8 bg-canvas border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-border pb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-ink tracking-tight">
              Nosso Endereço.
            </h2>
            <span className="font-mono text-xs text-ink-muted uppercase tracking-widest">
              Curitiba, Paraná
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Informações Textuais */}
          <Reveal delay={100} className="w-full md:w-1/3 flex flex-col gap-10">
            <div>
              <h3 className="font-mono text-[10px] text-ink-muted uppercase tracking-widest mb-4">
                Clínica
              </h3>
              <p className="font-sans text-lg text-ink font-light leading-relaxed">
                Instituto Derma Soul <br />
                Av. República Argentina, 2275 <br />
                12º andar, sala 1215 <br />
                Água Verde, Curitiba - PR
              </p>
            </div>

            <div>
              <h3 className="font-mono text-[10px] text-ink-muted uppercase tracking-widest mb-4">
                Contato
              </h3>
              <p className="font-sans text-base text-ink font-light leading-relaxed">
                Agendamentos via WhatsApp <br />
                <span className="font-mono text-sm mt-1 block">
                  (41) 99999-9999
                </span>
              </p>
            </div>

            <a
              href="https://www.google.com/maps/place/Instituto+DermaSoul+-+Cl%C3%ADnica+de+Est%C3%A9tica+em+Curitiba+%7C+Dra+Anelisa+Patron/@-25.4665719,-49.294521,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce3fe264cc5b7:0x9a25415f1a959e57!8m2!3d-25.4665768!4d-49.2919461!16s%2Fg%2F11vjchf1v5?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3Dhttps://maps.app.goo.gl/gFV5X7nSKuc8fvUx8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 border border-ink text-ink px-8 py-4 font-sans text-xs tracking-widest uppercase hover:bg-ink hover:text-surface transition-colors inline-block text-center self-start"
            >
              Abrir no Google Maps
            </a>
          </Reveal>

          {/* Faux-OS Window para o Mapa */}
          <Reveal delay={200} className="w-full md:w-2/3">
            <div className="bg-surface border border-border rounded-sm overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              {/* Faux-OS Top Bar */}
              <div className="h-10 bg-canvas border-b border-border flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                <div className="ml-4 font-mono text-[10px] text-ink-muted uppercase tracking-widest">
                  Map_View // Derma_Soul_CWB
                </div>
              </div>

              {/* Iframe Container com Filtro Grayscale */}
              <div className="w-full aspect-video md:aspect-21/9 bg-surface relative  opacity-90 transition-all duration-700">
                {/* Substitua o "src" abaixo pelo link embed exato do seu Google Maps se preferir */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.827989938837!2d-49.294521023719036!3d-25.466571939886733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3fe264cc5b7%3A0x9a25415f1a959e57!2sInstituto%20DermaSoul%20-%20Cl%C3%ADnica%20de%20Est%C3%A9tica%20em%20Curitiba%20%7C%20Dra%20Anelisa%20Patron!5e0!3m2!1spt-BR!2sbr!4v1716300000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Mapa Localização Instituto DermaSoul"
                ></iframe>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

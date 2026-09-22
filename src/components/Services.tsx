import { Reveal } from "./Reveal";
import servicesPic from "../assets/services.jpg";

const services = [
  {
    title: "Harmonização Facial",
    description:
      "Um conjunto de procedimentos estéticos para equilibrar e realçar os traços faciais com naturalidade.",
    icon: (
      <svg
        className="w-10 h-10 mb-4 text-[#8C6B52]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    title: "Tratamentos Faciais",
    description:
      "Abordagens estéticas visando melhorar a saúde, textura e a qualidade dérmica da pele do rosto.",
    icon: (
      <svg
        className="w-10 h-10 mb-4 text-[#8C6B52]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
  {
    title: "Tecnologia Avançada",
    description:
      "Tecnologias de ponta, como o Endolaser, para estimular colágeno e promover retração tecidual.",
    icon: (
      <svg
        className="w-10 h-10 mb-4 text-[#8C6B52]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Harmonização Corporal",
    description:
      "Procedimentos voltados para proporções equilibradas e contornos harmônicos no corpo.",
    icon: (
      <svg
        className="w-10 h-10 mb-4 text-[#8C6B52]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="tratamentos" className="relative pt-24 pb-24 bg-surface">
      {/* Background com Imagem da Doutora */}
      <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[70vh] bg-canvas overflow-hidden">
        <img
          src={servicesPic}
          alt="Dra. Anelise Patron"
          className="w-full h-full object-cover object-top opacity-90"
        />
        {/* Gradiente ajustado: começa apenas a partir de 60% da imagem, ficando mais suave e baixo */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent from-80% to-surface"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-[40vh] md:pt-[50vh]">
        <Reveal>
          {/* Grid de 4 Colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-8 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
              >
                {service.icon}
                <h3 className="font-serif text-xl text-[#6B4C3A] mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-ink-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

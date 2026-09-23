import { Reveal } from "./Reveal";

const reviews = [
  {
    name: "Mariana S.",
    quote:
      "A Dra. Anelisa é excepcional. Fiz o procedimento e o resultado foi incrivelmente natural. Ela tem um cuidado único em não transformar o nosso rosto, mas sim realçar o que temos de melhor.",
  },
  {
    name: "Camila R.",
    quote:
      "O nome DermaSoul faz todo o sentido. O atendimento vai muito além da estética, é um cuidado real com a nossa autoestima. O ambiente é impecável e eu confio de olhos fechados.",
  },
  {
    name: "Juliana M.",
    quote:
      "Atendimento de altíssimo nível em Curitiba. Me senti super segura com a explicação detalhada de toda a anatomia antes do procedimento. O resultado ficou elegante e sutil.",
  },
  {
    name: "Beatriz T.",
    quote:
      "Profissionalismo impecável. Buscava um contorno corporal mais definido, mas morria de medo de exageros. A Dra. entregou exatamente o que combinava com o meu corpo.",
  },
  {
    name: "Fernanda C.",
    quote:
      "Minha pele é outra! O protocolo focado em regeneração celular mudou o viço e a textura do meu rosto. A consulta é uma verdadeira aula sobre como cuidar da nossa pele.",
  },
  {
    name: "Luiza P.",
    quote:
      "Devolveu meu rosto descansado sem parecer que fiz algum procedimento invasivo. A mão da Dra. Anelisa é levíssima e a recuperação foi muito mais tranquila do que eu imaginava.",
  },
  {
    name: "Renata B.",
    quote:
      "A abordagem integrada que ela faz acelerou muito meus resultados. Tudo estruturado na ciência e focado na saúde de dentro para fora.",
  },
  {
    name: "Amanda V.",
    quote:
      "Clínica belíssima no Água Verde. A ética da Dra. Anelisa me conquistou, ela escutou todas as minhas inseguranças e montou um protocolo exclusivo. Elevou minha autoconfiança.",
  },
];

export function Testimonials() {
  // Duplicamos o array para criar a ilusão de loop infinito sem quebras visuais
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="depoimentos" className="py-32 bg-surface overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 mb-16">
        {/* CORREÇÃO: items-start no mobile e md:items-end no desktop */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-ink tracking-tight">
              Depoimentos
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col items-start md:items-end mt-4 md:mt-0">
              <div className="font-sans text-xs text-ink-muted uppercase tracking-widest flex flex-row space-x-5 mb-1">
                <span>5.0</span>
                <div className="flex gap-1 items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-ink"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="font-sans text-xs text-ink-muted uppercase tracking-widest">
                Avaliações de Pacientes
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Ticker / Infinite Marquee */}
      <Reveal delay={200} className="w-full relative">
        {/* As duas divs de gradiente branco que ficavam aqui foram removidas */}

        <div className="flex w-max animate-marquee pause-on-hover">
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="w-[320px] md:w-105 shrink-0 border border-border p-8 mx-3 flex flex-col justify-between bg-canvas cursor-default"
            >
              {/* Ícone de Aspas Minimalista */}
              <svg
                className="w-5 h-5 text-border mb-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="font-serif text-lg text-ink leading-relaxed mb-10">
                "{review.quote}"
              </p>

              <div className="border-t border-border pt-6 mt-auto flex justify-between items-center">
                <span className="font-sans text-sm text-ink font-medium">
                  {review.name}
                </span>

                {/* 5 Estrelas Vetoriais Limpas */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-ink"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

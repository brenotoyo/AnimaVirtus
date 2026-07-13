// src/components/home/AboutDirectorSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function AboutDirectorSection() {
  return (
    <section className="bg-anima-navy px-4 py-16 md:px-8 md:py-24 lg:px-32">
      {/* Contúdo */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
        {/* Imagem com Detalhe Decorativo */}
        <div className="relative w-full lg:w-1/2">
          {/* Quadrado Decorativo */}
          <div className="absolute -left-2 -top-2 z-0 h-32 w-32 border-2 border-anima-coral/40 md:-left-4 md:-top-4 md:h-40 md:w-40 lg:-left-4 lg:-top-4" />
          {/* Container da Imagem */}
          <div className="relative z-10 aspect-[2/2] overflow-hidden md:aspect-[7/6] lg:aspect-[5/6]">
            <Image
              src="/images/ballet/ester.png"
              alt="Ester Rufino - Diretora Artística"
              fill
              className="object-cover"
              quality={90}
            />
          </div>
        </div>

        {/* Descrição */}
        <div className="w-full lg:w-1/2">
          <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-anima-coral">
            DIRETORA ARTÍSTICA
          </h4>
          <h2 className="mb-6 font-serif text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
            Ester Rufino
          </h2>
          <div className="space-y-6 text-white/80">
            <p className="text-lg leading-relaxed">
              Bailarina formada pela{' '}
              <strong className="font-semibold text-white">
                Royal Academy of Dance
              </strong>{' '}
              de Londres, Ester dedicou mais de 10 anos à dança clássica,
              atuando em companhias nacionais e internacionais.
            </p>

            <p className="leading-relaxed">
              Em 2004, fundou o{' '}
              <strong className="font-semibold text-white">
                Ânima Virtus Conservatório
              </strong>{' '}
              com a visão de criar um espaço onde técnica rigorosa e
              sensibilidade artística caminham juntas. Sua metodologia de ensino
              une a tradição do ballet clássico com uma abordagem humanizada e
              acolhedora.
            </p>

            <p className="leading-relaxed">
              Acredito que a dança transforma não apenas o corpo, mas a alma.
              Cada aluno que passa por aqui leva consigo muito mais do que
              passos — leva confiança, disciplina e a capacidade de se expressar
              através da arte.
            </p>
          </div>

          {/* Botão conheça as dançarinas */}
          <div className="mt-8">
            <Link
              href="/sobre"
              className="inline-flex items-center border-b-2 border-anima-coral/70 py-1 font-medium text-white transition-all hover:border-anima-coral hover:text-anima-coral hover:shadow-lg"
            >
              Conheça o ambiente e as dançarinas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/home/IntroSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function IntroSection() {
  return (
    <section className="bg-anima-navy px-4 py-16 md:px-8 md:py-24 lg:px-32">
      {/* Container principal  */}
      <div className="mx-auto flex max-w-full flex-col items-center justify-center text-center md:max-w-[42rem]">
        <h4 className="mb-4 text-base uppercase tracking-widest text-anima-coral">
          CONSERVATÓRIO DE DANÇA
        </h4>
        {/* Título */}
        <h2 className="mb-6 font-serif text-4xl font-light text-white sm:text-5xl md:text-6xl lg:text-7xl">
          A arte de dançar com{' '}
          <span className="font-script text-anima-coral">alma</span> e virtude
        </h2>
        <p className="mb-12 leading-relaxed text-white/70">
          Um espaço dedicado ao ballet clássico e à dança, onde técnica,
          sensibilidade e expressão se encontram — para crianças e adultos.
        </p>
        {/* Linha divisória dos textos pros botões */}
        <div className="mb-16 flex items-center justify-center">
          <div className="h-px w-24 bg-anima-coral" />
          <div className="mx-4 h-2 w-2 rotate-45 bg-anima-coral" />
          <div className="h-px w-24 bg-anima-coral" />
        </div>
        {/* Botão conheça nossa história */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Link
            href="/sobre"
            className="group inline-flex items-center gap-2 rounded-full bg-anima-coral px-8 py-4 font-medium text-white transition-all hover:bg-anima-coral/90 hover:shadow-lg"
          >
            Conheça Nossa História
            <Image
              src="/images/icons/arrow.svg"
              alt="Bailarina em tutu"
              width={20}
              height={20}
              className="transition-transform group-hover:translate-x-2"
            />
          </Link>
          {/* Link descubra as modalidades */}
          <Link
            href="/modalidades"
            className="group inline-flex items-center border-b-2 border-white/40 pb-1 text-sm font-medium uppercase tracking-wider text-white transition-all hover:border-anima-coral hover:text-anima-coral"
          >
            Descubra as Modalidades
          </Link>
        </div>
      </div>
    </section>
  );
}

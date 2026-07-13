// src/components/home/FinalSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function FinalSection() {
  return (
    <section className="overflow-hidden bg-white px-4 py-12 md:px-8 md:py-16 lg:px-32 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl md:rounded-3xl">
        <div className="absolute inset-0">
          {/* Imagem de Fundo */}
          <Image
            src="/images/ballet/bailarinas.jpg"
            alt="Bailarinas em ensaio"
            fill
            className="object-cover"
            quality={85}
          />
        </div>
        {/* Overlay Escuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-anima-navy/75 via-anima-navy/70 to-anima-navy/75" />
        {/* Conteúdo */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center md:px-8 md:py-24 lg:py-32">
          <h2 className="mb-4 font-serif text-2xl font-semibold leading-tight text-white md:mb-6 md:text-3xl lg:text-5xl">
            Sua jornada na dança começa aqui
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-xs leading-relaxed text-white/90 md:mb-8 md:text-sm lg:mb-10 lg:text-base">
            Agende uma aula experimental e descubra o prazer de se mover com
            intenção.
          </p>
          {/* Botão */}
          <Link
            href="/contato"
            className="group inline-flex items-center gap-2 rounded-full bg-anima-coral px-6 py-2.5 text-xs font-medium uppercase tracking-wide text-white transition-all hover:bg-anima-coral/90 hover:shadow-2xl md:px-8 md:py-3 md:text-sm lg:px-10"
          >
            Agende sua Aula Experimental
          </Link>
        </div>
      </div>
    </section>
  );
}

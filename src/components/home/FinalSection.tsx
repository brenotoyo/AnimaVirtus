// src/components/home/FinalSection.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function FinalSection() {
  return (
    <section className="overflow-hidden bg-white px-8 py-24 md:px-16 lg:px-32">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
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
        <div className="relative z-10 mx-auto max-w-4xl py-32 text-center">
          <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
            Sua jornada na dança começa aqui
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-white/90 md:text-base">
            Agende uma aula experimental e descubra o prazer de se mover com
            intenção.
          </p>
          {/* Botão */}
          <Link
            href="/contato"
            className="group inline-flex items-center gap-2 rounded-full bg-anima-coral px-10 py-3 text-sm font-medium uppercase tracking-wide text-white transition-all hover:bg-anima-coral/90 hover:shadow-2xl"
          >
            Agende sua Aula Experimental
          </Link>
        </div>
      </div>
    </section>
  );
}

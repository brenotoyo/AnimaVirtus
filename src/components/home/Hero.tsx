// src/components/home/Hero.tsx
import Image from 'next/image';
import Logo from '../ui/Logo';
import Navigation from '../layout/Navigation';
import Link from 'next/link';
import MobileMenu from '../layout/MobileMenu';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Imagem de Fundo */}
      <Image
        src="/images/ballet/hero-bailarina.png"
        alt="Bailarina em tutu"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Overlay Gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-anima-navy/40 via-anima-navy/20 to-anima-navy/40" />

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header Transparente */}
        <header className="px-4 py-4 md:px-8 md:py-6 lg:px-16 lg:py-11">
          <div className="relative flex items-center justify-between">
            {/* ESQUERDA: Navegação + Menu */}
            <div>
              <div className="hidden md:block">
                <Navigation variant="transparent" />
              </div>
              <MobileMenu />
            </div>

            {/* CENTRO: Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="scale-75 md:scale-100">
                <Logo variant="monograma" className="drop-shadow-lg" />
              </div>
            </div>

            {/* DIREITA: Botão Agendar */}
            <div className="ml-auto md:ml-0">
              <Link
                href="/contato"
                className="inline-flex items-center rounded-full border-none bg-transparent px-3 py-1 text-xs font-medium text-white transition-all hover:text-anima-coral/80 md:px-4 md:text-sm"
              >
                Agendar Aula
              </Link>
            </div>
          </div>
        </header>

        {/* Conteúdo Central */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 md:px-8">
          {/* Texto acima */}
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.2em] text-white drop-shadow-lg md:mb-8 md:text-sm md:tracking-[0.3em]">
            A PRÁTICA LEVA A PERFEIÇÃO
          </p>
          {/* Tipografia BALLET */}
          <h1 className="font-serif text-[4rem] font-light leading-none tracking-wider text-white drop-shadow-2xl sm:text-[6rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem]">
            BALLET
          </h1>
          {/* Script "escola" */}
          <p className="-mt-6 font-script text-3xl text-anima-coral drop-shadow-lg sm:-mt-10 sm:text-5xl md:-mt-16 md:text-7xl">
            escola
          </p>
          {/* Faixa de sapatilhas */}
          <div className="relative mt-4 h-12 w-full max-w-[18rem] sm:h-16 sm:max-w-[24rem] md:mt-8 md:h-20 md:max-w-[30rem] lg:h-24 lg:max-w-[36rem] xl:max-w-[42rem]">
            <Image
              src="/images/ballet/sapatilhas.png"
              fill
              className="object-cover opacity-80 drop-shadow-lg"
              alt="Faixa de sapatilhas"
            />
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="flex justify-center gap-3 px-4 pb-6 text-xs text-white drop-shadow-lg md:justify-end md:gap-4 md:px-8 md:pb-8 md:text-sm">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-anima-coral"
          >
            Facebook
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-anima-coral"
          >
            Instagram
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-anima-coral"
          >
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}

// src/components/layout/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-anima-navyB px-6 py-8 text-white md:px-16 lg:px-24">
      <div className="max-w-9xl mx-auto">
        {/* Grid Principal */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5 lg:gap-8">
          {/* Coluna 1 - Logo e Descrição */}
          <div className="col-span-2 flex flex-col items-center text-center md:items-start md:text-left">
            <Link href="/" className="mb-6">
              <Image
                src="/images/logos/logo-horizontal-semfundoc.png"
                alt="Ânima Virtus"
                width={200}
                height={60}
                className="h-auto w-48 md:w-64"
              />
            </Link>
            <p className="max-w-md leading-relaxed text-white/70">
              Conservatório de dança dedicado a formar bailarinos com técnica
              clássica rigorosa e sensibilidade artística, em um ambiente
              acolhedor e inspirador.
            </p>
          </div>

          {/* Coluna 2 - Navegação */}
          <div className="col-span-1 text-center md:text-left">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-anima-coral md:text-sm">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-3 text-xs md:text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white/70 transition-colors hover:text-anima-coral"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-white/70 transition-colors hover:text-anima-coral"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/modalidades"
                  className="text-white/70 transition-colors hover:text-anima-coral"
                >
                  Modalidades
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-white/70 transition-colors hover:text-anima-coral"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div className="col-span-1 text-center md:text-left">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-anima-coral md:text-sm">
              Contato
            </h4>
            <ul className="space-y-1 md:space-y-2">
              <li className="flex items-start justify-center gap-2 md:justify-start md:gap-3">
                <Image
                  src="/images/icons/location.svg"
                  alt="Localização"
                  width={16}
                  height={16}
                  quality={85}
                  className="mt-0.5 shrink-0 md:h-5 md:w-5"
                />
                <span className="break-words text-xs leading-tight text-white/70 md:text-sm md:leading-relaxed">
                  Rua das Bailarinas, 123 Centro, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center justify-center gap-2 md:justify-start md:gap-3">
                <Image
                  src="/images/icons/phone.svg"
                  alt="Telefone"
                  width={16}
                  height={16}
                  quality={85}
                  className="shrink-0 md:h-5 md:w-5"
                />
                <span className="break-words text-xs text-white/70 md:text-sm">
                  (11) 90101-1010
                </span>
              </li>
              <li className="flex items-start justify-center gap-2 md:justify-start md:gap-3">
                <Image
                  src="/images/icons/envelope.svg"
                  alt="Email"
                  width={16}
                  height={16}
                  quality={85}
                  className="mt-0.5 shrink-0 md:h-5 md:w-5"
                />
                <span className="break-all text-xs leading-tight text-white/70 md:text-sm md:leading-relaxed">
                  contato@animavirtus.com.br
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="col-span-2 flex flex-col items-center md:col-span-1">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-anima-coral md:text-sm">
              SIGA-NOS
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-anima-coral"
                aria-label="Instagram"
              >
                <Image
                  src="/images/icons/instagram.svg"
                  alt="Instagram"
                  width={27}
                  height={27}
                  quality={85}
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-anima-coral"
                aria-label="Facebook"
              >
                <Image
                  src="/images/icons/facebook.svg"
                  alt="Facebook"
                  width={27}
                  height={27}
                  quality={85}
                />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-anima-coral"
                aria-label="YouTube"
              >
                <Image
                  src="/images/icons/youtube.svg"
                  alt="YouTube"
                  width={27}
                  height={27}
                  quality={85}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="my-10 border-t border-white/10" />

        {/* Copyright */}
        <div className="flex flex-col items-center gap-4 text-center text-xs text-white/50 md:flex-row md:justify-between md:text-left lg:text-sm">
          <p>
            © 2026 Ânima Virtus Conservatório de Dança. Todos os direitos
            reservados.
          </p>
          <div className="flex flex-row gap-7 md:gap-6">
            <Link
              href="/politica-privacidade"
              className="transition-colors hover:text-anima-coral"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-uso"
              className="transition-colors hover:text-anima-coral"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

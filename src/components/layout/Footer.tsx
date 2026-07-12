// src/components/layout/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-anima-navyB px-6 py-8 text-white md:px-16 lg:px-24">
      <div className="max-w-9xl mx-auto">
        {/* Grid Principal */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {/* Coluna 1 - Logo e Descrição */}
          <div className="lg:col-span-2">
            <Link href="/" className="">
              <Image
                src="/images/logos/Logo-Horizontal-SemFundoC.png"
                alt="Ânima Virtus"
                width={200}
                height={60}
                className="mb-6 h-auto w-64"
              />
            </Link>
            <p className="max-w-md leading-relaxed text-white/70">
              Conservatório de dança dedicado a formar bailarinos com técnica
              clássica rigorosa e sensibilidade artística, em um ambiente
              acolhedor e inspirador.
            </p>
          </div>
          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-anima-coral">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2">
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
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-anima-coral">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Image
                  src="/images/icons/location.svg"
                  alt="Bailarinas em ensaio"
                  width={20}
                  height={20}
                  quality={85}
                />
                <span className="text-sm text-white/70">
                  Rua das Bailarinas, 123
                  <br />
                  Centro, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/images/icons/phone.svg"
                  alt="Bailarinas em ensaio"
                  width={20}
                  height={20}
                  quality={85}
                />
                <span className="text-sm text-white/70">(11) 90101-1010</span>
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/images/icons/envelope.svg"
                  alt="Bailarinas em ensaio"
                  width={20}
                  height={20}
                  quality={85}
                />
                <span className="text-sm text-white/70">
                  contato@animavirtus.com.br
                </span>
              </li>
            </ul>
          </div>
          {/* Redes Sociais */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-anima-coral">
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
                  alt="Bailarinas em ensaio"
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
                  alt="Bailarinas em ensaio"
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
                  alt="Bailarinas em ensaio"
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
        <div className="flex items-center justify-between gap-4 text-center text-sm text-white/50 md:flex-row md:text-left">
          <p>
            © 2026 Ânima Virtus Conservatório de Dança. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
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

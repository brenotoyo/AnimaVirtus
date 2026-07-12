// src/components/layout/Header.tsx
import Logo from '../ui/Logo';
import Navigation from './Navigation';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b-2 border-white/5 bg-anima-navy px-16 py-11 md:px-16">
      <div className="flex items-center justify-between">
        {/* Navegação à Esquerda */}
        <div className="flex items-center justify-center">
          <Navigation variant="transparent" />
        </div>
        {/* Logo ao Centro */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Logo variant="monograma" className="drop-shadow-lg" />
          </Link>
        </div>
        {/* Botão Agendar Aula à Direita */}
        <div>
          <Link
            href="/contato"
            className="inline-flex items-center rounded-full border-none bg-anima-coral px-4 py-1 text-sm font-medium text-white transition-all hover:bg-anima-coral/80 hover:shadow-lg"
          >
            Agendar Aula
          </Link>
        </div>
      </div>
    </header>
  );
}

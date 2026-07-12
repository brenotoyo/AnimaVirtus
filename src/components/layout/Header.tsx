// src/components/layout/Header.tsx
import Logo from '../ui/Logo';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b-2 border-white/5 bg-anima-navy px-4 py-4 md:px-8 md:py-6 lg:px-16 lg:py-11">
      <div className="relative flex items-center justify-between">
        {/* Navegação */}
        <div>
          <div className="hidden md:flex">
            {/* Navegação (hidden em mobile) */}
            <Navigation variant="transparent" />
          </div>
          {/* Menu Hamburguer para mobile */}
          <MobileMenu layout="horizontal" />
        </div>
        {/* Link com  Logo do site */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <div className="scale-75 md:scale-100">
              <Logo variant="monograma" className="drop-shadow-lg" />
            </div>
          </Link>
        </div>
        {/* Link agendar aula */}
        <div className="ml-auto md:ml-0">
          <Link
            href="/contato"
            className="inline-flex items-center rounded-full border-none bg-anima-coral px-3 py-1 text-xs font-medium text-white transition-all hover:bg-anima-coral/80 hover:shadow-lg md:px-4 md:text-sm"
          >
            Agendar Aula
          </Link>
        </div>
      </div>
    </header>
  );
}

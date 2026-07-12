// src/components/layout/MobileMenu.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/modalidades', label: 'Modalidades' },
  { href: '/contato', label: 'Contato' },
];

interface MobileMenuProps {
  layout?: 'vertical' | 'horizontal';
}

export default function MobileMenu({ layout = 'vertical' }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Estilos conforme o layout
  const navClasses = layout === 'horizontal' ? 'px-4 py-3' : '';

  const ulClasses =
    layout === 'horizontal'
      ? 'flex flex-row items-center gap-4 whitespace-nowrap'
      : 'flex flex-col';

  const linkClasses =
    layout === 'horizontal'
      ? 'text-white block text-xs font-medium uppercase tracking-wider transition-colors hover:text-anima-coral'
      : 'text-white block px-2 py-1 text-sm font-medium uppercase tracking-wider transition-colors hover:text-anima-coral';

  return (
    <div className="relative md:hidden">
      {/* Botão Hambúrguer */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Abrir menu"
        aria-expanded={isOpen}
        className="flex h-10 w-10 items-center justify-center"
      >
        <Image src="/images/icons/bars.svg" alt="Menu" width={28} height={28} />
      </button>

      {/* Dropdown de Opções */}
      {isOpen && (
        <nav className={`absolute left-0 top-full z-50 mt-2 ${navClasses}`}>
          <ul className={ulClasses}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={linkClasses}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}

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

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
        <nav className="absolute left-0 top-full z-50 w-52 rounded-xl">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/85 transition-colors hover:text-anima-coral"
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

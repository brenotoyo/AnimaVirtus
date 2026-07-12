// src/components/layout/Navigation.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Modalidades', href: '/modalidades' },
  { label: 'Contato', href: '/contato' },
];

interface NavigationProps {
  variant?: 'transparent' | 'dark';
}

export default function Navigation({
  variant = 'transparent',
}: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-8">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        const getTextColor = () => {
          if (isActive) return 'text-anima-coral'; // Ativo = sempre coral
          if (variant === 'transparent') return 'text-white'; // Transparente = branco
          return 'text-anima-navy'; // Sólido = navy
        };

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`text-w text-sm font-medium drop-shadow-lg transition-colors ${getTextColor()} ${variant === 'transparent' ? 'drop-shadow-lg' : ''} ${!isActive ? 'hover:text-anima-coral' : ''}`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

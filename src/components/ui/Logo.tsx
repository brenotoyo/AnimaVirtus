// src/components/ui/Logo.tsx
import Image from 'next/image';

interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'monograma';
  className?: string;
}

export default function Logo({
  variant = 'horizontal',
  className = '',
}: LogoProps) {
  const logos = {
    horizontal: '/images/logos/logo-horizontal-semfundoc.png',
    vertical: '/images/logos/logo-vertical-semfundo.png',
    monograma: '/images/logos/monograma-semfundo.png',
  };

  return (
    <div className={`relative block ${className}`}>
      <Image
        src={logos[variant]}
        alt="Ânima Virtus Conservatório de Dança"
        width={variant === 'horizontal' ? 200 : 80}
        height={variant === 'horizontal' ? 60 : 80}
        className="object-contain"
        priority
      />
    </div>
  );
}

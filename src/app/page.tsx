// src/app/page.tsx
import ModalidadesSection from '@/components/home/ModalidadesSection';
import Hero from '../components/home/Hero';
import IntroSection from '../components/home/IntroSection';
import AboutDirectorSection from '@/components/home/AboutDirectorSection';
import FinalSection from '@/components/home/FinalSection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <IntroSection />
      <ModalidadesSection />
      <AboutDirectorSection />
      <FinalSection />
    </main>
  );
}

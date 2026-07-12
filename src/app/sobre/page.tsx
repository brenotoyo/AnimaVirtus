// src/app/sobre/page.tsx
import Header from '@/components/layout/Header';
import ContactSection from '@/components/sobre/ContactSection';
import InstitutionSection from '@/components/sobre/InstitutionSection';
import PhraseSection from '@/components/sobre/PhraseSection';
import ProfessorSection from '@/components/sobre/ProfessorSection';

export const metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a história do Ânima Virtus Conservatório de Dança',
};

export default function SobrePage() {
  return (
    <main>
      <Header />
      <InstitutionSection />
      <PhraseSection />
      <ProfessorSection />
      <ContactSection />
    </main>
  );
}

// src/app/sobre/page.tsx
import Header from '@/components/layout/Header';
import InitialSection from '@/components/modalidades/InitialSection';
import ModalidadesSection from '../../components/modalidades/modalidadesSection';
import PhraseSection from '@/components/sobre/PhraseSection';

export const metadata = {
  title: 'Modalidades',
  description: 'Conheça a história do Ânima Virtus Conservatório de Dança',
};

export default function SobrePage() {
  return (
    <main>
      <Header />
      <InitialSection />
      <ModalidadesSection />
      <PhraseSection />
    </main>
  );
}

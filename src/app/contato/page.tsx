// src/app/sobre/page.tsx
import Header from '@/components/layout/Header';
import FormSection from '@/components/contato/FormSection';
import MapSection from '@/components/contato/MapSection';
import WhatsAppSection from '@/components/contato/WhatsAppSection';

export const metadata = {
  title: 'Contato',
  description: 'Conheça a história do Ânima Virtus Conservatório de Dança',
};

export default function ContatoPage() {
  return (
    <main>
      <Header />
      <FormSection />
      <MapSection />
      <WhatsAppSection />
    </main>
  );
}

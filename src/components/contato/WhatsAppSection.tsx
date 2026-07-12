// src/components/contato/WhatsAppSection.tsx
import Image from 'next/image';
export default function WhatsAppSection() {
  // Definindo o número e mensagem aqui
  const numeroWhatsApp = '5511954631572';
  const mensagem = `Olá! Vim pelo site e gostaria de mais informações sobre as aulas de ballet.`;

  // Codifica a mensagem para URL
  const mensagemCodificada = encodeURIComponent(mensagem);
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

  return (
    <section className="bg-anima-navy px-8 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <h3 className="text-5xl text-white">Ainda com dúvidas?</h3>
        <p className="my-10 w-2/4 leading-relaxed text-white/70">
          Estamos prontos para ajudar com as matrículas, valores e horários pelo
          WhatsApp, contate-nos já.
        </p>
        {/* Botão WhatsApp */}
        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-anima-coral px-8 py-4 font-medium text-white transition-all hover:bg-anima-coral/80 hover:shadow-xl"
        >
          <Image
            src="/images/icons/whatsapp.svg"
            alt="Ânima Virtus"
            width={35}
            height={35}
            quality={85}
          />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}

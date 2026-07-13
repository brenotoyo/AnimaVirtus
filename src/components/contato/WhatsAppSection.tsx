// src/components/contato/WhatsAppSection.tsx
import Image from 'next/image';
export default function WhatsAppSection() {
  // Definindo o número e mensagem aqui
  const numeroWhatsApp = '5511951652080';
  const mensagem = `Olá! Vim pelo site e gostaria de mais informações sobre as aulas de ballet.`;

  // Codifica a mensagem para URL
  const mensagemCodificada = encodeURIComponent(mensagem);
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

  return (
    <section className="bg-anima-navy px-4 py-16 md:px-8 md:py-24 lg:px-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center md:max-w-7xl">
        <h3 className="text-3xl text-white md:text-4xl lg:text-5xl">
          Ainda com dúvidas?
        </h3>
        <p className="my-6 w-auto text-sm leading-relaxed text-white/70 md:my-8 md:w-3/4 md:text-base lg:my-10 lg:w-2/4">
          Estamos prontos para ajudar com as matrículas, valores e horários pelo
          WhatsApp, contate-nos já.
        </p>
        {/* Botão WhatsApp */}
        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full bg-anima-coral px-4 py-2 text-sm font-medium text-white transition-all hover:bg-anima-coral/80 hover:shadow-xl md:gap-2 md:px-6 md:py-3 md:text-base lg:gap-3 lg:px-8 lg:py-4"
        >
          <Image
            src="/images/icons/whatsapp.svg"
            alt="Ânima Virtus"
            width={25}
            height={25}
            quality={85}
            className="md:h-[30px] md:w-[30px]"
          />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}

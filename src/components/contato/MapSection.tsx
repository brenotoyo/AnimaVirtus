// src/components/contato/MapSection.tsx
import Image from 'next/image';
export default function MapSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-24 lg:px-32">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <div className="mb-10 text-center">
          <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-anima-coral md:text-base md:text-sm">
            LOCALIZAÇÃO
          </h4>
          <h2 className="font-serif text-3xl font-semibold text-anima-navy md:text-4xl lg:text-5xl">
            Venha nos visitar
          </h2>
        </div>

        {/* Mapa */}
        <div className="h-[300px] overflow-hidden rounded-2xl shadow-xl md:h-[400px] lg:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976765365497!2d-46.6581844!3d-23.561414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
            width="100%"
            className="h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Ânima Virtus Conservatório"
          />
        </div>

        {/* Informações Abaixo do Mapa */}
        <div className="mt-10 grid grid-cols-3 gap-4 md:gap-8">
          {/* Como Chegar */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-anima-coral/10 md:h-12 md:w-12">
                <Image
                  src="/images/icons/map.svg"
                  alt="Representação de um mapa"
                  width={15}
                  height={15}
                  quality={85}
                  className="md:h-[20px] md:w-[20px]"
                />
              </div>
            </div>
            <h3 className="mb-1 text-sm font-semibold text-anima-navy md:mb-2 md:text-base">
              Como Chegar
            </h3>
            <p className="text-xs text-anima-navy/70 md:text-sm">
              Metrô linha verde (Estação Brigadeiro)
            </p>
          </div>

          {/* Estacionamento */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-anima-coral/10 md:h-12 md:w-12">
                <Image
                  src="/images/icons/double-arrows.svg"
                  alt="Representação de um estacionamento"
                  width={15}
                  height={15}
                  quality={85}
                  className="md:h-[20px] md:w-[20px]"
                />
              </div>
            </div>
            <h3 className="mb-1 text-sm font-semibold text-anima-navy md:mb-2 md:text-base">
              Estacionamento
            </h3>
            <p className="text-xs text-anima-navy/70 md:text-sm">
              Conveniado com estacionamento do prédio
            </p>
          </div>

          {/* Acessibilidade */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-anima-coral/10 md:h-12 md:w-12">
                <Image
                  src="/images/icons/check.svg"
                  alt="Representação de acessibilidade"
                  width={15}
                  height={15}
                  quality={85}
                  className="md:h-[20px] md:w-[20px]"
                />
              </div>
            </div>
            <h3 className="mb-1 text-sm font-semibold text-anima-navy md:mb-2 md:text-base">
              Acessibilidade
            </h3>
            <p className="text-xs text-anima-navy/70 md:text-sm">
              Prédio com rampa e elevador
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

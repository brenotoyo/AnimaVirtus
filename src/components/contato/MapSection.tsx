// src/components/contato/MapSection.tsx
import Image from 'next/image';
export default function MapSection() {
  return (
    <section className="bg-white px-8 py-16 md:px-16 lg:px-32">
      <div className="mx-auto max-w-7xl">
        {/* Título */}
        <div className="mb-10 text-center">
          <h4 className="mb-2 text-sm font-bold uppercase tracking-widest text-anima-coral">
            LOCALIZAÇÃO
          </h4>
          <h2 className="font-serif text-4xl font-semibold text-anima-navy md:text-5xl">
            Venha nos visitar
          </h2>
        </div>

        {/* Mapa */}
        <div className="overflow-hidden rounded-2xl shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976765365497!2d-46.6581844!3d-23.561414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Ânima Virtus Conservatório"
          />
        </div>

        {/* Informações Abaixo do Mapa */}
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {/* Como Chegar */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-anima-coral/10">
                <Image
                  src="/images/icons/map.svg"
                  alt="Representação de um mapa"
                  width={20}
                  height={20}
                  quality={85}
                />
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-anima-navy">Como Chegar</h3>
            <p className="text-sm text-anima-navy/70">
              Metrô linha verde (Estação Brigadeiro) a 5 minutos a pé
            </p>
          </div>

          {/* Estacionamento */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-anima-coral/10">
                <Image
                  src="/images/icons/double-arrows.svg"
                  alt="Representação de um estacionamento"
                  width={20}
                  height={20}
                  quality={85}
                />
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-anima-navy">
              Estacionamento
            </h3>
            <p className="text-sm text-anima-navy/70">
              Conveniado com estacionamento do prédio
            </p>
          </div>

          {/* Acessibilidade */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-anima-coral/10">
                <Image
                  src="/images/icons/check.svg"
                  alt="Representação de acessibilidade"
                  width={20}
                  height={20}
                  quality={85}
                />
              </div>
            </div>
            <h3 className="mb-2 font-semibold text-anima-navy">
              Acessibilidade
            </h3>
            <p className="text-sm text-anima-navy/70">
              Prédio com rampa e elevador
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

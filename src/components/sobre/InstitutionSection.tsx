// src/components/sobre/InstitutionSection.tsx
import Image from 'next/image';

export default function InstitutionSection() {
  return (
    <section className="bg-anima-navy px-4 py-16 md:px-8 md:py-24 lg:px-32">
      {/* Lista */}
      <ul>
        {/* Nossa história */}
        <li className="mx-auto mb-16 flex max-w-7xl flex-col items-center justify-center gap-8 md:mb-40 md:flex-row md:gap-12">
          {/* Imagem à Esquerda */}
          <div className="relative w-full md:w-1/2">
            {/* Quadrado Decorativo */}
            <div className="absolute -bottom-3 -right-3 z-0 h-24 w-24 border-2 border-anima-coral/80 md:-bottom-4 md:-right-4 lg:h-40 lg:w-40" />
            {/* Container da Imagem */}
            <div className="relative z-10 aspect-[6/4] overflow-hidden">
              <Image
                src="/images/Ballet/historia.jpg"
                alt="Conservatório Ânima Virtus"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
          {/* Texto à Direita */}
          <div className="w-full md:w-1/2">
            <h4 className="mb-4 text-base font-bold uppercase tracking-widest text-anima-coral">
              NOSSA HISTÓRIA
            </h4>
            <h2 className="mb-6 font-serif text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Ânima Virtus
            </h2>
            <div className="space-y-6 text-white/80">
              <p className="text-lg leading-relaxed">
                Fundado em 2026, o{' '}
                <strong className="font-semibold text-white">
                  Ânima Virtus
                </strong>{' '}
                nasceu do sonho de criar um espaço onde a técnica rigorosa do
                ballet clássico se encontra com a sensibilidade artística e o
                acolhimento humano.
              </p>
            </div>
          </div>
        </li>

        {/* Nosso espaço */}
        <li className="mx-auto mb-0 flex max-w-7xl flex-col items-center justify-center gap-8 md:mb-36 md:flex-row md:gap-12">
          {/* Texto à esquerda */}
          <div className="order-2 w-full md:order-1 md:w-1/2">
            <h4 className="mb-4 text-base font-bold uppercase tracking-widest text-anima-coral">
              NOSSO ESPAÇO
            </h4>
            <h2 className="mb-6 font-serif text-4xl font-semibold text-white md:text-5xl lg:text-6xl">
              Conservatório <br />
              de dança
            </h2>
            <div className="space-y-6 text-white/80">
              <p className="text-lg leading-relaxed">
                Aqui oferecemos tal tal tal, com muito blá blá blá, e tantos
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
                quos molestiae! Ab sint libero facilis. Inventore enim, saepe
                porro consequuntur corporis amet facere natus, asperiores unde
                labore consequatur nesciunt corrupti!
              </p>
            </div>
          </div>
          {/* Imagem à direita */}
          <div className="relative order-1 w-full md:order-2 md:w-1/2">
            {/* Quadrado Decorativo */}
            <div className="absolute -bottom-3 -left-3 z-0 h-24 w-24 border-2 border-anima-coral/80 md:h-40 md:w-40 lg:-bottom-4 lg:-left-4" />
            {/* Container da Imagem */}
            <div className="relative z-10 aspect-[6/4] overflow-hidden">
              <Image
                src="/images/Ballet/Aula.jpg"
                alt="Conservatório Ânima Virtus"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

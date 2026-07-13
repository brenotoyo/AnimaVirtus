// src/components/home/ModalidadesSection.tsx
import Link from 'next/link';
import Image from 'next/image';

const modalidades = [
  {
    id: 1,
    title: 'Ballet Infantil',
    description:
      'Introdução lúdica ao ballet clássico para crianças de 3 a 8 anos, desenvolvendo coordenação, musicalidade e expressão.',
    age: '3 a 8 anos',
    image: '/images/ballet/criancas.jpg',
    anchor: 'ballet-infantil',
  },
  {
    id: 2,
    title: 'Ballet Adulto',
    description:
      'Aulas para iniciantes e avançados adultos, focando em técnica, flexibilidade e bem-estar.',
    age: 'A partir de 17 anos',
    image: '/images/ballet/sapatilha.jpg',
    anchor: 'ballet-classico',
  },
  {
    id: 3,
    title: 'Dança Contemporânea',
    description:
      'Exploração criativa do movimento, combinando técnicas modernas com expressão artística.',
    age: 'Todas as idades',
    image: '/images/ballet/bailarina.jpg',
    anchor: 'ballet-contemporaneo',
  },
];

export default function ModalidadesSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-24 lg:px-32">
      <div className="mx-auto max-w-7xl">
        <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-anima-coral">
          O QUE OFERECEMOS
        </h4>
        <div className="mb-8 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-0">
          <h2 className="font-serif text-4xl font-semibold text-anima-navy md:text-5xl lg:text-6xl">
            Modalidades
          </h2>
          <div className="">
            <Link
              href="/modalidades"
              className="inline-flex border-b-2 border-anima-navy/40 pb-1 text-xs font-medium uppercase tracking-wider text-anima-navy transition-all hover:border-anima-coral hover:text-anima-coral md:text-sm"
            >
              Ver Todas as Modalidades
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
          {modalidades.map((modalidade) => (
            <Link
              key={modalidade.id}
              href={`/modalidades#${modalidade.anchor}`}
              className="group block cursor-pointer overflow-hidden rounded-2xl bg-anima-pink transition-all hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden bg-anima-gray">
                <Image
                  src={modalidade.image}
                  alt={modalidade.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-anima-navy/20 transition-opacity group-hover:bg-anima-navy/40" />

                <div className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-anima-navy shadow-lg">
                  {modalidade.age}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 font-serif text-2xl font-light text-anima-navy">
                  {modalidade.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-anima-navy/70">
                  {modalidade.description}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-medium text-anima-coral transition-all hover:gap-3">
                  Saiba mais
                  <Image
                    src="/images/icons/arrow-coral.svg"
                    alt="Bailarina em tutu"
                    width={18}
                    height={18}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

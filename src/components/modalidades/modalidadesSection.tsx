import Image from 'next/image';

export default function ModalidadesSection() {
  return (
    <section className="bg-gradient-to-b from-anima-navy to-white px-8 py-10 md:px-16 lg:px-8">
      {/* Lista de modalidades */}
      <ul>
        {/* Baby Class */}
        <li
          id="ballet-infantil"
          className="mx-auto mb-40 flex max-w-7xl scroll-mt-4 items-center justify-center gap-12"
        >
          {/* Imagem à Esquerda */}
          <div className="relative w-1/2">
            {/* Container da Imagem */}
            <div className="relative z-10 aspect-[1/1] overflow-hidden rounded-2xl">
              <Image
                src="/images/Ballet/crianças.jpg"
                alt="Conservatório Ânima Virtus"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
          {/* Texto à Direita */}
          <div className="w-1/2">
            <h4 className="mb-4 text-base font-bold uppercase tracking-widest text-anima-coral">
              PRIMEIRA INFÂNCIA
            </h4>
            <h2 className="mb-6 font-serif text-5xl font-semibold text-white md:text-6xl">
              Baby Class
            </h2>
            <p className="text-lg leading-relaxed text-white/70">
              Os primeiros passos no mundo da dança. Coordenação, musicalidade e
              socialização através da brincadeira, eum um ambiente acolhedor e
              lúcido.
            </p>
            <div className="mt-6 flex gap-10">
              <div className="flex gap-3 text-base text-white/70">
                <Image
                  src="/images/Icons/clock.svg"
                  alt="Relógio que identifica o tempo de aula"
                  height={16}
                  width={16}
                />
                <h4 className="font-sans">45 MIN</h4>
              </div>
              <div className="flex gap-3 text-base text-white/70">
                <Image
                  src="/images/Icons/people.svg"
                  alt="Relógio que identifica o tempo de aula"
                  height={16}
                  width={16}
                />
                <h4 className="font-sans">3 - 5 ANOS</h4>
              </div>
            </div>
          </div>
        </li>

        {/* Ballet Clássico */}
        <li
          id="ballet-classico"
          className="mx-auto mb-36 flex max-w-7xl scroll-mt-24 items-center justify-center gap-12"
        >
          {/* Texto à esquerda */}
          <div className="w-1/2">
            <h4 className="mb-4 text-base font-bold uppercase tracking-widest text-anima-coral">
              NÍVEL INICIANTE AO AVANÇADO
            </h4>
            <h2 className="mb-6 font-serif text-5xl font-semibold text-white md:text-6xl">
              Ballet Clássico
            </h2>
            <div className="space-y-6 text-white/80">
              <p className="text-lg leading-relaxed">
                A base de toda a dança. Trabalho de postura, alinhamento,
                técnica de barra e centro, pontas e repertório. Aulas
                progressivas que respeitam o tempo de cada corpo.
              </p>
              <div className="mt-6 flex gap-10">
                <div className="flex gap-3 text-base text-white/70">
                  <Image
                    src="/images/Icons/clock.svg"
                    alt="Relógio que identifica o tempo de aula"
                    height={16}
                    width={16}
                  />
                  <h4 className="font-sans">60 - 90 MIN</h4>
                </div>
                <div className="flex gap-3 text-base text-white/70">
                  <Image
                    src="/images/Icons/people.svg"
                    alt="Relógio que identifica o tempo de aula"
                    height={16}
                    width={16}
                  />
                  <h4 className="font-sans">6+ ANOS</h4>
                </div>
              </div>
            </div>
          </div>
          {/* Imagem à direita */}
          <div className="relative w-1/2">
            {/* Container da Imagem */}
            <div className="relative z-10 aspect-[1/1] overflow-hidden rounded-2xl">
              <Image
                src="/images/Ballet/sapatilha.jpg"
                alt="Conservatório Ânima Virtus"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </li>

        {/* Ballet Contemporâneo */}
        <li
          id="ballet-contemporaneo"
          className="mx-auto mb-40 flex max-w-7xl scroll-mt-24 items-center justify-center gap-12"
        >
          {/* Imagem à Esquerda */}
          <div className="relative w-1/2">
            {/* Container da Imagem */}
            <div className="relative z-10 aspect-[1/1] overflow-hidden rounded-2xl">
              <Image
                src="/images/Ballet/bailarina.jpg"
                alt="Conservatório Ânima Virtus"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
          {/* Texto à Direita */}
          <div className="w-1/2">
            <h4 className="mb-4 text-base font-bold uppercase tracking-widest text-anima-coral">
              NÍVEL INTERMEDIÁRIO
            </h4>
            <h2 className="mb-6 font-serif text-5xl font-semibold text-anima-navy md:text-6xl">
              Dança Contemporânea
            </h2>
            <p className="text-lg leading-relaxed text-anima-navy/70">
              Liberdade de movimento, peso, queda e recuperação. Exploração da
              expressão pessoal a partir de uma base técnica sólida, com
              improvisação e composição
            </p>
            <div className="mt-6 flex gap-10">
              <div className="flex gap-3 text-base text-anima-navy/70">
                <Image
                  src="/images/Icons/clock.svg"
                  alt="Relógio que identifica o tempo de aula"
                  height={16}
                  width={16}
                />
                <h4 className="font-sans">75 MIN</h4>
              </div>
              <div className="flex gap-3 text-base text-anima-navy/70">
                <Image
                  src="/images/Icons/people.svg"
                  alt="Relógio que identifica o tempo de aula"
                  height={16}
                  width={16}
                />
                <h4 className="font-sans">12+ ANOS</h4>
              </div>
            </div>
          </div>
        </li>

        {/* Ballet X */}
        <li
          id="ballet-x"
          className="mx-auto mb-36 flex max-w-7xl items-center justify-center gap-12"
        >
          {/* Texto à esquerda */}
          <div className="w-1/2">
            <h4 className="mb-4 text-base font-bold uppercase tracking-widest text-anima-coral">
              NÍVEL DESCONHECIDO
            </h4>
            <h2 className="mb-6 font-serif text-5xl font-semibold text-anima-navy md:text-6xl">
              Mais uma Modalidade
            </h2>
            <div className="space-y-6 text-anima-navy/80">
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque commodi dicta enim omnis voluptatem consectetur
                iusto, veritatis nulla nemo sequi facilis accusantium,
                laudantium corrupti quod aut distinctio quidem maiores. A.
              </p>
              <div className="mt-6 flex gap-10">
                <div className="flex gap-3 text-base text-anima-navy/70">
                  <Image
                    src="/images/Icons/clock.svg"
                    alt="Relógio que identifica o tempo de aula"
                    height={16}
                    width={16}
                  />
                  <h4 className="font-sans">X - Y MIN</h4>
                </div>
                <div className="flex gap-3 text-base text-anima-navy/70">
                  <Image
                    src="/images/Icons/people.svg"
                    alt="Relógio que identifica o tempo de aula"
                    height={16}
                    width={16}
                  />
                  <h4 className="font-sans">X+ ANOS</h4>
                </div>
              </div>
            </div>
          </div>
          {/* Imagem à direita */}
          <div className="relative w-1/2">
            {/* Container da Imagem */}
            <div className="relative z-10 aspect-[1/1] overflow-hidden rounded-2xl">
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

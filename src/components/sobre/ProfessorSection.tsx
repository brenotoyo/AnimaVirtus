// src/components/sobre/InstitutionSection.tsx
import Image from 'next/image';

export default function ProfessorSection() {
  return (
    <section className="bg-gradient-to-b from-anima-navy to-white px-4 py-16 md:px-8 md:py-24 lg:px-32">
      {/* Lista de Professores */}
      <ul>
        {/* Diretora */}
        <li className="mx-auto mb-40 flex max-w-7xl items-center justify-center gap-12">
          {/* Imagem à Esquerda */}
          <div className="relative w-1/2">
            {/* Container da Imagem */}
            <div className="relative z-10 aspect-[5/6] overflow-hidden rounded-3xl">
              <Image
                src="/images/Ballet/ester2.png"
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
              Diretora
            </h4>
            <h2 className="mb-6 font-serif text-5xl font-semibold text-white md:text-6xl">
              Ester Rufino
            </h2>
            <div className="space-y-6 text-white/80">
              <p className="text-lg leading-relaxed">
                Certificada, pelo instituto{' '}
                <strong className="font-semibold text-white">
                  Alguma Coisa da Silva
                </strong>{' '}
                Ester fez tal tal tal com bla bla bal, também estudou tun tun
                tun na tititi Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Earum quis voluptate saepe voluptatem maiores
                quae facere sed, dolore recusandae eius sit, odio reiciendis. Ex
                assumenda eaque maxime. Quisquam, temporibus totam. <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                eum omnis, tempore voluptas libero eveniet ducimus atque itaque
                recusandae amet. Unde enim corrupti accusamus adipisci quibusdam
                est numquam, dicta dolore!
              </p>
            </div>
          </div>
        </li>

        {/* Professor(a) X */}
        <li className="mx-auto mb-36 flex max-w-7xl items-center justify-center gap-12">
          {/* Texto à esquerda */}
          <div className="w-1/2">
            <h4 className="mb-4 text-base font-bold uppercase tracking-widest text-anima-coral">
              Professora de x
            </h4>
            <h2 className="mb-6 font-serif text-5xl font-semibold text-white md:text-6xl">
              Pessoa da Costa Marfin
            </h2>
            <div className="space-y-6 text-white/80">
              <p className="text-lg leading-relaxed">
                Certificada, pelo instituto{' '}
                <strong className="font-semibold text-white">
                  Alguma Coisa dos Santos
                </strong>{' '}
                Pessoa fez tal tal tal com bla bla bal, também estudou tun tun
                tun na tititi Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Earum quis voluptate saepe voluptatem maiores
                quae facere sed, dolore recusandae eius sit, odio reiciendis. Ex
                assumenda eaque maxime. Quisquam, temporibus totam. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                expedita distinctio ipsum a, maxime illo aspernatur delectus
                dolores harum. Quo minima ex repellendus unde doloremque porro
                possimus amet totam ea!
              </p>
            </div>
          </div>
          {/* Imagem à direita */}
          <div className="relative w-1/2">
            {/* Container da Imagem */}
            <div className="relative z-10 aspect-[5/6] overflow-hidden rounded-3xl">
              <Image
                src="/images/Ballet/professora1.jpg"
                alt="Conservatório Ânima Virtus"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </li>

        {/* Professor(a) Y */}
        <li className="mx-auto mb-40 flex max-w-7xl items-center justify-center gap-12">
          {/* Imagem à Esquerda */}
          <div className="relative w-1/2">
            {/* Container da Imagem */}
            <div className="relative z-10 aspect-[5/6] overflow-hidden rounded-3xl">
              <Image
                src="/images/Ballet/professora2.jpg"
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
              Professora Y
            </h4>
            <h2 className="mb-6 font-serif text-5xl font-semibold text-anima-navy md:text-6xl">
              Pessoa Oliveira da Silva
            </h2>
            <div className="space-y-6 text-anima-navy/80">
              <p className="text-lg leading-relaxed">
                Certificada, pelo instituto{' '}
                <strong className="font-semibold text-anima-navy">
                  Alguma Coisa Renascentista
                </strong>{' '}
                Pessoa fez tal tal tal com bla bla bal, também estudou tun tun
                tun na tititi Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Earum quis voluptate saepe voluptatem maiores
                quae facere sed, dolore recusandae eius sit, odio reiciendis. Ex
                assumenda eaque maxime. Quisquam, temporibus totam. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                explicabo, modi enim maiores natus et, odio expedita, quo
                excepturi magni illo? Exercitationem cupiditate in ipsam nemo
                deserunt qui placeat eum!
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}

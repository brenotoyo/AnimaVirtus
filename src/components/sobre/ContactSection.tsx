import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="bg-anima-pink px-4 py-16 md:px-8 md:py-24 lg:px-32">
      <div className="flex-column mx-auto max-w-xl justify-items-center md:max-w-4xl">
        <h2 className="text-center font-serif text-3xl font-bold md:text-5xl">
          Dance com quem <br />
          vive a dança
        </h2>
        <p className="mb-8 mt-4 text-center text-xs md:text-lg">
          Conheça de perto o método do Ânima Virtus em uma aula experimental
        </p>
        <div>
          <Link
            href="/contato"
            className="inline-flex items-center rounded-full border-none bg-anima-coral px-4 py-2 text-xs font-medium text-white transition-all hover:bg-anima-coral/80 hover:shadow-lg md:px-8 md:py-3 md:text-sm"
          >
            AGENDE SUA AULA
          </Link>
        </div>
      </div>
    </section>
  );
}

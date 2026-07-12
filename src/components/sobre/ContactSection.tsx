import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="bg-anima-pink px-8 py-24">
      <div className="flex-column mx-auto max-w-4xl justify-items-center">
        <h2 className="text-center font-serif text-5xl font-semibold">
          Dance com quem <br />
          vive a dança
        </h2>
        <p className="mb-8 mt-4">
          Conheça de perto o método do Ânima Virtus em uma aula experimental
        </p>
        <div>
          <Link
            href="/contato"
            className="inline-flex items-center rounded-full border-none bg-anima-coral px-8 py-3 text-sm font-medium text-white transition-all hover:bg-anima-coral/80 hover:shadow-lg"
          >
            AGENDE SUA AULA
          </Link>
        </div>
      </div>
    </section>
  );
}

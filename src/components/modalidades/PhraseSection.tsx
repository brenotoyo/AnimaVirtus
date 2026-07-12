import Logo from '../../components/ui/Logo';
import Link from 'next/link';

export default function PhraseSection() {
  return (
    <section className="bg-anima-pink px-8 py-24">
      <div className="flex-column mx-auto max-w-4xl justify-items-center">
        <Logo variant="vertical" />
        <h2 className="my-4 text-center text-5xl text-anima-navy">
          Não sabe por onde começar ?
        </h2>
        <p className="mb-8 text-center text-anima-navy/70">
          Fale com a nossa equipe e descubra a modalidade ideal para <br /> você
          ou seu filho.
        </p>
        <div>
          <Link
            href="/contato"
            className="inline-flex items-center rounded-full border-none bg-anima-coral px-9 py-3 text-sm font-medium tracking-widest text-white transition-all hover:bg-anima-coral/80 hover:shadow-lg"
          >
            FALAR COM A EQUIPE
          </Link>
        </div>
      </div>
    </section>
  );
}

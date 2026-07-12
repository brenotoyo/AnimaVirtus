import Logo from '../ui/Logo';

export default function PhraseSection() {
  return (
    <section className="bg-anima-pink px-4 py-16 md:px-8 md:py-24 lg:px-32">
      <div className="flex-column mx-auto max-w-4xl justify-items-center">
        <Logo variant="vertical" />
        <p className="my-4 text-center text-4xl">
          &quot;Dançar é dar forma ao invisível. Cada movimento nasce do
          equilíbrio entre disciplina e liberdade.&ldquo;
        </p>
        <h4 className="text-lg font-bold text-anima-coral">Ester Rufino</h4>
      </div>
    </section>
  );
}

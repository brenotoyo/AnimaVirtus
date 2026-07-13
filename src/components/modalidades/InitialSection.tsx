export default function InitialSection() {
  return (
    <section className="bg-anima-navy px-4 pb-4 pt-10 md:px-8 md:pb-6 md:pt-10 lg:px-32">
      {/* Container principal */}
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center text-center md:max-w-3xl">
        <h4 className="mb-4 text-xs uppercase tracking-widest text-anima-coral md:text-base">
          O QUE OFERECEMOS
        </h4>
        <h2 className="mb-6 font-serif text-4xl font-light text-white md:text-5xl lg:text-7xl">
          MODALIDADES
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-white/70 md:mb-12 md:text-base">
          Do primeiro pilé ao palco. Programas para todas as idades e níveis,
          conduzidos com técnica e sensibilidade
        </p>
      </div>
    </section>
  );
}

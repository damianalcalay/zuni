const chapters = [
  { label: "El libro", color: "bg-[#f789b5]" },
  { label: "La autora", color: "bg-[#ffc63e]" },
  { label: "Fragmentos", color: "bg-[#8ad0cd]" },
  { label: "Contacto", color: "bg-[#d7c6e9]" },
];

const cards = [
  {
    title: "Silencio",
    subtitle: "Una novela sobre lo que queda cuando el mundo deja de hablar.",
    color: "bg-[#f789b5]",
  },
  {
    title: "Bestia",
    subtitle:
      "La presencia que avanza entre recuerdos, culpas y promesas rotas.",
    color: "bg-[#ffc63e]",
  },
  {
    title: "Ruido",
    subtitle:
      "Una ciudad interior llena de ecos, heridas y pequeñas revelaciones.",
    color: "bg-[#cfd94f]",
  },
  {
    title: "Luz",
    subtitle: "El hilo delicado que permite nombrar lo que parecia perdido.",
    color: "bg-[#d7c6e9]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fff6f8] text-[#31445a]">
      <header className="border-b border-[#f8bfd5] bg-white/85">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a
            className="text-xs font-semibold uppercase tracking-[0.35em]"
            href="#"
          >
            Silencio
          </a>
          <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.28em] text-[#58718a] md:flex">
            <a href="#libro">Libro</a>
            <a href="#autora">Autora</a>
            <a href="#fragmentos">Fragmentos</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <a
            className="rounded-sm bg-[#ffc63e] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#31445a]"
            href="#contacto"
          >
            Demo
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-white">
        <div className="absolute left-0 top-20 h-40 w-24 rounded-r-full bg-[#f789b5]/45" />
        <div className="absolute bottom-8 right-0 h-44 w-28 rounded-l-full bg-[#f8bfd5]/70" />
        <div className="absolute left-[12%] top-24 h-28 w-3 rotate-[-14deg] bg-[#ffc63e]" />
        <div className="absolute right-[18%] top-28 h-20 w-4 rotate-[34deg] bg-[#f789b5]" />
        <div className="absolute right-[10%] top-44 text-5xl text-[#ffc63e]">
          ✶
        </div>
        <div className="absolute left-[22%] bottom-10 text-3xl text-[#f789b5]">
          ✦
        </div>

        <div className="mx-auto grid min-h-[560px] max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1fr_0.9fr]">
          <div className="relative z-10 text-center md:text-left">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.42em] text-[#f789b5]">
              Raquel
            </p>
            <h1 className="text-5xl font-black uppercase leading-[0.95] text-[#31445a] sm:text-7xl lg:text-8xl">
              Silencio
            </h1>
            <p className="mt-4 text-2xl font-black uppercase tracking-[0.08em] text-[#8ad0cd] sm:text-4xl">
              La bestia que devora el ruido
            </p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#58718a] md:mx-0">
              Texto provisional para presentar el tono de la landing. Aqui ira
              una descripcion breve del libro, su atmosfera y la pregunta
              central que invita a seguir leyendo.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
              <a
                className="rounded-sm bg-[#ffc63e] px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#31445a]"
                href="#fragmentos"
              >
                Leer avance
              </a>
              <a
                className="rounded-sm border-2 border-[#8ad0cd] px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-[#31445a]"
                href="#libro"
              >
                Conocer mas
              </a>
            </div>
          </div>

          <div className="relative z-10 mx-auto aspect-[4/5] w-full max-w-sm bg-[#f7dbe7] p-5 shadow-[18px_18px_0_#8ad0cd]">
            <div className="flex h-full flex-col justify-between border-4 border-white bg-[#31445a] p-8 text-white">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ffc63e]">
                  Manuscrito
                </p>
                <h2 className="mt-10 text-5xl font-black uppercase leading-none">
                  Silencio
                </h2>
              </div>
              <div>
                <p className="max-w-48 text-sm leading-6 text-[#fff6f8]">
                  Portada temporal para validar direccion visual.
                </p>
                <div className="mt-8 h-3 w-28 bg-[#f789b5]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#8ad0cd] py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 px-5 md:grid-cols-4">
          {chapters.map((chapter) => (
            <a
              className={`${chapter.color} mx-auto flex aspect-square w-36 flex-col items-center justify-center rounded-full text-center text-white shadow-[0_8px_0_rgba(49,68,90,0.12)]`}
              href="#libro"
              key={chapter.label}
            >
              <span className="text-xs font-bold lowercase tracking-[0.08em]">
                seccion
              </span>
              <span className="mt-1 text-lg font-black uppercase">
                {chapter.label}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section
        className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2"
        id="libro"
      >
        <div className="bg-[#fff0f5] p-8">
          <div className="relative mx-auto max-w-sm bg-white p-4 shadow-[12px_12px_0_#ffc63e]">
            <div className="aspect-[4/3] bg-[linear-gradient(135deg,#8ad0cd_0_30%,#fff_30%_55%,#f789b5_55%)]" />
            <div className="absolute -bottom-6 -right-4 bg-[#f789b5] px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-white">
              Primera demo
            </div>
          </div>
        </div>
        <div className="bg-[#d8efed] p-10">
          <p className="text-sm font-bold uppercase tracking-[0.36em] text-[#f789b5]">
            Bienvenida
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-[#31445a]">
            Sobre el libro
          </h2>
          <p className="mt-6 leading-8 text-[#58718a]">
            Aqui puede ir una sinopsis corta, pensada para transmitir el pulso
            emocional de la obra sin revelar demasiado. La maqueta esta
            preparada para reemplazar estos textos por contenido definitivo.
          </p>
          <p className="mt-4 leading-8 text-[#58718a]">
            Tambien se puede incluir una nota de la autora, informacion
            editorial, fecha estimada de publicacion o enlaces a prensa y redes.
          </p>
        </div>
      </section>

      <section className="bg-[#ffc63e] px-5 py-20 text-center">
        <p className="mx-auto max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl">
          &ldquo;El silencio no siempre calma: a veces aprende tu nombre.&rdquo;
        </p>
      </section>

      <section
        className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[1fr_0.9fr]"
        id="fragmentos"
      >
        <div className="bg-[#d7c6e9] p-10">
          <p className="text-sm font-bold uppercase tracking-[0.36em] text-white">
            Fragmento
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-[#31445a]">
            Una escena para abrir boca
          </h2>
          <p className="mt-6 leading-8 text-[#31445a]">
            La casa parecia respirar despacio. En el pasillo, cada fotografia
            guardaba una version distinta de la misma ausencia. Entonces escucho
            algo: no era un golpe, ni una voz, sino el ruido exacto de una
            verdad acercandose.
          </p>
        </div>
        <div className="bg-[#fff0f5] p-10" id="autora">
          <h2 className="text-3xl font-black uppercase text-[#31445a]">
            Recursos
          </h2>
          <div className="mt-8 space-y-4">
            <a className="block bg-[#f789b5] px-5 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-white">
              Biografia autora
            </a>
            <a className="block bg-[#ffc63e] px-5 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-[#31445a]">
              Dossier de prensa
            </a>
            <a className="block bg-[#8ad0cd] px-5 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-white">
              Galeria visual
            </a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4">
        {cards.map((card) => (
          <article className={`${card.color} min-h-56 p-8`} key={card.title}>
            <h3 className="text-3xl font-black uppercase text-white">
              {card.title}
            </h3>
            <p className="mt-4 max-w-xs leading-7 text-[#31445a]">
              {card.subtitle}
            </p>
          </article>
        ))}
      </section>

      <footer
        className="bg-[#8ad0cd] px-5 py-10 text-center text-[#31445a]"
        id="contacto"
      >
        <p className="text-sm font-bold uppercase tracking-[0.35em]">
          Silencio: La bestia que devora el ruido
        </p>
        <p className="mt-4 text-sm">
          Landing demo con textos e imagenes provisionales.
        </p>
      </footer>
    </main>
  );
}

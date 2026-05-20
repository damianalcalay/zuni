import { Button } from "../ui/Button";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-white px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.86fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black">
            Literatura infantil, educación y cultura
          </p>
          <h1 className="font-heading mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-black sm:text-5xl lg:text-6xl">
            Actividades educativas y culturales para la infancia
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-black md:text-xl">
            Una propuesta sensible y creativa basada en el libro Silencio. La
            bestia que devora el ruido.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto">Solicitar información</Button>
            <Button href="#actividades-colegios" variant="secondary">
              Ver actividades
            </Button>
          </div>
        </div>

        <div className="relative min-h-[22rem] sm:min-h-[28rem]">
          <div className="relative flex min-h-[20rem] flex-col items-center justify-center text-center sm:min-h-[26rem]">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-black">
              Imagen futura
            </span>
            <p className="font-heading mt-5 max-w-64 text-2xl font-bold leading-snug text-black">
              Espacio reservado para portada del libro o ilustración principal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

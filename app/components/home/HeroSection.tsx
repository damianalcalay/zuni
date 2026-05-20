import { Button } from "../ui/Button";
import { ImagePlaceholder } from "./Placeholders";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.86fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-black">
            Autora y educadora
          </p>
          <h1 className="font-heading mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-black sm:text-5xl lg:text-6xl">
            Quién soy
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-black md:text-lg md:leading-8">
            <p>
              Me llamo Raquel Linares Expósito y mi camino siempre ha estado
              muy unido a la infancia, la educación y la creatividad.
            </p>
            <p>
              Estudié Educación Infantil y tengo un Máster en Estudios
              Pedagógicos Avanzados. Desde hace años participo en talleres
              infantiles y culturales, tanto de forma profesional como por amor
              al arte, porque disfruto creando espacios donde los niños y niñas
              puedan expresarse, imaginar y sentirse acompañados.
            </p>
            <p>
              Recientemente he escrito un libro dedicado a quienes sienten el
              mundo de una manera diferente. Un proyecto muy especial para mí,
              nacido desde la sensibilidad, el cariño y la idea de que cada
              infancia merece ser comprendida y mirada con respeto.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#contacto">Solicitar información</Button>
            <Button href="#mi-libro" variant="secondary">
              Ver mi libro
            </Button>
          </div>
        </div>

        <ImagePlaceholder
          label="Fotografía"
          title="Placeholder elegante para imagen de la autora"
          variant="portrait"
        />
      </div>
    </section>
  );
}

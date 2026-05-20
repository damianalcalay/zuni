import { Card, CardContent } from "../ui/Card";
import { ImagePlaceholder } from "./Placeholders";
import { SectionIntro } from "./SectionIntro";

export function AboutSection() {
  return (
    <section id="quien-soy" className="relative px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.82fr]">
        <Card>
          <CardContent>
            <SectionIntro badge="Autora y educadora" title="Quién soy">
              <p>
                Me llamo Raquel Linares Expósito y mi camino siempre ha estado
                muy unido a la infancia, la educación y la creatividad.
              </p>
              <p>
                Estudié Educación Infantil y tengo un Máster en Estudios
                Pedagógicos Avanzados. Desde hace años participo en talleres
                infantiles y culturales, tanto de forma profesional como por
                amor al arte, porque disfruto creando espacios donde los niños y
                niñas puedan expresarse, imaginar y sentirse acompañados.
              </p>
              <p>
                Recientemente he escrito un libro dedicado a quienes sienten el
                mundo de una manera diferente. Un proyecto muy especial para mí,
                nacido desde la sensibilidad, el cariño y la idea de que cada
                infancia merece ser comprendida y mirada con respeto.
              </p>
            </SectionIntro>
          </CardContent>
        </Card>
        <ImagePlaceholder
          label="Fotografía"
          title="Placeholder elegante para imagen de la autora"
          variant="portrait"
        />
      </div>
    </section>
  );
}

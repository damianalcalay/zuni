import { Card, CardContent } from "../ui/Card";
import { ImagePlaceholder } from "./Placeholders";
import { SectionIntro } from "./SectionIntro";

export function BookSection() {
  return (
    <section
      id="mi-libro"
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
        <Card>
          <CardContent className="lg:p-10">
            <SectionIntro badge="El libro" title="Silencio. La bestia que devora el ruido">
              <p>
                Silencio. La bestia que devora el ruido nace de una idea que me
                ha acompañado durante años trabajando y compartiendo tiempo con
                niños y niñas: cada infancia es única y cada persona percibe el
                mundo de una manera diferente.
              </p>
              <p>
                Con el tiempo comprendí que aquello que para algunos puede
                parecer normal, cotidiano o incluso invisible, para otros puede
                convertirse en ruido, incomodidad o dificultad. Desde esa mirada
                nació este libro, como una forma de acercarnos con sensibilidad
                a esas distintas maneras de sentir, escuchar y estar en el
                mundo.
              </p>
              <p>
                Más que contar una historia, quería crear un espacio de
                comprensión. Un cuento que invite a mirar con respeto, a
                escuchar con más calma y a recordar que todos los niños y niñas
                merecen sentirse aceptados tal y como son.
              </p>
            </SectionIntro>
          </CardContent>
        </Card>
        <ImagePlaceholder
          label="Portada"
          title="Placeholder para imagen del libro"
          variant="book"
        />
      </div>
    </section>
  );
}

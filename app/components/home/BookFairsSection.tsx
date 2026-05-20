import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { ImagePlaceholder } from "./Placeholders";
import { SectionIntro } from "./SectionIntro";

export function BookFairsSection() {
  return (
    <section
      id="ferias-libro"
      className="relative px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1fr]">
        <ImagePlaceholder
          label="Evento"
          title="Espacio para imagen de feria del libro"
          variant="wide"
        />
        <Card>
          <CardContent>
            <SectionIntro badge="Eventos culturales" title="Ferias del libro">
              <p>
                Participación en ferias del libro, encuentros literarios y
                espacios culturales donde compartir el proyecto, acercar el
                cuento a nuevos lectores y crear momentos de encuentro alrededor
                de la infancia, la creatividad y la lectura.
              </p>
              <p>
                Una oportunidad para presentar el libro, conversar con familias,
                centros y entidades, y seguir construyendo comunidad a través de
                las historias.
              </p>
            </SectionIntro>
            <Button href="#contacto" className="mt-8">
              Invitar a un evento
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

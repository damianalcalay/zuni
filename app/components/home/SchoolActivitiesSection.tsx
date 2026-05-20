import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { ImagePlaceholder } from "./Placeholders";
import { SectionIntro } from "./SectionIntro";

const activityPoints = ["Lectura", "Diálogo", "Aula", "Creatividad"];

export function SchoolActivitiesSection() {
  return (
    <section
      id="actividades-colegios"
      className="relative px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1fr]">
        <ImagePlaceholder
          label="Actividad"
          title="Espacio para imagen de talleres o colegios"
          variant="wide"
        />
        <Card>
          <CardContent>
            <SectionIntro badge="Para centros educativos" title="Actividades en colegios">
              <p>
                Propuestas pensadas para centros educativos que buscan trabajar
                la escucha, la convivencia, la sensibilidad y la creatividad
                desde una experiencia cercana y participativa.
              </p>
              <p>
                Las actividades pueden adaptarse a distintas edades y contextos,
                combinando el cuento, el diálogo, el juego y la expresión
                artística para crear un espacio donde cada niño y niña pueda
                sentirse parte.
              </p>
            </SectionIntro>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {activityPoints.map((point) => (
                <div
                  key={point}
                  className="px-3 py-4 text-center"
                >
                  <p className="font-heading text-base font-bold text-black">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <Button href="#contacto" className="mt-8">
              Consultar actividades
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

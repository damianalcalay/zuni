import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { ImagePlaceholder } from "./Placeholders";
import { SectionIntro } from "./SectionIntro";

export function TalksSection() {
  return (
    <section
      id="ponencias"
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.82fr]">
        <Card>
          <CardContent>
            <SectionIntro badge="Charlas y encuentros" title="Ponencias">
              <p>
                Espacios de reflexión dirigidos a familias, profesionales de la
                educación, entidades culturales y personas interesadas en la
                infancia, la sensibilidad y la diversidad en la forma de
                percibir el mundo.
              </p>
              <p>
                Las ponencias parten de una mirada cercana y pedagógica,
                conectando la experiencia personal, la educación y la literatura
                infantil como herramientas para comprender mejor a los niños y
                niñas.
              </p>
            </SectionIntro>
            <Button href="#contacto" className="mt-8">
              Solicitar ponencia
            </Button>
          </CardContent>
        </Card>
        <ImagePlaceholder
          label="Encuentro"
          title="Placeholder para imagen de charla o espacio cultural"
          variant="wide"
        />
      </div>
    </section>
  );
}

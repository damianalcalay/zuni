import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import { ImagePlaceholder } from "./Placeholders";
import { SectionIntro } from "./SectionIntro";

export function HomeDeliverySection() {
  return (
    <section
      id="envios-domicilio"
      className="relative px-5 py-16 sm:px-8 lg:py-24"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.82fr]">
        <Card>
          <CardContent>
            <SectionIntro badge="Libros en casa" title="Envíos a domicilio">
              <p>
                Para muchas familias, recibir el libro en casa ha sido una
                forma cercana y especial de acercarse a la historia. Cada envío
                permite que Silencio. La bestia que devora el ruido llegue con
                calma a nuevos hogares, creando un primer encuentro íntimo con
                el cuento antes de compartirlo en voz alta.
              </p>
              <p>
                La experiencia de quienes ya lo han comprado habla de emoción,
                cuidado y conexión con una obra pensada para acompañar a niños,
                niñas y familias en conversaciones importantes sobre la
                sensibilidad, la escucha y las distintas formas de sentir el
                mundo.
              </p>
            </SectionIntro>
            <Button href="#contacto" className="mt-8">
              Consultar envío
            </Button>
          </CardContent>
        </Card>
        <ImagePlaceholder
          label="Envío"
          title="Espacio para imagen de pedidos o lectores en casa"
          variant="wide"
        />
      </div>
    </section>
  );
}

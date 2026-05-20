import { Button } from "../ui/Button";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quién soy", href: "#inicio" },
  { label: "Mi libro", href: "#mi-libro" },
  { label: "Actividades en colegios", href: "#actividades-colegios" },
  { label: "Ponencias", href: "#ponencias" },
  { label: "Ferias del libro", href: "#ferias-libro" },
  { label: "Envíos", href: "#envios-domicilio" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--pink-50)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a
          href="#inicio"
          className="font-heading max-w-[13rem] text-base font-extrabold leading-tight text-black sm:max-w-none sm:text-lg"
        >
          Raquel Linares Expósito
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-black lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contacto">Solicitar información</Button>
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center bg-white text-black [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Abrir menú</span>
            <span className="relative block h-4 w-5">
              <span className="absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition group-open:top-2 group-open:rotate-45" />
              <span className="absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition group-open:opacity-0" />
              <span className="absolute left-0 top-4 h-0.5 w-5 rounded bg-current transition group-open:top-2 group-open:-rotate-45" />
            </span>
          </summary>
          <div className="absolute right-0 mt-3 w-[min(20rem,calc(100vw-2.5rem))] bg-[var(--pink-50)] p-4">
            <nav className="flex flex-col gap-1 text-sm font-medium text-black">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <Button href="#contacto" className="mt-3 w-full">
              Solicitar información
            </Button>
          </div>
        </details>
      </div>
    </header>
  );
}

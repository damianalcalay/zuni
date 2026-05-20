const footerLinks = [
  { label: "Quién soy", href: "#quien-soy" },
  { label: "Mi libro", href: "#mi-libro" },
  { label: "Actividades en colegios", href: "#actividades-colegios" },
  { label: "Ponencias", href: "#ponencias" },
  { label: "Ferias del libro", href: "#ferias-libro" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer id="contacto" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1.4fr_0.6fr]">
        <div>
          <p className="font-editorial text-xl font-semibold text-black">
            Raquel Linares Expósito
          </p>
          <p className="font-editorial mt-3 max-w-sm text-sm leading-6 text-black">
            Autora de Silencio. La bestia que devora el ruido
          </p>
        </div>

        <nav className="grid gap-3 text-sm text-black sm:grid-cols-2 lg:grid-cols-3">
          {footerLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black">
            Redes sociales
          </p>
        </div>
      </div>
      <div className="px-5 py-5 text-center text-xs text-black">
        © 2026 Raquel Linares Expósito. Todos los derechos reservados.
      </div>
    </footer>
  );
}

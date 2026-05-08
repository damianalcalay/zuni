import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Silencio | La bestia que devora el ruido",
  description: "Landing demo para el libro Silencio: La bestia que devora el ruido.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

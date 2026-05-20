import type { Metadata } from "next";
import { Inter, Lora, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-nunito",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Raquel Linares Expósito | Silencio",
  description:
    "Actividades educativas y culturales de Raquel Linares Expósito basadas en el libro infantil Silencio. La bestia que devora el ruido.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body
        className={`${nunito.variable} ${inter.variable} ${lora.variable} min-h-full flex flex-col font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

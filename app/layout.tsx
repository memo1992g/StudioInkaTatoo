import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inka Tatoo | Arte que deja huella",
  description:
    "Landing page para Inka Tatoo inspirada en la estructura de un estudio premium: tatuajes, piercings, portafolio, equipo y contacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

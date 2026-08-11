import type { Metadata } from "next";
import { Fraunces, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CursorGlow from "@/components/ui/CursorGlow";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ORIGEM — Cozinha da Mata Atlântica",
  description:
    "Restaurante autoral em Resende, RJ. Ingredientes nativos da Mata Atlântica, técnica contemporânea, menu degustação sazonal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <body className="font-body bg-bg text-ink antialiased">
        <div className="grain" aria-hidden="true" />
        <CursorGlow />
        <SmoothScrollProvider>
          <ScrollProgress />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

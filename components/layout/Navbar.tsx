"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useLenis } from "@/lib/smooth-scroll";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Galeria", href: "#galeria" },
  { label: "Menu", href: "#menu" },
  { label: "Localização", href: "#localizacao" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const { scrollY } = useScroll();
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (v) => {
    setSolid(v > 80);
  });

  function goTo(e: React.MouseEvent, href: string) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    if (lenis) {
      lenis.scrollTo(el as HTMLElement, { offset: -40 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-500 ${
        solid ? "bg-bg/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" className="font-display italic text-xl tracking-wide">
          Origem
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => goTo(e, l.href)}
                className="relative text-sm text-ink/80 hover:text-ink transition-colors group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#localizacao"
          onClick={(e) => goTo(e, "#localizacao")}
          className="text-sm border border-ink/30 px-5 py-2 hover:border-gold hover:text-gold transition-colors"
        >
          Reservar
        </a>
      </nav>
    </motion.header>
  );
}

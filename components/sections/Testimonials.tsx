"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionDecor from "@/components/ui/SectionDecor";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const active = testimonials[i];

  function nav(dir: 1 | -1) {
    setI((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-[#100e0b]">
      <SectionDecor
        left={{ variant: "leaf", top: "22%", rotate: -16 }}
        right={{ variant: "knife", top: "62%", rotate: 10 }}
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="eyebrow">Depoimentos</span>
        <AnimatedText
          text="Palavras de quem esteve à mesa"
          as="h2"
          className="font-display font-light text-3xl md:text-4xl mt-4 mb-14 text-balance"
        />

        <Quote className="mx-auto mb-6 text-gold/50" size={28} strokeWidth={1} />

        <div className="relative min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -8 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display italic text-xl md:text-2xl leading-relaxed text-balance">
                “{active.quote}”
              </p>
              <p className="mt-6 text-sm text-ink/50">
                {active.name} — {active.role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={() => nav(-1)}
            aria-label="Depoimento anterior"
            className="text-ink/50 hover:text-gold transition-colors"
          >
            <ChevronLeft size={22} strokeWidth={1.2} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setI(idx)}
                aria-label={`Ir para depoimento ${idx + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  idx === i ? "bg-gold" : "bg-ink/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => nav(1)}
            aria-label="Próximo depoimento"
            className="text-ink/50 hover:text-gold transition-colors"
          >
            <ChevronRight size={22} strokeWidth={1.2} />
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Flame, Leaf, Wine, Wheat } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations/variants";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionDecor from "@/components/ui/SectionDecor";

const specialties = [
  {
    icon: Flame,
    title: "Brasa lenta",
    desc: "Técnica central da casa: cocções longas em fogo de lenha nativa.",
  },
  {
    icon: Leaf,
    title: "Ingrediente nativo",
    desc: "Da horta e da mata para o prato em menos de 24 horas.",
  },
  {
    icon: Wine,
    title: "Vinhos naturais",
    desc: "Carta autoral com foco em pequenos produtores brasileiros.",
  },
  {
    icon: Wheat,
    title: "Fermentação própria",
    desc: "Pães, molhos e conservas fermentados na própria cozinha.",
  },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="relative py-28 md:py-36 px-6 md:px-10 bg-[#100e0b]">
      <SectionDecor
        left={{ variant: "fork", top: "18%", rotate: -4 }}
        right={{ variant: "knife", top: "55%", rotate: 6 }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <span className="eyebrow">Especialidades</span>
        <AnimatedText
          text="O que sustenta cada prato"
          as="h2"
          className="font-display font-light text-3xl md:text-4xl mt-4 mb-14 md:mb-20 text-balance"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.12)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line"
        >
          {specialties.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#100e0b] p-8 group"
            >
              <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                transition={{ duration: 0.4 }}
                className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold mb-6"
              >
                <Icon size={18} strokeWidth={1.3} />
              </motion.div>
              <h3 className="font-display text-lg mb-2">{title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

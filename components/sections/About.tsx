"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";
import RevealImage from "@/components/ui/RevealImage";
import Counter from "@/components/ui/Counter";
import SectionDecor from "@/components/ui/SectionDecor";
import { fadeUpDelay, viewportOnce } from "@/lib/animations/variants";

export default function About() {
  return (
    <section id="sobre" className="relative py-28 md:py-40 px-6 md:px-10">
      <SectionDecor
        left={{ variant: "sprig", top: "12%", rotate: -8 }}
        right={{ variant: "leaf", top: "60%", rotate: 14 }}
      />
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          <span className="eyebrow">Sobre o Origem</span>
          <AnimatedText
            text="Uma cozinha que nasce da mata, não da vitrine."
            as="h2"
            mode="words"
            className="font-display font-light text-3xl md:text-4xl leading-tight mt-4 text-balance"
          />
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUpDelay(0.3)}
            className="mt-6 text-ink/70 leading-relaxed max-w-md"
          >
            Fundado em 2019 pelo chef Thaian Alves, o Origem trabalha
            exclusivamente com ingredientes nativos da Mata Atlântica,
            colhidos em parceria com produtores da região de Resende.
            Cada menu é reescrito a cada estação — nunca duas vezes igual.
          </motion.p>
        </div>

        <div className="order-1 md:order-2 relative">
          <RevealImage
            src="/images/chef.jpg"
            alt="Chef Thaian Alves na cozinha do Origem"
            label="Chef Thaian Alves"
            tone="stone"
            ratio="aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import RevealImage from "@/components/ui/RevealImage";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionDecor from "@/components/ui/SectionDecor";
import { motion } from "framer-motion";
import { fadeUpDelay, viewportOnce } from "@/lib/animations/variants";

const blocks = [
  {
    tag: "Ambiente",
    title: "Luz de vela, madeira crua, silêncio desenhado",
    text: "Trinta e dois lugares. Nenhuma mesa igual à outra, todas voltadas para a serra.",
    tone: "moss" as const,
    src: "/images/salao.jpg",
  },
  {
    tag: "Atendimento",
    title: "Uma equipe que conhece cada produtor pelo nome",
    text: "Serviço em ritmo de conversa, nunca de pressa, cada curso chega no seu tempo certo.",
    tone: "stone" as const,
    src: "/images/chef-brasa.jpg",
  },
  {
    tag: "Ingredientes",
    title: "Colhido de manhã, servido à noite",
    text: "Horta própria e parcerias diretas com comunidades da Mata Atlântica local.",
    tone: "ember" as const,
    src: "/images/cesta-ingredientes.jpg",
  },
  {
    tag: "Chef",
    title: "Thaian Alves, vinte anos entre fogo e floresta",
    text: "Passagens por cozinhas do Pará e da Bahia moldaram uma técnica própria de brasa lenta.",
    tone: "moss" as const,
    src: "/images/chef.jpg",
  },
];

export default function Experience() {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-10 bg-[#100e0b]">
      <SectionDecor
        left={{ variant: "knife", top: "10%", rotate: -14 }}
        right={{ variant: "leaf", top: "75%", rotate: 16 }}
      />
      <div className="relative z-10 max-w-6xl mx-auto mb-16 md:mb-24">
        <span className="eyebrow">Experiência</span>
        <AnimatedText
          text="Quatro pilares, uma mesa"
          as="h2"
          className="font-display font-light text-3xl md:text-4xl mt-4 text-balance"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-24 md:gap-32">
        {blocks.map((b, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={b.tag}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                reversed ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <RevealImage
                src={b.src}
                alt={b.title}
                label={b.tag}
                tone={b.tone}
                ratio="aspect-[16/11]"
              />
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={fadeUpDelay(0.15)}
              >
                <span className="eyebrow">{b.tag}</span>
                <h3 className="font-display font-light text-2xl md:text-3xl mt-3 mb-4 text-balance">
                  {b.title}
                </h3>
                <p className="text-ink/65 leading-relaxed max-w-md">{b.text}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

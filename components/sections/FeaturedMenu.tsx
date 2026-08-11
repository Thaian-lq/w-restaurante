"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { menuItems } from "@/data/menu";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionDecor from "@/components/ui/SectionDecor";
import { withBasePath } from "@/lib/basePath";
import { fadeUp, stagger, viewportOnce } from "@/lib/animations/variants";

const tones: Record<string, string> = {
  moss: "from-[#2c3a2c] via-[#445a43] to-[#1c241c]",
  ember: "from-[#3a2015] via-[#9c5330] to-[#1f120b]",
  stone: "from-[#39362f] via-[#6b665c] to-[#1c1a16]",
};

export default function FeaturedMenu() {
  return (
    <section id="menu" className="relative py-28 md:py-36 px-6 md:px-10">
      <SectionDecor
        left={{ variant: "fork", top: "20%", rotate: -10 }}
        right={{ variant: "sprig", top: "70%", rotate: 12 }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20">
          <div>
            <span className="eyebrow">Menu degustação</span>
            <AnimatedText
              text="Quatro tempos, uma estação"
              as="h2"
              className="font-display font-light text-3xl md:text-4xl mt-4 text-balance"
            />
          </div>
          <p className="text-sm text-ink/50 max-w-xs">
            Menu completo R$ 340 por pessoa. Harmonização de vinhos naturais
            disponível à parte.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.15)}
          className="flex flex-col"
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.course}
              variants={fadeUp}
              className="group grid md:grid-cols-[auto_1fr_auto] items-center gap-6 md:gap-10 py-8 border-t border-line last:border-b"
            >
              <span className="font-mono text-xs text-gold tracking-widest">
                {item.course}
              </span>

              <div className="flex items-center gap-6">
                <div className="hidden sm:block relative w-16 h-16 shrink-0 rounded-full overflow-hidden">
                  {item.src ? (
                    <Image
                      src={withBasePath(item.src)}
                      alt={item.name}
                      fill
                      sizes="64px"
                      className="object-cover transition-transform duration-500 ease-signature group-hover:scale-110"
                    />
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${tones[item.tone]} transition-transform duration-500 ease-signature group-hover:scale-110`}
                    />
                  )}
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl">{item.name}</h3>
                  <p className="text-sm text-ink/55 mt-1 max-w-lg">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-[10px] uppercase tracking-wide text-ink/40 border border-ink/15 px-2 py-1"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <span className="font-mono text-gold text-lg md:justify-self-end">
                {item.price}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

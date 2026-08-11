"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { galleryItems } from "@/data/gallery";
import Lightbox from "@/components/ui/Lightbox";
import SectionDecor from "@/components/ui/SectionDecor";
import { withBasePath } from "@/lib/basePath";
import { viewportOnce } from "@/lib/animations/variants";
import AnimatedText from "@/components/ui/AnimatedText";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  function onNav(dir: 1 | -1) {
    setIndex((prev) => {
      if (prev === null) return prev;
      return (prev + dir + galleryItems.length) % galleryItems.length;
    });
  }

  return (
    <section id="galeria" className="relative py-28 md:py-36 px-6 md:px-10">
      <SectionDecor
        left={{ variant: "leaf", top: "8%", rotate: -10 }}
        right={{ variant: "sprig", top: "68%", rotate: 10 }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <span className="eyebrow">Galeria</span>
        <AnimatedText
          text="Um instante do salão à mata"
          as="h2"
          className="font-display font-light text-3xl md:text-4xl mt-4 mb-14 md:mb-20 text-balance"
        />

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[160px] gap-3">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              onClick={() => setIndex(i)}
              className={`relative overflow-hidden rounded-2xl group text-left ${item.span}`}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: (i % 4) * 0.08 }}
            >
              {item.src ? (
                <Image
                  src={withBasePath(item.src)}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-signature group-hover:scale-110"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.tone} transition-transform duration-700 ease-signature group-hover:scale-110`}
                />
              )}
              <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/20 transition-colors duration-500" />
              <span className="absolute bottom-3 left-3 eyebrow text-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        items={galleryItems}
        index={index}
        onClose={() => setIndex(null)}
        onNav={onNav}
      />
    </section>
  );
}

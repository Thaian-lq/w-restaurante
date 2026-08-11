"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import SectionDecor from "@/components/ui/SectionDecor";
import { fadeUpDelay, viewportOnce } from "@/lib/animations/variants";

export default function Location() {
  return (
    <section id="localizacao" className="relative py-28 md:py-36 px-6 md:px-10">
      <SectionDecor
        left={{ variant: "sprig", top: "15%", rotate: -12 }}
        right={{ variant: "fork", top: "60%", rotate: 8 }}
      />
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow">Localização</span>
          <AnimatedText
            text="Na serra, a vinte minutos do centro"
            as="h2"
            className="font-display font-light text-3xl md:text-4xl mt-4 mb-8 text-balance"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUpDelay(0.2)}
            className="space-y-5"
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-gold shrink-0 mt-0.5" size={18} strokeWidth={1.3} />
              <p className="text-ink/70">Estrada da Serra, 1200 — Resende, RJ</p>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-gold shrink-0 mt-0.5" size={18} strokeWidth={1.3} />
              <p className="text-ink/70">Terça a domingo, 19h às 00h</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-gold shrink-0 mt-0.5" size={18} strokeWidth={1.3} />
              <p className="text-ink/70">+55 24 99999-0000</p>
            </div>
          </motion.div>

          <motion.a
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUpDelay(0.35)}
            href="tel:+552499990000"
            className="inline-flex mt-10 items-center gap-3 bg-gold text-bg px-8 py-3 text-sm tracking-wide hover:bg-ink transition-colors duration-500"
          >
            Reservar uma mesa
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5]"
        >
          <div className="w-full h-full rounded-2xl bg-[#1a1712] border border-line relative overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full opacity-40"
              viewBox="0 0 400 400"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M40 0H0V40"
                    fill="none"
                    stroke="rgba(236,227,210,0.08)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#grid)" />
              <path
                d="M40 320C90 260 60 200 130 170C200 140 180 80 260 60"
                fill="none"
                stroke="#445A43"
                strokeWidth="2"
                opacity="0.6"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <span className="w-3 h-3 rounded-full bg-gold animate-pulse" />
              <span className="eyebrow mt-4 text-ink/50">Origem</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { GalleryItem } from "@/data/gallery";
import { withBasePath } from "@/lib/basePath";

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNav: (dir: 1 | -1) => void;
}

export default function Lightbox({ items, index, onClose, onNav }: LightboxProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    }
    if (index !== null) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, onClose, onNav]);

  const active = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[70] bg-bg/96 backdrop-blur-sm flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-6 right-6 md:top-10 md:right-10 text-ink/70 hover:text-ink transition-colors"
          >
            <X size={26} strokeWidth={1.2} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNav(-1);
            }}
            aria-label="Imagem anterior"
            className="absolute left-4 md:left-10 text-ink/60 hover:text-ink transition-colors"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>

          <motion.div
            key={active.id}
            className="relative w-full max-w-3xl aspect-[4/5]"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full h-full">
              {active.src ? (
                <Image
                  src={withBasePath(active.src)}
                  alt={active.caption}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${active.tone}`}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <span className="eyebrow text-ink/60">{active.label}</span>
                  <p className="font-display italic text-2xl mt-2">{active.caption}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNav(1);
            }}
            aria-label="Próxima imagem"
            className="absolute right-4 md:right-10 text-ink/60 hover:text-ink transition-colors"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

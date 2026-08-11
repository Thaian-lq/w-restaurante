"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations/variants";
import { withBasePath } from "@/lib/basePath";

interface RevealImageProps {
  src?: string;
  alt: string;
  label?: string;
  tone?: "moss" | "ember" | "stone";
  className?: string;
  ratio?: string; // ex: "aspect-[4/5]"
  delay?: number;
}

const tones: Record<string, string> = {
  moss: "from-[#2c3a2c] via-[#445a43] to-[#1c241c]",
  ember: "from-[#3a2015] via-[#9c5330] to-[#1f120b]",
  stone: "from-[#39362f] via-[#6b665c] to-[#1c1a16]",
};

export default function RevealImage({
  src,
  alt,
  label,
  tone = "moss",
  className = "",
  ratio = "aspect-[4/5]",
  delay = 0,
}: RevealImageProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${ratio} ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{ hidden: {}, show: {} }}
    >
      <motion.div
        className="absolute inset-0 z-10 bg-bg origin-bottom"
        variants={{
          hidden: { scaleY: 1 },
          show: {
            scaleY: 0,
            transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay },
          },
        }}
      />
      <motion.div
        className="absolute inset-0"
        variants={{
          hidden: { scale: 1.18 },
          show: {
            scale: 1,
            transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay },
          },
        }}
      >
        {src ? (
          <Image
            src={withBasePath(src)}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${tones[tone]} flex items-end p-4`}
            role="img"
            aria-label={alt}
          >
            {label && (
              <span className="eyebrow text-ink/50">{label}</span>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

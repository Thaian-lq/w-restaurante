"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/animations/variants";

interface AnimatedTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  mode?: "words" | "chars";
  delay?: number;
  once?: boolean;
}

export default function AnimatedText({
  text,
  as = "p",
  className = "",
  mode = "words",
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const Tag = motion[as];
  const units = mode === "chars" ? Array.from(text) : text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        whileInView="show"
        viewport={once ? viewportOnce : undefined}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: mode === "chars" ? 0.018 : 0.06,
              delayChildren: delay,
            },
          },
        }}
        style={{ display: "inline-block" }}
      >
        {units.map((unit, i) => (
          <span key={i} style={{ display: "inline-block", overflow: "hidden" }}>
            <motion.span
              style={{ display: "inline-block" }}
              variants={{
                hidden: { y: "110%", opacity: 0 },
                show: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {unit === " " ? "\u00A0" : unit}
              {mode === "words" && i < units.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

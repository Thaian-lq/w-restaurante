"use client";

import { motion } from "framer-motion";

type Variant = "leaf" | "fork" | "knife" | "sprig";
type Side = "left" | "right";

interface DecorPieceProps {
  variant: Variant;
  side: Side;
  top?: string; // ex: "10%"
  size?: number;
  opacity?: number;
  rotate?: number;
  delay?: number;
}

const paths: Record<Variant, JSX.Element> = {
  leaf: (
    <path
      d="M4 60C4 60 8 20 40 6C72 -8 60 30 50 44C40 58 20 66 4 60Z
         M6 58C18 46 30 34 44 10"
      fill="none"
      strokeWidth="1.2"
    />
  ),
  sprig: (
    <path
      d="M30 62V6
         M30 16C30 16 14 12 8 22
         M30 26C30 26 46 20 52 30
         M30 36C30 36 12 32 6 42
         M30 46C30 46 48 40 54 50"
      fill="none"
      strokeWidth="1.1"
    />
  ),
  fork: (
    <path
      d="M14 4V26M22 4V26M30 4V26M14 20C14 30 30 30 30 20V4
         M22 30V80"
      fill="none"
      strokeWidth="1.2"
    />
  ),
  knife: (
    <path
      d="M20 4C20 4 34 10 34 26C34 38 24 42 20 42V80"
      fill="none"
      strokeWidth="1.2"
    />
  ),
};

function DecorPiece({
  variant,
  side,
  top = "20%",
  size = 90,
  opacity = 0.07,
  rotate = 0,
  delay = 0,
}: DecorPieceProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 60 80"
      className="absolute pointer-events-none hidden md:block"
      style={{
        top,
        [side]: "-1%",
        stroke: "var(--ink)",
        color: "var(--ink)",
      }}
      initial={{
        opacity: 0,
        x: side === "left" ? -24 : 24,
        rotate: rotate - 6,
      }}
      whileInView={{ opacity, x: 0, rotate }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay }}
      aria-hidden="true"
    >
      {paths[variant]}
    </motion.svg>
  );
}

/**
 * Camada decorativa de uma seção: 1-2 elementos discretos (folha/talher)
 * que aparecem pelas laterais ao entrar na viewport. Efeito bem sutil,
 * puramente atmosférico — nunca deve competir com o conteúdo.
 */
export default function SectionDecor({
  left,
  right,
}: {
  left?: { variant: Variant; top?: string; rotate?: number; size?: number };
  right?: { variant: Variant; top?: string; rotate?: number; size?: number };
}) {
  return (
    <div className="absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      {left && (
        <DecorPiece
          side="left"
          variant={left.variant}
          top={left.top}
          rotate={left.rotate}
          size={left.size}
        />
      )}
      {right && (
        <DecorPiece
          side="right"
          variant={right.variant}
          top={right.top}
          rotate={right.rotate}
          size={right.size}
          delay={0.15}
        />
      )}
    </div>
  );
}

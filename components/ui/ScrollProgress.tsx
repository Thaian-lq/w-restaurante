"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const path = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.4,
  });

  return (
    <div
      className="fixed right-6 top-0 bottom-0 z-50 hidden lg:flex items-center pointer-events-none"
      aria-hidden="true"
    >
      <svg
        width="14"
        height="220"
        viewBox="0 0 14 220"
        fill="none"
        className="overflow-visible"
      >
        <path
          d="M7 4C7 4 -2 40 7 76C16 112 -2 148 7 184C12 200 7 216 7 216"
          stroke="rgba(236,227,210,0.14)"
          strokeWidth="1"
        />
        <motion.path
          d="M7 4C7 4 -2 40 7 76C16 112 -2 148 7 184C12 200 7 216 7 216"
          stroke="#B08D57"
          strokeWidth="1.4"
          strokeLinecap="round"
          pathLength={1}
          style={{
            pathLength: path,
          }}
        />
      </svg>
    </div>
  );
}

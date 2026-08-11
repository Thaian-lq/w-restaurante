"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let curX = targetX;
    let curY = targetY;

    function onMove(e: MouseEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    function tick() {
      // easing, so the glow trails softly instead of snapping to the cursor
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      if (ref.current) {
        ref.current.style.setProperty("--gx", `${curX}px`);
        ref.current.style.setProperty("--gy", `${curY}px`);
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background:
          "radial-gradient(480px circle at var(--gx, 50%) var(--gy, 50%), rgba(176,141,87,0.055), transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}

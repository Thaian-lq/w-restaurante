"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const dishRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const { ref: parallaxRef, x, y } = useMouseParallax(14);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (!titleRef.current) return;

      // split title into chars
      const chars = titleRef.current.querySelectorAll(".char");

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.set(root.current, { autoAlpha: 1 })
        .from(bgRef.current, { opacity: 0, duration: 1.6, ease: "power2.out" }, 0)
        .from(
          eyebrowRef.current,
          { opacity: 0, y: 12, duration: 0.7 },
          0.3
        )
        .from(
          chars,
          {
            yPercent: 120,
            opacity: 0,
            duration: 0.9,
            stagger: 0.028,
          },
          0.45
        )
        .from(
          subRef.current,
          { opacity: 0, y: 18, duration: 0.9 },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          { opacity: 0, y: 22, duration: 0.8 },
          "-=0.6"
        )
        .from(
          dishRef.current,
          {
            opacity: 0,
            scale: 0.82,
            rotateX: 24,
            rotateY: -18,
            duration: 1.4,
            ease: "power3.out",
          },
          0.6
        );

      if (!prefersReduced) {
        // scroll disassembly
        gsap.to(titleRef.current, {
          yPercent: -18,
          opacity: 0.15,
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(dishRef.current, {
          scale: 1.25,
          y: -40,
          opacity: 0.25,
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        gsap.to(subRef.current, {
          opacity: 0,
          y: -20,
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "60% top",
            scrub: true,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative h-[100svh] w-full overflow-hidden bg-bg invisible"
      style={{ visibility: "visible" }}
    >
      {/* animated background */}
      <div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, rgba(68,90,67,0.35) 0%, rgba(20,18,15,0) 55%), radial-gradient(80% 60% at 80% 100%, rgba(156,83,48,0.25) 0%, rgba(20,18,15,0) 60%), #14120f",
        }}
      />

      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-gold/30"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animation: `floaty ${8 + (i % 5)}s ease-in-out ${i * 0.4}s infinite`,
            }}
          />
        ))}
      </div>

      <div
        ref={parallaxRef}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <div ref={eyebrowRef} className="eyebrow mb-6">
          Resende &middot; Mata Atlântica &middot; Menu degustação
        </div>

        <h1
          ref={titleRef}
          className="font-display font-light text-[13vw] md:text-[7.2vw] leading-[0.95] tracking-tight"
        >
          {"Origem".split("").map((c, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <span className="char inline-block">{c}</span>
            </span>
          ))}
        </h1>

        <motion.p
          ref={subRef}
          className="mt-6 max-w-md text-ink/70 text-base md:text-lg font-light"
        >
          Onde a floresta chega à mesa. Ingredientes nativos, técnica
          contemporânea, ritmo de fogo lento.
        </motion.p>

        <div ref={ctaRef} className="mt-10">
          <a
            href="#menu"
            className="inline-flex items-center gap-3 border border-gold/60 text-gold px-8 py-3 text-sm tracking-wide hover:bg-gold hover:text-bg transition-colors duration-500"
          >
            Ver menu degustação
          </a>
        </div>
      </div>

      {/* main dish — 3D entrance element */}
      <motion.div
        ref={dishRef}
        style={{
          x,
          y,
          transformStyle: "preserve-3d",
          perspective: 800,
        }}
        className="absolute bottom-[-6%] left-1/2 -translate-x-1/2 w-[70vw] max-w-[560px] aspect-square pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-ember/40 via-moss/10 to-transparent blur-2xl" />
        <div className="absolute inset-[18%] rounded-full border border-gold/20" />
        <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-[#2c3a2c] via-[#1c241c] to-transparent" />
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/40 text-xs">
        <span className="eyebrow">Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-ink/40 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-18px); opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}

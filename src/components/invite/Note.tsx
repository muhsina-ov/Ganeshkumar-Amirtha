import { motion } from "motion/react";
import { Reveal } from "./Reveal";

export function Note() {
  return (
    <section
      className="relative px-6 py-28 sm:py-40 flex flex-col items-center text-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, oklch(0.968 0.014 62), oklch(0.960 0.012 56), oklch(0.968 0.010 68))" }}
    >
      {/* Soft marigold bloom top-left */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-10 -left-16 rounded-full"
        style={{ width: 320, height: 280, background: "radial-gradient(ellipse, oklch(0.76 0.17 60 / 0.13), transparent 68%)" }} />
      {/* Soft rose bloom bottom-right */}
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -right-16 rounded-full"
        style={{ width: 280, height: 240, background: "radial-gradient(ellipse, oklch(0.60 0.18 2 / 0.10), transparent 68%)" }} />

      <Reveal>
        <p className="caps relative z-10 text-[0.65rem] tracking-[0.4em] mb-12"
          style={{ color: "oklch(0.52 0.11 195)" }}>
          The Invitation
        </p>
      </Reveal>

      <Reveal delay={0.15} className="relative z-10 w-full max-w-[38rem]">
        <div
          className="relative mx-auto rounded-2xl px-8 py-14 sm:px-16 sm:py-20 text-center"
          style={{
            background: "linear-gradient(145deg, oklch(0.978 0.008 68), oklch(0.962 0.014 62))",
            border: "1px solid oklch(0.76 0.17 60 / 0.30)",
            boxShadow: "0 2px 0 oklch(1 0 0 / 0.9) inset, 0 25px 60px -20px oklch(0.76 0.17 60 / 0.12), 0 4px 20px -8px rgba(40,28,10,0.06)",
          }}
        >
          {/* Corner ornaments — coloured */}
          {[
            "-top-0 -left-0",
            "-top-0 -right-0 scale-x-[-1]",
            "-bottom-0 -left-0 scale-y-[-1]",
            "-bottom-0 -right-0 scale-[-1]",
          ].map((pos, i) => (
            <svg key={i} viewBox="0 0 32 32" className={`absolute ${pos} w-8 h-8 m-3`}
              fill="none" stroke={i % 2 === 0 ? "oklch(0.76 0.17 60 / 0.5)" : "oklch(0.60 0.18 2 / 0.45)"}
              strokeWidth="0.7" aria-hidden="true">
              <path d="M2 14 C2 2 2 2 14 2" />
              <circle cx="2" cy="2" r="1.5" fill="currentColor" />
            </svg>
          ))}

          {/* Star badge — marigold */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-5"
            style={{ background: "oklch(0.968 0.014 62)" }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="h-px w-5" style={{ background: "oklch(0.76 0.17 60 / 0.6)" }} />
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M8 1l1.5 4.5L14 7l-4.5 1.5L8 15l-1.5-4.5L2 9l4.5-1.5L8 1Z"
                stroke="oklch(0.76 0.17 60)" strokeWidth="0.8" fill="oklch(0.76 0.17 60 / 0.3)" />
            </svg>
            <div className="h-px w-5" style={{ background: "oklch(0.60 0.18 2 / 0.55)" }} />
          </motion.div>

          {/* Label */}
          <p className="caps text-[0.65rem] tracking-[0.35em] mb-10 font-medium"
            style={{ color: "oklch(0.52 0.11 195)" }}>
            With the blessings of our families
          </p>

          {/* Body text */}
          <p className="text-[1.1rem] sm:text-[1.3rem] leading-[2.2]"
            style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontStyle: "italic", color: "oklch(0.28 0.025 30)" }}>
            We warmly invite you to celebrate our engagement
            and bless us as we begin this wonderful journey
            together. Your presence and blessings will make
            this occasion truly unforgettable.
          </p>

          {/* Bottom flourish — gradient */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="h-px w-8" style={{ background: "oklch(0.76 0.17 60 / 0.45)" }} />
            <svg viewBox="0 0 24 12" className="w-10 h-3" fill="none"
              stroke="oklch(0.60 0.18 2 / 0.5)" strokeWidth="0.8" aria-hidden="true">
              <path d="M2 6 C 6 2, 10 2, 12 6 C 14 10, 18 10, 22 6" />
            </svg>
            <div className="h-px w-8" style={{ background: "oklch(0.60 0.18 2 / 0.40)" }} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

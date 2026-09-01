import { motion } from "motion/react";
import { invite } from "@/config/invite";
import { Reveal } from "./Reveal";
import { Flourish } from "./Ornaments";

export function EventDetails() {
  return (
    <section
      className="relative px-6 py-28 sm:py-40 flex flex-col items-center text-center overflow-hidden"
      style={{ background: "linear-gradient(to bottom, oklch(0.960 0.012 56), oklch(0.955 0.020 50))" }}
    >
      {/* Ghost "17" watermark in maroon */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif leading-none will-change-transform"
        style={{ fontSize: "24rem", fontWeight: 700, color: "oklch(0.38 0.14 15 / 0.05)" }}
      >
        17
      </div>

      {/* Marigold bloom top */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
        style={{ width: 500, height: 200, background: "radial-gradient(ellipse, oklch(0.76 0.17 60 / 0.10), transparent 70%)" }} />

      {/* Label */}
      <Reveal>
        <p className="caps relative z-10 text-[0.65rem] tracking-[0.45em] mb-12"
          style={{ color: "oklch(0.60 0.18 2)" }}>
          The Evening
        </p>
      </Reveal>

      {/* DAY */}
      <Reveal delay={0.1}>
        <p className="script relative z-10 text-3xl sm:text-4xl mb-6" style={{ color: "oklch(0.52 0.11 195)" }}>
          Thursday
        </p>
      </Reveal>

      {/* BIG DATE */}
      <Reveal delay={0.2}>
        <div className="relative z-10 flex items-baseline justify-center gap-3 sm:gap-5">
          <motion.span
            className="font-serif leading-none"
            style={{ fontSize: "6.5rem", fontWeight: 300, letterSpacing: "-0.02em", color: "oklch(0.38 0.14 15)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          >
            17
          </motion.span>
          <div className="flex flex-col items-start mb-2">
            <motion.span
              className="script text-3xl sm:text-4xl leading-[1]"
              style={{ color: "oklch(0.76 0.17 60)" }}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            >
              September
            </motion.span>
            <motion.span
              className="caps text-[0.65rem] tracking-[0.3em] mt-1"
              style={{ color: "oklch(0.60 0.18 2 / 0.75)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              2026
            </motion.span>
          </div>
        </div>
      </Reveal>

      {/* Coloured flourish */}
      <Reveal delay={0.3}>
        <div className="relative z-10 mt-8 mb-8">
          <Flourish className="w-28" style={{ color: "oklch(0.76 0.17 60 / 0.55)" }} />
        </div>
      </Reveal>

      {/* TIME */}
      <Reveal delay={0.35}>
        <div className="relative z-10 flex items-center gap-4">
          <span className="font-serif text-2xl sm:text-3xl" style={{ letterSpacing: "0.04em", color: "oklch(0.28 0.025 30)" }}>
            6:00 PM
          </span>
          <span className="text-lg font-serif" style={{ color: "oklch(0.76 0.17 60)" }}>—</span>
          <span className="font-serif text-2xl sm:text-3xl" style={{ letterSpacing: "0.04em", color: "oklch(0.28 0.025 30)" }}>
            7:00 PM
          </span>
        </div>
      </Reveal>
    </section>
  );
}

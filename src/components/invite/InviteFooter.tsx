import { motion } from "motion/react";
import { useRef } from "react";
const footerBg = "https://media.invitestory.in/marigold-bhavan/src/assets/footer-bg.jpg";
import { invite } from "@/config/invite";
import { useParallax } from "@/hooks/use-parallax";
import { ScriptNames } from "./Reveal";

export function InviteFooter() {
  const ref = useRef<HTMLElement>(null);
  const { y } = useParallax(ref, [-70, 40], ["start end", "end end"]);

  return (
    <footer
      ref={ref}
      className="grain relative flex min-h-[80svh] items-center justify-center overflow-hidden px-6 pb-36 pt-24 text-center"
    >
      {/* Background image */}
      <motion.img
        src={footerBg} alt="" aria-hidden="true"
        width={1536} height={1024} loading="lazy"
        style={{ y }}
        className="absolute inset-0 size-full scale-125 object-cover will-change-transform"
      />

      {/* Warm ivory overlay */}
      <div aria-hidden="true" className="absolute inset-0" style={{ background: "oklch(0.968 0.014 62 / 0.78)" }} />

      {/* Gradient top/bottom fade */}
      <div aria-hidden="true" className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, oklch(0.968 0.014 62) 0%, transparent 22%, transparent 78%, oklch(0.968 0.014 62) 100%)" }} />

      {/* Marigold + rose centre bloom */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: 560, height: 420, background: "radial-gradient(ellipse, oklch(0.76 0.17 60 / 0.14), oklch(0.60 0.18 2 / 0.07) 50%, transparent 72%)" }} />

      <div className="relative z-10 flex flex-col items-center">
        {/* With love */}
        <motion.p
          className="caps text-[0.65rem] tracking-[0.45em] mb-8"
          style={{ color: "oklch(0.52 0.11 195)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
        >
          With love
        </motion.p>

        {/* Coloured rule */}
        <motion.div
          className="mb-10 h-px w-20 rounded-full"
          style={{ background: "linear-gradient(to right, oklch(0.76 0.17 60 / 0.7), oklch(0.60 0.18 2 / 0.6))" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
        />

        {/* Couple 1 */}
        <div className="script flex flex-col sm:flex-row items-center gap-x-3 text-[3rem] sm:text-5xl leading-[1.1]"
          style={{ color: "oklch(0.38 0.14 15)" }}>
          <ScriptNames text="Ganeshkumar" />
          <span className="text-2xl font-sans" style={{ color: "oklch(0.76 0.17 60)" }}>&amp;</span>
          <ScriptNames text="Amirtha Varsini" delay={0.15} />
        </div>

        {/* Divider */}
        <motion.div
          className="my-7 flex items-center gap-2"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="h-px w-6" style={{ background: "oklch(0.76 0.17 60 / 0.55)" }} />
          <div className="size-2.5 rotate-45" style={{ background: "oklch(0.76 0.17 60 / 0.25)", border: "1px solid oklch(0.76 0.17 60 / 0.6)" }} />
          <div className="h-px w-5" style={{ background: "oklch(0.76 0.17 60 / 0.4)" }} />
          <span className="caps text-[0.5rem] tracking-[0.3em] mx-1" style={{ color: "oklch(0.76 0.17 60)" }}>and</span>
          <div className="h-px w-5" style={{ background: "oklch(0.60 0.18 2 / 0.4)" }} />
          <div className="size-2.5 rotate-45" style={{ background: "oklch(0.60 0.18 2 / 0.25)", border: "1px solid oklch(0.60 0.18 2 / 0.55)" }} />
          <div className="h-px w-6" style={{ background: "oklch(0.60 0.18 2 / 0.55)" }} />
        </motion.div>

        {/* Couple 2 */}
        <div className="script flex flex-col sm:flex-row items-center gap-x-3 text-[3rem] sm:text-5xl leading-[1.1]"
          style={{ color: "oklch(0.38 0.14 15)" }}>
          <ScriptNames text="Risikesan" delay={0.3} />
          <span className="text-2xl font-sans" style={{ color: "oklch(0.60 0.18 2)" }}>&amp;</span>
          <ScriptNames text="Karthika Devi" delay={0.45} />
        </div>

        {/* Date */}
        <motion.p
          className="caps mt-12 text-[0.52rem] tracking-[0.3em]"
          style={{ color: "oklch(0.52 0.11 195 / 0.75)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.5 }}
        >
          {invite.dateLabel} &nbsp;·&nbsp; {invite.venue.name}
        </motion.p>

        <motion.a
          href="https://www.instagram.com/invitestory.in/"
          target="_blank" rel="noreferrer"
          className="caps mt-5 inline-block text-[0.48rem] tracking-[0.25em] transition-opacity hover:opacity-80"
          style={{ color: "oklch(0.52 0.11 195 / 0.55)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.6 }}
        >
          @invitestory.in
        </motion.a>
      </div>
    </footer>
  );
}

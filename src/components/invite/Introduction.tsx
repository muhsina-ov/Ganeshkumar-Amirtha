import { motion } from "motion/react";
import { invite } from "@/config/invite";
import { ScriptNames } from "./Reveal";

function DrawRule({ delay = 0 }: { delay?: number }) {
  return (
    <svg viewBox="0 0 200 4" className="w-full max-w-[12rem] overflow-visible h-4" aria-hidden="true">
      <motion.path
        d="M 0 2 Q 50 0.5, 100 2 Q 150 3.5, 200 2"
        stroke="oklch(0.76 0.17 60 / 0.55)"
        strokeWidth="0.7"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 2, delay, ease: [0.22, 0.61, 0.36, 1] }}
      />
    </svg>
  );
}

export function Introduction() {
  const ease = [0.22, 0.61, 0.36, 1] as const;

  return (
    <section
      className="relative flex flex-col items-center py-32 sm:py-44 px-6 text-center overflow-hidden"
      style={{ background: "linear-gradient(to bottom, oklch(0.975 0.010 68), oklch(0.965 0.018 62))" }}
    >
      {/* Marigold left wash */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-1/3 rounded-full"
        style={{ width: 360, height: 320, background: "radial-gradient(ellipse, oklch(0.76 0.17 60 / 0.14), transparent 68%)" }} />
      {/* Rose right wash */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-1/3 rounded-full"
        style={{ width: 300, height: 260, background: "radial-gradient(ellipse, oklch(0.60 0.18 2 / 0.12), transparent 68%)" }} />

      {/* Label */}
      <motion.p
        className="caps relative z-10 text-[0.65rem] tracking-[0.4em] text-teal sm:text-[0.72rem]"
        style={{ opacity: 0.85 }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease }}
      >
        Join us for the engagement of
      </motion.p>

      <motion.div className="relative z-10 mt-6 flex justify-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5, delay: 0.3 }}>
        <DrawRule delay={0.2} />
      </motion.div>

      {/* ── Couple 1 ── */}
      <div className="relative z-10 mt-10 flex flex-col items-center">
        {/* Marigold pill badge */}
        <motion.div
          className="mb-5 px-5 py-1.5 rounded-full text-paper caps text-[0.52rem] tracking-[0.3em]"
          style={{ background: "oklch(0.76 0.17 60 / 0.15)", border: "1px solid oklch(0.76 0.17 60 / 0.35)", color: "oklch(0.58 0.14 52)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Couple One
        </motion.div>

        {/* Groom */}
        <div className="script flex items-center justify-center text-[3.4rem] sm:text-6xl text-maroon leading-[1.08]">
          <ScriptNames text={invite.couples.couple1.groom.name} />
        </div>
        {invite.couples.couple1.groom.alias && (
          <motion.p className="text-sm font-serif italic text-sepia/80 -mt-1 mb-1"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            ({invite.couples.couple1.groom.alias})
          </motion.p>
        )}
        <motion.p className="caps mt-1 text-[0.55rem] tracking-[0.25em] text-sepia/75 font-medium"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: 0.4 }}>
          {invite.couples.couple1.groom.parents}
        </motion.p>

        {/* and separator with flourishes */}
        <motion.div
          className="my-3 flex items-center justify-center gap-3 text-marigold"
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className="h-px w-8 bg-marigold/40" />
          <span className="font-serif italic text-xl sm:text-2xl text-marigold">and</span>
          <span className="h-px w-8 bg-marigold/40" />
        </motion.div>

        {/* Bride */}
        <div className="script flex items-center justify-center text-[3.4rem] sm:text-6xl text-maroon leading-[1.08]">
          <ScriptNames text={invite.couples.couple1.bride.name} delay={0.2} />
        </div>
        <motion.p className="caps mt-1 text-[0.55rem] tracking-[0.25em] text-sepia/75 font-medium"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: 0.6 }}>
          {invite.couples.couple1.bride.parents}
        </motion.p>
      </div>

      {/* ── Coloured divider between couples ── */}
      <div className="relative z-10 my-14 flex flex-col items-center gap-3">
        <div className="h-14 w-px" style={{ background: "linear-gradient(to bottom, oklch(0.76 0.17 60 / 0.5), oklch(0.60 0.18 2 / 0.5))" }} />
        <motion.div
          className="size-3.5 rotate-45"
          style={{ background: "oklch(0.76 0.17 60 / 0.3)", border: "1px solid oklch(0.76 0.17 60 / 0.6)" }}
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        />
        <motion.p className="caps absolute top-1/2 -translate-y-1/2 text-[0.6rem] tracking-[0.35em] px-5"
          style={{ color: "oklch(0.76 0.17 60)", background: "oklch(0.965 0.018 62)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: 0.2 }}>
          along with
        </motion.p>
        <div className="h-14 w-px" style={{ background: "linear-gradient(to bottom, oklch(0.60 0.18 2 / 0.5), oklch(0.52 0.11 195 / 0.4))" }} />
      </div>

      {/* ── Couple 2 ── */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="mb-5 px-5 py-1.5 rounded-full caps text-[0.52rem] tracking-[0.3em]"
          style={{ background: "oklch(0.60 0.18 2 / 0.12)", border: "1px solid oklch(0.60 0.18 2 / 0.30)", color: "oklch(0.45 0.14 10)" }}
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.1 }}>
          Couple Two
        </motion.div>

        {/* Groom */}
        <div className="script flex items-center justify-center text-[3.4rem] sm:text-6xl text-maroon leading-[1.08]">
          <ScriptNames text={invite.couples.couple2.groom.name} delay={0.1} />
        </div>
        <motion.p className="caps mt-1 text-[0.55rem] tracking-[0.25em] text-sepia/75 font-medium"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: 0.4 }}>
          {invite.couples.couple2.groom.parents}
        </motion.p>

        {/* and separator with flourishes */}
        <motion.div
          className="my-3 flex items-center justify-center gap-3 text-rose"
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className="h-px w-8 bg-rose/40" />
          <span className="font-serif italic text-xl sm:text-2xl text-rose">and</span>
          <span className="h-px w-8 bg-rose/40" />
        </motion.div>

        {/* Bride */}
        <div className="script flex items-center justify-center text-[3.4rem] sm:text-6xl text-maroon leading-[1.08]">
          <ScriptNames text={invite.couples.couple2.bride.name} delay={0.25} />
        </div>
        <motion.p className="caps mt-1 text-[0.55rem] tracking-[0.25em] text-sepia/75 font-medium"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, delay: 0.6 }}>
          {invite.couples.couple2.bride.parents}
        </motion.p>
      </div>

      {/* Bottom draw rule */}
      <motion.div className="relative z-10 mt-14 flex justify-center"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}>
        <DrawRule />
      </motion.div>
    </section>
  );
}

import { motion, useReducedMotion, useTransform } from "motion/react";
import { useCallback, useRef, useState } from "react";
const couple = "https://media.invitestory.in/marigold-bhavan/src/assets/couple.png";
import { invite } from "@/config/invite";
import { useParallax } from "@/hooks/use-parallax";
import { getLenis } from "@/lib/lenis";
import { PetalBurst } from "./PetalBurst";
import { Petals } from "./Petals";

type Burst = { id: number; x: number; y: number };

function AmbientOrbs({ ready }: { ready: boolean }) {
  const orbs = [
    { left: "8%",  top: "12%", w: 260, h: 240, color: "oklch(0.76 0.17 60 / 0.22)", delay: 0.5, dur: 9  }, // marigold
    { left: "86%", top: "18%", w: 200, h: 180, color: "oklch(0.60 0.18 2 / 0.18)",  delay: 1.1, dur: 12 }, // rose
    { left: "5%",  top: "72%", w: 180, h: 160, color: "oklch(0.82 0.15 75 / 0.18)", delay: 0.8, dur: 10 }, // saffron
    { left: "90%", top: "62%", w: 220, h: 200, color: "oklch(0.52 0.11 195 / 0.14)",delay: 1.5, dur: 14 }, // teal
    { left: "50%", top: "42%", w: 340, h: 280, color: "oklch(0.88 0.08 5 / 0.12)",  delay: 0.3, dur: 8  }, // blush centre
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: o.left, top: o.top, width: o.w, height: o.h,
            transform: "translate(-50%,-50%)",
            background: `radial-gradient(ellipse, ${o.color}, transparent 70%)`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={ready
            ? { opacity: [0, 1, 0.6, 1, 0], scale: [0.5, 1, 0.85, 1.1, 0.5], y: [0, -14, 8, -8, 0] }
            : { opacity: 0 }}
          transition={{ duration: o.dur, delay: o.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function Hero({ ready = true }: { ready?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { y, progress } = useParallax(ref, [0, 90]);
  const fade = useTransform(progress, [0, 0.7], [1, 0]);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const ease = [0.22, 0.61, 0.36, 1] as const;

  const scatter = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (reduced) return;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const id = Date.now();
      setBursts((b) => [...b.slice(-2), { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
      if (navigator.vibrate) navigator.vibrate(8);
      window.setTimeout(() => setBursts((b) => b.filter((x) => x.id !== id)), 2600);
    },
    [reduced],
  );

  const scrollOn = () => {
    const target = ref.current?.nextElementSibling as HTMLElement | null;
    if (!target) return;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(target, { duration: 2, offset: -20 });
    else target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      onPointerDown={scatter}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center select-none"
    >
      <AmbientOrbs ready={ready} />
      <Petals />
      {bursts.map((b) => (
        <PetalBurst key={b.id} x={b.x} y={b.y} count={16} spread={150} seed={b.id % 11} />
      ))}

      {/* Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 55%, oklch(0.952 0.016 66 / 0.38) 100%)" }}
      />

      {/* SAVE THE DATE */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 18 }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 1.6, ease }}
      >
        <p className="caps text-[0.65rem] tracking-[0.45em] text-rose sm:text-[0.75rem]" style={{ opacity: 0.85 }}>
          Save the date
        </p>
        <motion.div
          className="mt-3 h-px w-16"
          style={{ background: "linear-gradient(to right, oklch(0.76 0.17 60 / 0.7), oklch(0.60 0.18 2 / 0.6), oklch(0.52 0.11 195 / 0.5))" }}
          initial={{ scaleX: 0 }}
          animate={ready ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.6, delay: 1.0, ease }}
        />
      </motion.div>

      {/* DATE */}
      <motion.p
        className="script relative z-10 mt-5 text-[4.5rem] leading-none sm:text-[5.5rem] text-maroon"
        initial={{ opacity: 0, y: 28, scale: 0.94 }}
        animate={ready ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 28, scale: 0.94 }}
        transition={{ duration: 1.8, delay: 0.5, ease }}
      >
        {invite.dateLabel}
      </motion.p>

      {/* ILLUSTRATION */}
      <motion.div style={{ y, opacity: fade }} className="relative z-10 mt-10 w-full max-w-[22rem] sm:max-w-lg">
        <motion.img
          src={couple}
          alt="Watercolour illustration of the couples"
          width={1024}
          height={1024}
          draggable={false}
          className="mx-auto w-full select-none drop-shadow-[0_30px_60px_rgba(80,20,20,0.10)]"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.97 }}
          transition={{ duration: 2.2, delay: 0.9, ease }}
        />
      </motion.div>

      {/* Coloured ornamental divider */}
      <motion.div
        className="relative z-10 mt-10 flex items-center"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={ready ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ duration: 1.8, delay: 2.0, ease }}
      >
        <div className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, oklch(0.76 0.17 60 / 0.8))" }} />
        <div className="mx-2 size-2.5 rotate-45 border border-marigold/70 bg-marigold/20" />
        <div className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, oklch(0.60 0.18 2 / 0.7))" }} />
      </motion.div>

      {/* SCROLL TO DISCOVER */}
      <motion.button
        type="button"
        onClick={(e) => { e.stopPropagation(); scrollOn(); }}
        aria-label="Scroll to discover"
        className="relative z-10 mt-14 flex flex-col items-center gap-3 px-8 pb-1"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 2.6 }}
        whileTap={{ scale: 0.93 }}
      >
        <motion.span
          className="caps text-[0.5rem] tracking-[0.35em] text-marigold"
          style={{ opacity: 0.85 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll to discover
        </motion.span>
        <motion.span
          aria-hidden="true"
          className="h-14 w-px"
          style={{ background: "linear-gradient(to bottom, oklch(0.76 0.17 60 / 0.8), transparent)", transformOrigin: "top" }}
          animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.button>
    </section>
  );
}

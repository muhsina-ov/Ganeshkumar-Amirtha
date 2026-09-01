import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { invite } from "@/config/invite";
import { Reveal } from "./Reveal";

const target = new Date(`${invite.start}${invite.timeZoneOffset}`).getTime();

function parts(diff: number) {
  const s = Math.max(0, Math.floor(diff / 1000));
  return {
    Days:    Math.floor(s / 86400),
    Hours:   Math.floor((s % 86400) / 3600),
    Minutes: Math.floor((s % 3600) / 60),
    Seconds: s % 60,
  };
}

const UNIT_COLORS = {
  Days:    "oklch(0.38 0.14 15)",   // maroon
  Hours:   "oklch(0.76 0.17 60)",   // marigold
  Minutes: "oklch(0.60 0.18 2)",    // rose
  Seconds: "oklch(0.52 0.11 195)",  // teal
} as const;

const UNIT_BORDER = {
  Days:    "oklch(0.38 0.14 15 / 0.22)",
  Hours:   "oklch(0.76 0.17 60 / 0.28)",
  Minutes: "oklch(0.60 0.18 2 / 0.22)",
  Seconds: "oklch(0.52 0.11 195 / 0.22)",
} as const;

function Unit({ label, value }: { label: string; value: number }) {
  const text = String(value).padStart(2, "0");
  const color = UNIT_COLORS[label as keyof typeof UNIT_COLORS];
  const border = UNIT_BORDER[label as keyof typeof UNIT_BORDER];

  return (
    <div className="flex flex-col items-center flex-1 min-w-0 px-1">
      <div
        className="w-full rounded-xl py-4 sm:py-6 mb-3 flex flex-col items-center"
        style={{ background: `color-mix(in oklch, ${color} 8%, oklch(0.978 0.008 68))`, border: `1px solid ${border}` }}
      >
        <div className="relative h-12 sm:h-16 overflow-hidden flex items-center justify-center w-full">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={text}
              className="absolute font-serif tabular-nums text-4xl sm:text-5xl"
              style={{ fontVariantNumeric: "tabular-nums", color, letterSpacing: "-0.01em" }}
              initial={{ y: "60%", opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: "-60%", opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {text}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="w-8 h-px mt-1" style={{ background: `${color}` }} />
      </div>
      <span className="caps text-[0.45rem] sm:text-[0.52rem] tracking-[0.25em]" style={{ color: `${color}` }}>
        {label}
      </span>
    </div>
  );
}

function Sep() {
  return (
    <div className="flex flex-col items-center self-start pt-4 sm:pt-6 shrink-0">
      <motion.span
        className="text-base sm:text-xl select-none font-serif"
        style={{ color: "oklch(0.72 0.11 72 / 0.5)" }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        ·
      </motion.span>
    </div>
  );
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const t = parts(now === null ? 0 : target - now);

  return (
    <section
      className="relative px-6 py-20 sm:py-28 flex flex-col items-center text-center overflow-hidden"
      style={{ background: "linear-gradient(to bottom, oklch(0.955 0.020 50), oklch(0.968 0.014 62))" }}
    >
      {/* Saffron left wash */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 rounded-full"
        style={{ width: 240, height: 300, background: "radial-gradient(ellipse, oklch(0.82 0.15 75 / 0.12), transparent 68%)" }} />
      {/* Teal right wash */}
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 rounded-full"
        style={{ width: 220, height: 280, background: "radial-gradient(ellipse, oklch(0.52 0.11 195 / 0.10), transparent 68%)" }} />

      <Reveal>
        <p className="caps relative z-10 text-[0.65rem] tracking-[0.4em] mb-10"
          style={{ color: "oklch(0.72 0.11 72)" }}>
          Counting down to the evening
        </p>
      </Reveal>

      <Reveal delay={0.15} className="relative z-10 w-full max-w-sm sm:max-w-md">
        <div
          className="relative rounded-2xl px-3 py-8 sm:px-6 sm:py-12"
          style={{
            background: "linear-gradient(160deg, oklch(0.978 0.008 68), oklch(0.962 0.014 60))",
            border: "1px solid oklch(0.76 0.17 60 / 0.22)",
            boxShadow: "0 2px 0 oklch(1 0 0 / 0.8) inset, 0 25px 50px -20px oklch(0.76 0.17 60 / 0.10)",
          }}
        >
          {/* Top coloured bar */}
          <div className="absolute top-0 inset-x-6 h-px rounded-full"
            style={{ background: "linear-gradient(to right, oklch(0.76 0.17 60 / 0.6), oklch(0.60 0.18 2 / 0.5), oklch(0.52 0.11 195 / 0.4))" }} />
          {/* Bottom bar */}
          <div className="absolute bottom-0 inset-x-6 h-px rounded-full"
            style={{ background: "linear-gradient(to right, oklch(0.52 0.11 195 / 0.3), oklch(0.76 0.17 60 / 0.4))" }} />

          <div className="flex items-stretch justify-center gap-0" suppressHydrationWarning>
            {(Object.keys(t) as Array<keyof typeof t>).map((k, i) => (
              <div key={k} className="flex items-stretch flex-1 min-w-0">
                {i > 0 && <Sep />}
                <Unit label={k} value={t[k]} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="script relative z-10 mt-12 text-3xl" style={{ color: "oklch(0.38 0.14 15)" }}>
          {invite.dayLine}
        </p>
      </Reveal>
    </section>
  );
}

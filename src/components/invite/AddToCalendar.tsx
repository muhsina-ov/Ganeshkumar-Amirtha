import { motion } from "motion/react";
import { useState } from "react";
import { downloadIcs, googleCalendarUrl } from "@/lib/calendar";
import { Reveal } from "./Reveal";

const tapFeedback = () => {
  if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(10);
};

export function AddToCalendar() {
  const [saved, setSaved] = useState(false);

  return (
    <section className="relative px-6 py-20 sm:py-28 flex flex-col items-center text-center bg-paper overflow-hidden">

      {/* Faint bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 400,
          height: 250,
          background: "radial-gradient(ellipse, oklch(0.88 0.055 80 / 0.08), transparent 70%)",
        }}
      />

      {/* Label */}
      <Reveal>
        <p className="caps relative z-10 text-[0.65rem] tracking-[0.4em] text-sepia/60 mb-4">
          Keep the evening free
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="script relative z-10 text-2xl text-sepia mb-10">
          Thursday, 17th September 2026
        </p>
      </Reveal>

      <Reveal delay={0.18} className="relative z-10 w-full max-w-xs">
        <div className="flex flex-col gap-3">

          {/* Primary - Save to Calendar */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              tapFeedback();
              downloadIcs();
              setSaved(true);
              setTimeout(() => setSaved(false), 3000);
            }}
            className="caps relative overflow-hidden flex min-h-14 items-center justify-center rounded-full bg-ink px-7 text-[0.55rem] tracking-[0.2em] text-paper transition-opacity duration-300 hover:opacity-85"
          >
            <motion.span
              key={saved ? "saved" : "save"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {saved ? "✓  Added to calendar" : "Save the date"}
            </motion.span>
          </motion.button>

          {/* Secondary - Google Calendar */}
          <motion.a
            whileTap={{ scale: 0.97 }}
            onClick={tapFeedback}
            href={googleCalendarUrl}
            target="_blank"
            rel="noreferrer"
            className="caps flex min-h-14 items-center justify-center rounded-full text-[0.55rem] tracking-[0.2em] text-ink transition-colors duration-300"
            style={{ border: "1px solid oklch(0.22 0.012 60 / 0.20)" }}
            whileHover={{ borderColor: "oklch(0.22 0.012 60 / 0.7)" }}
          >
            Add to Google Calendar
          </motion.a>
        </div>

        <p className="relative z-10 mt-6 text-sm italic text-sepia/60">
          A reminder will reach you a day before.
        </p>
      </Reveal>
    </section>
  );
}

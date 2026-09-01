import { motion } from "motion/react";
const mapImg = "https://media.invitestory.in/marigold-bhavan/src/assets/map.jpg";
import { directionsUrl, invite, mapsUrl } from "@/config/invite";
import { Reveal } from "./Reveal";

const tapFeedback = () => {
  if (typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(10);
};

export function Venue() {
  return (
    <section className="relative px-6 py-24 sm:py-32 flex flex-col items-center text-center bg-paper overflow-hidden">

      {/* Faint warm bloom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 460,
          height: 300,
          background: "radial-gradient(ellipse, oklch(0.89 0.05 82 / 0.09), transparent 70%)",
        }}
      />

      {/* Label */}
      <Reveal>
        <p className="caps relative z-10 text-[0.65rem] tracking-[0.4em] text-sepia/60 mb-6">
          The Venue
        </p>
      </Reveal>

      {/* Name */}
      <Reveal delay={0.1}>
        <h2 className="script relative z-10 text-4xl sm:text-5xl text-ink mb-2">
          {invite.venue.name}
        </h2>
      </Reveal>

      {/* Address */}
      <Reveal delay={0.15}>
        <p className="relative z-10 text-base leading-relaxed text-sepia/80 mb-10 max-w-xs mx-auto">
          {invite.venue.address}
        </p>
      </Reveal>

      {/* Map card */}
      <Reveal delay={0.2} className="relative z-10 w-full max-w-md">
        <motion.a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          onClick={tapFeedback}
          whileTap={{ scale: 0.985 }}
          className="group block rounded-2xl overflow-hidden"
          style={{
            border: "1px solid oklch(0.80 0.055 80 / 0.30)",
            boxShadow: "0 20px 50px -20px rgba(40,28,10,0.12)",
          }}
        >
          {/* Map image */}
          <div className="relative">
            <img
              src={mapImg}
              alt={`Map for ${invite.venue.name}`}
              width={1024}
              height={768}
              loading="lazy"
              className="h-52 w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.04] sm:h-60"
            />
            {/* Overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 50%, oklch(0.945 0.012 88 / 0.6) 100%)",
              }}
            />
            {/* Pulsing pin */}
            <motion.span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold ring-[6px] ring-gold/25"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Open in maps badge */}
            <span className="caps absolute bottom-4 left-1/2 -translate-x-1/2 flex min-h-10 items-center rounded-full bg-paper/90 px-5 text-[0.5rem] tracking-[0.25em] text-ink backdrop-blur-sm shadow-sm whitespace-nowrap">
              Open in Maps
            </span>
          </div>
        </motion.a>
      </Reveal>

      {/* Directions button */}
      <Reveal delay={0.3}>
        <motion.a
          href={directionsUrl}
          target="_blank"
          rel="noreferrer"
          onClick={tapFeedback}
          whileTap={{ scale: 0.96 }}
          className="relative z-10 caps mt-7 inline-flex min-h-14 items-center gap-2.5 rounded-full px-10 text-[0.55rem] tracking-[0.25em] text-ink transition-all duration-500"
          style={{
            border: "1px solid oklch(0.22 0.012 60 / 0.22)",
          }}
          whileHover={{ borderColor: "oklch(0.22 0.012 60 / 0.8)", backgroundColor: "oklch(0.22 0.012 60)", color: "oklch(0.972 0.008 90)" }}
        >
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
            <path d="M8 2a5 5 0 1 1 0 8 5 5 0 0 1 0-8Zm0 3v2l1.5 1" strokeLinecap="round" />
          </svg>
          Get directions
        </motion.a>
      </Reveal>
    </section>
  );
}

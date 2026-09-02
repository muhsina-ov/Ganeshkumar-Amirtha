import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import paper from "@/assets/paper.jpg";
import { ActionBar } from "@/components/invite/ActionBar";
import { AddToCalendar } from "@/components/invite/AddToCalendar";
import { Countdown } from "@/components/invite/Countdown";
import { Envelope } from "@/components/invite/Envelope";
import { EventDetails } from "@/components/invite/EventDetails";
import { Hero } from "@/components/invite/Hero";
import { Introduction } from "@/components/invite/Introduction";
import { InviteFooter } from "@/components/invite/InviteFooter";
import { Note } from "@/components/invite/Note";
import { ScrollThread } from "@/components/invite/ScrollThread";
import { Venue } from "@/components/invite/Venue";
import { invite } from "@/config/invite";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const title = `Ganeshkumar & Amirtha Varsini, Rishikesan & Karthika Devi — ${invite.dayLine.split(",")[1]?.trim() ?? invite.dateLabel}`;
const description = `Ganeshkumar & Amirtha Varsini along with Rishikesan & Karthika Devi invite you to their engagement on ${invite.dayLine} at ${invite.venue.name}.`;

const prodUrl = "https://ganeshkumar-amirtha-rishikesan-karthika.invitestory.in";
const ogImageUrl = `${prodUrl}/og-image.png`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${title} · Save the Date` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} · Save the Date` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: prodUrl },
      { property: "og:image", content: ogImageUrl },
      { property: "og:image:secure_url", content: ogImageUrl },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { property: "og:site_name", content: "Ganeshkumar & Amirtha Varsini, Rishikesan & Karthika Devi Wedding Invitation" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${title} · Save the Date` },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImageUrl },
    ],
    links: [{ rel: "canonical", href: prodUrl }],
  }),
  component: Invitation,
});

function Invitation() {
  useSmoothScroll();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Envelope onOpen={() => setOpened(true)} />
      <ScrollThread />
      <main
        className="grain relative min-h-screen bg-paper text-ink"
        style={{ backgroundImage: `url(${paper})`, backgroundSize: "480px" }}
      >
        {/* 1. Hero — Save the Date */}
        <Hero ready={opened} />

        {/* 2. Couple Introduction */}
        <Introduction />

        {/* 3. Invitation Message */}
        <Note />

        {/* 4. Event Details */}
        <EventDetails />

        {/* 5. Countdown */}
        <Countdown />

        {/* 6. Venue */}
        <Venue />

        {/* 7. Add to Calendar / RSVP */}
        <AddToCalendar />

        {/* 8. Closing footer */}
        <InviteFooter />
      </main>
      <ActionBar />
    </>
  );
}

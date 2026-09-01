// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE ONLY when cloning this template for a client.
// ─────────────────────────────────────────────────────────────

export const invite = {
  bride: "Amirtha Varsini & Karthika Devi",
  groom: "Ganeshkumar & Risikesan",
  /** Shown big in the hero */
  dateLabel: "17.09.26",
  /** Local start / end of the main function (ISO, no timezone) */
  start: "2026-09-17T18:00:00",
  end: "2026-09-17T19:00:00",
  /** IANA timezone of the venue */
  timeZoneOffset: "+05:30",
  dayLine: "Thursday, 17th September 2026",
  timeLine: "6:00 PM to 7:00 PM",
  eventTitle: "Engagement of Ganeshkumar & Amirtha Varsini, Risikesan & Karthika Devi",
  invitationNote:
    "We warmly invite you to celebrate our engagement and bless us as we begin this wonderful journey together. Your presence and blessings will make this occasion truly unforgettable.",
  venue: {
    name: "V S Chellam Saraswathy Maaligai",
    address: "V S Chellam Saraswathy Maaligai",
    /** Used for the Google Maps deep link */
    query: "V S Chellam Saraswathy Maaligai",
    lat: 9.92520, // default placeholder lat
    lng: 78.11977, // default placeholder lng (Madurai, usually V S Chellam is in Madurai)
  },
  closing: "See you there",
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  invite.venue.query,
)}`;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  invite.venue.query,
)}`;

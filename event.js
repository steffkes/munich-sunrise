export const event = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  url: "http://www.munich-sunrise.de",
  name: "Munich Sunrise",
  description: "Feuerwehr-Treppenlauf in den Sonnenaufgang",
  startDate: "2026-07-25",
  endDate: "2026-07-25",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  organizer: {
    "@type": "Person",
    name: "Stefan Matheis",
    email: "mailto:stefan.matheis@munich-sunrise.de",
    telephone: "+49 160 970 48 114",
  },
  location: {
    "@type": "Place",
    name: "Highlight Towers München",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mies-van-der-Rohe-Straße 6",
      postalCode: "80807",
      addressLocality: "München",
      addressRegion: "BY",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "48.1768687",
      longitude: "11.5924497",
    },
  },
  image: [
    "https://www.munich-sunrise.de/images/1x1.jpg",
    "https://www.munich-sunrise.de/images/4x3.jpg",
    "https://www.munich-sunrise.de/images/16x9.jpg",
  ],
};

export const formattedDate = new Date(event.startDate).toLocaleDateString(
  "de-DE",
  {
    weekday: "long",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  },
);

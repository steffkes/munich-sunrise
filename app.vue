<script setup>
const { event, formattedDate } = await useEvent();

const activeModal = ref(false);

useSeoMeta({
  ogImage: "/og.jpg",
  description: event.description,
});

useHead({
  titleTemplate: (pageTitle) =>
    [pageTitle, event.name].filter(Boolean).join(" | "),
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "apple-mobile-web-app-title", content: event.name },
  ],
  script: [
    {
      src: "/pl/script.js",
      "data-api": "/pl/event",
      "data-domain": "munich-sunrise.gelungen.es",
      defer: true,
    },
    {
      type: "application/ld+json",
      children: JSON.stringify(event),
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-96x96.png",
      sizes: "96x96",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.svg",
    },
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
});
</script>

<template>
  <div class="columns is-gapless" style="min-height: 100vh">
    <!-- min-height on column needed for mobile -->
    <div
      class="column is-5"
      style="
        background-image: url(/images/hero.jpg);
        background-size: cover;
        background-position: 62% 50%;
        min-height: 50vh;
      "
    >
      &nbsp;
    </div>

    <div class="column">
      <div
        class="modal"
        :class="{ 'is-active': activeModal }"
        @click="activeModal = false"
      >
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image">
            <img src="/qr-code.svg" />
          </p>
        </div>
      </div>
      <a
        class="is-hidden-desktop"
        @click="activeModal = true"
        style="position: fixed; right: 0px; bottom: 0px"
        ><img
          src="/qr-code.svg"
          style="opacity: 0.1; height: 20px; margin: 10px"
      /></a>

      <div class="my-6 px-6">
        <div class="content">
          <h1 class="title">Munich Sunrise</h1>
          <p class="subtitle mb-6">Highlight Towers München</p>

          <p>
            Feuerwehr-Treppenlauf in den Sonnenaufgang. 32 Stockwerke. Alles
            Glas. Treppenhäuser, Zielbereich – ja, auch die Toiletten. Start,
            Stufen, Ziel. Oben dann: München. Komplett. Ohne Filter.
          </p>

          <p>Hast du Bock drauf? Dann jetzt direkt zuschlagen und kaufen:</p>

          <p>
            <a
              href="https://www.paypal.com/ncp/payment/M78QDRMBT5752"
              class="button is-primary is-block"
              >Ich will mein Early-Bird-Ticket haben!</a
            >
          </p>

          <p>
            <strong>Kein Risiko.</strong> Findet der Wettkampf nicht statt,
            gibt’s dein Geld vollständig zurück. Passt dir der Termin nicht,
            nimmst du den Startplatz einfach in einem der Folgejahre.
          </p>

          <h2>Unsere Tickets</h2>

          <p>
            <span class="tag"><strong class="mr-1">79€</strong> Früh dran</span>
            Für alle, die nicht erst Tabellen vergleichen und Wetterberichte
            lesen. Anmelden, vorbereiten, laufen.
            <strong>Limitiert auf 50 Plätze – danach ist halt vorbei.</strong>
          </p>
          <p>
            <span class="tag"
              ><strong class="mr-1">89€</strong> Passt scho</span
            >
            Für alle, die sich noch denken: „Ja, klingt gut … muss ich mir aber
            erst noch überlegen.“ München lohnt sich. Der Ausblick auch. Und die
            Stufen laufen nicht von selbst weg.
          </p>
          <p>
            <span class="tag"><strong class="mr-1">99€</strong> Spät dran</span>
            Für alle, die zu lange gezögert haben und jetzt merken, dass sie
            doch dabei sein wollen. Kurz überlegen, buchen, starten. Reicht dann
            auch.
          </p>
        </div>
      </div>

      <CompetitionsFooter mail="stefan@gelungen.es" />
    </div>
  </div>
</template>

<style>
@import url("bulma");
</style>

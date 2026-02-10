<script setup>
const { event, formattedDate } = await useEvent();

const activeModal = ref(false);

useSeoMeta({
  ogImage: "/og.jpg",
  description:
    formattedDate + " @ " + event.location.name + ": " + event.description,
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
      "data-domain": "munich-sunrise.de",
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
    <div style="position: relative" class="column is-5">
      <!-- min-height on column needed for mobile -->
      <!-- @ mobile -->
      <div
        class="is-hidden-tablet"
        style="
          background-image: url(/images/hero.jpg);
          background-size: cover;
          background-position: 0% 50%;
          min-height: 50vh;
        "
      >
        &nbsp;
      </div>

      <!-- @ desktop -->
      <div
        class="is-hidden-touch"
        style="
          position: fixed;
          width: 42%;
          height: 100%;
          background-image: url(/images/hero.jpg);
          background-size: cover;
          background-position: 75% 0%;
        "
      >
        &nbsp;
      </div>
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
          <h1 class="title">{{ event.name }}</h1>
          <p class="subtitle mb-6">
            {{ formattedDate }} @ {{ event.location.name }}
          </p>

          <p>
            Feuerwehr-Treppenlauf in den Sonnenaufgang. 32 Stockwerke. Alles
            Glas. Treppenhäuser, Zielbereich – ja, auch die Toiletten. Start,
            Stufen, Ziel. Oben dann: München. Komplett. Ohne Filter.
          </p>

          <p>Hast du Bock drauf? Dann jetzt direkt zuschlagen und kaufen:</p>

          <p>
            <a
              href="https://www.paypal.com/ncp/payment/M78QDRMBT5752"
              class="button is-success is-block"
              >Ich will unser Early-Bird-Ticket haben!</a
            >
          </p>

          <p>
            <strong>Kein Risiko.</strong> Findet der Wettkampf nicht statt,
            gibt’s dein Geld vollständig zurück. Passt dir der Termin nicht,
            nimmst du den Startplatz einfach in einem der Folgejahre.
          </p>

          <h2>Unsere Tickets</h2>

          <p class="has-text-grey-light">
            Preise jeweils für euer Team à zwei Personen
          </p>

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
            auch. <strong>Ab 25.06.26</strong>
          </p>

          <h2>Unser Wettkampf</h2>

          <p>
            Was in Berlin geht, geht auch in München. Gelaufen wird ein
            Feuerwehr-Treppenlauf im Zweiertrupp. Entweder angeschlossen oder –
            falls du deiner Lunge nicht vollständig vertraust – auch nicht.
            Ansonsten gilt: klassische Einsatzmontur. Helm, Jacke, Handschuhe,
            Hose und stabile Stiefel. Kurz gesagt alles, was man auch bei der
            Innenbrandbekämpfung nicht zuhause lässt.
          </p>

          <p>
            Gelaufen wird – getreu dem Namen der Veranstaltung – in den
            Sonnenaufgang hinein. Das bedeutet einen entsprechend frühen Start.
            Für alle, die morgens noch nicht vollständig einsatzfähig sind, gibt
            es aber auch spätere Startplätze. Kaffee gibt’s danach. Versprochen.
          </p>
        </div>
      </div>

      <CompetitionsFooter :event="event" />
    </div>
  </div>
</template>

<style>
@import url("bulma");
</style>

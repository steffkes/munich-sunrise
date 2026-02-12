<script setup>
const { event, formattedDate } = await useEvent();

const activeModal = ref(false);

useSeoMeta({
  ogImage: "/og.jpg",
  description:
    formattedDate + " @ " + event.location.name + ": " + event.description,
});

const activeNavbar = ref(false);
const toggleNavbar = () => (activeNavbar.value = !activeNavbar.value);

const route = useRoute();

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
        </div>
      </div>

      <nav
        class="navbar px-6 is-transparent is-light"
        style="background-color: transparent"
      >
        <div class="navbar-brand">
          <a
            class="navbar-burger"
            :class="{ 'is-active': activeNavbar }"
            @click="toggleNavbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': activeNavbar }">
          <div class="navbar-start">
            <a
              href="/"
              class="navbar-item"
              :class="{ 'is-selected': route.path == '/' }"
              >Startseite</a
            >

            <div class="navbar-item has-dropdown is-hoverable">
              <a
                class="navbar-link"
                :class="{ 'is-selected': route.path.startsWith('/wettkampf') }"
              >
                Wettkampf
              </a>

              <div class="navbar-dropdown">
                <a
                  href="/wettkampf/konzept"
                  :class="{ 'is-selected': route.path == '/wettkampf/konzept' }"
                  class="navbar-item"
                >
                  Konzept
                </a>
                <a
                  href="/wettkampf/zeitplan"
                  :class="{
                    'is-selected': route.path == '/wettkampf/zeitplan',
                  }"
                  class="navbar-item"
                >
                  Zeitplan
                </a>
                <a
                  href="/wettkampf/regeln"
                  :class="{ 'is-selected': route.path == '/wettkampf/regeln' }"
                  class="navbar-item"
                >
                  Regeln
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a
                  href="/anmeldung"
                  class="button"
                  :class="[
                    route.path == '/anmeldung' ? 'is-light' : 'is-success',
                  ]"
                >
                  Anmeldung 2026
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <slot />

      <CompetitionsFooter :event="event" class="px-6" />
    </div>
  </div>
</template>

<style>
@import url("bulma");
</style>

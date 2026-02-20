import { event } from "./event.js";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  features: {
    inlineStyles: false,
  },
  extends: ["github:steffkes/competitions-layer"],
  modules: ["@nuxtjs/plausible"],
  plausible: {
    domain: new URL(event.url).hostname.replace(/^www\./, ""),
  },
});

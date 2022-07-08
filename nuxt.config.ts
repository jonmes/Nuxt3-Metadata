import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "HahuJobs",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "HaHu Jobs" },
        { property: "og:url", content: "https://nuxt-static-dep.netlify.app/" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "HaHu Jobs" },
        { property: "og:description", content: "HaHu Jobs" },
        { property: "og:image", content: "/images/logo_150.png" },

        // twitter
        { name: "twitter:card", content: "summary_large_image" },
        { property: "twitter:domain", content: "nuxt-static-dep.netlify.app" },
        {
          property: "twitter:url",
          content: "https://nuxt-static-dep.netlify.app/",
        },
        { name: "twitter:title", content: "HaHu Jobs" },
        { name: "twitter:description", content: "HaHu Jobs" },
        { name: "twitter:image", content: "/images/logo_150.png" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/images/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;800;900&display=swap",
          rel: "stylesheet",
        },
      ],
      // link: [],
      // link: [

      // ],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    preference: "light", // default value of $colorMode.preference
    // fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
});

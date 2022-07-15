import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "HahuJobs",
      meta: [
        { "data-n-head": "1", charset: "utf-8" },
        {
          "data-n-head": "1",
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          "data-n-head": "1",
          "data-hid": "description",
          name: "description",
          content:
            "Hey there, ሰላም ነው? Welcome to HaHuJobs the larges data driven job matching and labor market information platform in Ethiopia. With various service deployments to address the Ethiopian labor market needs; we stand at the for front of the local digital job matching industry.",
        },
        {
          "data-n-head": "1",
          property: "og:url",
          content: "https://Hahu-nuxt-3-dep.netlify.app/",
        },
        { "data-n-head": "1", property: "og:type", content: "website" },
        { "data-n-head": "1", property: "og:title", content: "Hahu Jobs" },
        {
          "data-n-head": "1",
          property: "og:description",
          content:
            "Hey there, ሰላም ነው? Welcome to HaHuJobs the larges data driven job matching and labor market information platform in Ethiopia. With various service deployments to address the Ethiopian labor market needs; we stand at the for front of the local digital job matching industry.",
        },
        {
          "data-n-head": "1",
          property: "og:image",
          content: "https://Hahu-nuxt-3-dep.netlify.app/images/meta_img.png",
        },

        // twitter
        {
          "data-n-head": "1",
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          "data-n-head": "1",
          property: "twitter:domain",
          content: "Hahu-nuxt-3-dep.netlify.app",
        },
        {
          property: "twitter:url",
          content: "https://Hahu-nuxt-3-dep.netlify.app/",
        },
        { "data-n-head": "1", property: "twitter:title", content: "Hahu Jobs" },
        {
          "data-n-head": "1",
          property: "twitter:description",
          content:
            "Hey there, ሰላም ነው? Welcome to HaHuJobs the larges data driven job matching and labor market information platform in Ethiopia. With various service deployments to address the Ethiopian labor market needs; we stand at the for front of the local digital job matching industry.",
        },
        { name: "twitter:image", content: "/images/logo_150.png" },
        {
          "data-n-head": "1",
          property: "twitter:image",
          content: "https://Hahu-nuxt-3-dep.netlify.app/images/meta_img.png",
        },
      ],
      link: [
        {
          "data-n-head": "1",
          rel: "icon",
          type: "image/x-icon",
          href: "/images/favicon.ico",
        },
        {
          "data-n-head": "1",
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/images/favicon.ico",
        },
        {
          "data-n-head": "1",
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/images/favicon.ico",
        },
        {
          "data-n-head": "1",
          rel: "icon",
          type: "image/png",
          sizes: "96x96",
          href: "/images/favicon.ico",
        },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          "data-n-head": "1",
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.9.0/css/all.css",
        },
        { href: "https://www.google-analytics.com", rel: "preconnect" },

        {
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700;800;900&display=swap",
          rel: "stylesheet",
        },
      ],
      // script: [
      //   {
      //     src: "https://www.google-analytics.com/analytics.js",
      //     charset: "utf-8",
      //     async: true,
      //   },
      // ],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@vueuse/nuxt"],
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

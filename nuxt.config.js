import { defineNuxtConfig } from "nuxt";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineNuxtConfig({
  //Metadata
  app: {
    head: {
      title: "Nuxt Meta test",
      meta: [
        { "data-n-head": "ssr", charset: "utf-8" },
        {
          "data-n-head": "ssr",
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "description",
          name: "description",
          content: "Testing Meta data",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "og:url",
          property: "og:url",
          content: "https://nuxt-3-meta-test.netlify.app/",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "og:type",
          property: "og:type",
          content: "website",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "og:title",
          property: "og:title",
          content: "Hahu Jobs",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "og:description",
          property: "og:description",
          content: "Testing Meta data",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "og:image",
          property: "og:image",
          content: "https://nuxt-3-meta-test.netlify.app/images/meta_img.png",
        },

        // twitter
        {
          "data-n-head": "ssr",
          "data-hid": "twitter:card",
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "twitter:domain",
          property: "twitter:domain",
          content: "Hahu-nuxt-3-dep.netlify.app",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "twitter:url",
          property: "twitter:url",
          content: "https://nuxt-3-meta-test.netlify.app/",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "twitter:title",
          property: "twitter:title",
          content: "Hahu Jobs",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "twitter:description",
          property: "twitter:description",
          content: "Testing Meta data",
        },
        {
          "data-n-head": "ssr",
          "data-hid": "twitter:image",
          property: "twitter:image",
          content: "/images/logo_150.png",
        },
      ],
    },
  },
  image: {
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  modules: ["@nuxt/image-edge"],
  vite: {
    plugins: [
      VueI18nPlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
        ],
      }),
    ],
  },
  build: {
    transpile: ["@intlify/unplugin-vue-i18n", "@nuxt/image-edge"],
  },
});

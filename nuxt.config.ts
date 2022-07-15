import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt Meta test",
      meta: [
        { "data-n-head": "ssr", charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        {
          name: "description",
          content: "Testing Meta data",
        },
        {
          property: "og:url",
          content: "https://nuxt-3-meta-test.netlify.app/",
        },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Hahu Jobs" },
        {
          property: "og:description",
          content: "Testing Meta data",
        },
        {
          property: "og:image",
          content: "https://nuxt-3-meta-test.netlify.app/images/meta_img.png",
        },

        // twitter
        {
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:domain",
          content: "Hahu-nuxt-3-dep.netlify.app",
        },
        {
          property: "twitter:url",
          content: "https://nuxt-3-meta-test.netlify.app/",
        },
        {
          "data-n-head": "ssr",
          hid: "twitter:title",
          property: "twitter:title",
          content: "Hahu Jobs",
        },
        {
          property: "twitter:description",
          content: "Testing Meta data",
        },
        { name: "twitter:image", content: "/images/logo_150.png" },
        {
          property: "twitter:image",
          content: "https://nuxt-3-meta-test.netlify.app/images/meta_img.png",
        },
      ],
    },
  },
});

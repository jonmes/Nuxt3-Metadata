import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt Meta test",
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
          content: "Testing Meta data",
        },
        {
          "data-n-head": "1",
          property: "og:url",
          content: "https://nuxt-3-meta-test.netlify.app/",
        },
        { "data-n-head": "1", property: "og:type", content: "website" },
        { "data-n-head": "1", property: "og:title", content: "Hahu Jobs" },
        {
          "data-n-head": "1",
          property: "og:description",
          content: "Testing Meta data",
        },
        {
          "data-n-head": "1",
          property: "og:image",
          content: "https://nuxt-3-meta-test.netlify.app/images/meta_img.png",
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
          content: "https://nuxt-3-meta-test.netlify.app/",
        },
        { "data-n-head": "1", property: "twitter:title", content: "Hahu Jobs" },
        {
          "data-n-head": "1",
          property: "twitter:description",
          content: "Testing Meta data",
        },
        { name: "twitter:image", content: "/images/logo_150.png" },
        {
          "data-n-head": "1",
          property: "twitter:image",
          content: "https://nuxt-3-meta-test.netlify.app/images/meta_img.png",
        },
      ],
    },
  },
});

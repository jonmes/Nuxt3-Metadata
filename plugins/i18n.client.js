import { createI18n } from "petite-vue-i18n";
// import messages from "@intlify/vite-plugin-vue-i18n/messages";

const i18n = createI18n({
  legacy: false,
  locale: "en",
//   messages,
  fallbackLocale: "en",
  globalInjection: true,
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n);
});

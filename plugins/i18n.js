import { createI18n } from 'petite-vue-i18n'
import en from '../locales/en.json'
import am from '../locales/am.json'
import messages from "@intlify/unplugin-vue-i18n/messages"

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: 'en',
    locale: 'en',
    availableLocales: ["en", "am"],
    messages
})
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(i18n)
})

export { i18n }
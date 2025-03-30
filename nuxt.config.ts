// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxt/image', '@nuxt/eslint'],

  typescript: {
    strict: true,
    typeCheck: true
  },

  css: ['@/assets/scss/main.scss'],

  runtimeConfig: {
    public: {
      apiBase: 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work'
    }
  },

  image: {
    provider: 'ipx',
    domains: ['placehold.co'],
    format: ['webp'],
    quality: 80
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  nitro: {
    compressPublicAssets: true
  },

  compatibilityDate: '2025-03-27'
});

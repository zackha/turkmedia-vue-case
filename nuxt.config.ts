// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/css/main.scss', '@/assets/css/index.scss'],
  app: {
    head: {
      script: [
        {
          src: 'https://www.aksam.com.tr/assets-aksam/js/min/scripts-min.js',
          type: 'text/javascript',
          defer: true,
        },
      ],
    },
  },
  modules: ['@nuxt/icon', '@nuxthub/core'],
  hub: {
    cache: true,
  },
});

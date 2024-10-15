export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#c7a142' },
      ],
    },
  },

  srcDir: 'src/',
  modules: ['@unocss/nuxt', '@nuxt/image', '@nuxtjs/color-mode', '@nuxtjs/fontaine', '@nuxtjs/sitemap', '@vueuse/nuxt', 'nuxt-aos', 'nuxt-og-image'],

  site: {
    url: 'https://mie-ayam-ummi.vercel.app',
  },

  ogImage: {
    fonts: [
      'Outfit:400',
    ],
  },

  colorMode: {
    classSuffix: '',
    preference: 'light',
  },

  fontMetrics: {
    fonts: ['Outfit'],
  },

  devtools: {
    enabled: true,
  },

  sitemap: {
    xsl: false,
  },

  compatibilityDate: '2024-10-15',
});

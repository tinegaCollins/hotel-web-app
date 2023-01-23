import presetIcons from '@unocss/preset-icons'

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css', '~/assets/css/global.css'],
    buildModules: ['@nuxtjs/tailwindcss','nuxt-swiper', '@unocss/nuxt', '@nuxtjs/color-mode',"nuxt-icon"],
    colorMode: {
        classSuffix: '',
    },
    app: {
        head: {
            title: 'Modern chefs',
            meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              {
                hid: 'chefs',
                name: 'chefs',
                content: 'modern Chefs'
              }
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
          },
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    unocss: {
        icons: true,
        presets: [presetIcons({})],
    },
})

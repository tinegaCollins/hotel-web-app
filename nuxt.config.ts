import presetIcons from '@unocss/preset-icons'
// eslint-disable-next-line no-undef

export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css', '~/assets/css/global.css'],
    buildModules: ['@nuxtjs/tailwindcss', '@unocss/nuxt', '@nuxtjs/color-mode',"nuxt-icon"],

    head: {
      //...
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Crimson+Pro'
        }
      ]
    },
  

  // register nitro plugin
	nitro: {
        plugins: ['@/server/db/index.ts'],
	},
  // server config variable
	// runtimeConfig: {
	// 	MONGO_URI: process.env.MONGO_URI,
	// },
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

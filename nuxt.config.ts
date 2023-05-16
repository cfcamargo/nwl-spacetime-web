// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    components : [{path: '@/components', pathPrefix : false}],
    modules:['@nuxtjs/google-fonts', '@nuxtjs/google-fonts', '@pinia/nuxt',],

    googleFonts: {
        families: {
          Roboto: [400, 500, 700,],
          BaiJamjuree: [700],
        }
      }
})

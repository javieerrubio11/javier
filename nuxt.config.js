require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Javier',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [ ],
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  css: [
    { src: '~/assets/main.css' },
    { src: '@mdi/font/css/materialdesignicons.css' },
    { src: 'material-design-icons-iconfont/dist/material-design-icons.css' },
    { src: 'animate.css/animate.min.css' },
  ],

  plugins: [
    { src: '~/plugins/vuetify' },
    { src: '~/plugins/i18n' },
    { src: '~/plugins/swiper', ssr: false },
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/particle', ssr: false },
    { src: '~/plugins/chat', ssr: false },
    { src: '~/plugins/icountup', ssr: false },
  ],

  modules: [
    { src: '@nuxtjs/dotenv' },
  ]
}

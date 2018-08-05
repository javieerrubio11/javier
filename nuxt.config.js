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
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.5/jquery.fullpage.min.css' },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.5/jquery.fullpage.min.js' },
    ],
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
    '~/assets/main.css'
  ],

  plugins: [
    { src: '~/plugins/fullpage', ssr: false },
    { src: '~/plugins/vuetify' },
    { src: '~/plugins/swiper', ssr: false },
  ]
}

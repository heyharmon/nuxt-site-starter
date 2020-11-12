module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://unpkg.com/codyhouse-framework/main/assets/js/util.js', async: true }
    ],
    htmlAttrs: {
      class: 'js'
    }
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      '~/plugins/repository'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
   '@nuxtjs/style-resources',
   '@nuxtjs/axios'
  ],

  /*
   ** Style Resources
   ** Variables, mixins and functions to made accessible globally
   */
   styleResources: {
     scss: [
         '~/assets/scss/resources/_breakpoints.scss',
         '~/assets/scss/resources/_mixins.scss'
     ]
   },

  /*
  ** Global CSS
  ** CSS loaded on every page
  */
  css: [
    '@/assets/scss/app.scss'
  ],

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
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  }
}

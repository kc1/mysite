module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Real Property an Real Estate Category Bootstrap Responsive Website Template | Home :: w3layouts',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/flexslider.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/easy-responsive-tabs.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/chocolat.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/font-awesome.min.css' },
    ]
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
  }
}


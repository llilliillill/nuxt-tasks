export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt-tasks/',
    buildAssetsDir: 'assets',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  devtools: { enabled: false },
  modules: ['@pinia/nuxt'],

  pinia: {
    autoImports: ['defineStore']
  },
  
  imports: {
    dist: ['~/stores']
  },

  components: {
    global: true,
    dirs: [
      { path: '~/components/UI' },
      '~/components',
    ]
  }

})

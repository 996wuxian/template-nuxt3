import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  experimental: {
    localLayerAliases: true // 假设你有一个本地层目录 ./layers/my-layer，你可以通过 localLayerAliases 为这个层定义一个别名：
  },

  // alias: {
  //   'my-layer': './layers/my-layer',
  // },

  // app config
  app: {
    // global transition
    // pageTransition: 定义页面切换时的过渡效果。
    pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: 定义布局切换时的过渡效果。
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  typescript: {
    strict: true,
    typeCheck: true
  },

  // modules
  modules: [
    // chore
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@unocss/nuxt'
  ],

  // 配置components
  // components: [
  //   {
  //     prefix: 'Layout',
  //     path: resolve('./components/layouts'),
  //     global: true
  //   },
  //   {
  //     prefix: 'Awesome',
  //     path: resolve('./components/awesome'),
  //     global: true
  //   }
  // ],

  // css
  css: [resolve('./assets/scss/variables.scss'), resolve('./assets/scss/app.scss')],

  // devtools
  devtools: { enabled: true },

  // module::pinia
  // 在ts.config.ts中配置pinia
  pinia: {
    storesDirs: ['~/stores/**', '#/stores/**', '@/stores/**']
  }
})

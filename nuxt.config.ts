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
    head: {
      title: process.env.NUXT_PUBLIC_TITLE,
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
        },
        { name: 'keywords', content: 'nuxt3, template' },
        {
          name: 'description',
          content: '春花，秋月，夏日，冬雪。你若盛开，清风自来。心若浮沉，浅笑安然。'
        },
        { name: 'format-detection', content: 'telephone=no' },
        // pc 等比例缩放
        { name: 'viewport', content: 'user-scalable=yes' }
      ],
      noscript: [{ children: 'JavaScript is required' }]
    },
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

  // module::pinia
  // 在ts.config.ts中配置pinia
  pinia: {
    storesDirs: ['~/stores/**', '#/stores/**', '@/stores/**']
  },

  // 配置API
  runtimeConfig: {
    public: {
      title: import.meta.env.NUXT_PUBLIC_TITLE,
      api: {
        baseUrl: import.meta.env.NUXT_PUBLIC_API_BASEURL
      }
    }
  },

  // devtools
  devtools: { enabled: true }
})

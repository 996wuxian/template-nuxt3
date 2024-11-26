import path from 'path'
import { createResolver } from '@nuxt/kit'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devServer: {
    // host: '127.0.0.1', // 项目运行的ip
    // port: 8800 // 项目运行的端口号
  },

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
        { name: 'keywords', content: 'nuxt3, template' },
        {
          name: 'description',
          content: '春花，秋月，夏日，冬雪。你若盛开，清风自来。心若浮沉，浅笑安然。'
        },
        // 禁止手机号码自动识别
        { name: 'format-detection', content: 'telephone=no' },
        // pc 等比例缩放
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'renderer', content: 'webkit' },
        { name: 'author', content: '1640551913@qq.com' }
      ],

      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        // {
        //   rel: 'stylesheet',
        //   href: 'https://xxx.css'
        // }
      ],
      noscript: [{ children: 'JavaScript is required' }]
    },
    // pageTransition: 定义页面切换时的过渡效果。
    pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: 定义布局切换时的过渡效果。
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  imports: {
    dirs: [
      // 扫描顶级模块
      'composables',
      // ... 或扫描带有特定名称和文件扩展名的一级嵌套模块
      'composables/*/index.{ts,js,mjs,mts}',
      // ... 或扫描给定目录中的所有模块
      'composables/**'
    ]
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
    'pinia-plugin-persistedstate/nuxt',
    '@unocss/nuxt',
    'nuxtjs-naive-ui'
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

  routeRules: {
    '/': { redirect: '/home' }
    // 主页在构建时预渲染
    // '/index': {prerender: true},
    // 产品页面按需生成，后台自动重新验证
    // '/products/**': { swr: 3600 },
    // 博客文章按需生成，直到下一次部署前持续有效
    // '/blog/post/**': { isr: true },
    // 管理仪表板仅在客户端渲染
    // '/admin/**': { ssr: false },
    // 在API路由上添加cors头
    // '/api/**': { cors: true }
    // 跳转旧的URL
    // '/old-page': { redirect: '/new-page' }
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
  devtools: { enabled: true },

  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
          }
        ]
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'assets/svg')]
      })
    ]
  },

  // srcDir: 'src/',

  // 打包配置
  build: {
    // transpile:
    //   process.env.NODE_ENV === 'production'
    //     ? ['naive-ui', 'vueuc', '@css-render/vue3-ssr', '@juggle/resize-observer']
    //     : ['@juggle/resize-observer']
  }
})

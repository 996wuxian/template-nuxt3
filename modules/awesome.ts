import { existsSync, statSync } from 'fs'
import { defineNuxtModule, createResolver, addImportsDir } from '@nuxt/kit'

// 自定义模块, 为starter kit提供核心功能
export default defineNuxtModule({
  meta: {
    name: 'Nuxt 3 Awesome Starter Kit Module'
  },
  setup(_options, nuxt) {
    // 使用createResolver处理文件路径解析, 确保在不同环境下路径解析正确
    const resolver = createResolver(import.meta.url)

    // 自动导入stores
    for (const layer of nuxt.options._layers) {
      const storesPath = resolver.resolve(layer.cwd, 'stores')
      if (existsSync(storesPath) && statSync(storesPath).isDirectory()) {
        addImportsDir(storesPath)
      }
    }
  }
})

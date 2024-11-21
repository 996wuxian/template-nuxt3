import { defineConfig } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist']
    }
  },

  safelist: [
    'i-solar-home-smile-bold',
    'i-solar-settings-minimalistic-bold-duotone',
    'i-solar-user-plus-bold-duotone',
    'i-solar-widget-4-bold-duotone',
    'i-solar-square-transfer-horizontal-bold',
    'i-solar-key-minimalistic-square-2-bold',
    'i-solar-download-outline'
  ],
  shortcuts: [
    ['flex-center', 'flex items-center justify-center'],
    ['container', 'w-full h-full']
  ]
})

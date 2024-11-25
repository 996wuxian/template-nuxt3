import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', 'dist']
    }
  },

  rules: [
    // 在这个可以增加预设规则, 也可以使用正则表达式
    [
      'p-c', // 使用时只需要写 p-c 即可应用该组样式
      {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`
      }
    ],
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) / 4}rem` })]
  ],

  transformers: [transformerDirectives()],

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

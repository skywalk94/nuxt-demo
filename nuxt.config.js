import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  app: {
    head: {
      title: '标题',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '简介' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
    }
  },

  css: [
    '~/assets/css/global.css',
    'element-plus/theme-chalk/src/index.scss',
    'element-plus/theme-chalk/src/dark/css-vars.scss'
  ],

  build: {
    transpile: process.env.NODE_ENV === 'production' ? ['element-plus/es'] : [],
  },

  modules: ['@pinia/nuxt'],

  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver({ importStyle: false })],
      }),
      Components({
        resolvers: [ElementPlusResolver({ importStyle: false })],
      })
    ],
  },
})

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  // 全局页面头
  head: {
    title: 'Nuxt标题',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  target: 'static',

  loading: {
    color: '#409EFF'
  },

  generate: {
    fallback: false
  },

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  // skyline为二级域名要进行配置
  // 如果是一级域名设置为./
  router: {
    base: process.env.NODE_ENV === 'production' ? '/skyline/' : '/'
  },

  // 全局CSS
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './assets/default.css'
  ],

  //在呈现页面之前运行的插件
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/route'
  ],

  //自动导入组件
  components: true,

  //用于开发和构建的模块
  buildModules: [],

  // 模块
  modules: [],

  // 构建配置
  build: {
    vendor: ['element-ui', 'axios']
  }
}

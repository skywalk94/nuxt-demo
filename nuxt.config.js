export default {
  // 全局页面头
  head: {
    title: 'Nuxt全局标题',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
      },
      {
        name: "author",
        content: "wePanda"
      },
      {
        name: "keywords",
        content: "Nuxt编写示例"
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

  generate: {},

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
    './assets/default.css'
  ],

  //在呈现页面之前运行的插件
  plugins: [
    '@/plugins/router',
    '@/plugins/vant'
  ],

  //自动导入组件
  components: true,

  //用于开发和构建的模块
  buildModules: [],

  // 模块
  modules: [],

  // 构建配置
  build: {
    vendor: ['axios'],
    postcss: [
      require('postcss-px2rem-exclude')({
        remUnit: 37.5, // 设计图为375 * height
        remPrecision: 2, // rem的小数点后位数
        exclude: /node_modules|folder_name/i
      })
    ],
  }
}

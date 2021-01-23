export default {
  // 全局页面头
  head: {
    title: 'wePanda',
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
      href: 'https://sucai.suoluomei.cn/sucai_zs/images/20210120104606-2.png'
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
    base: process.env.NODE_ENV === 'production' ? '/skyline/' : '/',
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/',
        name: '',
        component: resolve(__dirname, 'pages/index/index.vue'),
      }, {
        path: '/main',
        name: 'main',
        component: resolve(__dirname, 'pages/main/main.vue')
      }, {
        path: '/detail',
        name: 'detail',
        component: resolve(__dirname, 'pages/detail/detail.vue')
      })
    }
  },

  //全局CSS
  css: [
    './assets/default.css'
  ],

  //在呈现页面之前运行的插件
  plugins: [{
      src: '@/plugins/lib-flexible',
      ssr: false
    },
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
    postcss: {
      plugins: {
        'postcss-px2rem-exclude': {
          remUnit: 75, // 设计图为750 * height
          remPrecision: 2, // rem的小数点后位数
          exclude: /node_modules|folder_name/i //
        }
      }
    },
  }
}

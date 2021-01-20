<template>
  <div class="box">
    <van-button type="primary" @click="getApi()">点击获取api</van-button>
    <van-button type="primary" @click="skipPath()">函数跳转到detail</van-button>
    <nuxt-link to="/main">组件跳转到main</nuxt-link>
    <div v-for="(item,index) in schoolList" :key="index">
      <img :src="item.imgurl" alt="">
      {{item.name}}
    </div>
    <div v-for="(item,index) in imgList" :key="'i'+index">
      <img class="banner" :src="item.imgurl" alt="">
    </div>
    <tabbar :active="active"></tabbar>
  </div>
</template>

<script>
  import axiosApi from "../../plugins/axios";
  import tabbar from '../../components/tabbar.vue'
  export default {
    name: 'index',
    components: {
      tabbar
    },
    data() {
      return {
        schoolList: [],
        imgList: [],
        active: 0
      }
    },
    head() {
      return {
        title: "首页",
      }
    },
    async asyncData() {
      const res = await axiosApi("getClassSchedule", {}, "post")
      return {
        schoolList: res.data.top_four
      }
    },

    activated() {
      this.active = 0
    },

    mounted() {},

    methods: {
      async getApi() {
        const res = await axiosApi("getCarouselList", {
          page: 1,
          limit: 10
        }, "post")
        this.imgList = res.data
      },

      skipPath() {
        this.$router.push({
          path: './detail',
        });
      }
    }
  }

</script>

<style src="./index.less" lang="less" scoped>
</style>

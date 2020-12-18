<template>
  <div class="box">
    <el-button type="primary" @click="getApi()">点击获取api</el-button>
    <el-button type="primary" @click="goMain()">跳转到main</el-button>
    <div v-for="(item,index) in schoolList" :key="index">
      <img :src="item.imgurl" alt="">
      {{item.name}}
    </div>
    <div v-for="(item,index) in imgList" :key="'i'+index">
      <img class="banner" :src="item.imgurl" alt="">
    </div>
  </div>
</template>

<script>
  import axiosApi from "../plugins/axios";
  export default {
    data() {
      return {
        schoolList: [],
        imgList: []
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

    mounted() {},

    methods: {
      async getApi() {
        const res = await axiosApi("getCarouselList", {
          page: 1,
          limit: 10
        }, "post")
        this.imgList = res.data
      },

      goMain() {
        this.$router.push({
          path: './main',
        });
      }
    }
  }

</script>

<style scoped>
  .title {
    color: cadetblue;
    font-size: 30px;
  }

  .banner {
    width: 300px;
  }

</style>

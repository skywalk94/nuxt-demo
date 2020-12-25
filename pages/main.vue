<template>
  <div class="title">
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
        imgList: []
      }
    },
    head() {
      return {
        title: "主体页",
      }
    },
    async asyncData() {
      const res = await axiosApi("getCarouselList", {
        page: 1,
        limit: 10
      }, "post")
      return {
        imgList: res.data
      }
    },
    methods: {}
  }

</script>

<style scoped>
  .banner {
    width: 300px;
  }

</style>

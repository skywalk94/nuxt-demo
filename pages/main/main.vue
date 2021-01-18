<template>
  <div class="title">
    <div v-for="(item,index) in imgList" :key="'i'+index">
      <img class="banner" :src="item.imgurl" alt="">
    </div>
    <tabbar active=1></tabbar>
  </div>
</template>

<script>
  import axiosApi from "../../plugins/axios";
  import tabbar from '../../components/tabbar.vue'
  export default {
    components: {
      tabbar
    },
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
<style lang="less" scoped>
  .banner {
    width: 300px;
  }

</style>

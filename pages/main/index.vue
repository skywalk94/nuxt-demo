<template>
  <div class="box">
    <ul v-for="(item, index) in imgList" :key="'i' + index">
      <li><img class="banner" :src="item.imgurl" alt /></li>
    </ul>
  </div>
</template>

<script>
import axiosApi from "../../plugins/axios";
export default {
  data() {
    return {
      imgList: [],
    };
  },
  async asyncData() {
    const res = await axiosApi(
      "getCarouselList",
      {
        page: 1,
        limit: 10,
      },
      "post"
    );
    return {
      imgList: res.data,
    };
  },
};
</script>

<style lang="less" scoped>
.banner {
  width: 300px;
}
</style>
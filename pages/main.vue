<template>
  <div>
    <nuxt-link :to="{ path: '/main' }">嵌套路由1</nuxt-link>
    <nuxt-link :to="{ path: '/main/index1' }">嵌套路由2</nuxt-link>
    <nuxt-child />
    <tabbar :active="active"></tabbar>
  </div>
</template>

<script>
import tabbar from "../components/tabbar.vue";
export default {
  name: "master",
  components: {
    tabbar,
  },
  data() {
    return {
      active: 1,
    };
  },
  head() {
    return {
      title: "主体页",
    };
  },

  activated() {
    this.active = 1;
  },

  methods: {},
};
</script>


<template>
  <!-- 缓存特定的组件 -->
  <nuxt keep-alive :keep-alive-props="{ include: includeList}" />
</template>

<script>
  export default {
    data() {
      return {
        includeList: ['index', 'master']
      }
    }
  }

</script>

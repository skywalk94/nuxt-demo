<template>
  <!-- 缓存特定的组件 -->
  <nuxt keep-alive :keep-alive-props="{ include: ['index','master']}" />
</template>

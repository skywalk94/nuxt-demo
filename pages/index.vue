<template>
    <p>{{ title }}</p>
</template>
<script setup>
import { ref } from 'vue'
const title = ref("hello nuxt !")

useHead({
    title: '首页',
    meta: [
        { name: "keywords", content: "关键字" },
        { name: "description", content: "简介" },
    ],
})
</script>

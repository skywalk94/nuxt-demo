<template>
    <p v-for="item in list">{{ item.id }}</p>
</template>

<script setup>
import { ref } from "vue"
import request from "~/utils/request"

const list = ref([])
const res = await request('/orgs/nuxt/repos')
list.value = res.data

</script>
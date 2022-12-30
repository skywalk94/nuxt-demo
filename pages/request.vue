<template>
    <p v-for="item in list">{{ item.id }}</p>
</template>

<script setup>
import { ref } from "vue"
import request from "~/utils/request"

const list = ref([])
const { data } = await request("/orgs/nuxt/repos", { method: "GET", query: { id: 1 } })
list.value = data.value

</script>
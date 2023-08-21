<template>
    <p v-for="item in list">{{ item.id }}</p>
</template>

<script setup>
import request from "~/utils/request"

const { data: list } = await request("/orgs/nuxt/repos", { method: "GET", query: { id: 1 } })
</script>
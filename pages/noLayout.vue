<template>
    <div>没有公共的layout</div>
    <button @click="router.back()">返回</button>
</template>
<script setup>
const router = useRouter()
definePageMeta({
    layout: false,
})
</script>
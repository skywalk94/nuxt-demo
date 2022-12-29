<template>
    <p>pinia</p>
    <button @click="store.count++">pinia改变值</button>{{ store.count }}
</template>
<script setup>
import { useStore } from '~/store'
const store = useStore()
</script>

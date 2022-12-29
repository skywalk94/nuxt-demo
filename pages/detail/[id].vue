<template>
    <div>详情携带id---{{ $route.params.id }}参数</div>
</template>
<script setup>
const route = useRoute()
console.log(route.params.id)

</script>

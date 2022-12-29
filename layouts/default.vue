<template>
    <header>公共头部</header>
    <NuxtLink :to="item.url" v-for="item in links">---{{ item.text }}---</NuxtLink>
    <br />
    <slot />
    <footer>公共尾部</footer>
</template>
<script setup>
const links = [{ url: "/", text: "首页" },
{ url: "/pinia", text: "pinia" },
{ url: "/detail/1", text: "携带参数" },
{ url: "/noLayout", text: "没有公共layout" },
{ url: "/img", text: "本地静态资源" },
{ url: "/request", text: "数据请求" },
{ url: "/element", text: "element-plus组件" },
]
</script>
<style lang="scss">
header,
footer {
    height: 50px;
    background: #409EFF;
    text-align: center;
    line-height: 50px;
    color: #fff;
}

header {
    margin-bottom: 50px;
}

footer {
    margin-top: 50px;
}
</style>
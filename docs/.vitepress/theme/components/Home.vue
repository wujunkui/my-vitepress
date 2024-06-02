<script setup lang="ts">
import { useData } from "vitepress"
import ShopHome from "./home-page/ShopHome.vue";

const { frontmatter } = useData()
const layoutType = frontmatter.value.layout
console.log(layoutType)

</script>
<template>
    <div v-if="layoutType === 'shop'">
        <ShopHome></ShopHome>
    </div>
    <div v-else>
        CustomHomePage
    </div>
</template>
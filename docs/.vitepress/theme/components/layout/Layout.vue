<script setup lang="ts">
import { useRoute } from "vitepress"
import { useData } from "vitepress"
import BlogContent from "../BlogContent.vue"
import VPDoc from "vitepress/dist/client/theme-default/components/VPDoc.vue"
import NavMenu from "./NavMenu.vue"


import { computed } from "vue"
const { theme, page, dir } = useData()
console.log(theme.value)
console.log(page.value)
const filePath = page.value.filePath
console.log(typeof filePath)
console.log(filePath.startsWith("blog/"))
const contentType = computed(() => {
  return "blog"
})


</script>

<template>
  <div>
    <NavMenu />
    <div>
      <BlogContent v-if="contentType === 'blog'" />
      <VPDoc v-else></VPDoc>
    </div>
    
   
    <Footer />
  </div>
</template>

<style scoped>


</style>

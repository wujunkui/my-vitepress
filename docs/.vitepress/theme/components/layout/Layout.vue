<script setup lang="ts">
import { useRoute } from "vitepress"
import { useData } from "vitepress"
import BlogContent from "../BlogContent.vue"
import VPDoc from "vitepress/dist/client/theme-default/components/VPDoc.vue"
import NavMenu from "./NavMenu.vue"
import Footer from "./Footer.vue"
import { computed } from "vue"

const { theme, page } = useData()

const filePath = page.value.filePath
const contentType = computed(() => {
  if (page.value.filePath.startsWith("blog/")) {
    return "blog"
  } else {
    return "shop"
  }
})
</script>

<template>
  <div class="flex flex-col min-h-vh">
    <NavMenu />
    <div>
      <BlogContent v-if="contentType === 'blog'" />
      <VPDoc v-else></VPDoc>
    </div>

    <Footer />
  </div>
</template>

<style scoped></style>

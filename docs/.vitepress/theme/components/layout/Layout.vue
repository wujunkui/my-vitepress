<script setup lang="ts">
import { useRoute } from "vitepress"
import { useData } from "vitepress"
import BlogContent from "../BlogContent.vue"
import VPDoc from "vitepress/dist/client/theme-default/components/VPDoc.vue"
import NavMenu from "./NavMenu.vue"
import Footer from "./Footer.vue"
import { computed } from "vue"
import { NConfigProvider, darkTheme } from "naive-ui"

const { theme, page, isDark } = useData()

const filePath = page.value.filePath
const contentType = computed(() => {
  if (page.value.filePath.startsWith("blog/")) {
    return "blog"
  } else {
    return "shop"
  }
})

const naiveTheme = computed(() => isDark.value ? darkTheme : null)
</script>

<template>
  <div class="flex flex-col min-h-vh">
    <n-config-provider :theme="naiveTheme">
      <NavMenu />
      <div>
        <BlogContent v-if="contentType === 'blog'" />
        <VPDoc v-else></VPDoc>
      </div>

      <Footer />
    </n-config-provider>

  </div>
</template>

<style scoped></style>

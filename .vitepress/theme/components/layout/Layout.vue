<script setup lang="ts">
import { useData } from "vitepress"
import BlogContent from "../BlogContent.vue"
import VPDoc from "vitepress/dist/client/theme-default/components/VPDoc.vue"
import { Content } from "vitepress"
import NavMenu from "./NavMenu.vue"
import Footer from "./Footer.vue"
import { computed } from "vue"
import { NConfigProvider, darkTheme } from "naive-ui"
import type { GlobalThemeOverrides } from 'naive-ui'
import ShopHome from "../home-page/ShopHome.vue"
import { useLoginStore, useRegisterStore } from '../../stores'

const { page, isDark, frontmatter } = useData()
const layout = computed(() => frontmatter.value.layout ?? 'default')
const contentType = computed(() => {
  if (page.value.filePath.startsWith("blog/")) {
    return "blog"
  } else {
    return "shop"
  }
})

const naiveTheme = computed(() => isDark.value ? darkTheme : null)
const { toggleRegister } = useRegisterStore()
const { toggleLogin } = useLoginStore()

const themeOverrides: GlobalThemeOverrides = {
  common: {

  }
}
</script>

<template>
  <div class="flex flex-col min-h-vh">
    <n-config-provider :theme="naiveTheme" :them-overrides="themeOverrides">
      <NavMenu>
        <template #nav-bar-content-after>
          <o-button @click="toggleLogin">登录</o-button>
          <o-button @click="toggleRegister">注册</o-button>
        </template>
      </NavMenu>
      <div class="mt-16 h-[calc(100vh-100px)] max-w-[1440px] mx-auto">
        <template v-if="layout === 'shop'">
          <ShopHome />
        </template>
        <template v-else-if="layout === 'page'">
          <Content />
        </template>
        <template v-else>
          <BlogContent v-if="contentType === 'blog'" />
          <VPDoc v-else></VPDoc>
        </template>
      </div>


      <Footer></Footer>
    </n-config-provider>

  </div>
</template>

<style scoped></style>

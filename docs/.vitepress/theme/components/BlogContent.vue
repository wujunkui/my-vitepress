<script setup lang="ts">
import { useData } from "vitepress"
import AuthorCard from "./AuthorCard.vue";

const { theme } = useData()
</script>

<template>

  <div class="max-w-[1440px] flex mt-20 mx-auto">
    <div class="grow">
      <main class=" bg-white dark:bg-[var(--vp-c-bg)] lg:dark:bg-zinc-8 p-6">
        <Content class="vp-doc" />
      </main>
    </div>

    <div>
      <AuthorCard />
    </div>

  </div>

</template>

<style lang="scss" scoped>
@import url(../style/md-base.scss);
</style>

<script setup lang="ts">
import { useData } from "vitepress"

const { theme } = useData()
</script>

<template>
  <div class="VPDoc">
    <div class="container">
      <div class="content bg-white dark:bg-[var(--vp-c-bg)] lg:dark:bg-zinc-8">
        <div class="content-container pt-4">
          <main class="main">
            <Content class="vp-doc" />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url(../style/md-base.scss);
</style>

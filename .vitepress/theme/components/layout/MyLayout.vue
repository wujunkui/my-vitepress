<script setup lang="ts">
import DefaultTheme from "vitepress/theme"
import { useData } from "vitepress"
import Home from "../Home.vue"
import Layout from "./Layout.vue";
// const Layout = DefaultTheme.Layout

const { page, frontmatter } = useData()

const isCustomHome = frontmatter.value.home === true
</script>

<template>
  <!-- <Home v-if="isCustomHome" /> -->
  <Layout>
  </Layout>
</template>
<script setup lang="ts">
import Layout from "./Layout.vue";
import { NMessageProvider } from 'naive-ui'

</script>

<template>
  <!-- <Home v-if="isCustomHome" /> -->
  <NMessageProvider>
    <Layout />
  </NMessageProvider>

</template>
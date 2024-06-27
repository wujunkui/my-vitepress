<script setup lang="ts">
import Layout from "./Layout.vue";
import { NMessageProvider, NModal } from 'naive-ui'
import { ref } from 'vue'
import Register from '../user/register.vue'

const showRegister = ref(true)

</script>

<template>
  <!-- <Home v-if="isCustomHome" /> -->
  <NMessageProvider>
    <Layout />
    <n-modal v-model:show="showRegister" :mask-closable="false" class="w-2xl rounded-lg">
      <Register />
    </n-modal>
  </NMessageProvider>

</template>
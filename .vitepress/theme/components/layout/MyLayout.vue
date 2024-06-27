<script setup lang="ts">
import Layout from "./Layout.vue";
import { NMessageProvider, NModal } from 'naive-ui'

import Register from '../user/Register.vue'
import LoginModal from '../user/LoginModal.vue'
import { useRegisterStore } from '../../stores'

const registerStore = useRegisterStore()

</script>

<template>
  <!-- <Home v-if="isCustomHome" /> -->
  <NMessageProvider>
    <Layout :style="`${registerStore.showRegister ? 'filter: blur(10px)' : ''}`" />
    <n-modal v-model:show="registerStore.showRegister" :mask-closable="false" class="w-2xl rounded-lg">
      <Register />
    </n-modal>
    <LoginModal />
  </NMessageProvider>

</template>
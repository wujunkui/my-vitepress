<script setup lang="ts">
import { NModal } from 'naive-ui'
import { useLoginStore } from '../../stores'
import { toRefs } from 'vue'
import FormLayout from './components/FormLayout.vue'

const { loginShow, toggleLogin } = toRefs(useLoginStore())
</script>

<template>
    <n-modal v-model:show="loginShow">
        <FormLayout title="登 录" :closeClick="toggleLogin">

        </FormLayout>
    </n-modal>
</template>

<style lang="scss" scoped></style>
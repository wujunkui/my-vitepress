<script setup lang="ts">
import { NIcon } from 'naive-ui'
import { withBase } from 'vitepress';
import { Close } from '@vicons/ionicons5';
const props = defineProps<{
    title: string
    closeClick(): void
}>()
// const closeClick = () => {}

</script>

<template>
    <div class="bg-[var(--vp-c-bg)] flex w-2xl rounded-lg">
        <div class="flex-none w-72 opacity-75">
            <img class="w-full h-full object-cover" :src="withBase('/register.png')" alt="注册时候的图片">
        </div>
        <div class="grow p-6">
            <div class="float-right ">
                <n-icon size="20" class="hover:bg-gray-100 cursor-pointer" @click="closeClick">
                    <Close />
                </n-icon>
            </div>
            <div class="text-center">
                <span>胡思乱想实验室</span>
                <p class="mt-4 text-xs opacity-50">{{ props.title }}</p>
            </div>
            <slot></slot>
        </div>


    </div>
</template>

<style lang="scss" scoped></style>
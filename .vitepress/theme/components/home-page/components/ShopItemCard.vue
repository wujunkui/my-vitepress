<script setup lang="ts">
import { withBase } from 'vitepress';
import { NCard } from 'naive-ui'
import { NButton, NIcon } from 'naive-ui'
import { BatteryCharging } from '@vicons/ionicons5'

interface Props {
    frontmatter: any
}
const props = defineProps<Props>()
</script>

<template>
    <n-card class="mt-4 w-64 rounded-xl" hoverable>
        <template #cover>
            <div class="h-48">
                <a href="#">
                    <img :src="withBase(props.frontmatter.image)" alt="">
                </a>
            </div>
        </template>

        <h2 class="mt-2 line-clamp-2 h-[56px]">
            <a class="font-bold text-lg hover:underline" href="#">{{ props.frontmatter.title
                }}</a>
        </h2>
        <div class="flex justify-between items-center mt-4">
            <div class="text-lg font-bold flex items-center">
                <n-icon :size="20" class="text-orange">
                    <battery-charging />
                </n-icon>
                <span class="ml-2 text-red-4 hover:underline-none font-mono">199</span>
            </div>
            <n-button class="hover:underline-none" type="warning" secondary>立即购买</n-button>
        </div>

    </n-card>
</template>

<style lang="scss" scoped></style>
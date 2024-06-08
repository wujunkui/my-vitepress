<script setup lang="ts">
import { data } from '@/data/good.data'
import { NCard } from 'naive-ui'



</script>

<template>
    <div class="flex">
        <template v-for="{ frontmatter }, index in data" :key="index">
            <div v-if="frontmatter.home !== true">
                <n-card>
                    <template #cover>
                        <img :src="frontmatter.img" alt="">
                    </template>
                    <div>{{ frontmatter.title }}</div>
                </n-card>
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped></style>
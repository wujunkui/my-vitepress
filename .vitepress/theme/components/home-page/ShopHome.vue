<script setup lang="ts">
import { data } from '@/data/good.data'
// import { NCard } from 'naive-ui'



</script>

<template>
    <div>
        <template v-for="item, index in data" :key="index">
            <div v-if="item.frontmatter.home !== true">
                <n-card>
                    <template #cover>
                        <img :src="item.frontmatter.img" alt="">
                    </template>
                </n-card>
            </div>
            <div>{{ item.frontmatter }}</div>
            <!-- <div>{{ item.src }}</div> -->
        </template>
    </div>
</template>

<style lang="scss" scoped></style>
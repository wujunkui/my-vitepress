<script setup lang="ts">

import { data } from '@/data/good.data'
import ShopItemCard from './components/ShopItemCard.vue'



</script>

<template>
    <div class="flex">
        <template v-for="{ frontmatter }, index in data" :key="index">
            <div v-if="frontmatter.home !== true" class="flex flex-wrap -m-2">
                <ShopItemCard :frontmatter="frontmatter" class="m-2" />
            </div>
        </template>
    </div>
</template>

<style lang="scss" scoped></style>
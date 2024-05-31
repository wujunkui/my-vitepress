<script setup lang="ts">
import { useData } from 'vitepress'

const imageWitdh = 128

const title = "这是商品Title这是商品Title这是商品Title这是商品Title这是商品Title这是商品Title"

const data = useData()
</script>
<template>
    <div class="flex rounded-lg p-4 dark:bg-white:10 shadow dark:shadow-none">
        <div class="bg-white p-2">
            <img src="https://vitepress.dev/vitepress-logo-mini.svg" alt="good-image" :width="imageWitdh" :height="imageWitdh">
        </div>
        <div class="ml-4">
            <div class="text-lg font-bold">{{ title }}</div>
        </div>
    </div>
</template>

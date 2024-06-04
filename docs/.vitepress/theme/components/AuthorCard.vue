<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
    <div class="p-4 rounded border-2 shadow bg-white dark:bg-zinc-8">
        <div>Author Name</div>
    </div>
</template>
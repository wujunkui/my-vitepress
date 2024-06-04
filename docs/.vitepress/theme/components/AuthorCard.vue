<script setup lang="ts">
import { useData } from 'vitepress'
import { NCard } from 'naive-ui'

const { frontmatter } = useData()
</script>

<template>
    <!-- <div class="p-4 rounded border-2 shadow bg-white dark:bg-zinc-8">
        <div>Author Name</div>
    </div> -->
    <div class="px-2 ml-2">
        <n-card title="Wujunkui">
            <template #cover>
                <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg">
            </template>
            <div>Author</div>
        </n-card>
    </div>

</template>
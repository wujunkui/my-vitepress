<script setup lang="ts">
import { useData } from 'vitepress'
import { NCard } from 'naive-ui'
import { NAvatar } from 'naive-ui';

const { frontmatter } = useData()
</script>

<template>
    <!-- <div class="p-4 rounded border-2 shadow bg-white dark:bg-zinc-8">
        <div>Author Name</div>
    </div> -->
    <div class="px-2 ml-2 w-64">
        <n-card title="作者">
            <div class="pt-8 flex">
                <n-avatar round :size="64" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            </div>
            <div>Author</div>
        </n-card>
    </div>

</template>
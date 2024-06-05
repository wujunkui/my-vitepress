<script setup lang="ts">
import { useData } from 'vitepress'
import { NCard } from 'naive-ui'
import { NAvatar } from 'naive-ui';

const { frontmatter, theme } = useData()
</script>

<template>
    <div class="px-2 py-4 ml-2 w-64 rounded dark:bg-zinc-8">

        <div class="flex items-center">
            <n-avatar class="shrink-0" round :size="64"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            <div class="ml-2">
                <!-- TODO get author from base config -->
                <span class="text-lg">{{ theme.author.name }}</span>
                <p class="text-xs mt-2">{{ theme.author.description }}</p>
            </div>
        </div>
    </div>

</template>
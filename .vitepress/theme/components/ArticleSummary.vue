<script setup lang="ts">
interface Props {
    htmlContent: string
    href?: string
}

const props = defineProps<Props>()


</script>

<template>
    <div>
        <div class="relative">
            <div ref="textContainer" class="rounded-2xl text-xs max-h-2xl bg-bluegray-200 py-4 px-8 overflow-hidden"
                v-html="htmlContent"></div>
            <div
                class="absolute inset-x-0 bottom-0 rounded-2xl h-24 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none ">
            </div>
            <a class="absolute inset-x-0 bottom-0 flex justify-center items-center py-2 cursor-pointer group "
                :href="href">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
                <div class="ml-2 opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md text-sm transition-all">
                    查看文章</div>
            </a>
        </div>


    </div>

</template>

<style lang="scss" scoped></style>
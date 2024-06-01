<script setup lang="ts">
import { useData } from "vitepress"

const props = defineProps<{
  top?: number
  bottom?: number
  title: string
  price: number
  id: string
  img: string
  link?: string
  isRecommend?: boolean
}>()

const marginTop = props.top || 0
const marginBottom = props.bottom || 0
const imageWitdh = 128

const price = props.price || 0

const data = useData()

const clickBuy = () => {
  console.log("clickBuy")
}
</script>
<template>
  <div
    flex
    rounded-lg
    p="x-4 y-6"
    dark:bg-neutral-800
    dark:shadow-none
    :style="{marginBottom: `${marginBottom}rem`, marginTop: `${marginTop}rem`}"
    class="border border-solid shadow border-slate-100 dark:border-none"
  >
    <div class="bg-white dark:bg-neutral-800 p-2 shrink-0">
      <img
        src="https://vitepress.dev/vitepress-logo-mini.svg"
        alt="good-image"
        :width="imageWitdh"
        :height="imageWitdh"
      />
    </div>
    <div class="ml-4 grow">
      <div class="text-lg font-bold">
        <o-tag type="error" v-if="props.isRecommend">推荐</o-tag
        >{{ props.title || `商品标题` }}
      </div>
      <div
        class="mt-2 py-2 px-4 rounded bg-gradient-to-r from-slate-100 to-slate-50 dark:from-neutral-700 dark:to-neutral-800"
      >
        <div class="flex items-center">
          <span>价格：</span>
          <div class="ml-2 text-orange i-solar-ticker-star-outline"></div>
          <span class="ml-2 text-2xl font-bold text-red-5">{{ price }}</span>
        </div>
      </div>
      <div class="mt-4 flex items-center">
        <o-button class="shrink-0" type="secondary" @click="clickBuy"
          >立即购买</o-button
        >
        <div class="grow"></div>
        <div class="shrink-0 text-xs text-gray mr-2">已售：100+</div>
      </div>
    </div>
  </div>
</template>

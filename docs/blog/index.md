---
layout: blog_home
---
# 博客目录
<div class="max-w-[1080px]">
 <div class="mt-4" v-for="post of posts">
        <!-- <a :href="post.url">{{ post.frontmatter.title }}</a>
      <span>by {{ post.frontmatter.author }}</span> -->
      <!-- 整个block跳转有些影响体验，最好是有个查看更多的效果 -->
      <!-- <a class="no-underline" :href="withBase(post.url)">
        <div class="rounded-2xl cursor-pointer text-xs max-h-2xl bg-bluegray-200 py-4 px-8 overflow-hidden" v-html="post.html"></div>
        <button class="absolute inset-x-0 bottom-0 flex justify-center items-center bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </a> -->
      <ArticleSummary :html-content="post.html" ></ArticleSummary>
      
 </div>

</div>

<script setup lang="ts">
import { data as posts } from '@/data/blog.data'
import { withBase } from 'vitepress'
import ArticleSummary from '@theme/components/ArticleSummary.vue'
console.log(posts);
</script>
<style>
  .vp-doc a {
    text-decoration: none;
    color: inherit;
  }
</style>

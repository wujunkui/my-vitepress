---
layout: blog_home
---
# 博客目录
<ul>
 <li v-for="post of posts">
        <a :href="post.url">{{ post.frontmatter.title }}</a>
      <span>by {{ post.frontmatter.author }}</span>
      <div class="text-xs" v-html="post.html"></div>
 </li>

</ul>

<script setup lang="ts">
import { data as posts } from '@/data/blog.data'
console.log(posts)
</script>

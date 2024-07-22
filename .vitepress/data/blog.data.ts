import { createContentLoader } from 'vitepress'

export interface Data {
  // 页面的映射 URL，如 /posts/hello.html（不包括 base）
  // 手动迭代或使用自定义 `transform` 来标准化路径
  url: string
  // 页面的 frontmatter 数据
  frontmatter: Record<string, any>
}

declare const data: Data
export { data }
export default createContentLoader('blog/*.md', {
  includeSrc: true, // 包含原始 markdown 源?
  render: true, // 包含渲染的整页 HTML?
  excerpt: true, // 包含摘录?
  transform(rawData) {
    // 根据需要对原始数据进行 map、sort 或 filter
    // 最终的结果是将发送给客户端的内容
    return rawData
      .sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
      })
      .map((page) => {
        page.src // 原始 markdown 源
        page.html // 渲染的整页 HTML
        page.excerpt // 渲染的摘录 HTML（第一个 `---` 上面的内容）
        return {
          title: page.frontmatter.title,
          frontmatter: page.frontmatter,
          url: page.url,
          date: page.frontmatter.date,
          tags: page.frontmatter.tags,
          excerpt: page.excerpt,
          src: page.src,
          html: page.html
        }
      })
  }
})

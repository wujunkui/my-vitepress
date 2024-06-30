import { defineConfigWithTheme } from 'vitepress'

import type { MyThemConfig } from './config/theme'
import { head } from './config/head'
import { metaData } from './config/meta'
import { themeConfig } from './config/theme'
import vite from '../vite.config.mts'

const fileAndStyles: Record<string, string> = {}

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<MyThemConfig>({
  srcDir: './docs',
  base: '/my-vitepress/',
  title: '不工作只挣钱探索站',
  description: metaData.description,
  lang: metaData.lang,
  head,
  themeConfig,
  vite,
  postRender(context) {
    const styleRegex = /<css-render-style>((.|\s)+)<\/css-render-style>/
    const vitepressPathRegex = /<vitepress-path>(.+)<\/vitepress-path>/
    const style = styleRegex.exec(context.content)?.[1]
    const vitepressPath = vitepressPathRegex.exec(context.content)?.[1]
    if (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.content = context.content.replace(styleRegex, '')
    context.content = context.content.replace(vitepressPathRegex, '')
  },
  transformHtml(code, id) {
    const html = id.split('/').pop()
    if (!html) return
    const style = fileAndStyles[`/${html}`]
    if (style) {
      return code.replace(/<\/head>/, style + '</head>')
    }
  }
})

import { defineConfigWithTheme } from 'vitepress'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { OnuResolver } from 'onu-ui'
import type { MyThemConfig } from './config/theme'
import { head } from './config/head'
import { metaData } from './config/meta'
import { themeConfig } from './config/theme'

const fileAndStyles: Record<string, string> = {}

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<MyThemConfig>({
  base: '/my-vitepress/',
  title: '胡思乱想实验室',
  description: metaData.description,
  lang: metaData.lang,
  head,

  themeConfig,
  vite: {
    plugins: [
      Unocss(),
      AutoImport({
        resolvers: [OnuResolver()]
      }),
      Components({
        resolvers: [OnuResolver()]
      })
    ],
    ssr: {
      noExternal: ['naive-ui', 'date-fns', 'vueuc']
    }
  },
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

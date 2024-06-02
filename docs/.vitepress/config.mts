import { defineConfigWithTheme } from "vitepress"
import Unocss from "unocss/vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { OnuResolver } from "onu-ui"
import type { MyThemConfig } from "./theme"


// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<MyThemConfig>({
  base: '/my-vitepress/',
  title: "胡思乱想实验室",
  description: "胡思乱想，实现你的奇思妙想。",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    shop: [],

    nav: [
      { text: "主页", link: "/" },
      { text: "示例", link: "/markdown-examples" },
      { text: '博客', link: '/blog/vitepress-unocss'},
      { text: '小商店', link: '/shop/'},
    ],

    sidebar: [
      {
        text: "示例",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/wujunkui" },
    ],
    lastUpdated: {
      text: "最后编辑时间：",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    search: {
      provider: 'local'
    },
    outline: {
      label: "本页目录"
    },
    footer: {
      message: "<a>蜀XXXXXXXXXXX-1</a>",
      copyright: "Copyright © 2023-present wujunkui",
    }
  },
  vite: {
    plugins: [
      Unocss(),
      AutoImport({
        resolvers: [OnuResolver()],
      }),
      Components({
        resolvers: [OnuResolver()],
      }),
    ],
  },
})

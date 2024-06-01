import { defineConfig } from "vitepress"
import Unocss from "unocss/vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { OnuResolver } from "onu-ui"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my-vitepress/',
  title: "胡思乱想实验室",
  description: "胡思乱想，实现你的奇思妙想。",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
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

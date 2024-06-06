import type { DefaultTheme } from 'vitepress/theme'

export interface MyThemConfig extends DefaultTheme.Config {
  shop?: any
  author?: {
    name: string
    description: string
  }
}

export const themeConfig: MyThemConfig = {
  // https://vitepress.dev/reference/default-theme-config

  shop: [],
  author: {
    name: '胡思乱想的市长',
    description: '一个想成为数字游民的程序员。'
  },
  nav: [
    { text: '主页', link: '/' },
    { text: '示例', link: '/markdown-examples' },
    { text: '博客', link: '/blog/vitepress-unocss' },
    { text: '小商店', link: '/shop/' }
  ],

  sidebar: [
    {
      text: '示例',
      items: [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' }
      ]
    }
  ],

  socialLinks: [{ icon: 'github', link: 'https://github.com/wujunkui' }],
  lastUpdated: {
    text: '最后编辑时间：'
  },
  docFooter: {
    prev: '上一页',
    next: '下一页'
  },
  search: {
    provider: 'local'
  },
  outline: {
    label: '本页目录'
  },
  footer: {
    message: '<a>蜀XXXXXXXXXXX-1</a>',
    copyright: 'Copyright © 2023-present 胡思乱想实验室'
  }
}

// https://vitepress.dev/guide/custom-theme
import { h, defineComponent, inject } from 'vue'
import type { Theme } from 'vitepress'
import { NConfigProvider } from 'naive-ui'
import { setup } from '@css-render/vue3-ssr'
import { useRoute } from 'vitepress'

import defaultTheme from 'vitepress/theme'
import './style.css'
import 'uno.css'
import 'onu-ui/dist/style.css'
import Good from './components/Good.vue'
import { OButton } from 'onu-ui'
import MyLayout from './components/layout/MyLayout.vue'

const CssRenderStyle = defineComponent({
  setup() {
    const collect: any = inject('css-render-collect')
    return {
      style: collect() // @ts-ignore
    }
  },
  render() {
    return h('css-render-style', {
      innerHTML: this.style
    })
  }
})

const VitepressPath = defineComponent({
  setup() {
    const route = useRoute()
    return () => {
      return h('vitepress-path', null, [route.path])
    }
  }
})

const NaiveUIProvider = defineComponent({
  render() {
    return h(
      NConfigProvider,
      { abstract: true, inlineThemeDisabled: true },
      {
        default: () => [
          h(MyLayout, null, { default: this.$slots.default?.() }),
          import.meta.env.SSR ? [h(CssRenderStyle), h(VitepressPath)] : null
        ]
      }
    )
  }
})

export default {
  extends: defaultTheme,
  Layout: NaiveUIProvider,
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Good', Good)
    app.component('OButton', OButton)
    const { collect } = setup(app)
    app.provide('css-render-collect', collect)
  }
} satisfies Theme

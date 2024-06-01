// https://vitepress.dev/guide/custom-theme
import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import "./style.css"
import "uno.css"
import 'onu-ui/dist/style.css'
import Good from "./components/Good.vue"
import { OButton } from "onu-ui"
import MyLayout from "./components/layout/MyLayout.vue"

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component("Good", Good)
    app.component("OButton", OButton)
  },
} satisfies Theme

import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { OnuResolver } from 'onu-ui'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    Unocss(),
    AutoImport({
      resolvers: [OnuResolver()]
    }),
    Components({
      resolvers: [OnuResolver()]
    })
  ],
  ssr: { noExternal: ['naive-ui', 'date-fns', 'vueuc'] },
  resolve: {
    alias: {
      '@': resolve(__dirname, './.vitepress')
    }
  }
})

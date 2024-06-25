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
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './.vitepress'),
      '@client': resolve(__dirname, '.vitepress/client')
    }
  }
})

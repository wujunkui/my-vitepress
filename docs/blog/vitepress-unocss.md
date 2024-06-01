---
outline: deep
---

# vitepress 安装 unocss

## 1. 安装 unocss

```shell
pnpm add unocss
```

## 2. 添加`uno.config.ts`文件

```ts
import { defineConfig, presetUno } from "unocss"

export default defineConfig({
  presets: [presetUno()],
})
```

## 3. 修改`.vitepress/config.ts`文件

```ts{2,6-10}
import { defineConfig } from "vitepress"
import Unocss from "unocss/vite"

export default defineConfig({
    ...
    vite: {
        plugins: [
            Unocss()
        ]
    }
})

```

## 4. 修改`.vitepress/theme/index.ts`文件

```ts{5}
// https://vitepress.dev/guide/custom-theme
...
import DefaultTheme from "vitepress/theme"
import "./style.css"
import "uno.css"
...
```

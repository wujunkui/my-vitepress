import { createContentLoader } from 'vitepress'
import { resolve } from 'path'

const shopPath = resolve(__dirname, '../../docs/shop/*.md')
console.log(shopPath)
export default createContentLoader('shop/*.md')

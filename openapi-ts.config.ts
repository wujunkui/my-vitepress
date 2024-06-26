import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
  input: 'http://localhost:8000/openapi-client.json',
  output: {
    format: 'prettier',
    path: './.vitepress/client'
  },
  client: 'axios',
  schemas: {
    type: 'json'
  },
  services: {
    asClass: true
  }
})

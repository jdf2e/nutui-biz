/// <reference types="vitest" />
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'

const atImport = require('postcss-import')
const path = require('path')

const { resolve } = path
// https://vitejs.dev/config/
export default defineConfig({
  base: '/nutui/biz',
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`,
      },
      postcss: {
        plugins: [atImport({ path: path.join(__dirname, 'src`') })],
      },
    },
  },
  plugins: [reactRefresh()],
  test: {
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    environment: 'happy-dom',
    coverage: {
      all: false,
      provider: 'v8',
    },
    include: ['src/packages/**/*.(test|spec).(ts|tsx)'],
    reporters: ['default', 'html'],
  },
})

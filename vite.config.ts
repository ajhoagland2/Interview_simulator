import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/Interview_simulator/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index.source.html')
    }
  },
  test: { environment: 'jsdom', globals: true }
})

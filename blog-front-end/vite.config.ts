import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdPlugin({ mode: [Mode.HTML] })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'src') // 设置别名
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
  }
})

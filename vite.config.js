import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/_vars.scss"; @import "./src/assets/scss/_mixins.scss";`,
      },
    },
  },
  base: './',
  build: {
    chunkSizeWarningLimit: 2000,
    assetsInlineLimit: 0,
    lib: 0,
    publicDir: '',
  },
});

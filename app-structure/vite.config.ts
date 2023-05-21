import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  build: {
    rollupOptions: {
      output: {
        dir: 'dist',
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[extname]',
        chunkFileNames: 'assets/[name].js'
      }
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});

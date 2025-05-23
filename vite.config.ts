import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/bfs': {
        target: 'http://i0.hdslb.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/bfs/, '/bfs'),
      },
      '/ws': {
        target: 'ws://localhost:8080',
        ws: true, // 启用 WebSocket 代理
        changeOrigin: true,
      },
    },
  },
});

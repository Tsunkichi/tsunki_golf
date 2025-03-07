import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['three'],
  },
  server: {
    host: true,
  },
  build: {
    target: 'esnext',
    sourcemap: true,
    rollupOptions: {
      external: ['three'],
    },
  },
});

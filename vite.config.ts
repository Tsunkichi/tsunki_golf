import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['three'], // Mantener 'three' para precompilación
  },
  server: {
    host: true,
  },
  build: {
    target: 'esnext',
    sourcemap: true,
    // Eliminar la configuración 'external' para 'three' en Rollup
    rollupOptions: {
      // external: ['three'], // Esto debe eliminarse
    },
  },
});

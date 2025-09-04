import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Optimise for production performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting for better loading
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react'],
          router: ['react-router-dom'],
          anthropic: ['@anthropic-ai/sdk']
        },
      },
    },
    // Optimise chunk size
    chunkSizeWarningLimit: 600,
  },
  // Development server optimisation
  server: {
    hmr: {
      overlay: false,
    },
  },
});

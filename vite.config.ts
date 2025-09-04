import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['lucide-react'],
  },
  build: {
    // Aggressive minification for maximum performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 3,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    // Optimize output
    target: 'esnext',
    cssCodeSplit: true,
    sourcemap: false,
    // Code splitting for optimal loading
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('lucide-react')) return 'vendor-icons';
            if (id.includes('router')) return 'vendor-router';
            return 'vendor';
          }
          if (id.includes('components/Blog')) return 'blog';
          if (id.includes('pages/')) return 'pages';
          if (id.includes('lib/')) return 'utils';
        },
        // Optimize chunk loading
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
      // External dependencies for CDN
      external: [],
    },
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 500,
  },
  // Development optimizations
  server: {
    hmr: {
      overlay: false,
    },
    // Faster dev server
    fs: {
      strict: false,
    },
  },
  // Resolve optimizations
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
});

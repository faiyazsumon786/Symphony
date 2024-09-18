import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Base path for assets
  // build: {
  //   outDir: 'dist',
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: 'assets/[name].[hash].[ext]',
  //       entryFileNames: 'assets/[name].[hash].js',
  //       chunkFileNames: 'assets/[name].[hash].js',
  //     },
  //   },
  // },
});

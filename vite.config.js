import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    eslint(),
  ],
  build: {
    rollupOptions: {
      external: ['@material-ui/core/utils'],
    },
  },
});


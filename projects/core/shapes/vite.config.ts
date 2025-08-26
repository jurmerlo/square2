import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    sourcemap: true,
  },
  esbuild: {
    target: 'es2022',
  },
});

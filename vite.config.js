import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Với repository hoanganhchung82015-dev.github.io, base bắt buộc là '/'
});

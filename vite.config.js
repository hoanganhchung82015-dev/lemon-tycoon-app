import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/lemon-tycoon-app/', // Thay lemon-tycoon-app bằng ĐÚNG tên repository trên GitHub
});

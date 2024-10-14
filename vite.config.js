import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PortFolio-2/', // Replace 'PortFolio-2' with your actual repository name
});

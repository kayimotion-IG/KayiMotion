import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      // Safely define process.env.API_KEY to prevent 'process is not defined' error in browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY || ''),
    },
    publicDir: 'public',
    build: {
      outDir: 'dist',
    }
  };
});
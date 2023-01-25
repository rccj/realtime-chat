import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  envDir: './env',
  server: {
    proxy: {
      '/api': {
        target: 'https://hex-escape-room.herokuapp.com/',
        changeOrigin: true,
      },
    },
  },
});

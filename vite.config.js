import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[hash][extname]`,
      },
    },
    base: '/new-test/', // replace [your-repo-name] with your GitHub repository name.
  },
});

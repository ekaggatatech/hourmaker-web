import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://requestdemo-lmwl7hv2za-uc.a.run.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'Origin': 'https://hour-maker-vite.vercel.app',
          'Referer': 'https://hour-maker-vite.vercel.app/'
        }
      },
    },
  },
});

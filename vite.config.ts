import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      'vue-demi': './node_modules/vue-demi/lib/v3/index.mjs',
    },
  },
});

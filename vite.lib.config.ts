import { defineConfig } from 'vite';
import createVuePlugin from '@vitejs/plugin-vue';
import path from 'path';
export default defineConfig({
   build: {
    lib: {
      entry: path.resolve(__dirname, 'src/plugin/index.ts'),
      name: 'vue3-snotify',
      fileName: (format) => `vue3-snotify.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [createVuePlugin()],
	server: {
    port: 8080,
    fs: {
      // allow: ['..'],
      strict: false
    }
  }
});
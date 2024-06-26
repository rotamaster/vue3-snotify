import { defineConfig } from "vite";
import createVuePlugin from "@vitejs/plugin-vue";
import path from "path";
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    cssCodeSplit: true,
    lib: {
      entry: [
        path.resolve(__dirname, "src/plugin/index.ts"),
        path.resolve(__dirname, "src/plugin/themes/material.ts"),
        path.resolve(__dirname, "src/plugin/themes/simple.ts"),
        path.resolve(__dirname, "src/plugin/themes/dark.ts"),
      ],
      name: "vue3-snotify",
      fileName: (format, name) => `${name}.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [createVuePlugin(), dts({ rollupTypes: true })],
  server: {
    port: 8080,
    fs: {
      // allow: ['..'],
      strict: false,
    },
  },
});

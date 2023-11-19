import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// eslint-disable-next-line no-restricted-syntax
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "#app",
        replacement: resolve(__dirname, "./src/app"),
      },
      {
        find: "#assets",
        replacement: resolve(__dirname, "./src/assets"),
      },
      {
        find: "#components",
        replacement: resolve(__dirname, "./src/components"),
      },
      {
        find: "#configs",
        replacement: resolve(__dirname, "./src/configs"),
      },
      {
        find: "#constants",
        replacement: resolve(__dirname, "./src/constants"),
      },
      {
        find: "#store",
        replacement: resolve(__dirname, "./src/store"),
      },
      {
        find: "#hooks",
        replacement: resolve(__dirname, "./src/hooks"),
      },
      {
        find: "#pages",
        replacement: resolve(__dirname, "./src/pages"),
      },
      {
        find: "#services",
        replacement: resolve(__dirname, "./src/services"),
      },
      {
        find: "#utils",
        replacement: resolve(__dirname, "./src/utils"),
      },

      {
        find: "#types",
        replacement: resolve(__dirname, "./src/types"),
      },
    ],
  },
});


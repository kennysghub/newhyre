import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // Change to relative paths
  plugins: [react()],
  assetsInclude: ["**/*.PNG", "**/*.png", "**/*.jpg", "**/*.jpeg"],
  build: {
    assetsDir: "assets",
    rollupOptions: {
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name)) {
            return "assets/images/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});

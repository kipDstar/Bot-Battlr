// filepath: /home/jesse/Development/code/Projects/bot-battlr-project/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically opens the browser
    historyApiFallback: true, // Ensures React Router works
  },
});
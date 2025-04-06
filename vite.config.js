import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/sophia-thompson/", // 👈 Important for GitHub Pages
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import tailwindcss
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/

//add tailwind() plugin to the array
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

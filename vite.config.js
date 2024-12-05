import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  
  build: {
    root: "./src", // Cambia la raíz del proyecto a "src"
    outDir: "docs", // Cambia el directorio de salida
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Página principal
        // Añade más entradas si es necesario
      },
    },
  },
  base: "/Portfolio/", // Opcional: rutas relativas para mayor compatibilidad
});
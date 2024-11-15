import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    server: {
      proxy: isProduction
        ? undefined // Không cần proxy trong production
        : { "/api": "http://localhost:8001" }, // Proxy cho môi trường dev
    },
    define: {
      "process.env.VITE_BACKEND_URL": JSON.stringify(
        isProduction ? "https://backend.render.com" : "http://localhost:8001"
      ),
    },
    plugins: [react()],
  };
});

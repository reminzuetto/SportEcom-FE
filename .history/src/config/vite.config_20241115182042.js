import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    server: {
      host: "0.0.0.0",
      port: process.env.PORT || 5173,
      proxy: isProduction ? undefined : { "/api": "http://localhost:8001" },
    },
    define: {
      "process.env.VITE_BACKEND_URL": JSON.stringify(
        isProduction
          ? process.env.VITE_BACKEND_URL
          : process.env.VITE_DEV_BACKEND_URL
      ),
    },
    plugins: [react()],
  };
});

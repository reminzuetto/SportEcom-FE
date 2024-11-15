import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    server: {
      host: "0.0.0.0", // Lắng nghe từ mọi địa chỉ IP
      port: process.env.PORT || 5173, // Sử dụng cổng do Render cung cấp hoặc mặc định 5173
      proxy: isProduction
        ? undefined // Không cần proxy trong production
        : { "/api": "http://localhost:8001" }, // Proxy cho môi trường dev
    },
    define: {
      "process.env.VITE_BACKEND_URL": JSON.stringify(
        isProduction
          ? process.env.VITE_BACKEND_URL // Sử dụng URL từ .env trong môi trường sản xuất
          : process.env.VITE_DEV_BACKEND_URL // Sử dụng URL local trong môi trường phát triển
      ),
    },
    plugins: [react()],
  };
});

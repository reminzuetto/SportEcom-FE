export default defineConfig({
  server: {
    host: "0.0.0.0", // Đảm bảo ứng dụng lắng nghe trên tất cả các IP
    port: parseInt(process.env.PORT) || 3000, // Sử dụng PORT từ Render hoặc fallback là 3000
    proxy: {
      "/api": "http://localhost:8001", // URL backend cục bộ
    },
  },
  plugins: [react()],
});
z;

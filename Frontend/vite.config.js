import { cwd } from "node:process";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const baseEnv = loadEnv(mode, cwd(), "");
  const devEnv = mode === "development" ? loadEnv("dev", cwd(), "") : {};
  const env = { ...baseEnv, ...devEnv };
  const apiBaseUrl = (env.VITE_API_BASE_URL || "http://localhost:6000").replace(
    /\/$/,
    "",
  );

  return {
    plugins: [react(), tailwindcss()],
    define: {
      "import.meta.env.VITE_API_BASE_URL": JSON.stringify(apiBaseUrl),
    },
    server: {
      proxy: {
        "/api": {
          target: apiBaseUrl,
          changeOrigin: true,
        },
      },
    },
  };
});

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

const {
  DEV_SERVER_HOST,
  DEV_SERVER_PORT,
} = process.env;

/**
 * https://vitejs.dev/config/
 */
const { host, port } = {
  host: DEV_SERVER_HOST,
  get port() {
    if (DEV_SERVER_PORT) return parseInt(DEV_SERVER_PORT);
  },
};

export default defineConfig(async ({ command }) => ({
  server: {
    host,
    port,
  },
  preview: {
    port,
  },
  build: {
    target: "es2020",
    sourcemap: command === "serve",
  },
  plugins: [
    tsconfigPaths(),
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: `eslint ./src`,
        useFlatConfig: true,
      },
    }),
  ],
}));

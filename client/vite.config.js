import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
    plugins: [react()],
    // base: "/talganize-app/", //Github hosted
    base: "/",                  //server hosted
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    server: {
        port: 3000,
    },
})
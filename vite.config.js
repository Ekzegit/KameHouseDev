import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/',
    plugins: [react()],
    publicDir: 'public' // 👈 forzamos la carpeta public manualmente
})

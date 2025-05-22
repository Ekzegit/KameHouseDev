import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/kamehousedev/', // 👈 nombre del repositorio en GitHub
    plugins: [react()],
})

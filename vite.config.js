import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Dynamically use the port assigned by Render, or fallback to 5173
    host: true, // Ensure the app is accessible on the network
    allowedHosts: 'all', // Allow all hosts to access the server
  }
})

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
    server: {
        hmr: { protocol: 'ws' },
        strictPort: true,
        port: 8083,
    },
    plugins: [react()],
});

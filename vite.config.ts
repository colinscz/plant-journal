import { URL, fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import inkline from '@inkline/plugin/vite';
import type { UserOptions } from '@inkline/plugin';

const inklineConfig: UserOptions = {
    outputDir: 'src/css/variables'
};

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        inkline(inklineConfig),
        vue({
            reactivityTransform: true
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});

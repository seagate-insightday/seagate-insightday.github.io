import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import preload from 'vite-plugin-preload';

// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), enhancedImages(), svelte(), preload()] ,
    build: {
        outDir: 'docs',
        emptyOutDir: true,
    },
});

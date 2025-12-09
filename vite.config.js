import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        // Ajouter cette section pour la production
        outDir: 'public/build', // Emplacement où les assets compilés seront stockés
        manifest: true, // Crée un fichier de manifest pour Laravel
        chunkSizeWarningLimit: 500, // Pour éviter les warnings en cas de gros bundles
    },
});


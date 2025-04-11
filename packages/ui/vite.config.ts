// packages/ui/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Assuming your getRootExternal utility is in this location relative to the lib
import { getRootExternal } from '../../utils/vite';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';
import pandacss from '@pandacss/dev/postcss';
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [pandacss, autoprefixer],
    },
  },
  build: {
    lib: {
      // Could also be a function, see guide below.
      entry: resolve(__dirname, 'src/index.ts'), // Your library's entry point
      name: 'UiLibrary', // The name of your library (used for globals if UMD/IIFE)
      // the proper extensions will be added
      fileName: 'index',
      formats: ['es', 'umd'], // Output formats (ES module and UMD are common for libs)
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [...getRootExternal()], // Or manually specify: ['react', 'react-dom']
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: './dist', // Output directory for the library build
    emptyOutDir: true, // Ensure the output directory is clean before building
  },
});

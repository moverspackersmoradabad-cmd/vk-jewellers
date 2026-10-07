import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => {
  // Determine base path:
  // 1. Explicit VITE_BASE_PATH if provided
  // 2. If building for GitHub Pages or inside GitHub Actions, use '/vk-jewellers/'
  // 3. Otherwise default to './' (ideal for Hostinger public_html or custom domains)
  const isGitHub =
    process.env.GITHUB_PAGES === 'true' ||
    process.env.GITHUB_ACTIONS === 'true' ||
    Boolean(process.env.GITHUB_REPOSITORY && process.env.GITHUB_REPOSITORY.includes('vk-jewellers'));

  const base = process.env.VITE_BASE_PATH || (isGitHub ? '/vk-jewellers/' : './');

  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

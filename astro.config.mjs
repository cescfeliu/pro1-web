import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import csp from './scripts/csp-integration.mjs';

export default defineConfig({
  integrations: [tailwind(), csp()],
  site: 'https://pro1-aula-lliure.vercel.app',
});

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gamuneko.gamublocks.com',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          ja: 'ja',
          pt: 'pt-BR',
          es: 'es',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'pt', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  output: 'static',
});

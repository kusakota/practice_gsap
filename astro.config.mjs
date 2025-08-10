// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  integrations: [
    vue(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "/src/styles/_mixin.scss" as *; @use "/src/styles/_variables" as *;`,
        },
      },
    },
  },
});
import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://mcmeddon.com',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});

//site: 'https://mcmeddon.github.io',
//base: '/mcmeddon.com',
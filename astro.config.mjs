import { defineConfig } from 'astro/config';
import { defineConfig, squooshImageService } from 'astro/config';

/* import image from "@astrojs/image"; */

// https://astro.build/config
/* export default defineConfig({
   integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
}); */

//site: 'https://mcmeddon.github.io',
//base: '/mcmeddon.com',


export default defineConfig({
  site: 'https://mcmeddon.com',
  outDir: './build', 
  image: {
    service: squooshImageService(),
  },
});
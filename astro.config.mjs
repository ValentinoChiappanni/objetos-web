import { defineConfig,passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from 'astro-icon';
import dotenv from 'dotenv';
dotenv.config();

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService()
  },
  site: 'https://obj1-unahur.github.io',
  server: {
    port: parseInt(process.env.PORT, 10) || 10000,
  },
  compressHTML: false,
  integrations: [mdx(), icon(), tailwind({
    applyBaseStyles: false
  }), compress()]
});

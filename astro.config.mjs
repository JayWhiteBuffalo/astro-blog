import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: "http://JayWhiteBuffalo.github.io",
    base: '/astro-blog',
    integrations: [tailwind({
        config: {path: './tailwind.config.cjs'}
    })],
});

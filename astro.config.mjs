import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://nicorivera.netlify.app',
  integrations: [tailwind()],
  devToolbar: {
    enabled: false,
  },
})

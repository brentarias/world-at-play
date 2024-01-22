import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sanity from "@sanity/astro";
import icon from "astro-icon";
const projectId = "zs2uhttl";
const dataset = "production";


// https://astro.build/config
export default defineConfig({
  site: 'https://soulsovereignty.earth',
  integrations: [
    mdx(), 
    sitemap(), 
    sanity({
      projectId,
      dataset,
      useCdn: false
    }),
    icon({iconDir: "src/icons"})]
    ,server: {
      port: 4322,
      host: true
    }   
});
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const config = {
  preprocess: [vitePreprocess(), mdsvex({ smartypants: true })],
  kit: { adapter: adapter() },
  extensions: ['.svelte', '.svx']
};

export default config;

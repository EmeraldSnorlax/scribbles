import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: 'src/lib/articles/MdsvexLayout.svelte',

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;

<script context="module" lang="ts">
	import h1 from './custom/h1.svelte';
	import p from './custom/p.svelte';
	import a from './custom/a.svelte';
	export { h1, p, a };
</script>


<article>
	<slot />
</article>

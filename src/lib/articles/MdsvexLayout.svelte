<script context="module" lang="ts">
	import h1 from './custom/h1.svelte';
	import p from './custom/p.svelte';
	export { h1, p };
</script>


<article>
	<slot />
</article>

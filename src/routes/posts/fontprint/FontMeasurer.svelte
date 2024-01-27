<script lang="ts">
	export let w = 0;
  export let font = '';
  export let fallback: 'sans-serif' | 'monospace' | 'cursive' | 'serif' = 'monospace';
</script>

<!-- dummy element because we need the browser to compute the width so we can then use it for a nice animation... -->
<div bind:clientWidth={w} class="max-w-fit absolute -top-[100vh]" aria-hidden="true">
	<span class="common inline-block" style="font-family: {font}, {fallback};"><slot/></span>
</div>

<!-- element we show to the user -->
<div class="relative h-18">
	<span class="common transition-[width] block h-10" style="font-family: {font}, {fallback};"><slot/></span>
	<div class="w-full  rounded">
		<span
			class="inline-block duration-500 delay-200 text-sm py-1 ps-2 border-ink-faded dark:border-chalk-faded dark:text-chalk-faded border-l-2"
			style="margin-left: {w}px;">{w}px</span
		>
	</div>
</div>

<style lang="postcss">
	.common {
		@apply max-w-fit overflow-hidden whitespace-nowrap text-2xl px-2 text-ink dark:text-chalk;
	}
</style>

<script lang="ts">
	import { browser } from '$app/environment';
	import Subtle from '$lib/articles/components/Subtle.svelte';
	import FontMeasurer from './FontMeasurer.svelte';
	let i = 0;
	let fonts = ['sans-serif', 'monospace', 'cursive', 'serif'];
	let font = fonts[i];

	function sleep(ms: number) {
		return new Promise<void>((resolve) => {
			setTimeout(resolve, ms);
		});
	}

	let reducedMotion = false;
	if (browser) {
		reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
	}

	// only cycle fonts if the user has prefers reduced motion disabled
	if (!reducedMotion) {
		setInterval(async () => {
			i = (i + 1) % fonts.length;
			font = fonts[i];
		}, 1000);
	}
</script>

<div class="mb-4">
	<noscript>
		<Subtle>
			Some demonstrations will fallback to a scriptless version because you have disabled
			JavaScript. Enable it to see the originals.
		</Subtle>
	</noscript>
	{#if reducedMotion}
		<Subtle
			>Some demonstrations will fallback to a static version because you prefer reduced motion.</Subtle
		>
	{/if}
</div>

<div
	class="h-20 outline rounded-sm"
	role="img"
	aria-label="Comparison of how the same content can have different pixel widths when rendered depending on the current font."
>
	<noscript>
		{#each fonts as style}
			<span class="block bg-chalk-faded px-2 text-sm w-fit" style="font-family: {style};"
				><slot /></span
			>
		{/each}
	</noscript>
	<div class="{browser ? 'opacity-100' : 'opacity-0'} transition-all">
		{#if reducedMotion}
			{#each fonts as style}
				<span class="block bg-chalk-faded px-2 text-sm w-fit" style="font-family: {style};"
					><slot /></span
				>
			{/each}
		{:else}
			<div>
				<FontMeasurer bind:font><slot /></FontMeasurer>
			</div>
		{/if}
	</div>
</div>

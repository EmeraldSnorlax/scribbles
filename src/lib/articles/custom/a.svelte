<script lang="ts">
	export let href: string;
</script>

<a {href} class="text-ink dark:text-chalk underline underline-offset-4 decoration-wavy decoration-1 decoration-ink-faded dark:decoration-chalk-faded hover:opacity-90 transition-opacity"><slot /></a>

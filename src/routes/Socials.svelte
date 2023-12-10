<script lang="ts">
	interface Social {
		platform: string;
		location: string;
		isLink: boolean;
		isCopyable: boolean;
	}

	let socials: Social[] = [
		{
			platform: 'Discord',
			location: '@rain.lgbt',
			isLink: false,
			isCopyable: true
		},
		{
			platform: 'Email',
			location: 'emeraldsnorlax@disroot.org',
			isLink: false,
			isCopyable: true
		},
		{
			platform: 'GitHub',
			location: 'https://github.com/EmeraldSnorlax',
			isLink: true,
			isCopyable: false
		},

		{
			platform: 'Steam',
			location: 'https://steamcommunity.com/id/EmeraldSnorlax/',
			isLink: true,
			isCopyable: false
		}
	];
</script>

<dl>
  {#each socials as social}
  <dt class="font-display text-lg text-ink-faded dark:text-chalk-faded mt-4">{social.platform}</dt>
  {#if social.isLink}
  <dd class="font-serif text-ink dark:text-chalk my-1 underline decoration-wavy underline-offset-4"><a rel="noopener" href="{social.location}">{social.location}</a></dd>
  {:else if social.isCopyable}
  <dd class="font-serif text-ink dark:text-chalk my-1">{social.location}</dd>
  {:else}
  <dd class="font-serif text-ink dark:text-chalk my-1">{social.location}</dd>
  {/if}
  {/each}
</dl>

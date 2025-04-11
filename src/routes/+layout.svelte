<script lang="ts">
	import '../app.css'
	import Diaper from '$lib/components/icons/diaper.svelte'
	import Github from '@lucide/svelte/icons/github'
	import Lightswitch from '$lib/components/lightswitch.svelte'
	let { children } = $props()
</script>

<div class="flex flex-col h-full">
	<header class="text-center px-1 py-2 preset-filled-surface-900-100 flex justify-between items-center">
		<button aria-label="Github">
			<svg height="48" width="48" fill="currentColor">
				<Diaper />
			</svg>
		</button>
		<h1 class="h3 translate-y-0.25">Diaper</h1>
		<div class="flex gap-2 items-center">
			<Lightswitch />
			<button class="p-2">
				<Github />
			</button>
		</div>
	</header>
	{@render children()}
</div>

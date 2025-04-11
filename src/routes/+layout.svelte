<script lang="ts">
	import '../app.css'
	import Diaper from '$lib/components/icons/diaper.svelte'
	import Github from '$lib/components/icons/github-mark.svelte'
	import Lightswitch from '$lib/components/lightswitch.svelte'
	let { children } = $props()
</script>

<div class="flex flex-col h-full">
	<header class="text-center px-0 py-2 preset-filled-surface-900-100 flex justify-between items-center">
		<button aria-label="Github">
			<svg height="48" width="48" fill="currentColor">
				<Diaper />
			</svg>
		</button>
		<Lightswitch />
		<h1 class="h3">Diaper</h1>
		<button aria-label="Github" class="p-2">
			<svg height="24" width="24" viewBox="0 0 98 96" fill="currentColor">
				<Github />
			</svg>
		</button>
	</header>
	{@render children()}
</div>

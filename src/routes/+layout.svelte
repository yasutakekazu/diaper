<script lang="ts">
	import '../app.css'
	import Diaper from '$lib/components/icons/diaper.svelte'
	import Github from '@lucide/svelte/icons/github'
	import Lightswitch from '$lib/components/lightswitch.svelte'
	let { children } = $props()
</script>

<div class="flex flex-col h-full">
	<header class="preset-filled-surface-900-100 bg-[#407878] text-[var(--diaper-fg-tinted)] flex justify-center pt-[env(safe-area-inset-top)]">
		<div class="px-1 py-1 flex justify-between items-center w-full max-w-2xl">
			<button aria-label="Github">
				<svg height="48" width="48" fill="currentColor">
					<Diaper />
				</svg>
			</button>
			<h1 class="h3 translate-y-0.25">Diaper</h1>
			<div class="flex gap-2 items-center">
				<Lightswitch />
				<a href="https://github.com/devantic/diaper" target="_blank" class="p-2" aria-label="Github">
					<Github />
				</a>
			</div>
		</div>
	</header>
	{@render children()}
</div>

<!-- <style>
	:global(:root) {
		--diaper-duration: 0.6s !important;
		--diaper-backdrop-opacity: 0.7 !important;
	}
</style> -->

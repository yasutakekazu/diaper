<script lang="ts">
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	let open = $state(false)
</script>

<div class="space-y-2">
	<h2 class="h4">Basic with full height</h2>
	<p>The default sheet. Opens at full height</p>
	<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open = true)}>Open</button>
</div>

<link rel="preload" as="image" href="https://picsum.photos/id/133/600/400" />

<Bottomsheet bind:open>
	{#snippet header()}{/snippet}
	<img src="https://picsum.photos/id/133/600/400" class="w-full" alt="" />
	<div class="text-center flex flex-col items-center pt-6 pb-6 px-4 gap-4 text-balance">
		<h1 class="h2 pt-4">Automatically sizes to fit content</h1>
		<p class="opacity-75 text-balance">
			Maiores praesentium veniam delectus illo, quod facere necessitatibus quasi cum autem laboriosam consectetur repellendus voluptates ut sint impedit quam?
			Praesentium.
		</p>
		<button class="btn btn-lg preset-filled-surface-800-200 rounded-full px-16" onclick={() => (open = false)}>Got It!</button>
	</div>
</Bottomsheet>

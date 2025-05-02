<script lang="ts">
	import Bottomsheet from '$lib/components/detachedsheet.svelte'
	let open1 = $state(false)
	let open2 = $state(false)
	let open3 = $state(false)
	let open4 = $state(false)
</script>

<div class="space-y-2">
	<h2 class="h4">Stackable Detached</h2>
	<p>You can open multiple sheets on top of each other</p>
	<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open1 = true)}>Open</button>
</div>

<link rel="preload" as="image" href="https://picsum.photos/id/132/600/400" />
<link rel="preload" as="image" href="https://picsum.photos/id/134/600/400" />
<link rel="preload" as="image" href="https://picsum.photos/id/135/600/400" />
<link rel="preload" as="image" href="https://picsum.photos/id/136/600/400" />

<Bottomsheet bind:open={open1} height="auto">
	{#snippet header()}
		<!-- <Header title="Stackable Sheet" subtitle="Second" onclick={() => (open2 = false)} /> -->
	{/snippet}
	<img src="https://picsum.photos/id/132/600/400" class="w-full" alt="" />
	<div class="p-4">
		<div class="text-center p-8">
			<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open2 = true)}>Open another</button>
		</div>
	</div>
</Bottomsheet>

<Bottomsheet bind:open={open2} height="auto">
	{#snippet header()}
		<!-- <Header title="Stackable Sheet" subtitle="Second" onclick={() => (open2 = false)} /> -->
	{/snippet}
	<img src="https://picsum.photos/id/134/600/400" class="w-full" alt="" />
	<div class="p-4">
		<div class="text-center p-8">
			<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open3 = true)}>Open another</button>
		</div>
	</div>
</Bottomsheet>

<Bottomsheet bind:open={open3} height="auto">
	{#snippet header()}
		<!-- <Header title="Stackable Sheet" subtitle="Second" onclick={() => (open2 = false)} /> -->
	{/snippet}
	<img src="https://picsum.photos/id/135/600/400" class="w-full" alt="" />
	<div class="p-4">
		<div class="text-center p-8">
			<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open4 = true)}>Open another</button>
		</div>
	</div>
</Bottomsheet>

<Bottomsheet bind:open={open4} height="auto">
	{#snippet header()}
		<!-- <Header title="Stackable Sheet" subtitle="Second" onclick={() => (open2 = false)} /> -->
	{/snippet}
	<img src="https://picsum.photos/id/136/600/400" class="w-full" alt="" />
	<div class="p-4">
		<div class="text-center p-8">
			<button class=" m-auto btn btn-sm text-center preset-outlined-secondary-600-400" onclick={() => (open4 = false)}>Okay, that's enough</button>
		</div>
	</div>
</Bottomsheet>

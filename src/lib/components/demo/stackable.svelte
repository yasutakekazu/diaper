<script lang="ts">
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	import Header from '$lib/components/demo/header.svelte'
	let open1 = $state(false)
	let open2 = $state(false)
	let open3 = $state(false)
</script>

<div class="space-y-2">
	<h2 class="h3 border-b">Stackable</h2>
	<p>You can open multiple sheets on top of each other</p>
	<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open1 = true)}>Open</button>
</div>

<Bottomsheet bind:open={open1} snapPoints="auto">
	{#snippet header()}
		<Header title="Stackable Sheet" subtitle="First" onclick={() => (open1 = false)} />
	{/snippet}
	<div class="p-4">
		<p>A basic sheet can be dragged</p>
		<div class="text-center p-8">
			<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open2 = true)}>Open another</button>
		</div>
	</div>
</Bottomsheet>

<Bottomsheet bind:open={open2}>
	{#snippet header()}
		<Header title="Stackable Sheet" subtitle="Second" onclick={() => (open2 = false)} />
	{/snippet}
	<div class="p-4">
		<p>A basic sheet can be dragged</p>
		<div class="text-center p-8">
			<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open3 = true)}>Open another</button>
		</div>
	</div>
</Bottomsheet>

<Bottomsheet bind:open={open3} height="auto">
	{#snippet header()}
		<Header title="Stackable Sheet" subtitle="Third" onclick={() => (open3 = false)} />
	{/snippet}
	<div class="p-8 text-center space-y-4 mb-12">
		<p>A basic sheet can be dragged</p>
		<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open3 = false)}>Okay, that's enough</button>
	</div>
</Bottomsheet>

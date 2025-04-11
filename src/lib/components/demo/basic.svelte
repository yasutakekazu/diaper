<script lang="ts">
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	import Header from '$lib/components/demo/header.svelte'
	let open = $state(false)
</script>

<div class="space-y-2">
	<h2 class="h3 border-b">Basic</h2>
	<p>The simplest version. Opens at max height</p>
	<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open = true)}>Open</button>
</div>

<Bottomsheet bind:open>
	{#snippet header()}
		<Header title="Basic Sheet" subtitle="" onclick={() => (open = false)} />
	{/snippet}
	<div class="p-4">
		<p>A basic sheet can be dragged</p>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, qui! Maiores praesentium veniam delectus illo, quod facere necessitatibus quasi cum
			autem laboriosam consectetur repellendus voluptates ut sint impedit quam? Praesentium.
		</p>
	</div>
</Bottomsheet>

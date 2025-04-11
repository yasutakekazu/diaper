<script lang="ts">
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	import Header from '$lib/components/demo/header.svelte'
	let open = $state(false)
</script>

<div class="space-y-2">
	<h2 class="h4">Basic with initial snap point</h2>
	<p>Opens at max height but can be miminized to fit content</p>
	<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open = true)}>Open</button>
</div>

<Bottomsheet bind:open initialSnapPoint={1} snapPoints={[0.25, 0.7]}>
	{#snippet header()}
		<Header title="Basic Sheet" subtitle="With Initial Point" onclick={() => (open = false)} />
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

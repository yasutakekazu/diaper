<script lang="ts">
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	import Header from './header.svelte'
	let open = $state(false)
</script>

<div class="space-y-2">
	<h2 class="h4">Basic with auto height</h2>
	<p>Opens at auto height to fit content</p>
	<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open = true)}>Open</button>
</div>

<Bottomsheet bind:open height="auto">
	{#snippet header()}
		<Header title="Basic Sheet" subtitle="with auto height" onclick={() => (open = false)} />
	{/snippet}
	<div class="p-4">
		<p>Automatically sizes to fit content.</p>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, qui! Maiores praesentium veniam delectus illo, quod facere necessitatibus quasi cum
			autem laboriosam consectetur repellendus voluptates ut sint impedit quam? Praesentium.
		</p>
	</div>
</Bottomsheet>

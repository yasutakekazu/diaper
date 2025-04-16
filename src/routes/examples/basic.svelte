<script lang="ts">
	import Bottomsheet from '@devantic/diaper'
	import Header from './header.svelte'
	let open = $state(false)
</script>

<div class="space-y-2">
	<h2 class="h4">Basic with full height</h2>
	<p>The default sheet. Opens at full height</p>
	<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open = true)}>Open</button>
</div>

<Bottomsheet bind:open>
	{#snippet header()}
		<Header title="Basic Sheet" subtitle="with full height" onclick={() => (open = false)} />
	{/snippet}
	<div class="p-4">
		<p>The default sheet</p>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, qui! Maiores praesentium veniam delectus illo, quod facere necessitatibus quasi cum
			autem laboriosam consectetur repellendus voluptates ut sint impedit quam? Praesentium.
		</p>
	</div>
</Bottomsheet>

<script lang="ts">
	import Longsheet from '$lib/components/longsheet.svelte'
	let open = $state(false)
</script>

<div class="space -y-2">
	<h2 class="h3 border-b">Longsheet</h2>
	<p>Scrolls</p>
	<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open = true)}>Open</button>
</div>

<Longsheet bind:open>
	<button onclick={() => (open = false)}>Close</button>
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea mollitia ipsum deleniti veritatis? Praesentium similique inventore, facilis nulla necessitatibus reiciendis
	deserunt provident nemo dolor ipsum tempore iste consequatur quod ullam.
	<div class="space-y-2">
		{#each { length: 125 }, i}
			<div class="card preset-filled-surface-200-800 p-4">Item {i + 1}</div>
		{/each}
	</div>
</Longsheet>

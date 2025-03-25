<script lang="ts">
	import Bottomsheet from '$lib/components/bottomsheet.svelte';

	let showBotttomsheet = $state(false);
	let showBotttomsheet2 = $state(false);
</script>

<h1>Home</h1>
<button onclick={() => (showBotttomsheet = true)}>Open</button>
{#if showBotttomsheet}
	<Bottomsheet
		onclose={() => (showBotttomsheet = false)}
		height="93%"
		class="rounded-none bg-cyan-600"
		style=""
	>
		{#snippet header()}
			<h1>BottomSheet</h1>
		{/snippet}
		<button onclick={() => (showBotttomsheet2 = true)}>Open Another</button>
	</Bottomsheet>
{/if}

{#if showBotttomsheet2}
	<Bottomsheet onclose={() => (showBotttomsheet2 = false)} height="93%">
		{#snippet header()}
			<h1>BottomSheet</h1>
		{/snippet}
		Home Page
	</Bottomsheet>
{/if}

<script lang="ts">
	import Bottomsheet from '$lib/components/bottomsheet.svelte';
	import RenderRoute from '$lib/components/renderroute.svelte';
	import { fade } from 'svelte/transition';

	let showBotttomsheet = $state(false);
	let showBotttomsheet2 = $state(false);
	let showBotttomsheet3 = $state(false);
	let bs1: Bottomsheet | null = $state(null);
	let bs2: Bottomsheet | null = $state(null);
	let bs3: Bottomsheet | null = $state(null);

	let initialSnapPoint = $state(1);
	let snapPoints = $state([0.3, 0.7]);
</script>

<h1>Home</h1>
<button
	onclick={() => {
		showBotttomsheet = true;
		setTimeout(() => (initialSnapPoint = 2), 3000);
	}}>Open</button
>

<Bottomsheet bind:this={bs1} bind:open={showBotttomsheet} {initialSnapPoint} snapPoints="auto">
	{#snippet header()}
		<h1>BottomSheet1</h1>
		<button onclick={() => (showBotttomsheet2 = true)}>Open Another</button>
		<button onclick={() => (showBotttomsheet = false)}>close</button>
	{/snippet}
	<p>
		Children. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci, nulla
		iusto quae quaerat eius illo deserunt nobis praesentium suscipit ipsam excepturi officia
		perspiciatis ratione distinctio quisquam? Nesciunt, dolor optio!
	</p>
	<p>
		Children. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci, nulla
		iusto quae quaerat eius illo deserunt nobis praesentium suscipit ipsam excepturi officia
		perspiciatis ratione distinctio quisquam? Nesciunt, dolor optio! Lorem ipsum, dolor sit amet
		consectetur adipisicing elit. Ad minima magni quia harum ut, excepturi pariatur impedit ipsum
		enim earum corporis corrupti assumenda eveniet provident nulla quasi architecto odit blanditiis!
	</p>
	{#snippet snapPoint1Content()}
		<p>
			SP1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci, nulla iusto
			quae quaerat eius illo deserunt nobis praesentium suscipit ipsam excepturi officia
			perspiciatis ratione distinctio quisquam? Nesciunt, dolor optio!
		</p>
		<p>
			SP1. ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci, nulla iusto quae
			quaerat eius illo deserunt nobis praesentium suscipit ipsam excepturi officia perspiciatis
			ratione distinctio quisquam? Nesciunt, dolor optio!
		</p>
	{/snippet}
	{#snippet snapPoint2Content()}
		<p>
			SP2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci, nulla iusto
			quae quaerat eius illo deserunt nobis praesentium suscipit ipsam excepturi officia
			perspiciatis ratione distinctio quisquam? Nesciunt, dolor optio!
		</p>
	{/snippet}
	{#each [...Array(100)
			.keys()
			.map((i) => `Item ${i + 1}`)] as i}
		<p style="content-visibility: auto ;">{i}</p>
	{/each}
</Bottomsheet>

{#if showBotttomsheet2}
	<Bottomsheet bind:this={bs2} onclose={() => (showBotttomsheet2 = false)} snapPoints={[0.3, 0.7]}>
		{#snippet header()}
			<h1>BottomSheet2</h1>
			<button onclick={() => (showBotttomsheet3 = true)}>Open Another</button>
			<button onclick={bs2!.close}>close</button>
		{/snippet}
		<RenderRoute path="/page2"></RenderRoute>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat est laudantium asperiores
			ipsa et officiis animi placeat quod pariatur quasi, tempore illum veritatis? Voluptatibus
			eligendi, odit quidem obcaecati iure quam?
		</p>
	</Bottomsheet>
{/if}

<!-- <Bottomsheet bind:this={bs3} bind:open={showBotttomsheet3} height="auto">
	{#snippet header()}
		<h1>BottomSheet3</h1>
	{/snippet}
	<button onclick={() => (showBotttomsheet3 = false)}>Close by prop</button>
	<button onclick={bs3.close}>close</button>
	<p in:fade={{ delay: 1 }}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci, nulla iusto quae quaerat eius illo deserunt nobis praesentium suscipit ipsam
		excepturi officia perspiciatis ratione distinctio quisquam? Nesciunt, dolor optio!
	</p>
	<p in:fade={{ delay: 1 }}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci, nulla iusto quae quaerat eius illo deserunt nobis praesentium suscipit ipsam
		excepturi officia perspiciatis ratione distinctio quisquam? Nesciunt, dolor optio!
	</p>
</Bottomsheet> -->

{#each [...Array(100)
		.keys()
		.map((i) => `Item ${i + 1}`)] as i}
	<p>{i}</p>
{/each}

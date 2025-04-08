<script lang="ts">
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	import RenderRoute from '$lib/components/renderroute.svelte'
	import { fade } from 'svelte/transition'

	let showBotttomsheet = $state(false)
	let showBotttomsheet2 = $state(false)
	let showBotttomsheet3 = $state(false)
	let bs1: Bottomsheet | null = $state(null)
	let bs2: Bottomsheet | null = $state(null)
	let bs3: Bottomsheet | null = $state(null)

	let initialSnapPoint = $state(0)
	let snapPoints = $state([0.3, 0.7])
</script>

<header class="p-4">
	<h1>Home</h1>
	<button
		class="btn preset-filled"
		onclick={() => {
			showBotttomsheet = true
			setTimeout(() => bs1!.snapTo(1), 3000)
		}}>Open</button
	>
</header>

<Bottomsheet bind:this={bs1} bind:open={showBotttomsheet} {initialSnapPoint} snapPoints="auto" class="!">
	{#snippet header()}
		<div class="p-4">
			<h1 class="text-center">BottomSheet1</h1>
			<div class="flex gap-2 justify-between">
				<button class="btn btn-sm preset-filled" onclick={() => (showBotttomsheet2 = true)}>Open Another</button>
				<button class="btn btn-sm preset-filled" onclick={() => bs1!.snapTo(2)}>Snap</button>
				<button class="btn btn-sm preset-filled" onclick={() => (showBotttomsheet = false)}>close</button>
			</div>
		</div>
	{/snippet}
	{#snippet snapPoint1Content()}
		<div class="card preset-outlined-surface-500 p-4 m-4">
			<p>
				SP1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci, nulla iusto quae quaerat eius illo deserunt nobis praesentium
				suscipit ipsam excepturi officia perspiciatis ratione distinctio quisquam? Nesciunt, dolor optio!
			</p>
			<p>
				SP1. ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci, nulla iusto quae quaerat eius illo deserunt nobis praesentium suscipit
				ipsam excepturi officia perspiciatis ratione distinctio quisquam? Nesciunt, dolor optio!
			</p>
		</div>
	{/snippet}
	{#snippet snapPoint2Content()}
		<div class="card preset-outlined-surface-500 p-4 m-4">
			<p>
				SP2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci, nulla iusto quae quaerat eius illo deserunt nobis praesentium
				suscipit ipsam excepturi officia perspiciatis ratione distinctio quisquam? Nesciunt, dolor optio!
			</p>
		</div>
	{/snippet}
	{#snippet children()}
		<div class="card preset-outlined-surface-500 p-4 m-4">
			<p>
				Children. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci, nulla iusto quae quaerat eius illo deserunt nobis praesentium
				suscipit ipsam excepturi officia perspiciatis ratione distinctio quisquam? Nesciunt, dolor optio!
			</p>
			<p>
				Children. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci, nulla iusto quae quaerat eius illo deserunt nobis praesentium
				suscipit ipsam excepturi officia perspiciatis ratione distinctio quisquam? Nesciunt, dolor optio! Lorem ipsum, dolor sit amet consectetur adipisicing
				elit. Ad minima magni quia harum ut, excepturi pariatur impedit ipsum enim earum corporis corrupti assumenda eveniet provident nulla quasi architecto
				odit blanditiis!
			</p>
			<br />
			{#each [...Array(100)
					.keys()
					.map((i) => `Item ${i + 1}`)] as i}
				<p style="content-visibility: auto ;">{i}</p>
			{/each}
		</div>
	{/snippet}
</Bottomsheet>

{#if showBotttomsheet2}
	<Bottomsheet bind:this={bs2} onclose={() => (showBotttomsheet2 = false)} snapPoints={[0.3, 0.7]}>
		{#snippet header()}
			<div class="p-4">
				<h1>BottomSheet2</h1>
				<button onclick={() => (showBotttomsheet3 = true)}>Open Another</button>
				<button onclick={bs2!.close}>close</button>
			</div>
		{/snippet}
		<div class="p-4">
			<RenderRoute path="/page2"></RenderRoute>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat est laudantium asperiores ipsa et officiis animi placeat quod pariatur quasi, tempore
				illum veritatis? Voluptatibus eligendi, odit quidem obcaecati iure quam?
			</p>
		</div>
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

<main class="p-4">
	{#each [...Array(100)
			.keys()
			.map((i) => `Item ${i + 1}`)] as i}
		<p>{i}</p>
	{/each}
</main>

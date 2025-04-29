<script lang="ts">
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	import Header from './header.svelte'
	let open1 = $state(false)
	let open2 = $state(false)
	let open3 = $state(false)
</script>

<div class="space-y-2">
	<h2 class="h3 border-b">Stackable</h2>
	<p>You can open multiple sheets on top of each other</p>
	<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open1 = true)}>Open</button>
</div>

<Bottomsheet bind:open={open1} height="50vh">
	{#snippet header()}
		<Header title="Stackable Sheet" subtitle="First" onclick={() => (open1 = false)} />
	{/snippet}
	<div class="p-4">
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, velit rem? Maxime quae repudiandae, placeat ullam fuga ea quisquam porro assumenda enim
			hic nulla sapiente temporibus, in distinctio natus necessitatibus.
		</p>
		<div class="text-center p-8">
			<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open2 = true)}>Open another</button>
		</div>
	</div>
</Bottomsheet>

<Bottomsheet bind:open={open2} height="calc(50vh - 1rem)">
	{#snippet header()}
		<Header title="Stackable Sheet" subtitle="Second" onclick={() => (open2 = false)} />
	{/snippet}
	<div class="p-4">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quam placeat error, debitis nam rerum earum. Inventore voluptatem dolorum facilis
			illo nulla facere earum! Hic consequuntur deleniti minima ullam. Accusamus?
		</p>
		<div class="text-center p-8">
			<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open3 = true)}>Open another</button>
		</div>
	</div>
</Bottomsheet>

<Bottomsheet bind:open={open3} height="calc(50vh - 2rem)">
	{#snippet header()}
		<Header title="Stackable Sheet" subtitle="Third" onclick={() => (open3 = false)} />
	{/snippet}
	<div class="p-4">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ullam laborum accusantium. Impedit nesciunt odit fugit pariatur optio, cupiditate neque
			aperiam reiciendis ratione beatae eaque, ut et maiores, odio mollitia?
		</p>
		<div class="text-center p-8">
			<button class=" m-auto btn btn-sm text-center preset-outlined-secondary-600-400" onclick={() => (open3 = false)}>Okay, that's enough</button>
		</div>
	</div>
</Bottomsheet>

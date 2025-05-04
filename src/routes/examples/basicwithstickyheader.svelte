<script lang="ts">
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	import { ChevronDown } from '@lucide/svelte'
	let open = $state(false)
	let bs: Bottomsheet

	let imageId = $state('1')
	function handleThumbClick(e: MouseEvent) {
		let target = e.target as HTMLImageElement
		console.log(target.src)
		imageId = target.src.match(/id\/(\d+)/)?.[1] || '1'
		bs.snapTo(0)
	}

	let snappointIndex = $state(1)
	function handleSnap(index: number) {
		snappointIndex = index
	}
</script>

<div class="space-y-2">
	<h2 class="h4">Basic with sticky header</h2>
	<p>The header sticks to the bottom of the screen</p>
	<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open = true)}>Open</button>
</div>

<link rel="preload" as="image" href="https://picsum.photos/id/322/600/400" />
<link rel="preload" as="image" href="https://picsum.photos/id/323/600/400" />
<link rel="preload" as="image" href="https://picsum.photos/id/324/600/400" />
<link rel="preload" as="image" href="https://picsum.photos/id/325/600/400" />
<link rel="preload" as="image" href="https://picsum.photos/id/326/600/400" />
<link rel="preload" as="image" href="https://picsum.photos/id/327/600/400" />

<Bottomsheet bind:this={bs} bind:open snapPoints="auto" initialIndex={1} stickyHeader onsnap={handleSnap}>
	{#snippet header()}
		{#if snappointIndex > 0}
			<h1 class="h5 p-1 text-center">Photos</h1>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="flex p-0 h-16" onclick={handleThumbClick}>
				<img src="https://picsum.photos/id/322/600/400" alt="" />
				<img src="https://picsum.photos/id/323/600/400" alt="" />
				<img src="https://picsum.photos/id/324/600/400" alt="" />
				<img src="https://picsum.photos/id/325/600/400" alt="" />
				<img src="https://picsum.photos/id/326/600/400" alt="" />
				<img src="https://picsum.photos/id/327/600/400" alt="" />
			</div>
		{/if}
	{/snippet}
	<button class="absolute top-4 right-4 btn-icon preset-filled-surface-500 rounded-full" onclick={() => bs.snapTo(1)}><ChevronDown /></button>

	<img src="https://picsum.photos/id/{imageId}/600/400" class="w-full" alt="" />
	<div class="p-4">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga at sed porro minus, nulla dolorum nesciunt dolor dolorem sunt eligendi numquam
			expedita facilis odit, tempora voluptatibus voluptates quas! Animi?
		</p>
		<br />
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere reiciendis hic modi. Quo rerum quaerat consequuntur tempore dolorum recusandae, quidem
			illum sint, iste deleniti officiis ea ipsa nam eligendi!
		</p>
	</div>
	{#snippet snapPoint1Content()}{/snippet}
</Bottomsheet>

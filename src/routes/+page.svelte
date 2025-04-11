<script lang="ts">
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	import RenderRoute from '$lib/components/renderroute.svelte'
	import { fade } from 'svelte/transition'
	import Diaper from '$lib/components/icons/diaper.svelte'
	import Github from '$lib/components/icons/github-mark.svelte'
	import Lightswitch from '$lib/components/lightswitch.svelte'

	let showBotttomsheet2 = $state(false)
	let bs2: Bottomsheet | null = $state(null)

	let initialSnapPoint = $state(0)
	let snapPoints = $state([0.3, 0.7])

	let basicSheet = $state()
	let showBasicSheet = $state(false)
	let basicSheetWithFixedHeight = $state()
	let showBasicSheetWithFixedHeight = $state(false)
	let basicSheetWithAutoHeight = $state()
	let showBasicSheetWithAutoHeight = $state(false)
	let basicSheetWithAutoSnapPoint = $state()
	let showBasicSheetWithAutoSnapPoint = $state(false)
	let basicSheetWithFixedSnapPoint = $state()
	let showBasicSheetWithFixedSnapPoint = $state(false)
	let basicSheetWithInitialSnapPoint = $state()
	let showBasicSheetWithInitialSnapPoint = $state(false)
	let scrollableSheet = $state()
	let showScrollableSheet = $state(false)
	let scrollableSheetWithFixedSnapPoint = $state()
	let showScrollableSheetWithFixedSnapPoint = $state(false)
	let dynamicContentSheet = $state()
	let showDynamicContentSheet = $state(false)
	let dynamicContentSheetWithFixedSnapPoints = $state()
	let showDynamicContentSheetWithFixedSnapPoints = $state(false)
	let scrollableSheetWithDynamicContentAndAutoSnapPoint = $state()
	let showScrollableSheetWithDynamicContentAndAutoSnapPoint = $state(false)
	let stackableSheet = $state()
	let showStackableSheet = $state(false)
	let stackableSheet2 = $state()
	let showStackableSheet2 = $state(false)
	let stackableSheet3 = $state()
	let showStackableSheet3 = $state(false)
</script>

<div class="flex flex-col h-full">
	<header class=" text-center px-0 py-2 preset-filled-surface-900-100 flex justify-between items-center">
		<button aria-label="Github">
			<svg height="48" width="48" fill="currentColor">
				<Diaper />
			</svg>
		</button>
		<Lightswitch />

		<!-- Partial<{ root: string; hiddenInput: string; control: string; label: string; thumb: string; }> -->
		<h1 class="h3">Diaper</h1>
		<button aria-label="Github" class="p-2">
			<svg height="24" width="24" viewBox="0 0 98 96" fill="currentColor">
				<Github />
			</svg>
		</button>
	</header>
	<main class="overflow-auto pt-2">
		<h6 class="text-center">An advanced bottom sheet for Svelte</h6>
		<div class="px-4 py-4 space-y-8 max-w-2xl mx-auto">
			<h2 class="h3 border-b">Features</h2>
			<ul class="list-inside list-disc">
				<li>Beautiful iOS-like background animations</li>
				<li>Zero dependencies</li>
				<li>Flexible styling - tailwind or vanilla css</li>
				<li>Small</li>
				<li>Feature rich</li>
				<li>svelte5</li>
				<li>Uses the native html dialog element</li>
				<li>Light/dark mode out of the box</li>
				<li>Mobile first, in fact mobile only ;)</li>
			</ul>
			<div class="space-y-2">
				<h2 class="h3 border-b">Basic</h2>
				<p>The simplest version. Opens at max height</p>
				<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showBasicSheet = true)}>Open</button>
			</div>
			<div class="space-y-2">
				<h2 class="h4">Basic with fixed height</h2>
				<p>Opens at specified height. Cannot be made larger</p>
				<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showBasicSheetWithFixedHeight = true)}>Open</button>
			</div>
			<div class="space-y-2">
				<h2 class="h4">Basic with fixed auto height</h2>
				<p>Opens at height to fit content. Cannot be made larger</p>
				<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showBasicSheetWithAutoHeight = true)}>Open</button>
			</div>
			<div class="space-y-2">
				<h2 class="h3 border-b">Snap Points</h2>
				<p>Snap points can be either fixed or auto</p>
				<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showScrollableSheet = true)}>Open</button>
			</div>
			<div class="space-y-2">
				<h2 class="h4">Basic with auto snap point</h2>
				<p>Opens at max height but can be miminized to fit content</p>
				<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showBasicSheetWithAutoSnapPoint = true)}>Open</button>
			</div>
			<div class="space-y-2">
				<h2 class="h4">Basic with fixed snap point</h2>
				<p>Opens at max height but can be dragged to specified snap point(s)</p>
				<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showBasicSheetWithFixedSnapPoint = true)}>Open</button>
			</div>
			<div class="space-y-2">
				<h2 class="h4">Basic with initial snap point</h2>
				<p>Opens at max height but can be dragged to specified snap point(s)</p>
				<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showBasicSheetWithInitialSnapPoint = true)}>Open</button>
			</div>
			<div class="space-y-2">
				<h2 class="h3 border-b">Scrollable</h2>
				<p>Sheets are automatically scrollable when content overflows</p>
				<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showScrollableSheet = true)}>Open</button>
			</div>
			<div class="space-y-2">
				<h2 class="h4">Scrollable with fixed snap point</h2>
				<p>This one has a snap point at 0.5</p>
				<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showScrollableSheetWithFixedSnapPoint = true)}>Open</button>
			</div>
			<div class="space-y-2">
				<h2 class="h3 border-b">Dynamic content</h2>
				<p>You may want to display different content when the sheet is at a snap point. I.e. adjust content for different sizes</p>
			</div>
			<div class="space-y-2">
				<h2 class="h4">Dynamic content with auto snap points</h2>
				<p>Auto-calculates snap points to fit content</p>
				<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showDynamicContentSheet = true)}>Open</button>
			</div>
			<div class="space-y-2">
				<h2 class="h4">Dynamic content with fixed snap points</h2>
				<p>Specify fixed snappoints at which the content will change</p>
				<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showDynamicContentSheetWithFixedSnapPoints = true)}>Open</button>
			</div>
			<div class="space-y-2">
				<h2 class="h4">Scrollable with Dynamic Content and auto snap point</h2>
				<p>The content changes based on the snap point. The scroll position is restored when the scrollable content is made visible again</p>
				<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showScrollableSheetWithDynamicContentAndAutoSnapPoint = true)}>Open</button
				>
			</div>
			<div class="space-y-2">
				<h2 class="h3 border-b">Stackable</h2>
				<p>You can open multiple sheets on top of each other</p>
				<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showStackableSheet = true)}>Open</button>
			</div>
		</div>
	</main>
</div>

{#snippet bsheader(title = 'Title', subtitle = 'Subtitle', onclick = () => {})}
	<div class="p-4 pr-0 flex justify-between items-start border-b border-b-surface-700-300">
		<div>
			<h2 class="h4">{title}</h2>
			<p class="italic font-medium">{subtitle}</p>
		</div>
		<button class="btn text-[#007AFF] font-medium" {onclick}>Close</button>
	</div>
{/snippet}

<Bottomsheet bind:this={basicSheet} bind:open={showBasicSheet}>
	{#snippet header()}
		{@render bsheader('Basic Sheet', '', () => (showBasicSheet = false))}
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

<Bottomsheet bind:this={basicSheetWithFixedHeight} bind:open={showBasicSheetWithFixedHeight} height="70vh">
	{#snippet header()}
		{@render bsheader('Basic Sheet', 'With Fixed Height', () => (showBasicSheetWithFixedHeight = false))}
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

<Bottomsheet bind:this={basicSheetWithAutoHeight} bind:open={showBasicSheetWithAutoHeight} height="auto">
	{#snippet header()}
		{@render bsheader('Basic Sheet', 'With Auto Height', () => (showBasicSheetWithAutoHeight = false))}
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

<Bottomsheet bind:this={basicSheetWithAutoSnapPoint} bind:open={showBasicSheetWithAutoSnapPoint} snapPoints="auto">
	{#snippet header()}
		{@render bsheader('BasicSheet', 'With Auto Snap Point', () => (showBasicSheetWithAutoSnapPoint = false))}
	{/snippet}
	<div class="p-4">
		<p>A basic sheet can be dragged</p>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, qui! Maiores praesentium veniam delectus illo, quod facere necessitatibus quasi cum
			autem laboriosam consectetur repellendus voluptates ut sint impedit quam? Praesentium.
		</p>
		<br />
	</div>
</Bottomsheet>

<Bottomsheet bind:this={basicSheetWithFixedSnapPoint} bind:open={showBasicSheetWithFixedSnapPoint} snapPoints={[0.25, 0.7]}>
	{#snippet header()}
		{@render bsheader('BasicSheet', 'With Fixed Snap Point', () => (showBasicSheetWithFixedSnapPoint = false))}
	{/snippet}
	<div class="p-4">
		<p>A basic sheet can be dragged</p>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, qui! Maiores praesentium veniam delectus illo, quod facere necessitatibus quasi cum
			autem laboriosam consectetur repellendus voluptates ut sint impedit quam? Praesentium.
		</p>
		<br />
	</div>
</Bottomsheet>

<Bottomsheet bind:this={basicSheetWithInitialSnapPoint} bind:open={showBasicSheetWithInitialSnapPoint} initialSnapPoint={1} snapPoints={[0.25, 0.7]}>
	{#snippet header()}
		{@render bsheader('BasicSheet', 'With Initial Snap Point', () => (showBasicSheetWithInitialSnapPoint = false))}
	{/snippet}
	<div class="p-4">
		<p>A basic sheet can be dragged</p>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, qui! Maiores praesentium veniam delectus illo, quod facere necessitatibus quasi cum
			autem laboriosam consectetur repellendus voluptates ut sint impedit quam? Praesentium.
		</p>
		<br />
	</div>
</Bottomsheet>

<Bottomsheet bind:this={scrollableSheet} bind:open={showScrollableSheet} snapPoints="auto">
	{#snippet header()}
		{@render bsheader('Scrollable Sheet', '', () => (showScrollableSheet = false))}
	{/snippet}
	<div class="p-4">
		<p>A basic sheet can be dragged</p>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, qui! Maiores praesentium veniam delectus illo, quod facere necessitatibus quasi cum
			autem laboriosam consectetur repellendus voluptates ut sint impedit quam? Praesentium.
		</p>
		<br />
		<div class="space-y-2">
			{#each [...Array(50)
					.keys()
					.map((i) => `Item ${i + 1}`)] as i}
				<div class="card preset-filled-surface-200-800 p-4" style="content-visibility: auto ;">{i}</div>
			{/each}
		</div>
	</div>
</Bottomsheet>

<Bottomsheet bind:this={scrollableSheetWithFixedSnapPoint} bind:open={showScrollableSheetWithFixedSnapPoint} snapPoints={[0.5]}>
	{#snippet header()}
		{@render bsheader('Scrollable Sheet', 'With Fixed Snap Point', () => (showScrollableSheetWithFixedSnapPoint = false))}
	{/snippet}
	<div class="p-4">
		<p>A basic sheet can be dragged</p>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, qui! Maiores praesentium veniam delectus illo, quod facere necessitatibus quasi cum
			autem laboriosam consectetur repellendus voluptates ut sint impedit quam? Praesentium.
		</p>
		<br />
		<div class="space-y-2">
			{#each [...Array(50)
					.keys()
					.map((i) => `Item ${i + 1}`)] as i}
				<div class="card preset-filled-surface-200-800 p-4" style="content-visibility: auto ;">{i}</div>
			{/each}
		</div>
	</div>
</Bottomsheet>

<Bottomsheet bind:this={dynamicContentSheet} bind:open={showDynamicContentSheet} snapPoints="auto">
	{#snippet header()}
		{@render bsheader('Dynamic Content Sheet', '', () => (showDynamicContentSheet = false))}
	{/snippet}
	{#snippet snapPoint1Content()}
		<div class="p-4">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga at sed porro minus, nulla dolorum nesciunt dolor dolorem sunt eligendi numquam
				expedita facilis odit, tempora voluptatibus voluptates quas! Animi?
			</p>
			<br />
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere reiciendis hic modi. Quo rerum quaerat consequuntur tempore dolorum recusandae,
				quidem illum sint, iste deleniti officiis ea ipsa nam eligendi!
			</p>
		</div>
	{/snippet}
	{#snippet snapPoint2Content()}
		<div class="p-4">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolorem nihil perspiciatis natus, animi facere veniam magni doloribus, at commodi
			expedita vel voluptate? Similique molestiae rerum, praesentium explicabo sint dolorum.
		</div>
	{/snippet}
	<div class="p-4">
		<p>A basic sheet can be dragged</p>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, qui! Maiores praesentium veniam delectus illo, quod facere necessitatibus quasi cum
			autem laboriosam consectetur repellendus voluptates ut sint impedit quam? Praesentium.
		</p>
		<br />
	</div>
</Bottomsheet>

<Bottomsheet bind:this={dynamicContentSheetWithFixedSnapPoints} bind:open={showDynamicContentSheetWithFixedSnapPoints} snapPoints={[0.25, 0.7]}>
	{#snippet header()}
		{@render bsheader('Dyanic Content Sheet', 'With Fixed Snap Points', () => (showDynamicContentSheetWithFixedSnapPoints = false))}
	{/snippet}
	{#snippet snapPoint1Content()}
		<div class="p-4">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga at sed porro minus, nulla dolorum nesciunt dolor dolorem sunt eligendi numquam
				expedita facilis odit, tempora voluptatibus voluptates quas! Animi?
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere reiciendis hic modi. Quo rerum quaerat consequuntur tempore dolorum recusandae,
				quidem illum sint, iste deleniti officiis ea ipsa nam eligendi!
			</p>
		</div>
	{/snippet}
	{#snippet snapPoint2Content()}
		<div class="p-4">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolorem nihil perspiciatis natus, animi facere veniam magni doloribus, at commodi
			expedita vel voluptate? Similique molestiae rerum, praesentium explicabo sint dolorum.
		</div>
	{/snippet}
	<div class="p-4">
		<p>A basic sheet can be dragged</p>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, qui! Maiores praesentium veniam delectus illo, quod facere necessitatibus quasi cum
			autem laboriosam consectetur repellendus voluptates ut sint impedit quam? Praesentium.
		</p>
		<br />
	</div>
</Bottomsheet>

<Bottomsheet bind:this={scrollableSheetWithDynamicContentAndAutoSnapPoint} bind:open={showScrollableSheetWithDynamicContentAndAutoSnapPoint} snapPoints="auto">
	{#snippet header()}
		{@render bsheader('Scrollable Sheet', 'With Dynamic Content and Auto Snap Point', () => (showScrollableSheetWithDynamicContentAndAutoSnapPoint = false))}
	{/snippet}
	{#snippet snapPoint1Content()}
		<div class="p-4">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis fuga at sed porro minus, nulla dolorum nesciunt dolor dolorem sunt eligendi numquam
				expedita facilis odit, tempora voluptatibus voluptates quas! Animi?
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut facere reiciendis hic modi. Quo rerum quaerat consequuntur tempore dolorum recusandae,
				quidem illum sint, iste deleniti officiis ea ipsa nam eligendi!
			</p>
		</div>
	{/snippet}
	<div class="p-4">
		<p>A basic sheet can be dragged</p>
		<br />
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, qui! Maiores praesentium veniam delectus illo, quod facere necessitatibus quasi cum
			autem laboriosam consectetur repellendus voluptates ut sint impedit quam? Praesentium.
		</p>
		<br />
		<div class="space-y-2">
			{#each [...Array(50)
					.keys()
					.map((i) => `Item ${i + 1}`)] as i}
				<div class="card preset-filled-surface-200-800 p-4" style="content-visibility: auto ;">{i}</div>
			{/each}
		</div>
	</div>
</Bottomsheet>

<Bottomsheet bind:this={stackableSheet} bind:open={showStackableSheet} snapPoints="auto">
	{#snippet header()}
		{@render bsheader('Stackable Sheet', 'First', () => (showStackableSheet = false))}
	{/snippet}
	<div class="p-4">
		<p>A basic sheet can be dragged</p>
		<div class="text-center p-8">
			<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showStackableSheet2 = true)}>Open another</button>
		</div>
	</div>
</Bottomsheet>

<Bottomsheet bind:this={stackableSheet2} bind:open={showStackableSheet2}>
	{#snippet header()}
		{@render bsheader('Stackable Sheet', 'Second', () => (showStackableSheet2 = false))}
	{/snippet}
	<div class="p-4">
		<p>A basic sheet can be dragged</p>
		<div class="text-center p-8">
			<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showStackableSheet3 = true)}>Open another</button>
		</div>
	</div>
</Bottomsheet>

<Bottomsheet bind:this={stackableSheet3} bind:open={showStackableSheet3} height="auto">
	{#snippet header()}
		{@render bsheader('Stackable Sheet', 'Third', () => (showStackableSheet3 = false))}
	{/snippet}
	<div class="p-8 text-center space-y-4 mb-12">
		<p>A basic sheet can be dragged</p>
		<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (showStackableSheet3 = false)}>Okay, that's enough</button>
	</div>
</Bottomsheet>

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

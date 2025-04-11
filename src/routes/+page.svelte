<script lang="ts">
	import Diaper from '$lib/components/icons/diaper.svelte'
	import Github from '$lib/components/icons/github-mark.svelte'
	import Lightswitch from '$lib/components/lightswitch.svelte'
	import Basicsheet from '$lib/components/demo/basic.svelte'
	import Basicwithfixedheight from '$lib/components/demo/basicwithfixedheight.svelte'
	import Basicwithautoeight from '$lib/components/demo/basicwithautoeight.svelte'
	import Basicwithautosnappoints from '$lib/components/demo/basicwithautosnappoints.svelte'
	import Basicwithfixedsnappoints from '$lib/components/demo/basicwithfixedsnappoints.svelte'
	import Basicwithinitialsnappoint from '$lib/components/demo/basicwithinitialsnappoint.svelte'
	import Scrollable from '$lib/components/demo/scrollable.svelte'
	import Scrollablewithfixedsnappoint from '$lib/components/demo/scrollablewithfixedsnappoint.svelte'
	import Dyanmiccontentwithautosnappoints from '$lib/components/demo/dyanmiccontentwithautosnappoints.svelte'
	import Dyanmiccontentwithfixedsnappoints from '$lib/components/demo/dyanmiccontentwithfixedsnappoints.svelte'
	import Scollablewithdyanmiccontentandautosnappoints from '$lib/components/demo/scollablewithdyanmiccontentandautosnappoints.svelte'
	import Stackable from '$lib/components/demo/stackable.svelte'
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
		<h6 class="text-center italic">An advanced bottom sheet for Svelte</h6>
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
			<Basicsheet />
			<Basicwithfixedheight />
			<Basicwithautoeight />
			<div class="space-y-2">
				<h2 class="h3 border-b">Snap Points</h2>
				<p>Snap points can be either fixed or auto</p>
			</div>
			<Basicwithautosnappoints />
			<Basicwithfixedsnappoints />
			<Basicwithinitialsnappoint />
			<Scrollable />
			<Scrollablewithfixedsnappoint />
			<div class="space-y-2">
				<h2 class="h3 border-b">Dynamic content</h2>
				<p>You may want to display different content when the sheet is at a snap point. I.e. adjust content for different sizes</p>
			</div>
			<Dyanmiccontentwithautosnappoints />
			<Dyanmiccontentwithfixedsnappoints />
			<Scollablewithdyanmiccontentandautosnappoints />
			<Stackable />
		</div>
	</main>
</div>

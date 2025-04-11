<script lang="ts">
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

<main class="overflow-auto pt-2">
	<h6 class="text-center italic">An advanced bottom sheet for Svelte5</h6>
	<div class="px-4 py-4 space-y-8 max-w-2xl mx-auto">
		<h2 class="h3 border-b">Features</h2>
		<ul class="list-inside list-disc">
			<li>Beautiful iOS-like background animations</li>
			<li>Zero dependencies</li>
			<li>Flexible styling - tailwind or vanilla css</li>
			<li>Small</li>
			<li>Feature rich</li>
			<li>Svelte5</li>
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

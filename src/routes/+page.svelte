<script lang="ts">
	import Basicsheet from './examples/basic.svelte'
	import Basicwithfixedheight from './examples/basicwithfixedheight.svelte'
	import Basicwithautoeight from './examples/basicwithautoeight.svelte'
	import Basicwithautosnappoints from './examples/basicwithautosnappoints.svelte'
	import Basicwithfixedsnappoints from './examples/basicwithfixedsnappoints.svelte'
	import Basicwithinitialsnappoint from './examples/basicwithinitialsnappoint.svelte'
	import Scrollable from './examples/scrollable.svelte'
	import Scrollablewithfixedsnappoint from './examples/scrollablewithfixedsnappoint.svelte'
	import Dyanmiccontentwithautosnappoints from './examples/dyanmiccontentwithautosnappoints.svelte'
	import Dyanmiccontentwithfixedsnappoints from './examples/dyanmiccontentwithfixedsnappoints.svelte'
	import Scollablewithdyanmiccontentandautosnappoints from './examples/scollablewithdyanmiccontentandautosnappoints.svelte'
	import Stackable from './examples/stackable.svelte'
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
		<div class="space-y-2">
			<h2 class="h3 border-b">Basic</h2>
			<p>Basic sheets can be opened and closed but not resized</p>
		</div>
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

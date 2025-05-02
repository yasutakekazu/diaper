<script lang="ts">
	import Basicsheet from './examples/basic.svelte'
	import Basicwithfixedheight from './examples/basicwithfixedheight.svelte'
	import Basicwithautoeight from './examples/basicwithautoeight.svelte'
	import Basicwithautosnappoints from './examples/basicwithautosnappoints.svelte'
	import Basicwithfixedsnappoints from './examples/basicwithfixedsnappoints.svelte'
	import Basicwithinitialsnappoint from './examples/basicwithinitialsnappoint.svelte'
	import Basicwithstickyheader from './examples/basicwithstickyheader.svelte'
	import Scrollable from './examples/scrollable.svelte'
	import Scrollablewithfixedsnappoint from './examples/scrollablewithfixedsnappoint.svelte'
	import Dyanmiccontentwithautosnappoints from './examples/dyanmiccontentwithautosnappoints.svelte'
	import Dyanmiccontentwithfixedsnappoints from './examples/dyanmiccontentwithfixedsnappoints.svelte'
	import Scollablewithdyanmiccontentandautosnappoints from './examples/scollablewithdyanmiccontentandautosnappoints.svelte'
	import Stackable from './examples/stackable.svelte'
	import Programmaticcontrol from './examples/programmaticcontrol.svelte'
	import Longsheet from './examples/longsheet.svelte'
	import { Star } from '@lucide/svelte'
	import Detached from './examples/detached.svelte'
	import Full from './examples/full.svelte'
	import Stackabledetached from './examples/stackabledetached.svelte'
</script>

<main class="overflow-auto pt-2">
	<h6 class="text-center font-semibold text-[#407878]">An advanced bottom sheet for Svelte5</h6>
	<br />
	<div class="px-4 py-4 space-y-8 max-w-2xl mx-auto">
		<p class="italic">
			For the full experience, open this page on a mobile device and add to homescreen (it's a PWA). Or open devtools and choose a mobile device (iPhone 6/7/8
			with device frame recommended). Touch devices only, i.e. desktop not supported.
		</p>
		<h2 class="h3 border-b">Features</h2>
		<ul class="list-inside list-disc">
			<li>Beautiful iOS-like background animations</li>
			<li>Zero dependencies</li>
			<li>Flexible styling - tailwind or vanilla css</li>
			<li>Small</li>
			<li>Feature rich</li>
			<li>Svelte5</li>
			<li>Native html dialog element uth</li>
			<li>Light/dark mode out of the box</li>
			<li>Mobile first, in fact mobile only ;)</li>
			<li>Many more buzzwords</li>
		</ul>
		<p class="text-center">
			<a class="btn btn-lg flex items-center preset-outlined" href="https://github.com/devantic/diaper" target="_blank"
				>Star on Github<Star color="#f007" fill="gold"></Star></a
			>
		</p>
		<div class="space-y-2">
			<h2 class="h3 border-b">Basic</h2>
			<p>Basic sheets can be opened and closed but not resized</p>
		</div>
		<Basicsheet />
		<Basicwithfixedheight />
		<Basicwithautoeight />
		<Basicwithstickyheader />
		<Detached />
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
		<Stackabledetached />
		<Programmaticcontrol />
		<div class="space-y-2">
			<h2 class="h3 border-b">Other</h2>
		</div>
		<Longsheet />
		<Full />
	</div>
</main>

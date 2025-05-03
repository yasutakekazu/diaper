<script lang="ts">
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	let open = $state(false)
</script>

<div class="space-y-2">
	<h2 class="h4">Basic with auto height</h2>
	<p>Opens at specified height</p>
	<button class="btn btn-sm preset-outlined-secondary-600-400" onclick={() => (open = true)}>Open</button>
</div>

<link rel="preload" as="image" href="https://picsum.photos/id/102/170/170" />

<Bottomsheet bind:open height="auto">
	<div class="text-center flex flex-col items-center pt-6 pb-6 px-4 gap-4">
		<!-- <img class="rounded-2xl h-[170px]" src="https://picsum.photos/id/102/170/170" alt="" /> -->
		<h1 class="h2 pt-4 text-balance">Auto height</h1>
		<p class="opacity-75">Auto sizes to fit content</p>
		<code class="code">{`height="auto"`}</code>
		<button class="btn preset-filled-surface-800-200 rounded-full px-8" onclick={() => (open = false)}>Got It</button>
		<!-- <button class="undeline" onclick={() => window.open('https://github.com/devantic/diaper/blob/main/src/routes/examples/basicwithautoeight.svelte', '_blank')}
			>View Code</button
		> -->
	</div>
</Bottomsheet>

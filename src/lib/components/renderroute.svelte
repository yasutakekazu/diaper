<script lang="ts">
	import { preloadData } from '$app/navigation'
	import type { Component } from 'svelte'

	let { path, ...props } = $props()

	const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

	async function preload(path: string) {
		if (!path) return { Page: null, data: null }
		const result = await preloadData(path)
		if (result.type === 'redirect') return { Page: null, data: null }
		const data = result.data
		await wait(1000)
		const component: Component = (await import(`$routes/${path!.substring(1)}/+page.svelte`)).default
		return { component, data }
	}
</script>

{#await preload(path)}
	<div>Loading...</div>
{:then page}
	{#if page.component}
		<page.component data={page.data}></page.component>
	{/if}
{/await}
{@render props.children?.()}

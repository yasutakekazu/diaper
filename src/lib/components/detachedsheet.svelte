<script>
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	let { open = $bindable(false), ...props } = $props()
</script>

<div class="container">
	<Bottomsheet bind:open class="sheet" maxHeight="calc(93% - 0.25rem)" {...props}>
		{@render props.children?.()}
	</Bottomsheet>
</div>

<style>
	.container :global(dialog[data-diaper]) {
		width: calc(100% - 0.5rem);
		margin-bottom: 0.25rem;
		border-radius: 2rem;
	}
</style>

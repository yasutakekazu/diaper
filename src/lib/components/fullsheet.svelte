<script>
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	let { open = $bindable(false), style = '', ...props } = $props()
	const customStyle = 'border-radius: 0; padding-top: env(safe-area-inset-top);'
</script>

<Bottomsheet bind:open class="sheet" maxHeight="100%" flat style="{customStyle} {style}" {...props}>
	{@render props.children?.()}
</Bottomsheet>

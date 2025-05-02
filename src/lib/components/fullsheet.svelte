<script>
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	let { open = $bindable(false), style = '', ...props } = $props()
	const customStyle = 'border-radius: 0;'
</script>

<Bottomsheet bind:open class="sheet" maxHeight="100%" threeD={false} style="{customStyle} {style}" {...props}>
	{@render props.children?.()}
</Bottomsheet>

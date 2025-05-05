<script lang="ts">
	import Bottomsheet from './bottomsheet.svelte'
	import type { BottomsheetProps } from './types'

	let { open = $bindable(false), style = '', ...props }: BottomsheetProps = $props()
	const customStyle = 'width: calc(100% - 0.75rem); margin-bottom: 0.375rem; border-radius: 2rem;'
</script>

<Bottomsheet bind:open maxHeight="calc(93% - 0.375rem)" style="{customStyle} {style}" {...props}>
	{@render props.children?.()}
</Bottomsheet>

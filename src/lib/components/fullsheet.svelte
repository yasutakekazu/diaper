<script lang="ts">
	import Bottomsheet from '$lib/components/bottomsheet.svelte'
	import type { BottomsheetProps } from './types'

	let { open = $bindable(false), style = '', ...props }: BottomsheetProps = $props()
	const customStyle = 'border-radius: 0; padding-top: env(safe-area-inset-top);'
</script>

<Bottomsheet bind:open class="sheet" maxHeight="100%" flat style="{customStyle} {style}" {...props}>
	{@render props.children?.()}
</Bottomsheet>

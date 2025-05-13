<script lang="ts">
	import Bottomsheet from './bottomsheet.svelte'
	import type { BottomsheetProps } from './types'

	let { open = $bindable(false), style = '', ...props }: BottomsheetProps = $props()

	const customStyle = 'border-radius: 0; padding-top: env(safe-area-inset-top);'

	let bs: Bottomsheet

	export const showModal = () => bs.showModal()
	export const close = () => bs.close()
	export const snapTo = (index: number) => bs.snapTo(index)
	export const setIndex = (index: number) => bs.setIndex(index)
</script>

<Bottomsheet bind:this={bs} bind:open class="sheet" maxHeight="100%" flat style="{customStyle} {style}" {...props}>
	{@render props.children?.()}
</Bottomsheet>

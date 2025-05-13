<script lang="ts">
	import Bottomsheet from './bottomsheet.svelte'
	import type { BottomsheetProps } from './types'

	let { open = $bindable(false), style = '', ...props }: BottomsheetProps = $props()

	const customStyle = 'width: calc(100% - 0.75rem); margin-bottom: calc(env(safe-area-inset-bottom) + 0.375rem); border-radius: 2rem;'

	let bs: Bottomsheet

	export const showModal = () => bs.showModal()
	export const close = () => bs.close()
	export const snapTo = (index: number) => bs.snapTo(index)
	export const setIndex = (index: number) => bs.setIndex(index)
</script>

<Bottomsheet bind:this={bs} bind:open maxHeight="calc(93% - 0.375rem)" style="{customStyle} {style}" {...props}>
	{@render props.children?.()}
</Bottomsheet>

import type { Snippet } from 'svelte'
import type { HTMLAttributes } from 'svelte/elements'

export type BottomsheetProps = {
	open?: boolean
	maxHeight?: string
	height?: string
	snapPoints?: number[] | 'auto'
	initialIndex?: number
	snapPoint1Content?: Snippet
	snapPoint2Content?: Snippet
	headerOverlaysContent?: boolean
	canDragSheet?: boolean
	stickyHeader?: boolean
	openSticky?: boolean
	closeOnBackdropTap?: boolean
	toggleOnHeaderTap?: boolean
	threeD?: boolean
	onclose?: () => void
	onsnap?: (progress: number) => void
	header?: Snippet
	children?: Snippet
	baseClass?: string
	// class?: string
	// style?: string
} & HTMLAttributes<HTMLDialogElement>

export type LongsheetProps = {
	open?: boolean
	children?: Snippet
} & HTMLAttributes<HTMLDialogElement>

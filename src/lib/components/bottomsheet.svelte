<script module lang="ts">
	import type { BottomsheetProps } from './types'
	import { untrack } from 'svelte'
	import './bottomsheet.css'

	const noop = () => {}

	const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

	const getNearestValue = (value: any, array: any[]) =>
		array.reduce((nearest, current) => (Math.abs(value - current) < Math.abs(value - nearest) ? current : nearest), array[0])

	const getRootProperty = (property: string) => getComputedStyle(document.documentElement).getPropertyValue(property)
	const setRootProperty = (property: string, value: string) => document.documentElement.style.setProperty(property, value)

	function indexOf(value: any, array: any[] = [], indexIfNotFound = -1) {
		const index = array.indexOf(value)
		return index > -1 ? index : indexIfNotFound
	}
</script>

<script lang="ts">
	let {
		open = $bindable(true),
		maxHeight = '93%',
		height = maxHeight,
		snapPoints = [],
		initialIndex = 0,
		snapPoint1Content,
		snapPoint2Content,
		headerOverlaysContent = false,
		canDragSheet = true,
		onclose = noop,
		onsnap = noop,
		header,
		children,
		...props
	}: BottomsheetProps = $props()

	export function close() {
		open = false
	}

	export function snapTo(index: number) {
		if (isTouching) return
		snapToIndex(index)
	}

	export function setIndex(index: number) {
		if (isTouching) return
		snapPointIndex = index
	}

	function snapToIndex(index: number) {
		console.log('snapToIndex', index)
		if (index < 0) index = snappoints.length - 1
		snapPointIndex = clamp(index, 0, snappoints.length - 1)
		const snapPoint = snappoints[snapPointIndex]
		onsnap?.(snapPoint)
		if (snapPoint === 1) {
			close()
			return
		}
		lastTranslate = snapPoint * dialogHeight
		if (newTranslate > lastTranslate) {
			newTranslate = lastTranslate
		}
		doTranslate(lastTranslate)
		const progress = clamp(snapPoint / snappoints[1], 0, 1)
		applyProgress(progress)
	}

	const refs = $state<Record<string, HTMLElement | undefined>>({
		ref: undefined,
		header: undefined,
		main: undefined,
		children: undefined,
		snapPoint1: undefined,
		snapPoint2: undefined
	})

	let isOpen = $state(false)
	let hasRendered = $state(false)
	let autoHeight = $state(height)
	let dialogHeight = $state(0)
	let headerHeight = $state(0)
	let mainHeight = $state(0)
	let newTranslate = $state(0)
	let snapPointIndex = $state(initialIndex)

	// let snappoints: number[] = []
	let dialog: HTMLDialogElement
	let backgroundElement: HTMLElement
	let startY = 0
	let lastTranslate = 0
	let isTouching = false
	let duration = '0.5s'
	let backdropOpacity = 0.25

	const getSnapPointIndex = (value: number) => indexOf(value, snappoints, 0)
	const getNearestSnapPoint = (value: number) => getNearestValue(value, snappoints)

	function closeMe() {
		console.log('closeMe')
		dialog.close()
		open = false
		isOpen = false
		onclose?.()
		if (backgroundElement === document.body) {
			document.body.style.setProperty('overflow', 'visible')
		}
		snapPointIndex = initialIndex
		newTranslate = 0
		hasRendered = false
	}

	function onTransitionend(e: TransitionEvent) {
		if (e.propertyName !== 'translate' || e.target !== dialog) return
		console.log('onTransitionend', { open })
		if (!open) {
			closeMe()
		}
	}

	$effect(() => {
		if (!refs.ref) return
		console.log('fsfsfsf')
		refs.ref.addEventListener('transitionend', onTransitionend)
		return () => refs!.ref!.removeEventListener('transitionend', onTransitionend)
	})

	function doTranslate(y: number, callback: (e: TransitionEvent) => void = noop) {
		dialog.style.setProperty('translate', `0 ${y}px`)
		// onTransitionend(callback)
	}

	function doClose() {
		console.log('doClose')
		open = false

		applyProgress(1)
		doTranslate(dialogHeight)
	}

	const isTouchingHeader = (target: HTMLElement) => refs.header!.contains(target)
	const canDragSheetOverride = snapPoint1Content || snapPoint2Content ? false : canDragSheet

	function ontouchstart(e: TouchEvent) {
		console.log('ontouchstart', e.target)
		open = true
		// ignore multiple touches
		if (isTouching) return
		const isHeader = isTouchingHeader(e.target as HTMLElement)
		if (!canDragSheet && !isHeader) return
		if (refs.children?.scrollTop !== 0 && !isHeader) return
		const translateY = getComputedStyle(dialog).translate.split(' ')[1] ?? '0'

		lastTranslate = parseFloat(translateY)
		if (translateY.endsWith('%')) {
			lastTranslate = (lastTranslate * dialogHeight) / 100
		}

		startY = e.touches[0].clientY
		isTouching = true
		setRootProperty('--diaper-duration', '0s')
	}

	function ontouchmove(e: TouchEvent) {
		if (startY === 0) return
		if (!isTouching) return
		newTranslate = lastTranslate + e.touches[0].clientY - startY
		if (newTranslate > 0) {
			dialog.style.setProperty('translate', `0 ${newTranslate}px`)
		}
		// setting snapPointIndex here causes content to change on drag.
		// can alternatively be done in ontouchend
		const snapPoint = getNearestSnapPoint(newTranslate / dialogHeight)
		snapPointIndex = getSnapPointIndex(snapPoint)
		const progress = clamp(newTranslate / (dialogHeight * snappoints[1]), 0, 1)
		applyProgress(progress)
	}

	function ontouchend(e: TouchEvent) {
		// if multiple fingers touching, do nothing until last finger is release
		if (e.touches.length > 0) return
		setRootProperty('--diaper-duration', duration)
		// if (newTranslate === 0) return
		if (!isTouching) return
		snapToIndex(snapPointIndex)
		startY = 0
		isTouching = false
	}

	function applyProgress(progress: number) {
		dialog.style.setProperty('--diaper-backdrop-opacity', `${(1 - progress) * backdropOpacity}`)
		// only scale body or dialog underneath if drag is between full and the first snap point
		if (height === maxHeight) backgroundElement.style.setProperty('--diaper-progress', `${progress}`)
	}

	const calcAutoSnapPoint = (ref: HTMLElement | undefined) => {
		if (!ref) return 0
		const contentHeight = headerOverlaysContent ? mainHeight - headerHeight : mainHeight
		return clamp((contentHeight - ref.offsetHeight) / dialogHeight, 0, 1)
	}

	function calcSnapPoints(snapPoints: number[] | 'auto') {
		let snappoints = [0, 1]
		if (snapPoints === 'auto') {
			const sp0 = snapPoint1Content || snapPoint2Content ? 0 : calcAutoSnapPoint(refs.children)
			const sp1 = snapPoint1Content ? calcAutoSnapPoint(refs.snapPoint1) : 0
			const sp2 = snapPoint1Content ? calcAutoSnapPoint(refs.snapPoint2) : 0
			snappoints.push(sp0, sp1, sp2)
		} else {
			snappoints.push(...snapPoints)
		}
		return [...new Set(snappoints)].sort((a, b) => a - b)
	}

	function init() {
		dialogHeight = dialog.offsetHeight
		headerHeight = refs.header?.offsetHeight ?? 0
		if (!mainHeight) {
			mainHeight = headerOverlaysContent ? dialogHeight : dialogHeight - headerHeight
		}
		hasRendered = true
		backgroundElement = [...document.querySelectorAll('dialog')].at(-2) ?? document.body
	}

	$effect(() => {
		if (open) {
			isOpen = true
			startY = 0
			lastTranslate = 0
		} else {
			if (isOpen) doClose()
		}
	})

	$effect(() => {
		if (!refs.ref) return
		requestAnimationFrame(() => {
			duration = getRootProperty('--diaper-duration')
			backdropOpacity = +getRootProperty('--diaper-backdrop-opacity')
		})
		document.body.style.setProperty('overflow', 'hidden')
		dialog = refs.ref as HTMLDialogElement
		dialog.showModal()
		untrack(init)
	})

	$effect(() => {
		if (height !== 'auto') return
		if (!refs.children) return
		if (!refs.main) return
		autoHeight = refs.children.offsetHeight + headerHeight + 'px'
	})

	function handleEscape(e: KeyboardEvent) {
		if (e.key === 'Escape' && dialog.contains(e.target as Node)) {
			e.preventDefault()
			close()
		}
	}

	$effect(() => {
		if (!hasRendered) return
		if (open) {
			document.addEventListener('keydown', handleEscape)
		} else {
			document.removeEventListener('keydown', handleEscape)
		}
	})

	// let snappoints = $derived(calcSnapPoints(snapPoints))
	let snappoints = $state([0, 1])

	$effect(() => {
		if (!hasRendered) return
		snappoints = calcSnapPoints(snapPoints)
	})

	$effect(() => {
		if (!hasRendered) return
		console.log('hasRendered')
		untrack(() => snapToIndex(initialIndex))
	})

	$inspect(snappoints)
</script>

{#if isOpen}
	<dialog data-diaper bind:this={refs.ref} style:height={autoHeight} style:max-height={maxHeight}>
		<div class={props?.class} style={props?.style} style:flex="1" {ontouchstart} {ontouchmove} {ontouchend}>
			<header bind:this={refs.header} class:headerOverlaysContent>
				{#if header}
					{@render header?.()}
				{:else}
					<div class="handle"></div>
				{/if}
			</header>
			<main bind:this={refs.main} style:max-height={mainHeight - newTranslate + 'px'}>
				{#if hasRendered}
					<section
						bind:this={refs.children}
						style="overflow:auto;"
						style:padding-top={headerOverlaysContent ? headerHeight + 'px' : 0}
						data-visible={snapPointIndex === 0 || (snapPointIndex === 1 && !snapPoint1Content) || (snapPointIndex === 2 && !snapPoint2Content) || null}
					>
						{@render children?.()}
					</section>
					<section
						bind:this={refs.snapPoint1}
						style="overflow:auto;"
						style:padding-top={headerOverlaysContent ? headerHeight + 'px' : 0}
						data-visible={snapPointIndex === 1 || null}
					>
						{@render snapPoint1Content?.()}
					</section>
					<section
						bind:this={refs.snapPoint2}
						style="overflow:auto;"
						style:padding-top={headerOverlaysContent ? headerHeight + 'px' : 0}
						data-visible={snapPointIndex === 2 || null}
					>
						{@render snapPoint2Content?.()}
					</section>
				{/if}
			</main>
		</div>
	</dialog>
{/if}

<style>
	main {
		display: grid;
		grid-template-areas: 'content';
		height: 100%;
	}
	section {
		grid-area: content;
		transition-property: opacity, visibility;
		transition-duration: 0.9s;
		transition-behavior: allow-discrete;
		visibility: hidden;
		opacity: 0;
		&[data-visible] {
			/* background-color: red; */
			visibility: visible;
			opacity: 1;
		}
		height: fit-content;
		max-height: 100%;
	}
	.h-fit {
		height: fit-content;
	}
	.handle {
		width: 40px;
		height: 4px;
		background-color: #e0e0e0;
		border-radius: 2px;
		margin: 16px auto;
	}
	.headerOverlaysContent {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		backdrop-filter: blur(8px);
	}
</style>

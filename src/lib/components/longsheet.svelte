<script lang="ts">
	import '$lib/components/diaper.css'
	import type { LongsheetProps } from './types'

	let { open = $bindable(false), children, ...props }: LongsheetProps = $props()
	let isOpen = $state(false)

	$effect(() => {
		if (!open) return
		isOpen = true
	})

	function ontransitionstart(e: TransitionEvent) {
		if (e.propertyName !== 'transform') return
		const target = e.target as HTMLDialogElement
		target.style.setProperty('pointer-events', 'none')
	}

	function ontransitionend(e: TransitionEvent) {
		if (e.propertyName !== 'transform') return
		const target = e.target as HTMLDialogElement
		target.style.setProperty('pointer-events', '')
		if (!open && isOpen) {
			isOpen = false
		}
	}

	function noscroll(node: HTMLElement) {
		function touchstart(e: TouchEvent) {
			if (e.target === e.currentTarget) e.preventDefault()
		}
		$effect(() => {
			node.addEventListener('touchstart', touchstart)
			return () => node.removeEventListener('touchstart', touchstart)
		})
	}
</script>

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="dialog-backdrop" data-closed={(!open && isOpen) || null}></div>
	<div class="dialog-container" use:noscroll>
		<dialog open {ontransitionstart} {ontransitionend} data-closed={(!open && isOpen) || null} class={props?.class} style={props?.style} use:noscroll>
			{@render children?.()}
		</dialog>
	</div>
{/if}

<style>
	dialog {
		position: relative;
		overflow: clip;
		width: 100%;
		padding: 0rem;
		border-radius: var(--diaper-radius);
		margin-top: calc(env(safe-area-inset-top) + 2rem);
		margin-bottom: calc(env(safe-area-inset-bottom) + 2rem);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		background-color: var(--diaper-bg);
		color: var(--diaper-fg);
		transition: transform var(--diaper-duration) var(--diaper-easing);
		transform: translateY(100vh);
		&[open] {
			transform: translateY(0);
			@starting-style {
				transform: translateY(100vh);
			}
		}
		&[data-closed] {
			transform: translateY(100vh);
		}
	}
	.dialog-container {
		margin: 0;
		position: fixed;
		inset: 0;
		overflow-y: auto;
	}
	.dialog-backdrop {
		margin: 0;
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.5);
		transition: opacity var(--diaper-duration) var(--diaper-easing);
		opacity: 1;
		@starting-style {
			opacity: 0;
		}
		&[data-closed] {
			opacity: 0;
		}
	}
</style>

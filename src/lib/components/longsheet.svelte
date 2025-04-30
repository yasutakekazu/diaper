<script lang="ts">
	import '$lib/components/diaper.css'

	let { open = $bindable(false), children } = $props()
	let isOpen = $state(false)

	$effect(() => {
		if (!open) return
		isOpen = true
	})

	function ontransitionend(e: TransitionEvent) {
		if (e.propertyName !== 'transform') return
		if (!open && isOpen) {
			isOpen = false
		}
	}
</script>

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="dialog-backdrop" data-closed={(!open && isOpen) || null}></div>
	<div class="dialog-container">
		<dialog open {ontransitionend} data-closed={(!open && isOpen) || null}>
			{@render children?.()}
		</dialog>
	</div>
{/if}

<style>
	.dialog-container {
		position: fixed;
		inset: 0;
		overflow-y: auto;
	}
	.dialog-backdrop {
		all: unset;
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

	dialog {
		position: relative;
		width: 100%;
		padding: 1rem;
		border-radius: 10px;
		margin-block: 4rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
</style>

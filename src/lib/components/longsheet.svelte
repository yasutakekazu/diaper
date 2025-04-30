<script lang="ts">
	import '$lib/components/diaper.css'

	let { open = $bindable(false), children } = $props()
	let isOpen = $state(false)

	$inspect(open, isOpen)

	$effect(() => {
		if (!open) return
		isOpen = true
		// dialog.style.setProperty('translate', '0 0')
	})

	function ontransitionend(e: TransitionEvent) {
		console.log(e)
		console.log(open, isOpen)
		if (!open && isOpen) {
			isOpen = false
		}
	}
</script>

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="dialog-backdrop" data-close={(!open && isOpen) || null}></div>
	<div class="dialog-container">
		<dialog open {ontransitionend} data-closed={(!open && isOpen) || null}>
			<button onclick={() => (open = false)}>Close</button>
			<div class="space-y-2">
				{#each { length: 125 }, i}
					<div class="card preset-filled-surface-200-800 p-4">Item {i + 1}</div>
				{/each}
			</div>
		</dialog>
	</div>
{/if}

<style>
	:global(body) {
		margin: 0;
		position: fixed;
		inset: 0;
		overscroll-behavior-y: none;
	}
	.dialog-container {
		pointer-events: none;
		position: fixed;
		inset: 0;
		padding-inline: 0;
		padding-block: 4rem;
		overflow-y: auto;
	}
	.dialog-backdrop {
		position: fixed;
		inset: 0;
		bottom: -4rem;
		background-color: rgba(0, 0, 0, 0.5);
		transition: opacity var(--diaper-duration) var(--diaper-easing);
		opacity: 1;
		@starting-style {
			opacity: 0;
		}
		&[data-close] {
			opacity: 0;
		}
	}

	dialog {
		pointer-events: all;
		position: static;
		width: 100%;
		/* background-color: red; */
		border-radius: 10px;
		padding: 1rem;
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

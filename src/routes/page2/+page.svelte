<script lang="ts">
	import { fly } from 'svelte/transition'
	import '$lib/components/diaper.css'

	let dialog: HTMLDialogElement

	let open = $state(false)

	$inspect(open)
</script>

<button onclick={() => (open = true)}>Open</button>

{#if open}
	<div transition:fly={{ y: 600 }} class="dialog-container">
		<dialog bind:this={dialog} {open} data-diaper>
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
	:global body {
		margin: 0;
		position: fixed;
		inset: 0;
		overscroll-behavior-y: none;
	}
	.dialog-container {
		position: fixed;
		inset: 0;
		padding-inline: 0.5rem;
		padding-block: 100px;
		overflow-y: auto;
		/* background-color: rgba(0, 0, 0, 0.5); */
	}

	dialog {
		position: static;
		width: 100%;
		/* background-color: red; */
		border-radius: 10px;
		padding: 1rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		transition: translate 0.3s ease-in-out;
		display: none;
		@starting-style {
			display: none;
			translate: 0 100vh;
		}
		&[open] {
			display: block;
		}
		transition-behavior: allow-discrete;
	}
</style>

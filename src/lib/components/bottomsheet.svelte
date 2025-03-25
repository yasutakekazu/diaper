<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import './bottomsheet.css';
	import type { Snippet } from 'svelte';

	const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

	let {
		ref = $bindable(),
		height = '100%',
		onclose = () => {},
		header,
		children,
		...props
	}: {
		ref?: HTMLDialogElement;
		height?: string;
		onclose?: () => void;
		header?: Snippet;
		children?: Snippet;
	} & HTMLAttributes<HTMLDialogElement> = $props();

	let dialog: HTMLDialogElement;
	let body = document.body;
	body.classList.add('dialog-open');
	body.style.setProperty('overflow', 'hidden');

	let dialogElements: NodeListOf<HTMLDialogElement>;
	let dialogs = 0;
	let dialogHeight = 0;
	let startY = 0;
	let currentY = 0;
	let startTime = 0;
	let dragAmount = 0;
	let deltaTime;
	let lastProgress = 0;
	let isTouching = false;
	let animationFrameId: number | null = null;
	let isTransitioning = true;

	export function close() {
		dialog.style.setProperty('translate', '0 100%');
		dialog.style.setProperty('--backdrop-opacity', '0');

		if (dialogs < 2) {
			body.classList.remove('dialog-open');
			body.style.setProperty('--progress', '1');
		}

		const secondLastDialog = dialogElements[dialogs - 2];
		if (secondLastDialog) {
			secondLastDialog.style.setProperty('--progress', '1');
		}

		isTransitioning = true;
		dialog.addEventListener(
			'transitionend',
			() => {
				dialog.close();
				onclose?.();
				if (dialogs === 1) {
					body.style.setProperty('overflow', 'visible');
					body.style.setProperty('--progress', '0');
				}
				isTransitioning = false;
			},
			{ once: true }
		);
	}

	function ontouchstart(e: TouchEvent) {
		if (isTransitioning) return;
		startTime = Date.now();
		startY = e.touches[0].clientY;
		isTouching = true;
		dialog.style.setProperty('transition-duration', '0s');
		body.style.setProperty('transition-duration', '0s');
	}

	function ontouchmove(e: TouchEvent) {
		if (startY === 0) return;
		if (!isTouching) return;
		currentY = e.touches[0].clientY;
		if (!animationFrameId) {
			animationFrameId = requestAnimationFrame(updateTransform);
		}
	}

	function updateTransform() {
		dragAmount = currentY - startY;

		if (dragAmount > 0) {
			dialog.style.setProperty('translate', `0 ${dragAmount}px`);
		}

		const progress = clamp(dragAmount / dialogHeight, 0, 1);
		const shouldTransform = Math.abs(progress - lastProgress) > 0.001;
		if (dialogs > 1) {
			const secondLastDialog = dialogElements[dialogs - 2];
			if (shouldTransform) {
				secondLastDialog.style.setProperty('--progress', `${progress}`);
				lastProgress = progress;
			}
		} else if (shouldTransform) {
			body.style.setProperty('--progress', `${progress}`);
			lastProgress = progress;
		}
		animationFrameId = null;
	}

	function ontouchend() {
		if (animationFrameId) {
			cancelAnimationFrame(animationFrameId);
			animationFrameId = null;
		}
		if (!isTouching) return;
		deltaTime = Date.now() - startTime;
		dialog.style.setProperty('transition-duration', '0.5s');
		body.style.setProperty('transition-duration', '0.5s');
		if (dragAmount > dialogHeight / 2 || (deltaTime < 300 && dragAmount > 100)) {
			close();
		} else {
			dialog.style.removeProperty('translate');
			body.style.setProperty('--progress', '0');
		}
		startY = 0;
		dragAmount = 0;
		isTouching = false;
	}

	$effect(() => {
		dialog = ref!;
		dialog.showModal();
		dialogElements = document.querySelectorAll('dialog');
		dialogs = dialogElements.length;
		dialogHeight = dialog.offsetHeight;
		dialog.addEventListener(
			'transitionend',
			() => {
				dialogHeight = dialog.offsetHeight;
				isTransitioning = false;
			},
			{ once: true }
		);

		const secondLastDialog = dialogElements[dialogs - 2];
		if (secondLastDialog) {
			secondLastDialog.style.setProperty('--progress', '0');
		}
	});
</script>

<dialog bind:this={ref} style:height class="dialog {props?.class}" style={props?.style}>
	<section {ontouchstart} {ontouchmove} {ontouchend}>
		{@render header?.()}
	</section>
	{@render children?.()}
</dialog>

<style>
</style>

import type { ActionReturn } from 'svelte/action'

const setRootProperty = (property: string, value: string) => document.documentElement.style.setProperty(property, value)

interface Parameter {}
interface Attributes {
	onstart: (e: CustomEvent<'start'>) => void
	onmove: (e: CustomEvent<'move'>) => void
	onend: (e: CustomEvent<'end'>) => void
}

let diaperDuration = '0.5s'

class TouchHistory {
	private HISTORY_MS = 100
	private touchHistory: { y: number; time: number }[] = []
	private node: HTMLElement
	private touchstart = () => this.clear()
	private touchmove = (e: TouchEvent) => this.push(e.touches[0].clientY)
	private touchend = () => this.do()

	constructor(node: HTMLElement) {
		node.addEventListener('touchstart', this.touchstart)
		node.addEventListener('touchmove', this.touchmove)
		node.addEventListener('touchend', this.touchend)
		this.node = node
	}
	clear() {
		this.touchHistory = []
	}
	push(y: number) {
		const now = performance.now()
		this.touchHistory = this.touchHistory.filter((point) => now - point.time <= this.HISTORY_MS)
		this.touchHistory.push({ y, time: performance.now() })
	}
	do() {
		const now = performance.now()

		// Remove old touches again just to be safe
		this.touchHistory = this.touchHistory.filter((point) => now - point.time <= this.HISTORY_MS)

		if (this.touchHistory.length >= 2) {
			const first = this.touchHistory.at(0)!
			const last = this.touchHistory.at(-1)!
			const deltaY = last.y - first.y
			const deltaTime = last.time - first.time
			const speed = Math.abs(deltaY / deltaTime) // px/ms

			// console.log({ deltaTime, speed })
			// Map speed to transition duration
			// Faster swipe = shorter duration
			const maxSpeed = 2 // px/ms
			const minDuration = 400 // ms
			const maxDuration = 1400 // ms

			let dyanamicDuration = maxDuration - (speed / maxSpeed) * (maxDuration - minDuration)
			dyanamicDuration = Math.max(minDuration, Math.min(maxDuration, dyanamicDuration)) // clamp

			setRootProperty('--diaper-duration', dyanamicDuration + 'ms')
		} else {
			setRootProperty('--diaper-duration', diaperDuration)
		}
	}
	destroy() {
		this.node.removeEventListener('touchstart', this.touchstart)
		this.node.removeEventListener('touchmove', this.touchmove)
		this.node.removeEventListener('touchend', this.touchend)
	}
}

export function draggable(node: HTMLElement): ActionReturn<Parameter, Attributes> {
	let startY = 0
	let lastTranslate = 0
	let newTranslate = 0
	let isTouching = false
	let dialog = node.parentElement!

	let touchHistory = new TouchHistory(node)

	function ontouchstart(e: TouchEvent) {
		setRootProperty('--diaper-duration', '0s')
		startY = 0
		lastTranslate = 0
		newTranslate = 0
		// ignore multiple touches
		if (isTouching) return

		const event = new CustomEvent('start', { detail: { target: e.target as HTMLElement }, cancelable: true })
		if (!node.dispatchEvent(event)) return

		lastTranslate = dialog.getBoundingClientRect().top - dialog.offsetTop

		startY = e.touches[0].clientY
		isTouching = true
	}

	let lastY = 0

	function ontouchmove(e: TouchEvent) {
		setRootProperty('--diaper-duration', '0s')

		if (startY === 0) return
		if (!isTouching) return

		const clientY = e.touches[0].clientY
		const deltaY = clientY - lastY
		lastY = clientY

		// Prevent touch loss when dragging off bottom edge of screen
		if (clientY > screen.height) return

		newTranslate = lastTranslate + clientY - startY

		// overdrag resistance
		if (newTranslate < 0) {
			newTranslate = Math.pow(Math.abs(newTranslate), 0.5) * Math.sign(newTranslate)
		}

		dialog.style.setProperty('translate', `0 ${newTranslate}px`)

		const event = new CustomEvent('move', { detail: { translateY: newTranslate, deltaY } })
		node.dispatchEvent(event)
	}

	function ontouchend(e: TouchEvent) {
		// if multiple fingers touching, do nothing until last finger is released
		if (e.touches.length > 0) return

		// if (newTranslate === 0) return
		if (!isTouching) return
		const event = new CustomEvent('end', { detail: { message: 'Hello from action!' } })
		node.dispatchEvent(event)
		isTouching = false
	}

	$effect(() => {
		node.addEventListener('touchstart', ontouchstart)
		node.addEventListener('touchmove', ontouchmove)
		node.addEventListener('touchend', ontouchend)
		return () => {
			node.removeEventListener('touchstart', ontouchstart)
			node.removeEventListener('touchmove', ontouchmove)
			node.removeEventListener('touchend', ontouchend)
			touchHistory.destroy()
		}
	})
	return {}
}

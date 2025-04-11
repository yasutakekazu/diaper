<script lang="ts">
	import { Sun, Moon, SunMoon } from '@lucide/svelte/icons'
	import type { Component } from 'svelte'

	type Mode = 'dark' | 'light' | 'system'

	const modes: Record<Mode, Component> = {
		dark: Moon,
		light: Sun,
		system: SunMoon
	}

	let mode = $state<Mode>('system')
	let ModeIcon = $derived(modes[mode])

	function switchMode() {
		mode = { system: 'dark', dark: 'light', light: 'system' }[mode] as Mode
	}

	$effect(() => {
		const localStorageMode = localStorage.getItem('mode') as Mode
		mode = modes[localStorageMode] ? localStorageMode : 'system'
	})

	$effect(() => {
		document.documentElement.style.setProperty('color-scheme', mode === 'system' ? 'light dark' : mode)
		localStorage.setItem('mode', mode)
	})
</script>

<button onclick={switchMode}>
	<ModeIcon />
</button>

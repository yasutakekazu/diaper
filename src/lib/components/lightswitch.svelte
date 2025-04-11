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
	function switchMode() {
		mode = { system: 'dark', dark: 'light', light: 'system' }[mode] as Mode
		document.documentElement.style.setProperty('color-scheme', mode === 'system' ? 'light dark' : mode)
		localStorage.setItem('mode', mode)
	}

	let ModeIcon = $derived(modes[mode])

	$effect(() => {
		const localStorageMode = (localStorage.getItem('mode') || 'system') as Mode
		mode = modes[localStorageMode] ? localStorageMode : 'system'
		document.documentElement.style.setProperty('color-scheme', mode === 'system' ? 'light dark' : mode)
	})
</script>

<button onclick={switchMode}>
	<ModeIcon />
</button>

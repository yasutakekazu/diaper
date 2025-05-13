import { getRootProperty } from './helpers'

const insets = {
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
}

$effect.root(() => {
	$effect(() => {
		insets.top = parseInt(getRootProperty('--diaper-sait'))
		insets.right = parseInt(getRootProperty('--diaper-sair'))
		insets.bottom = parseInt(getRootProperty('--diaper-saib'))
		insets.left = parseInt(getRootProperty('--diaper-sail'))
	})
})

export { insets }

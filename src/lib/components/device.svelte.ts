const insets = {
	top: 0,
	right: 0,
	bottom: 0,
	left: 0
}

$effect.root(() => {
	const rootStyle = getComputedStyle(document.documentElement)
	insets.top = parseInt(rootStyle.getPropertyValue('--diaper-sait'))
	insets.right = parseInt(rootStyle.getPropertyValue('--diaper-sair'))
	insets.bottom = parseInt(rootStyle.getPropertyValue('--diaper-saib'))
	insets.left = parseInt(rootStyle.getPropertyValue('--diaper-sail'))
})

export { insets }

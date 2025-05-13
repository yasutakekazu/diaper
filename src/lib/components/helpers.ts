export const noop = () => {}

export const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)

export const getNearestValue = (value: any, array: any[]) =>
	array.reduce((nearest, current) => (Math.abs(value - current) < Math.abs(value - nearest) ? current : nearest), array[0])

export const getRootProperty = (property: string) => getComputedStyle(document.documentElement).getPropertyValue(property)
export const setRootProperty = (property: string, value: string) => document.documentElement.style.setProperty(property, value)

export function indexOf(value: any, array: any[] = [], indexIfNotFound = -1) {
	const index = array.indexOf(value)
	return index > -1 ? index : indexIfNotFound
}

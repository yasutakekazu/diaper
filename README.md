# Diaper

A advanced bottom sheet component for Svelte5

See the [demo.](https://diaperbs.vercel.app)

## Install

```sh
npm install @devantic/diaper
```

## Import

```ts
import Bottomsheet from '$lib/components/bottomsheet.svelte'
```

## Usage

See the [code for the examples](https://github.com/devantic/diaper/tree/main/src/routes/examples) used in the demo.

## Types

```ts
export type BottomsheetProps = {
	open?: boolean
	maxHeight?: string
	height?: string
	snapPoints?: number[] | 'auto'
	initialIndex?: number
	snapPoint1Content?: Snippet
	snapPoint2Content?: Snippet
	headerOverlaysContent?: boolean
	canDragSheet?: boolean
	onclose?: () => void
	onsnap?: (progress: number) => void
	header?: Snippet
	children?: Snippet
} & HTMLAttributes<HTMLDialogElement>
```

## Props

**`open` - optional, bindable**

A boolean value controlling the open/closed state of the bottom sheet. You can `bind:open` to it which is the prefered method of control. Or you can `bind:this` to the component instance and close it using the `close()` method. See [altopenmethod.svelte](https://github.com/devantic/diaper/tree/main/src/routes/examples/altopenmethod.svelte) for an example of the second approach. All other examples use the first approach.

**`height` - optional**

A string specifying the the height of the dialog. Defaults to maxHeight (93% of view height). Values can be specified using any valid css unit, e.g. <kbd>'75%', '75vh', '400px'</kbd>, etc. A value of <kbd>'auto'</kbd> will auto-size the sheet to fit content.

**`maxHeight` - optional**

Overrides the maxHeight of the sheet, defaults to 93% of the view height to accommodate the 3D stacked sheets effect. It is not recommended to change this unless you want a full screen sheet for example. Accepts any valid css unit like the `height` prop

**`snapPoints` - optional**

Accepts an array of numbers between 0 and 1 or the string value <kdb>'auto'</kbd>. E.g. <kbd>[0.25, 0.5, 0.75]</kbd>. Values are relative to the height of the sheet and specified top down. I.e. 0.25 is 1/4 from the top of the sheet and 0.75 is 1/4 from the bottom.

The special value <kdb>'auto'</kbd> will auto-calculate snappoints where possible. E.g. If there is a lot of space at the bottom of the sheet, a snapoint will be set to allow the sheet to be minimized to fit content.

Snappoints are also auto-calculated when this value is set and the sheet has dynamic sheet content. See [snippets](#snippets).

**`initialIndex` - optional**

An integer specifying the snappoint at which the sheet will open. For practical purposes, indexing starts at 1. E.g. given the array [0.25, 0.5. 0.75], 0.25 is at index 1, not 0!

If omitted, the sheet opens full height. Values outside the range will either open the sheet full height, or not open it.

**`canDragSheet` - optional**

A boolean specifying if the sheet can be dragged on the content. Defaults to true. The header is always draggable.

**`headerOverlaysContent` - optional**

Boolean. For scrollable sheets, if set to true, the content will scroll behind the header. I.e. the scrollable region takes up the full height of the dialog. A background blur is applied to the header. Defaults to false.

**`onClose()` - optional**

A function to run when the sheet has completely closed, i.e. the close transition has completed.

**`onSnap()` - optional**

A function to run when the snappoint changes. Runs before the the transition to the new snappoint. Passes the snappoint as parameter, e.g. 0.25, not the index

## Snippets

**`children()` - required (unless you want a blank sheet)**

The main content for the bottom sheet

**`header()`**

The header content

**`snapPoint1Content()`**

If specified, the content of the sheet will change to this content when dragged to the first snappoint.

**`snapPoint2Content()`**

If specified, the content of the sheet will change to this content when dragged to the second snappoint.

## Styling

The sheet can be styled using tailwind or css by passing a `class` prop or `style` prop (or both) on the component instance.

### Tailwind

```svelte
<Bottomsheet bind:open class="p-4 pt-0 bg-red-500">...</Bottomsheet>
```

### CSS

```svelte
<Bottomsheet bind:open style="padding: 1rem; padding-top: 0; background-color: red;">...</Bottomsheet>
```

### Other methods

Alternatively you can pass css classes to the component using these methods:

#### Scoped, the way svelte likes it!

You can pass css classes to style the sheet using the container method:

```svelte
<div class="container">
	<Bottomsheet bind:open class="sheet">...</Bottomsheet>
</div>

<style>
	.container :global(.sheet) {
		padding: 1rem;
		padding-top: 0;
		background-color: red;
	}
</style>
```

#### External stylesheet

Or you can import a stylesheet

```svelte
<script>
	import './sheet.css'
</script>

<div class="container">
	<Bottomsheet bind:open class="sheet">...</Bottomsheet>
</div>
```

`sheet.css`

```css
.sheet {
	padding: 1rem;
	padding-top: 0;
	background-color: red;
}
```

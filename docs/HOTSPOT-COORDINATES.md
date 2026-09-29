# Hotspot Coordinate System

The office scene is a single pixel-art image (`public/images/office/full-office.png` / `night-office.png`) rendered at 100% width/height. Hotspots are positioned using **percentage-based CSS** relative to this container.

## How positioning works

Each hotspot `<button>` is `position: absolute` inside the office container. Its four coordinates are percentages:

```
left:   X position from the left edge of the office image
top:    Y position from the top edge of the office image
width:  Width of the clickable zone as a % of the office width
height: Height of the clickable zone as a % of the office height
```

To find coordinates for a new hotspot, open the office image in an image editor, overlay a 100×100 grid using the ruler, and read the bounding box of the object you want to make clickable.

## Current hotspot coordinates

| Hotspot | left | top | width | height | Action |
|---|---|---|---|---|---|
| Computer | 24% | 45% | 22% | 28% | Opens terminal |
| Records (desk) | 50% | 50% | 10% | 13% | Opens resume |
| Inventory (cabinet) | 45.5% | 24% | 13.9% | 28% | Opens skills |
| Door | 69% | 17% | 11% | 34% | Opens contact |
| Light switch | 66.6% | 29.5% | 2.5% | 6% | Toggles day/night |
| Noticeboard | 35% | 18.6% | 11.5% | 23% | Opens noticeboard |

## Modal background positions

When a modal opens, the blurred office background zooms to the hotspot's location. These positions are defined in `app/components/modal/Modal.tsx`:

```ts
const bgPositions = {
  contact:   '69% 17%',   // Door
  resume:    '50% 50%',   // Desk  
  skills:    '45.5% 24%', // Cabinet
  noticeboard: '35% 18.6%', // Noticeboard
}
```

These match the `left`/`top` of each corresponding hotspot.

## How the click zoom works

When a hotspot is clicked, `handleHotspotClick` in `OfficeView.tsx` calculates the zoom origin based on the button's bounding box relative to the office section, then applies a 1.15x scale transform originating from that point. After 300ms the zoom resets and the modal opens.

## Hotspot glow overlays

Hover glow PNGs are in `public/images/hotspots/`. Each file is a semi-transparent overlay that renders at full office size but only lights up within its hotspot area. The overlay image is toggled via opacity based on the `hoveredHotspot` state.

## Adding a new hotspot

1. Create a glow PNG in `public/images/hotspots/glow-{name}.png` (same dimensions as the office image)
2. Add the glow image element in `OfficeView.tsx` with opacity controlled by `hoveredHotspot`
3. Add a `<button>` with `position: absolute` and percentage `left`/`top`/`width`/`height`
4. Add the hotspot to keyboard navigation by incrementing the focused zone count (modulo 6 → 7)
5. Add a `bgPositions` entry in `Modal.tsx` if the modal should zoom to its location
# Design System: The Realm of Seers

## 1. Visual Theme & Atmosphere

A cinematic, image-led brand surface with reverent pacing and premium restraint. Density is balanced, layout variance is moderately asymmetric, and motion is controlled rather than constant. Deep near-black space frames authentic ministry imagery; a single ember-red accent carries energy and focus.

## 2. Color Palette & Roles

- **Realm Night** (`#050303`) — Primary page background and cinematic canvas.
- **Raised Charcoal** (`#16161A`) — Supporting panels and media surfaces.
- **Clear White** (`#FFFFFF`) — Primary text and high-emphasis actions.
- **Soft White** (`rgba(255,255,255,0.72)`) — Supporting copy; increase opacity whenever contrast falls below WCAG AA.
- **Structural Line** (`rgba(255,255,255,0.12)`) — Dividers and quiet boundaries.
- **Ember Red** (`#CF1C1C`) — The only accent; active states, calls to action, and restrained aurora light.

Do not introduce purple, blue neon, gradient text, or competing accent colors.

## 3. Typography Rules

- **Display and body:** Geist, using weight and scale for hierarchy.
- **Fallback:** a neutral system sans-serif stack only while Geist loads.
- **Headings:** controlled fluid scale, balanced wrapping, line-height between 0.98 and 1.12, and letter spacing no tighter than `-0.04em`.
- **Body:** minimum 14px on compact mobile interfaces and 16px for primary prose; relaxed leading and a maximum line length of 72 characters.
- **Labels:** short and direct; avoid repeated tracked uppercase eyebrows.

## 4. Component Styling

- **Primary actions:** Clear White fill with Realm Night text; 10–12px corners, 44px minimum height, subtle press feedback, and Ember Red hover/active treatment.
- **Navigation:** transparent over the hero on compact screens; a stable dark surface after the hero. Desktop hero navigation sits below the media frame instead of covering the image.
- **Mobile menu:** an opaque raised navigation panel with 48px rows, reliable touch behavior, canonical anchor destinations, and no clipping containers.
- **Media frames:** 12–16px corners, contained overflow, reserved dimensions, and no decorative shadow-plus-border stacking.
- **Focus states:** high-contrast visible rings that work on both imagery and dark surfaces.

## 5. Layout Principles

- Constrain major content to centered widths between 72rem and 100rem.
- Keep every section inside the viewport; horizontal overflow is a release-blocking defect.
- Prefer vertical entrance motion. Do not use section-level `x` translations or opposing horizontal page movement.
- Use CSS Grid for two-dimensional compositions and collapse to one column below 768px.
- On large screens, reserve a dedicated row beneath the hero frame for primary navigation so the subject and navigation never compete.
- Reduce vertical spacing proportionally with fluid values rather than duplicating rigid breakpoint values.

## 6. Motion & Interaction

- Use the project easing `cubic-bezier(0.22, 1, 0.36, 1)` for entrances and state changes.
- Animate only opacity and modest vertical transforms for section reveals.
- Never animate page sections from off-screen horizontal positions.
- Keep interactive responses under 250ms and page-level transitions between 400–600ms.
- Respect `prefers-reduced-motion: reduce` by removing transform movement, disabling smooth scrolling, and using instant or short opacity changes.

## 7. Anti-Patterns

- No horizontal viewport overflow or `x`-axis reveal choreography.
- No pure decorative glass cards, neon glows, gradient text, or competing accents.
- No overlapping text and imagery without a deliberate contrast scrim.
- No generic three-card feature rows or repeated AI-style section kickers.
- No undersized touch targets, hidden keyboard focus, or motion-only meaning.
- No navigation URLs that depend on the current preview hostname.

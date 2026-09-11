# ifei-website
The github repository of the website for Illinois Fishery Ecosystem Initiative

## Logo

Both the sidebar and the footer render `images/ifeilogo.png`. A placeholder
emblem is committed there now. Drop the real mark in at the same path and
filename and it picks up everywhere with no code changes. Square artwork works
best (the slot renders at 42px in the sidebar, 34px in the footer). A
transparent PNG keeps the forest-green panel showing through.

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `--forest` | `#2C4A3B` | Brand green, dark panels, logo lockup |
| `--forest-light` | `#3F6652` | Hover states, secondary fills |
| `--paper` | `#E8DFC8` | Page base |
| `--paper-deep` | `#D9CBA3` | Muted panels, borders on dark |
| `--steel` | `#3A6EA5` | Icon marks, rules, status squares |
| `--ink` | `#1A1A1A` | Body text, heavy borders, hard shadows |
| `--ink-soft` | `#2B2B2B` | Secondary body copy |

`--steel-ink` (`#2F5C8C`) and `--steel-pale` (`#A8C8E8`) are darker and lighter
mixes of the accent blue, used only for small link text so it clears WCAG AA
against parchment and forest respectively.

## Type

Fraunces (display, weight 900, WONK axis on), Archivo (body and UI),
Space Mono (dates, prices, spec labels). All loaded from Google Fonts.

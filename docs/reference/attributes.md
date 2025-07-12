---
title: "Attributes"
sidebar_position: 1
---

# Attributes

This chapter lists all supported **attributes** for characters and items in Eldiron.  
Attributes can be set via the [Code Tool (Python)](/docs/creator/characters#instances) or [Data Tool (TOML)](/docs/creator/items).

Attributes are noted in each description as to whether they apply to characters, items, or both.

<!-- ---

## Attribute Index

- [`blocking`](#blocking)
- [`color`](#color)
- [`color_targets`](#color_targets)
- [`geo_targets`](#geo_targets)
- [`inventory_slots`](#inventory_slots)
- [`monetary`](#monetary)
- [`name`](#name)
- [`player`](#player)
- [`radius`](#radius)
- [`slot`](#slot)
- [`static`](#static)
- [`STR`](#str)
- [`tile_id`](#tile_id)
- [`visible`](#visible)
- [`worth`](#worth)

--- -->

## `blocking`

*Item-only attribute.*

If set to `true`, the item blocks movement based on its radius.

```python
blocking = true
```

---

## `color`

*Item-only attribute.*

Hex color code that overrides geometry color when item is equipped.

```python
color = "#ff0000"
```

---

## `color_targets`

*Item-only attribute.*

List of geometry node names whose color should be overridden when the item is equipped.

```python
color_targets = ["left_leg", "right_leg"]
```

---

## `geo_targets`

*Item-only attribute.*

List of linedef names to attach this item's geometry to when equipped.  
Used only when automatic matching by `slot` is insufficient.

```python
geo_targets = ["left_shoulder", "right_shoulder"]
```

---

## `inventory_slots`

*Character-only attribute.*

Number of inventory slots the character has. If not specified, defaults to 0.

```python
inventory_slots = 8
```

---

## `monetary`

*Item-only attribute.*

If `true`, the item is considered money. It is not picked up normally, but its worth is added to the wallet.

```python
monetary = true
```

---

## `name`

*General attribute (applies to both characters and items).*

Name of the character or item. Can override the template name.

```python
name = "Golden Key"
```

---

## `player`

*Character-only attribute.*

Marks the character as a player-controlled character that receives input events.

```python
player = true
```

---

## `radius`

*General attribute (applies to both characters and items).*

Collision radius of the character or item. Default is `0.5`.

```python
radius = 0.3
```

---

## `slot`

*Item-only attribute.*

Slot name the item occupies when equipped (e.g. `"legs"`, `"head"`).

```python
slot = "legs"
```

---

## `static`

*Item-only attribute.*

If `true`, the item is static and cannot be picked up (e.g. doors, campfires).

```python
static = true
```

---

## `STR`

*General attribute (applies to both characters and items; example custom stat).*

Custom attribute, e.g. Strength. By convention, use uppercase for character stats.

```python
STR = 10
```

---

## `tile_id`

*General attribute (applies to both characters and items).*

Tile ID for the visual representation. Use the Tile Picker to find valid IDs.

```python
tile_id = "abc123"
```

---

## `visible`

*General attribute (applies to both characters and items).*

Whether the character or item is visible in the world.

```python
visible = false
```

---

## `worth`

*Item-only attribute.*

Trade value of the item in base currency.

```python
worth = 12.5
```

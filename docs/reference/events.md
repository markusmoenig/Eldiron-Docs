---
title: "Events"
sidebar_position: 3
---

# Events

This chapter lists all available **events** that can be received by characters and items in Eldiron.

Events are categorized as:

- **System Events** – sent by the engine to the `event()` handler
- **User Events** – sent to the `user_event()` handler (usually from player input)

---

## Event Index

### System Events

- [`startup`](#startup)
- [`bumped_into_entity`](#bumped_into_entity)
- [`bumped_into_item`](#bumped_into_item)
- [`bumped_by_entity`](#bumped_by_entity)
- [`clicked`](#clicked)
- [`take_damage`](#take_damage)

### User Events

- [`key_down`](#key_down)
- [`key_up`](#key_up)

---

## System Events

### `startup`

- **Value**: *(None)*
- **Description**: Called when the entity or item is created.

---

### `bumped_into_entity`

- **Value**: `entity_id` *(int)*
- **Description**: Triggered when this entity bumps into another entity.

---

### `bumped_into_item`

- **Value**: `item_id` *(int)*
- **Description**: Triggered when this entity bumps into an item.

---

### `bumped_by_entity`

- **Value**: `entity_id` *(int)*
- **Description**: Triggered when another entity collides with this entity or item.

---

### `clicked`

- **Value**: `dict`  
  `{ entity_id, distance }`
- **Description**: Triggered when the player clicks on an entity or item.  
  Includes the clicking entity’s ID and the distance to the target.

---

### `take_damage`

- **Value**: `dict`
- **Description**: Triggered by the `deal_damage()` command.  
  The dictionary contains the damage payload sent by the attacker.

---

## User Events

### `key_down`

- **Value**: `string` (e.g. `"w"`, `"a"`, `"space"`)
- **Description**: Triggered when a key is pressed.

---

### `key_up`

- **Value**: `string` (e.g. `"w"`, `"a"`, `"space"`)
- **Description**: Triggered when a key is released.

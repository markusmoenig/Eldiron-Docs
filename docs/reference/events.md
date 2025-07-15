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

## System Events

### `active`

*Item-only event.*

- **Value**: active state *(bool)*
- **Description**: Called when the state of the item has changed and directly after item creation. This event allows the item to sync its visuals with the current state, for example a torch may call ... to adjust it's light emission.

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

### `entered`

- **Value**: `sector_name` *(string)*
- **Description**: Triggered when the character has entered a named sector. Useful for traps or teleports.

---

### `intent`

- **Value**: `dict`  
  `{ intent (string), entity_id (int), item_id (int), distance (float)}`
- **Description**: Triggered when the player triggers an intent towards another entity or item. Either via a movement based keyboard shortcut or by clicking on the target entity or item.
  - When the target is an item, the event is send to the target item **and** to the originating player entity as the action may be handled by either of them depending on the context, for example a torch would lit itself when used, or a character may take an item.
  - When the target is another character, the event is send to both, the originating character and the target entity. For example on an `attack` intent the originating player may call [deal_damage](/docs/reference/scripting_server#deal_damage) to the given `entity_id`, or the target may want to respond when talked to.

---

### `left`

- **Value**: `sector_name` *(string)*
- **Description**: Triggered when the character has left a named sector.

---

### `startup`

- **Value**: *(None)*
- **Description**: Called when the entity or item is created.

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

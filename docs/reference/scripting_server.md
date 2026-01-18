---
title: "Scripting: Server"
sidebar_position: 5
---

## Commands

This chapter lists all available scripting **commands** for Eldiron, used in [Characters](/docs/creator/characters) and [Items](/docs/creator/items).

---

## `add_item`

*This command can only be used with characters.*

Creates a new item of the given class and adds it to the character’s inventory.  
Returns the item ID or `-1` on failure.

```rust
add_item("Torch")
```

---

## `block_events`

*This command can be used with both characters and items.*

Blocks the listed events from being sent to the character or item for a number of in-game minutes.

```rust
block_events(minutes, "event1", "event2", ...)
```

You can also block specific `intent` events.

```rust
block_events(2, "intent: attack") // Block attack intents for 2 in-game minutes.

block_events(2, "intent") // Block all intents for 2 in-game minutes.
```

---

## `close_in`

*This command can only be used with characters.*

Makes an NPC character close in within a given radius on a target character with the given speed.

Once it is in range, sends [closed_in](/docs/reference/events#closed_in) events to the NPC.

```rust
close_in(entity_id, 4.0, 1.0) // Close in within 4.0 radius on the entity_id with 1.0 speed.
```

---

## `deal_damage`

*This command can be used with both characters and items.*

Deals damage to an entity or item. Sends a [take_damage](/docs//reference/events#take_damage) event to the receiver with the script created dictionary. The script should put all relevant information into the dictionary which will be processed by the target's [take_damage](/docs//reference/events#take_damage) event to calculate the real damage done and in turn than calls [took_damage](#took_damage) to register the damage with the system.

```rust
deal_damage(id, random(2, 5))
```

:::note
Characters and items can deal damage. But only characters can receive damage and actually die.
:::
---

## `debug`

*This command can be used with both characters and items.*

Sends a debug message to the log.

```rust
debug(arg1, arg2, ...)
```

---

## `drop`

*This command can only be used with characters.*

Drop a specific item from the character's inventory. The item is identified by its id and that value is mostly provided by `intent` messages acting on an item.

```rust
drop(value)
```

---

## `drop_items`

*This command can only be used with characters.*

Drops items from the character's inventory.  
If a `filter_string` is provided, only matching items are dropped, otherwise all items are dropped.

```rust
drop_items(filter_string)
```

---

## `entities_in_radius`

*This command can be used with both characters and items.*

Returns a list of nearby entity IDs within radius.

```rust
entities_in_radius()
```

---

## `equip`

*This command can only be used with characters.*

Equips an item from the character’s inventory to its slot.  
Returns `true` on success or `false` on failure.

```rust
equip(item_id)
```

---

## `get_attr`

*This command can be used with both characters and items.*

Gets an attribute of the current character or item.

```rust
get_attr("key")
```

---

## `get_attr_of`

*This command can be used with both characters and items.*

Gets an attribute from a specific entity or item.

```rust
get_attr_of(id, "key")
```

---

## `get_sector_name`

*This command can be used with both characters and items.*

Returns the name of the sector the character or item is currently in.

```rust
get_sector_name()
```

---

## `goto`

*This command can only be used with characters.*

The character will walk to the named destination sector with the given speed. It will utilize path-finding to avoid obstacles.

```rust
goto("Garden", 1.0)
```

---

## `id`

*This command can only be used with characters.*

Returns the **id** of the current entity.

```rust
id()
```

---

## `inventory_items`

*This command can only be used with characters.*

Returns a list of item IDs in the character’s inventory.  
If a `filter_string` is provided, only matching items are returned.

```rust
inventory_items(filter_string)
```

---

## `inventory_items_of`

*This command can be used with both characters and items.*

Returns a list of item IDs in another entity’s inventory.  
If a `filter_string` is provided, only matching items are returned.

```rust
inventory_items_of(entity_id, filter_string)
```

---

## `message`

*This command can be used with both characters and items.*

Sends a message to a given character.  
An optional category can be used for UI coloring.

```rust
message(entity_id, "message", "optional_category")
```

---

## `notify_in`

*This command can be used with both characters and items.*

Schedules an event to be sent after a given number of in-game minutes.

```rust
notify_in(minutes, "event_name")
```

---

## `offer_inventory`

*This command can only be used with characters.*

Offers the inventory to a given entity with an optional filter string. Mostly used by vendor NPCs who would offer their inventory when spoken to.

```rust
offer_inventory(entity, "") // Offer all inventory items to the given entity.
offer_inventory(entity, "Torch") // Offer only items named Torch.
```

---

## `random_walk`

*This command can only be used with characters.*

Moves the character in a random direction for the given distance and speed.  
Sleeps after each move for a random time up to `max_sleep` in in-game minutes.

```rust
random_walk(distance, speed, max_sleep)
```

---

## `random_walk_in_sector`

*This command can only be used with characters.*

Similar to `random_walk`, but restricted to the current sector.

```rust
random_walk_in_sector(distance, speed, max_sleep)
```

---

## `set_attr`

*This command can be used with both characters and items.*

Sets an attribute on the current character or item.

```rust
set_attr("key", value)
```

---

## `set_emit_light`

*This command can be used with both characters and items.*

Enables / disables light emittance for entities and items. Items should do this as part of their state, see the [active event](/docs/reference/events#active).

Light parameters need to be set up with the [light attributes](/docs/reference/attributes#emitting-light).

```rust
fn event(event, value) {
    if event == "active" {
        set_emit_light(value)
    }
}
```

---

## `set_proximity_tracking`

*This command can be used with both characters and items.*

Enables or disables proximity tracking for characters. If enabled, [proximity_warning](/docs//reference//events#proximity_warning) events will be send for all nearby entities within the given radius.

Useful for NPCs (or even items) to interact with other characters (attack, talk, heal, etc.).

```rust
set_proximity_tracking(true, 4.0)
```

---

## `take`

*This command can only be used with characters.*

Takes an item from the region and adds it to the character’s inventory.  
Returns `True` on success or `False` if the inventory is full.

```rust
take(item_id)
```

---

## `teleport`

*This command can only be used with characters.*

Teleports the character to a named sector, the second parameter is optional and names the region to teleport to. If only the sector name is given `teleport` will search for the sector in the current region.

```rust
teleport("Entrance", "Deadly Dungeon")
```

---

## `took_damage`

*This command can only be used with characters.*

Registers damage to an entity, this command is called from within [take_damage](/docs//reference/events#take_damage) events, where the target of the damage calculates the real damage done and calls **took_damage** to register it with the system.

Internally **took_damage** will deduct the damage from the [health](/docs/reference/configuration#health) attribute and check if the new value is below or equal to 0. If yes it will:

- Set the [mode](/docs/reference/attributes#mode) attribute of the target to **"dead"**.
- Send a [dead](/docs//reference/events#dead) event to the target.
- Send a [kill](/docs//reference/events#kill) event to the entity which caused the damage.

Example:

In the [take_damage](/docs//reference/events#take_damage) event we take the amount and the id of the attacker from the dictionary we created in [deal_damage](#deal_damage) and reduce the amount by 1.

```rust
let amount = value.amount - 1
took_damage(value.subject_id, amount)
```

---

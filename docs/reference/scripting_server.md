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

```python
add_item("class_name")
```

---

## `block_events`

*This command can be used with both characters and items.*

Blocks the listed events from being sent to the character or item for a number of in-game minutes.

```python
block_events(minutes, "event1", "event2", ...)
```

---

## `deal_damage`

*This command can be used with both characters and items.*

Deals damage to an entity or item. Sends a `take_damage` event to the receiver with the given dictionary.

```python
deal_damage(entity_id | item_id, {"physical": 10})
```

---

## `debug`

*This command can be used with both characters and items.*

Sends a debug message to the log.

```python
debug(arg1, arg2, ...)
```

---

## `drop_items`

*This command can only be used with characters.*

Drops items from the character's inventory.  
If a `filter_string` is provided, only matching items are dropped.

```python
drop_items(filter_string)
```

---

## `entities_in_radius`

*This command can be used with both characters and items.*

Returns a list of nearby entity IDs within radius.

```python
entities_in_radius()
```

---

## `equip`

*This command can only be used with characters.*

Equips an item from the character’s inventory to its slot.  
Returns `True` on success or `False` on failure.

```python
equip(item_id)
```

---

## `get_attr`

*This command can be used with both characters and items.*

Gets an attribute of the current character or item.

```python
get_attr("key")
```

---

## `get_entity_attr`

*This command can be used with both characters and items.*

Gets an attribute from another entity.

```python
get_entity_attr(entity_id, "key")
```

---

## `get_item_attr`

*This command can be used with both characters and items.*

Gets an attribute from an item.

```python
get_item_attr(item_id, "key")
```

---

## `get_sector_name`

*This command can be used with both characters and items.*

Returns the name of the sector the character or item is currently in.

```python
get_sector_name()
```

---

## `inventory_items`

*This command can only be used with characters.*

Returns a list of item IDs in the character’s inventory.  
If a `filter_string` is provided, only matching items are returned.

```python
inventory_items(filter_string)
```

---

## `inventory_items_of`

*This command can be used with both characters and items.*

Returns a list of item IDs in another entity’s inventory.  
If a `filter_string` is provided, only matching items are returned.

```python
inventory_items_of(entity_id, filter_string)
```

---

## `message`

*This command can be used with both characters and items.*

Sends a message to a given character.  
An optional category can be used for UI coloring.

```python
message(entity_id, "message", "optional_category")
```

---

## `notify_in`

*This command can be used with both characters and items.*

Schedules an event to be sent after a given number of in-game minutes.

```python
notify_in(minutes, "event_name")
```

---

## `random_walk`

*This command can only be used with characters.*

Moves the character in a random direction for the given distance and speed.  
Sleeps after each move for a random time up to `max_sleep` in in-game minutes.

```python
random_walk(distance, speed, max_sleep)
```

---

## `random_walk_in_sector`

*This command can only be used with characters.*

Similar to `random_walk`, but restricted to the current sector.

```python
random_walk_in_sector(distance, speed, max_sleep)
```

---

## `set_attr`

*This command can be used with both characters and items.*

Sets an attribute on the current character or item.

```python
set_attr("key", value)
```

---

## `set_emit_light`

*This command can be used with both characters and items.*

Enables / disables light emittance for entities and items. Items should do this as part of their state, see the [active event](/docs/reference/events#active).

Light parameters need to be set up with the [light attributes](/docs/reference/attributes#emitting-light).

```python
    def event(self, event, value):
        if event == "active":
            set_emit_light(value)
```

---

## `set_proximity_tracking`

*This command can be used with both characters and items.*

Enables or disables proximity tracking.  
If enabled, proximity events will be received for nearby entities within the given radius.

```python
set_proximity_tracking(True or False, radius)
```

---

## `take`

*This command can only be used with characters.*

Takes an item from the region and adds it to the character’s inventory.  
Returns `True` on success or `False` if the inventory is full.

```python
take(item_id)
```

---

## `teleport`

*This command can only be used with characters.*

Teleports the character to a named sector, the second parameter is optional and names the region to teleport to. If only the sector name is given `teleport` will search for the sector in the current region.

```python
teleport("Entrance", "Deadly Dungeon")
```

---
title: "Items"
sidebar_position: 4
---

## Creating and Editing Items

Creating and editing **items** in Eldiron works **just like** working with [Characters](/docs/creator/CHARACTERS/).

### How to Create an Item

1. Click the **+** button in the [Item](/docs/creator/sections/#item) section.
2. Edit its **behavior** using the **Code Tool**.
3. Set its **attributes** using the **Data Tool**.
4. Drag the item into the **map** to create an **instance**.

:::important
Make sure to read the [Characters](/docs/creator/characters) chapter, as items share many of the same principles, including scripting and event handling.
:::

## Creating Item Visuals in Eldiron

As with characters, you can either use a `tile_id` to represent the visuals of an item or create the item directly inside Eldiron.

![Shield](/img/docs/shield.png)

Creating items inside Eldiron allows the item to colorize character sectors or attach its geometry to character linedefs. You can do this using the following statements in the item’s **Data** tool:

```TOML
# When the item is equipped, specifies the names of sectors whose colors should be overridden with the item's color.
# This is useful when you don’t want to override the geometry but just the color of a character’s nodegraph.
color_targets = ["left_leg", "right_leg"]

# When the item is equipped, specifies the names of linedefs this item geometry should be attached to.
# If 'geo_targets' is not present, Eldiron checks if there is a linedef with a name equal to the item's slot name.
# Use 'geo_targets' only if you want to attach the item geometry to multiple linedefs.
geo_targets = ["left_shoulder", "right_shoulder"]
```

## Item Events

Items receive **System and User events** in the same way as characters.

### Example Events

- If a **player bumps into an item**, the item receives the **`bump_player`** event.
- If the **user clicks an item**, the item receives the **`click`** event.

This makes items **highly flexible**, allowing them to interact with the **map and characters** in different ways depending on the **game style** you are creating.

## Item States

Items have a state system via the [active attribute](/docs/reference/attributes#active). The attribute defines if an item is active or not. If the `active` attribute changes the [active event](/docs/reference/events#active) is triggered.

Use this event to sync the visual state of the item (for example if a torch emits light).

:::tip
A future version of Eldiron will count the usage (active) time of items to support optional maximum lifetimes and simulate aging.
:::

## Learn More

See the **[Scripting & Data Reference](/docs/scripting_data/reference)** for a complete list of available **events, commands, actions, and data properties**.

---
title: "Characters"
id: characters
sidebar_position: 3
---

## Creating a Character

You can create a **character template** by clicking the **+** button in the [Character](/docs/creator/SECTIONS/#character) section.

A **character template** is a reusable blueprint that defines the **behavior, attributes, and appearance** of a character in the game.

To create an **instance** of a character, simply **drag and drop** the character template into the map (you will first need to enable the Region mode in the Character / Region switch button).

## Creating Character Visuals in Eldiron

You can either associate a `tile_id` (from an imported tilemap) with a character, or create the character directly inside Eldiron. The latter has the advantage that items can change the colors of sectors in the character rig or overlay their own geometry on top of the character’s geometry, creating fully rigged characters that automatically adjust to their equipped items.

To do this, create the character with the **Linedef** and **Sector** tools.
Name the sectors you want items to colorize (items reference them with the `color_targets` statement in the **Data** tool), and name the linedefs where you want to attach item geometry (items reference them with the `geo_targets` statement).

Create and apply nodes to the chosen sectors and linedefs to generate the pixel visuals inside the geometry.

![Rigging](/img/docs/rigging.png)

You can animate characters by adding new states. At the moment, only the **Idle** state is supported.

:::warning
Character animation is currently basic and will be expanded in upcoming updates.
:::
## Tools

There are two tools available for editing character templates:

1. **Code Tool** – Edit the Python class that defines the character's behavior.
2. **Data Tool** – Set the initial attributes of the character.

Both tools **overlap** in functionality. You could set all attributes via **code** in the **startup event**, but the **Data Tool** provides a **more convenient** way to configure the initial state of a character.

:::info
Currently, the **Code Tool** supports only **Python scripting**. A **visual, node-based scripting alternative** will be available before v1.
:::

---

# Code Tool

After creating a character and activating the **Code Tool**, you will see a **Python class** that defines the character’s behavior.

```python
class NewCharacter:

    def event(self, event, value):
        pass

    def user_event(self, event, value):
        if event == 'key_down':
            if value == 'w':
                action("forward")
            if value == 'a':
                action("left")
            if value == 'd':
                action("right")
            if value == 's':
                action("backward")
        if event == 'key_up':
            action("none")
```

If you rename the **class** (default: `NewCharacter`), the **character template name** will update automatically in the Character section.

:::tip
The **Python class name** is also the **character template name**.
:::

---

## Events

Eldiron uses **events** to trigger actions.

Events are categorized into:
- **System Events** – Triggered by the game engine.
- **User Events** – Triggered by the player.

System events call the `event` method, while user events call the `user_event` method.

### System Events

Example: The `startup` event is called when a character is created. The `bump_item` event is triggered when a character collides with an item.

```python
class Player:

    def event(self, event, value):
        if event == 'startup':
            set_attr("STR", 10)
```

In this example:
- The **STR (Strength) attribute** is set to **10**.

### User Events

The `user_event` method is only needed for **player characters** and can be omitted for **NPCs**.

In the earlier example, `user_event` handles **keyboard input**, allowing the player to move using the **WASD keys**.

---

# Instances

When you **drag a character template into the map**, it creates a **new instance**.

The [Character](/docs/creator/sections/#region) section lists all **character instances** in the **region**. Characters are displayed with a **human avatar** on the map.

:::tip
**Click & Drag** a character in the map to move it.
**Press 'Delete'** to remove a character instance.
:::

### Instance Initialization

When a **character instance** is selected in the **Region** section, the **Code Tool** will display its **instance initialization script**:

```python
def setup():
    """Initialize the character instance"""
    pass
```

This script allows **instance-specific** configurations.

The `setup` method in the **template** applies to **all characters** of that type, while the **instance script** allows customization of **individual characters**.

### Example: Creating a Stronger Orc

You have a general **`Orc` template**, but you want a **stronger Orc** guarding a chest.

```python
def setup():
    set_attr("STR", 15)
```

This makes **only this Orc instance** stronger by setting its **Strength (STR) to 15**.

---

# Data Tool

The **Data Tool** allows you to edit the **initial attributes** of **character instances**.

Example **TOML configuration**:

```toml
[attributes]
STR = 10

# The character is visible on the map
visible = true
# The radius of the character's collision circle
radius = 0.5
```

In this example:
- `"STR"` is set to **10** (same as in the **Code Tool**).
- `"visible = true"` ensures the character **appears on the map**.
- `"radius = 0.5"` defines the **collision area**.

Using the **Data Tool** is **often more convenient** than setting attributes in **code**, especially for common properties.

---

## Learn More

See the **[Scripting & Data Reference](/docs/scripting_data/reference)** for a complete list of available **events, commands, actions, and data properties**.

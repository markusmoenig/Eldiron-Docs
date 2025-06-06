---
title: "Sections"
sidebar_position: 2
---

In the Eldiron Creator, the different sections are accessed using a vertical row of buttons located on the right-hand side of the interface.

## Region

**Regions** represent **levels or world maps** in your game.

To create a new region, press the **+** button in the **Region** section. Once created, you can immediately start designing your level using map tools such as **Linedef, Sector, and Rect**.

---

## Character

A **Character** is an entity in your game—either a **player** or a **non-player character (NPC)**.

To create a character, press the **+** button in the **Character** section.

- Character behavior can be scripted using the **Code Tool**.
- Initial attributes can be set with the **Data Tool**.

Refer to the **Scripting & Data** chapter for more details on these tools.

Characters act as **templates**—you can create an instance of a character by **dragging it from the Character section onto the map**.

---

## Item

An **Item** is an object in your game that can be **picked up** or **interacted with** by entities.

To create an item, press the **+** button in the **Item** section.

- Item behavior can be scripted using the **Code Tool**.
- Properties can be set in the **Data Tool**.

Like characters, **items serve as templates**—dragging them from the Item section onto the map creates an instance.

Items are **highly flexible**. They can be **static** or **interactive** (e.g., lighting a torch, displaying a message, triggering an event).

---

## Tileset

A **Tileset** is a **PNG file** containing a **grid of tiles** used to create maps.

To add a tileset, press the **+** button in the **Tileset** section—this opens a file browser where you can select a PNG file.

- The **Grid Size** field allows you to set the size of each tile.

![Tileset](/img/docs/tileset_section.png)

The screenshot above shows a tileset with the **Tileset Tool** open.

Using the **Tileset Tool**, you can:
- Add selected tiles as **single images**, **animations**, or **multi-tiles** (composed of multiple tiles).
- Only added tiles can be used as **map elements**.

For more details, see the **Tileset Tool** documentation.

:::tip
Tileset items have a context menu with which you can, for example, add the colors of a tileset to the palette.
:::

---

## Screen

A **Screen** defines what the player sees during gameplay and serves as the **UI layer** for your game.

To create a screen, press the **+** button in the **Screen** section.

- Use the regular **map-based tools** to design screen elements.
- Each **sector** acts as a **widget**—give it a name, and it will appear in the Screen's content list as a selectable item.
- Widget properties can be set using the **Data Tool**.

For more details, see the [Screens & Widgets](/screens_widgets) chapter.

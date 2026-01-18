---
title: "Characters"
id: characters
sidebar_position: 2
---

## Creating a Character

You can create a **character template** by clicking the **+** button at the bottom of the **project tree** and selecting **Character**.

A **character template** is a reusable blueprint that defines the **behavior, attributes, and appearance** of a character in the game.

To create an **instance** of a character, simply **drag and drop** the character template into the map by dragging the **Name** project tree item.

<!--## Creating Character Visuals in Eldiron

You can either associate a `tile_id` (from an imported tilemap) with a character, or create the character directly inside Eldiron. The latter has the advantage that items can change the colors of sectors in the character rig or overlay their own geometry on top of the character’s geometry, creating fully rigged characters that automatically adjust to their equipped items.

To do this, create the character with the **Linedef** and **Sector** tools.
Name the sectors you want items to colorize (items reference them with the `color_targets` statement in the **Data** tool), and name the linedefs where you want to attach item geometry (items reference them with the `geo_targets` statement).

Create and apply nodes to the chosen sectors and linedefs to generate the pixel visuals inside the geometry.

![Rigging](/img/docs/rigging.png)

You can animate characters by adding new states. At the moment, only the **Idle** state is supported.

:::warning
Character animation is currently basic and will be expanded in upcoming updates.
:::-->

## Editing Behavior and Attributes

You can edit character behavior using either **Visual Scripting** or **Eldrin Scripting** or edit the initial **Attributes** of the character by simply clicking the corressponding tree item of the character.

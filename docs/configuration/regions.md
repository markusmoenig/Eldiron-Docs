---
title: "Region Configuration"
sidebar_position: 2
---

You can configure regions inside Eldiron using the **editor** in the **region section**. Each region can have its own lighting and fog settings to create different visual moods and gameplay environments.

Example configuration:
```toml
  [rendering]
  receives_daylight = false
  fog_enabled = false
  fog_color = "#000000"
  fog_start_distance = 3.0
  fog_end_distance = 5.0
```

---

### Settings

#### `receives_daylight`
- **Type:** `bool`
- **Description:** If set to `true`, the region will be lit by global daylight. Set this to `false` for interiors or dark areas like caves and dungeons.

#### `fog_enabled`
- **Type:** `bool`
- **Description:** Enables or disables fog in the region. When `true`, fog will gradually fade the scene based on distance using the specified fog color.

#### `fog_color`
- **Type:** `string` (hex color code)
- **Description:** The color of the fog, in hexadecimal format (e.g., `"#000000"` for black). This is the color objects will fade toward when fog is applied.

#### `fog_start_distance`
- **Type:** `float`
- **Description:** The distance from the camera at which fog begins to appear. Objects closer than this distance will not be fogged.

#### `fog_end_distance`
- **Type:** `float`
- **Description:** The distance from the camera at which fog becomes fully opaque. Objects beyond this distance will be fully fogged with the `fog_color`.

---

These values allow fine-tuning of each region’s atmosphere. You can experiment with different settings to achieve eerie underground scenes, bright outdoor valleys, or anything in between.

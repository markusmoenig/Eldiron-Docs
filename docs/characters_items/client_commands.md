---
title: "Client Commands"
sidebar_position: 7
---

Client side scripting happens in the `user_event` section of scripts (and only for player characters). You can delete the `user_event` section for non player characters.

:::note
Player characters must be marked with `player = true` in their data to receive input events.
:::

## Usage

Example `user_event()` script for handling key presses:

```eldrin
fn user_event(event, value) {
    if event == "key_down" {
        let key = value;
        if key == "w" {
            action( "forward");
        }
        if key == "a" {
            action( "left");
        }
        if key == "d" {
            action( "right");
        }
        if key == "s" {
            action( "backward");
        }
        if key == "u" {
            intent( "use");
        }
        if key == "t" {
            intent( "attack");
        }
        if key == "k" {
            intent( "take");
        }
    }
    if event == "key_up" {
        let key = value;
        action( "none");
    }
}
```

---

## `action`

Triggers a movement or rotation action for a player character. This command is typically used in response to user input inside the `user_event()` method of a player-controlled character.

---

## Action Types

The `action()` command accepts the following action types:

### `forward`

```python
action("forward")
```

- **2D / Isometric**: Move the player north.
- **First-Person**: Move the player forward in their current facing direction.

---

### `left`

```python
action("left")
```

- **2D / Isometric**: Move the player west.
- **First-Person**: Rotate the player to their left.

---

### `right`

```python
action("right")
```

- **2D / Isometric**: Move the player east.
- **First-Person**: Rotate the player to their right.

---

### `backward`

```python
action("backward")
```

- **2D / Isometric**: Move the player south.
- **First-Person**: Move the player backward in their current facing direction.

---

### `none`

```python
action("none")
```

Stops any ongoing movement or rotation.

---

## `intent`

Tells the server that the next movement action or click is not movement based, but rather has a specific intent behind it. You can send any string with this command as long as you handle it inside the [intent event](events#intent) for characters or items.

The `intent` command in the `user_events` is useful for providing short-cuts, for the user interface use [button widgets](/docs/screens/screens_widgets#button-widgets).

---

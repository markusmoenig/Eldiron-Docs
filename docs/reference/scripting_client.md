---
title: "Scripting: Client"
sidebar_position: 4
---

Client side scripting happens in the `user_event` section of scripts (and only for player characters). You can delete the `user_event` section for non player characters.

:::note
Player characters must be marked with `player = true` in their data to receive input events.
:::

## Usage

Example `user_event()` script for handling key presses:

```python
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

            if value == 'u':
                intent("use")
            if value == 't':
                intent("attack")
            if value == 'k':
                intent("take")

        if event == 'key_up':
                action("none")
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

Tells the server that the next movement action or click is not movement based, but rather has a specific intent behind it. You can send any string with this command as long as you handle it inside the [intent event](/docs/reference/events#intent) for characters or items.

The `intent` command in the `user_events` is useful for providing short-cuts, for the user interface use [button widgets](/docs/reference/screens_widgets#button-widgets).

---

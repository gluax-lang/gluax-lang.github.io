---
title: continue
---

## Syntax

```gluax
continue [label];
```

Skips the rest of the current iteration of the innermost loop or a labeled loop.

**NOTE**

Can only be used inside a loop.

---

## Example

```gluax
func main() {
    while true {
        continue;
    }

    while: outer; true {
        while: inner; true {
            continue outer;
        }
    }
}
```

## Note

In future versions of GLuaX, `continue` will be converted from a statement to an expression, allowing for more flexible usage patterns.

---
title: break
---

## Syntax

```gluax
break [label];
```

Breaks out of the innermost loop or a labeled loop.

**NOTE**

Can only be used inside a loop.

---

## Example

```gluax
func main() {
    while true {
        break;
    }

    while: outer; true {
        while: inner; true {
            break outer;
        }
    }
}
```

## Note

In future versions of GLuaX, `break` will be converted from a statement to an expression, allowing for more flexible usage patterns.

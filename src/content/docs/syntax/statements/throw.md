---
title: throw
---

## Syntax

```gluax
throw <string>;
```

**NOTE**

Can only be used inside an errorable function (marked with `!`).

---

## Example

```gluax
func add(a: number, b: number) ! -> number {
    if b > 0 {
        throw "b must not be greater than 0";
    }
    a + b
}

func main() ! {
    let result = add(5, 10)!;
    // OR (both are just the same):
    let result = add(5, 10) catch e {
        throw e;
    };
    // OR
    let result = add(5, 10) catch _ { 1 };
    // OR
    let result = add(5, 10) catch _ { return; };
    print(result);
}

```

## Note

In future versions of GLuaX, `throw` will be converted from a statement to an expression, allowing for more flexible usage patterns.

---
title: return
---

## Syntax

```gluax
return [expression [, ...]];
```

## Example

```gluax
func add(a: number, b: number) -> number {
    return a + b;
}

func main() {
    let result = add(5, 10);
    print(result);
}
```

## Note

In future versions of GLuaX, `return` will be converted from a statement to an expression, allowing for more flexible usage patterns.

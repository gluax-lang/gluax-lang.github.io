---
title: About
sidebar:
  order: 1
---

**Items** are the top-level building blocks of a GLuaX program. They define the structure and organization of your code and can only be declared at the top level of a file, not inside functions or other items.

Items include:

- [`import`](../import)
- [`use`](../use)
- [`struct`](../struct)
- [`let`](../../let)
- [`func`](../func)

# Example

```gluax
import "other";

struct Point {
    x: number,
    y: number
}

impl Point {
    func new(x: number, y: number) -> Point {
        Point { x, y }
    }
}

func main() {
    let point = Point::new(10, 20);
}
```

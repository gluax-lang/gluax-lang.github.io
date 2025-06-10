---
title: Loop Expression
---

Loop expressions in GLuaX provide a way to create loops that can iterate indefinitely. This can also be used to implement simple do-while loops.

```gluax
loop {
    // Infinite loop body
}
```

Can also be used as an expression:

```gluax
let result = loop {
    // Loop body
};
```

> **Note:** While you can use `loop` as an expression, you currently cannot return a value from it.

Do-while loops can be implemented using a `loop` with an `if` condition at the end:

```gluax
let i = 0;
loop {
    // DO
    i = i + 1;

    // WHILE
    if i > 5 {
        break;
    }
}
```

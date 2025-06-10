---
title: While Expression
---

While expressions in GLuaX provide a way to create loops that continue as long as a certain condition is met.

```gluax
while cond {
    // Loop body
}
```

Can also be used as an expression:

```gluax
let result = while true {
    // Loop body
};
```

> **Note:** While you can use `while` as an expression, you **cannot** return a value from it. It will always evaluate to `nil` when used as an expression.

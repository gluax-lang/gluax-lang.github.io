---
title: Usage
---

## Example Usage

This section provides examples of how to use various expressions in GLuaX.

### Implicit Return from Block

In GLuaX, the last value in a block is implicitly returned, similar to Rust. You do not need to use an explicit `return` statement.

This is especially useful for blocks and `if` expressions, where you want to produce a value and assign it to a variable. Unlike a `return` statement, which exits a function, the implicit return lets you use the result of a block or conditional directly in an expression.

```gluax
let x = if condition {
    10
} else {
    20
};
// x is 10 if condition is true, otherwise 20
```

```gluax
func add(a: number, b: number) -> number {
    a + b  // This value is returned
}

let result = add(2, 3);  // result is 5
```

### If Expression

```gluax
let x = if false {
    42
} else if true {
    24
} else {
    0
};
```

### Blocks

```gluax
let x = {
    let a = 10;
    let b = 20;
    a + b  // The last expression is returned
};
```

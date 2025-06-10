---
title: Tuples
---

Tuples in GLuaX are fake tuples, they are just to be able to work with functions that return multiple values in Lua.
They are not real tuples like in Rust, but they can be used to destructure multiple return values from functions.

It's not possible to efficiently implement real tuples in Lua, this is because there is no way to create actual data structures in Lua.

Most limitations in GLuaX are due to the limitations of Lua, so we have to work around them.

#### Example in expressions:

```gluax
let a, b = (1, 2);
// this is equivalent to
let a, b = 1, 2;
```

`(<expr>, <expr>)` syntax was introduced to allow returning multiple values from blocks.
Eg.

```gluax
let a, b = {
    let x = 1;
    let y = 2;
    (x, y) // returns a tuple
};
```

But they are limited in their usage.

#### Example in functions:

```gluax
func return_two() -> (number, string) {
    return (42, "hello");
    // this is equivalent to
    return 42, "hello";
}
```

### Only places where tuples can be used are in:

- Function return types
- Function return values
- Destructuring assignments (tuples must be the last items)
- Blocks that return multiple values
- As the last argument in a function call

Tuples cannot be used as standalone data structures or passed around like in Rust.

For example, when destructuring, the tuple must be last:

```gluax
let x, y = (1, 2);        // OK
let a, b, c = 0, (1, 2);  // OK, expands to let a, b, c = 0, 1, 2
let a, b, c = (1, 2), 3;  // NOT allowed, tuple must be last
```

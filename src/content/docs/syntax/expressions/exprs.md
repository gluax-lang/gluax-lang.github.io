---
title: Expressions
---

This page documents the compound expressions in GLuaX, which include control flow, blocks, functions, and other structured constructs.

## If Expression

```gluax
if cond {
    // then block
} else if other_cond {
    // else-if block
} else {
    // else block
}
```

## While Expression

```gluax
while cond {
    // body
}
```

## Loop Expression

```gluax
loop {
    // infinite loop body
}
```

## For Numeric Expression

```gluax
// Basic for loop
for i = 1, 10 {
    // body, i from 1 to 10
}

// With a step
for i = 1, 10, 2 {
    // body, i from 1 to 10, step 2
}
```

## For-In Expression

```gluax
let m = map{
    "a": 1,
    "b": 2,
    "c": 3
};
for k, v in m {
    print(k, v);
}

let v = vec{1, 2, 3};
for i, val in v {
    print(i, val);
}
```

## Block Expression

```gluax
{
    // block body
}
```

## Function Expression

```gluax
func(x: number, y: number) -> number {
    x + y
}
```

## Vector and Map Initialization

GLuaX provides concise syntax for initializing vectors and maps. You can optionally specify type parameters using `::<type>`.

> **Note:**
> The syntax for initializing a vector or map looks very similar to struct initialization in GLuaX. The difference is that the compiler detects when you are initializing a `map` or `vec` and parses it differently. This prevents confusion with normal struct initialization, which uses a similar `{}` syntax.

> **Tip:**
> It is recommended to write the curly braces directly after `map` or `vec` (e.g., `map{...}` or `vec{...}`), and **not** with a space like `map {...}`. This helps visually and syntactically distinguish map/vector initialization from struct initialization.

### Vector Initialization

A vector can be initialized with a list of values:

```gluax
vec{1, 2, 3}
```

You can also specify the element type explicitly:

```gluax
vec::<number>{1, 2, 3}
```

### Map Initialization

A map is initialized with key-value pairs using curly braces and colons:

```gluax
map{
    1: 1,
    2: 2,
}
```

You can optionally specify the key and value types:

```gluax
map::<number>{
    1: 1,
    2: 2,
}

map::<number, number>{
    1: 1,
    2: 2,
}
```

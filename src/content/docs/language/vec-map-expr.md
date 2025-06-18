---
title: vec/map Expression
---

GLuaX provides concise syntax for initializing vectors and maps. You can optionally specify type parameters using `::<type>`.

> **Note:**
> The syntax for initializing a vector or map looks very similar to class initialization in GLuaX. The difference is that the compiler detects when you are initializing a `map` or `vec` and parses it differently.

> **Tip:**
> It is recommended to write the curly braces directly after `map` or `vec` (e.g., `map{...}` or `vec{...}`), and **not** with a space like `map {...}`. This helps visually and syntactically distinguish map/vector initialization from class initialization.

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

## Example Usage

```gluax
let numbers = vec{1, 2, 3};
let mapping = map{
    1: "one",
    2: "two",
    3: "three",
};
```

---
title: struct
sidebar:
  order: 4
---

The `struct` keyword is used to define custom data types in GLuaX. Structs are collections of named fields, each with a specified type, and can only be declared at the top level of a file (as items).

## Syntax

```gluax
[pub] struct Name {
    [pub] field1: Type1,
    field2: Type2,
    // ...
}
```

- Each field must have a name and a type.
- Fields can be marked `pub` to make them accessible outside the module.
- Fields are separated by commas. A trailing comma is allowed.

## Example

```gluax
struct Point {
    pub x: number,
    pub y: number,
    label: string,
}
```

This defines a `Point` struct with two public fields (`x` and `y`) and one private field (`label`).

## Generics

Structs can have generic parameters:

```gluax
struct Wrapper<T> {
    value: T,
}
```

## Example with Methods

```gluax
struct Counter {
    value: number,
}

impl Counter {
    func inc(self) {
        self.value = self.value + 1;
    }
}
```

## Notes

- Structs can only be declared at the top level of a file, not inside functions or other items.
- Methods can be defined for structs using `impl` blocks.

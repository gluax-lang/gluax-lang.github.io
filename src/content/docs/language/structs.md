---
title: Structs
---

The `struct` keyword is used to define custom data types in GLuaX. Structs are collections of named fields, each with a specified type, and can only be declared at the top level of a file.

## Syntax

```gluax
[pub] struct Name {
    [pub] field1: Type,
    field2: Type,
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

// Generic struct with methods
struct Pair<T, U> {
    first: T,
    second: U,
}

impl<T, U> Pair<T, U> {
    func new(first: T, second: U) -> Pair<T, U> {
        Pair { first: first, second: second }
    }

    func get_first(self) -> T {
        self.first
    }

    func get_second(self) -> U {
        self.second
    }
}

let pair = Pair::<number, string>::new(1, "hello");
// or
let pair = Pair { first: 1, second: "hello" };
```

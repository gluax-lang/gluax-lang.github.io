---
title: Classes
---

The `class` keyword is used to define custom data types in GLuaX. Classes are collections of named fields, each with a specified type, and can only be declared at the top level of a file.

## Syntax

```gluax
[pub] class Name[: SuperClass1] {
    [pub] field1: Type,
    field2: Type,
    // ...
}
```

- Each field must have a name and a type.
- Fields can be marked `pub` to make them accessible outside the module.
- Fields are separated by commas. A trailing comma is allowed.
- Classes can inherit from a single superclass using the `: SuperClass` syntax.

## Example

```gluax
class Point {
    pub x: number,
    pub y: number,
    label: string,
}
```

This defines a `Point` class with two public fields (`x` and `y`) and one private field (`label`).

## Inheritance

Classes can inherit from a single superclass. Only one superclass is allowed per class.

```gluax
class Animal {
    pub name: string,
    age: number,
}

class Dog: Animal {
    pub breed: string,
}

class Cat: Animal {
    indoor: bool,
}
```

In this example, both `Dog` and `Cat` inherit from `Animal`, gaining access to the `name` and `age` fields in addition to their own specific fields.

> **Note:**
> When a class inherits from a superclass, all fields from the superclass are automatically added to the child class and cannot be redefined. The child class can only add new fields with names that don't conflict with the inherited fields.

> **Inheritance Benefits:**
> When you inherit from a class, you gain access to:
>
> - All methods defined for the superclass
> - The ability to use the subclass anywhere the superclass is accepted
> - All traits implemented for the superclass

## Generics

Classes can have generic parameters:

```gluax
class Wrapper<T> {
    value: T,
}
```

## Example with Methods

```gluax
class Counter {
    value: number,
}

impl Counter {
    func inc(self) {
        self.value = self.value + 1;
    }
}

// Generic class with methods
class Pair<T, U> {
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

## Why Both Traits and Class Inheritance?

GLuaX originally started with only structs and traits (similar to Rust's approach), but I hit a major roadblock that forced me to rethink the design.

### The Original Plan: Structs + Traits Only

Initially, GLuaX was designed with just structs and traits. To make traits work with any type (including primitives and external types), I implemented trait methods outside the type system:

```lua
-- GLuaX would generate something like this
struct_trait_A_methods = {
    method1 = function(self) ... end,
    method2 = function(self) ... end,
}
```

This approach was elegant because:

- ✅ Could work with any type (primitives, external types, etc.)
- ✅ Functions called directly by GLuaX without metatable hacks

### The Garry's Mod Reality Check

Everything seemed great until I tried to work with Garry's Mod panels, which heavily rely on inheritance. In GMod, methods are called using Lua's metatable system:

```lua
-- GMod expects this:
panel:SetText("Hello")
entity:GetPos()

-- But our trait system would generate:
class_trait_A_methods.SetText(panel, "Hello")
```

**The problem:** GMod panels expect their methods to be accessible via the `:` operator through metatables, but our trait implementation doesn't add methods to metatables or the type's table. Making this work would require hacky workarounds that break seamless integration.

### Why I Added Classes

I started GLuaX to make writing code for big projects easy, not painful. The traits-only approach would have made working with GMod's inheritance-heavy APIs extremely cumbersome.

**The solution:** Add classes alongside traits:

- **Classes:** Work seamlessly with existing Lua/GMod code that relies on metatables and inheritance
- **Traits:** Provide powerful polymorphism for any type where we have full control

This way, GLuaX code can work seamlessly with the outside world while still maintaining clean, polymorphic design patterns where appropriate.

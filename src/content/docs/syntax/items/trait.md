---
title: trait
sidebar:
  order: 7
---

The `trait` keyword is used to define a set of required methods that structs can implement. Traits allow you to specify shared behavior across different types, similar to interfaces in other languages.

## Syntax

```gluax
[pub] trait Name [: SuperTrait1 + SuperTrait2] {
    func required_method(self);

    func another_method(self) {

    }
}
```

- Traits can inherit from one or more supertraits using `:`.
- If body is provided, it can contain default implementations for methods.

## Example

```gluax
trait Drawable {
    func RNDX_Drawable_draw(self);
    func RNDX_Drawable_area(self) -> number;
}
```

## Example with Supertraits

```gluax
trait Shape: Drawable {
    func RNDX_Shape_area(self) -> number;
}
```

## Naming Conventions for Trait Methods

To prevent naming conflicts between trait methods and methods in structs or other traits, **trait method names must be globally unique**.

It is **strongly recommended** to prefix each method name with your addon name, followed by the trait name, and then the method name, using underscores as separators. For example: `MYADDON_TraitName_methodName`.

This convention is necessary because trait methods are implemented directly inside structs. Implementing a trait is simply:

```gluax
impl TraitName for StructName;
```

By following this naming pattern, you ensure that your methods do not clash with others, making trait usage safer and more compatible with code outside/inside of GLuaX.

## Restrictions

- If a method is already defined in a supertrait, you cannot define a method with the same name in the current trait. Method names must be unique across the entire trait inheritance chain.

---
title: Traits
---

The `trait` keyword is used to define a set of required methods that classes can implement. Traits allow you to specify shared behavior across different types, similar to interfaces in other languages and work very similarly to Rust traits.

## Syntax

```gluax
[pub] trait Name [: SuperTrait1 + SuperTrait2] {
    func required_method(self);

    func method_with_default(self) {
        // default implementation
    }
}
```

- Traits can inherit from one or more supertraits using `:`.
- Methods can have default implementations in the trait body.

## Example

```gluax
trait Drawable {
    func draw(self);
    func area(self) -> number;
}
```

## Example with Supertraits

```gluax
trait Shape: Drawable {
    func perimeter(self) -> number;

    func describe(self) {
        printf("This shape has area: %s", self.area());
    }
}
```

## Implementing Traits

Traits are implemented using `impl TraitName for Type` blocks, where you define the required methods directly in the impl block.

### Example 1 - Class Implementation

```gluax
class Rectangle {
    width: number,
    height: number,
}

trait Drawable {
    func draw(self);
    func area(self) -> number;
}

impl Drawable for Rectangle {
    func draw(self) {
        printf("Drawing rectangle %dx%d", self.width, self.height);
    }

    func area(self) -> number {
        return self.width * self.height;
    }
}
```

### Example 2 - Generic Type Implementation

```gluax
trait Display {
    func to_string(self) -> string;
}

impl<K, V> Display for map<K, V> {
    func to_string(self) -> string {
        return "Map";
    }
}
```

### Example 3 - Built-in Type Implementation

```gluax
pub trait Formatter {
    func format(self) -> string;
}

impl Formatter for number {
    func format(self) -> string {
        string::format("Number: %d", self)
    }
}

impl Formatter for string {
    func format(self) -> string {
        string::format("String: %s", self)
    }
}
```

## Default Implementations

Traits can provide default implementations for methods, which implementing types can use or override:

```gluax
trait Animal {
    func name(self) -> string;

    func speak(self) {
        print(self.name() .. " makes a sound");
    }

    func introduce(self) {
        print("Hi, I'm " .. self.name());
        self.speak();
    }
}

class Dog {
    pet_name: string,
}

impl Animal for Dog {
    func name(self) -> string {
        return self.pet_name;
    }

    // Override the default speak implementation
    func speak(self) {
        print(self.name() .. " barks!");
    }

    // introduce() uses the default implementation
}
```

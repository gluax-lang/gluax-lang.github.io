---
title: impl .. for
sidebar:
  order: 8
---

`impl .. for` is used to implement traits for structs. This allows you to define how a struct behaves according to a specific trait, enabling polymorphism and code reuse.

## Syntax

```gluax
impl[<Generics>] TraitName for StructName;
```

## Example 1

```gluax
struct MyStruct {}

trait MyTrait {
    func my_method(self);

    func another_method(self) {
    }
}

impl MyStruct {
    func my_method(self) {
        print("MyStruct::my_method called");
    }
}
/* OR
impl MyStruct {
    func my_method(self) {
        print("MyStruct::my_method called");
    }

    func another_method(self) {
    }
}
*/

impl MyTrait for MyStruct;

func test(t: dyn MyTrait) {
    t.my_method();
}
```

## Example 2

```gluax
trait MyTrait {
    func my_method(self);

    func another_method(self) {
    }
}

impl map<number, string> {
    func my_method(self) {
        print("MyTrait method called on map<number, string>");
    }
}

impl MyTrait for map<number, string>;

func test(t: dyn MyTrait) {
    t.my_method();
}
```

## Example 3

```gluax
trait MyTrait {
    func my_method(self);

    func another_method(self) {
    }
}

impl<K, V> map<K, V> {
    func my_method(self) {
        print("MyTrait method called on map<K, V>");
    }
}

impl<K, V> MyTrait for map<K, V>;

func test(t: dyn MyTrait) {
    t.my_method();
}
```

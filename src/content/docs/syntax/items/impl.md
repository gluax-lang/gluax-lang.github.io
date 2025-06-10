---
title: impl
sidebar:
  order: 5
---

The `impl` keyword is used to define methods and associated functions for a struct in GLuaX.

## Syntax

```gluax
impl StructName {
    func static() {}
    func method_name(self) {}
}
```

### With Generics

```gluax
impl<T> StructName<T> {
    func static() {}
    func method_name(self) {}
}
```

### Example

```gluax
struct Map<K, V> {
    data: map<K, V>,
}

impl<K, V> Map<K, V> {
    func new() -> Map<K, V> {
        Map { data: map::<K, V>{} }
    }

    func set(self, key: K, value: V) {
        self.data.set(key, value);
    }

    func get(self, key: K) -> ?V {
        self.data.get(key)
    }
}
```

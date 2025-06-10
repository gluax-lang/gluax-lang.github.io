---
title: If Expression
---

If statements in GLuaX accept either booleans OR optional values. Unlike Lua, which accepts any value as truthy or falsy, GLuaX requires explicit checks for `nil` values.

```gluax
if cond {
    // then block
} else if other_cond {
    // else-if block
} else {
    // else block
}
```

As an expression

```gluax
let v = 0;
let result = if v == 0 {
    0
} else if v > 0 {
    1
} else {
    -1
};
```

Checking for optional values

```gluax
let name: ?string = nil;
if name {
    print("Name is provided: " .. name?);
} else {
    print("No name provided");
}
```

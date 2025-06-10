---
title: Options
---

Option types allow you to indicate that a variable or parameter can either be `nil` or a specified type. This is useful for representing values that may or may not be present.

## Declaring Option Types

To declare an option type, prefix the type with `?`. For example, a variable that can be either a `string` or `nil`:

```gluax
let s: ?string = nil;
```

Option types cannot be nested (e.g., `??string` is not allowed), as they are designed to transform into simple Lua code.

## Using Options with Functions

You can use option types in function parameters:

```gluax
func print_name(name: ?string) {
    if name {
        print(name?); // Use '?' to unwrap the value
    }
}
```

> **Note:** The `?` operator is used to unwrap the option. The compiler currently requires this even if you've checked that the value exists. If you try to unwrap a `nil` value, it will cause an error.

## The `else` Postfix

For convenience, you can use the `else` postfix to provide a default value if the option is `nil`:

```gluax
func print_name(name: ?string) {
    print(name else "no name was supplied!");
}
```

This will print the value of `name` if it exists, or `"no name was supplied!"` if it is `nil`.

---

Options make it easy to handle values that may be missing, while keeping your code clear and concise.

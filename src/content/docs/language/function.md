---
title: Function
---

The `func` keyword is used to define functions in GLuaX. Functions can be declared at the top level (as items) or inside other items like `impl` blocks. Functions consist of a name, a parameter list, an optional return type, and a body.

## Syntax

```gluax
[pub] func name(param1: Type1, param2: Type2, ...Type) [!] -> ReturnType {
    // function body
}
```

- The return type is optional; if omitted, the function implicitly returns `nil`.
- Use `...Type` as a parameter for varargs.

## Example

```gluax
func add(a: number, b: number) -> number {
    a + b
}

func return_two() -> (number, number) {
    (2, 2)
}
// OR
func return_two() -> (number, number) {
    return 2, 2;
}

func errorable_func() ! {
    throw "An error occurred";
}
```

## Notes

- Functions can be marked `pub` to make them accessible outside the module.
- The `!` after the parameter list (e.g., `func foo() !`) indicates the function can return an error (errorable function).
- Variadic parameters (`...Type`) must be the last in the parameter/return list.

---
title: Let
---

The `let` keyword declares variables in GLuaX.

- Variables declared with `let` can be changed after assignment.
- You must provide an initial value for each variable.

## Syntax

```gluax
let name: Type = value;
let a, b: number = 1, 2;
let x = 42;
```

- Multiple variables can be declared at once, separated by commas.
- Type annotations (`: Type`) are optional for local variables, but **required for top-level (item) variables**.
- Each variable must be initialized at declaration.

## Examples

```gluax
let x = 10;
let y: string = "hello";
let a, b: number = 1, 2;
```

## Scope

- **Item `let`:** Declared at the top level of a file (outside any function or block). These are global to the module.
- **Non-item `let`:** Declared inside functions or blocks. These are local to their scope.

```gluax
let GLOBAL: number = 123;

func main() {
    let local = 5;
    print(GLOBAL, local);
}
```

**Notes:**

- `pub` can only be used with top-level `let`.
- Type inference is only allowed for local (non-item) variables.

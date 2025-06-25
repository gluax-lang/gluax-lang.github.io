---
title: Const
---

The `const` keyword declares immutable, compile-time constants in GLuaX.

- **Immutability:** Cannot be changed after assignment.
- **Compile-time substitution:** Literal values are inlined at compile time.

## Syntax

```gluax
const NAME: Type = value;
const A, B: number = 1, 2;
```

- Top-level (`item`) constants **must** have a type annotation.
- Multiple constants can be declared at once, separated by commas.
- Must be initialized at declaration.

## Examples

```gluax
const MAX_USERS: number = 100;
const GREETING: string = "Welcome!";
```

## Scope

- **Item `const`:** Top-level, global to the module.
- **Non-item `const`:** Inside functions/blocks, local to their scope.

```gluax
const VERSION: string = "1.0.0";

func main() {
    const LOCAL_CONST = 42;
    print(VERSION, LOCAL_CONST);
}
```

**Notes:**

- `pub` can only be used with top-level `const`.
- Type inference is only allowed for local (non-item) constants.

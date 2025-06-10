---
title: Let
---

The `let` keyword is used to declare variables in GLuaX. It supports declaring one or more variables, optionally with type annotations, and requires an initializer for each variable.

## Syntax

```gluax
let name: Type = value;
let a, b: number = 1, 2;
let x = 42;
```

- You can declare multiple variables at once, separated by commas.
- Each variable can have an optional type annotation (`: Type`).
- The right-hand side must provide values for all variables.
- The statement must end with a semicolon (`;`).

## Example

```gluax
let x = 10;
let y: string = "hello";
let a, b: number = 1, 2;
```

## Item vs. Non-Item `let`

- **Item `let`**: Declared at the top level of a file (outside any function or block). These are global definitions and can be accessed throughout the module.
  Example:
  ```gluax
  let GLOBAL = 123;
  func main() {
      print(GLOBAL);
  }
  ```
- **Non-item `let`**: Declared inside functions or blocks. These are local variables and only accessible within their scope.
  Example:
  ```gluax
  func main() {
      let local = 5;
      print(local);
  }
  ```

**Note:**

- The `pub` keyword (for making a variable public) can only be used with top-level item `let` declarations, not with local variables inside functions or blocks.

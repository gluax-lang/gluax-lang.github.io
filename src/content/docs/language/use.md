---
title: Use
---

The `use` keyword is used to bring specific definitions (such as functions, structs, or constants) from another module or namespace into the current scope. This allows you to reference those definitions directly, without needing to prefix them with the module path.

## Syntax

```gluax
[pub] use module::name [as alias];
```

## Example

```gluax
use utils::helpers::do_something as do_something;
// same as
use utils::helpers::do_something;

func main() {
    do_help();
}
```

## Notes

- `use` statements must appear at the top level of a file, after all `import` statements but before other items.
- The path must refer to a valid, public definition in the imported module.

---
title: use
sidebar:
  order: 3
---

The `use` keyword is used to bring specific definitions (such as functions, structs, or constants) from another module or namespace into the current scope. This allows you to reference those definitions directly, without needing to prefix them with the module path.

## Syntax

```gluax
[pub] use module::name [as alias];
```

## Example

```gluax
use utils::helpers::do_something as do_help;

func main() {
    do_help();
}
```

## Notes

- `use` statements must appear at the top level of a file, after all `import` statements but before other items.
- The path must refer to a valid, public definition in the imported module.
- Using `as` allows you to avoid naming conflicts or shorten long names.

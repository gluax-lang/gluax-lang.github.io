---
title: import
sidebar:
  order: 2
---

The `import` keyword is used to include definitions from other modules or files into the current file. This allows you to organize your code across multiple files and reuse code easily.

## Syntax

```gluax
[pub] import "module_path" [as alias];
```

- The path must be a string literal.
- You can optionally use `as` to give the imported module an alias.
- If you didn't specify an alias, the module's public definitions will be available under its original name. eg. `import "utils/helpers"` will make the definitions available as `helpers` in the current file.

## Example

```gluax
import "utils/helpers" as helpers;

func main() {
    helpers::do_something();
}
```

...existing code...

## Notes

- **All import statements must come before any other items in the file.** You cannot place an import after a struct, function, or any other item.
- The `.gluax` extension in the import path is optional.
- You can use relative paths like `./` or `../` in the import string.
- Import paths must resolve to files within your workspace/project directory. Attempting to import files outside the project directory will result in an error.
- Using `as` allows you to avoid naming conflicts.

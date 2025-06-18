---
title: Import
---

The `import` keyword is used to include definitions from other modules or files into the current file.

## Syntax

```gluax
[pub] import "module_path" [as alias];
```

- The path must be a string literal.
- You can optionally use `as` to give the imported module an alias.
- If you didn't specify an alias, the module's public definitions will be available under its original name. eg. `import "utils/helpers"` will make the definitions available as `helpers` in the current file.

## Example

```gluax
import "utils/helpers.gluax" as helpers;
// same as
import "utils/helpers" as helpers;
// same as
import "utils/helpers";

func main() {
    helpers::do_something();
}
```

## Notes

- **All import statements must come before any other items in the file.** You cannot place an import after a class, function, or any other item.
- The `.gluax` extension in the import path is optional.
- You can use relative paths like `./` or `../` in the import string.
- Import paths must resolve to files within your workspace/project directory. Attempting to import files outside the project directory will result in an error.
- Using `as` allows you to avoid naming conflicts.

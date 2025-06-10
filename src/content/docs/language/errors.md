---
title: Errors
---

GLuaX implements a really efficient error handling mechanism that allows you to throw and catch errors in a way that is similar to Zig or Go.

## Defining Errorable Functions

In GLuaX, functions that can return errors are marked with an exclamation mark (`!`) after the parameter list. This indicates that the function can throw an error, and the caller must handle it appropriately.

```gluax
func errorable_function() ! {
    // Function body that may throw an error
}
```

## Throwing Errors

To throw an error, you use the `throw` statement followed by a string type value. This can only be done inside an errorable function (marked with `!`).

```gluax
func errorable_function() ! {
    throw "An error occurred";
}
```

## Example

```gluax
func add(a: number, b: number) ! -> number {
    if b > 0 {
        throw "b must not be greater than 0";
    }
    a + b
}

func main() ! {
    let result = add(5, 10)!;
    // OR (both are just the same):
    let result = add(5, 10) catch e {
        throw e;
    };
    // OR
    let result = add(5, 10) catch _ { 1 };
    // OR
    let result = add(5, 10) catch _ { return; };
    print(result);
}

```

## Note

In future versions of GLuaX, `throw` will be converted from a statement to an expression, allowing for more flexible usage patterns.

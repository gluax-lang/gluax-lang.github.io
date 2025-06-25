---
title: Features
sidebar:
  order: 4
---

# GLuaX Features

GLuaX is now in a good (still beta!) state for use. Here’s what makes it special:

## Language Features

- **Statically Typed:** Enjoy the safety and clarity of static types.
- **Expression-Based:** Most Lua statements can be used as expressions in GLuaX.
- **Implicit Block Returns:** Any block returns the last evaluated value, similar to Rust.

```gluax
let s = if true {
    1
} else {
    2
};

let o = {
    1
};
```

## Function Inlining

- **Simple Function Inlining:** Use the `#[inline]` attribute for inlining.

```gluax
#[inline]
func add(a: number, b: number) -> number {
    a + b
}

func main() {
    let result = add(1, 2);
}
```

This generates:

```lua
__gluax_public[2] --[[func main()]] = function()
    local __gluax_temp_1;
    do --[[inline call: add]]
        local a, b = 1, 2;
        __gluax_temp_1 = (a+b);
    end
    local result = __gluax_temp_1;
    return nil;
end;
```

## Imports

You can import from anywhere in your project—circular imports just work, just like in Rust. This makes it easy to build modular addons and develop quickly.

**File `a`:**

```gluax
import "b";

pub const A: bool = true;
const B: bool = b::B;
```

**File `b`:**

```gluax
import "a";

pub const B: bool = true;
const A: bool = a::A;
```

**How is this possible?**

GLuaX compiles your project as if it were a single file, splitting analysis into multiple steps. This is what allows circular imports to work seamlessly.

## Bitwise Operators

GLuaX supports bitwise operators, making it easy to work with binary data:

- `a | b`   // OR
- `a ^ b`   // XOR
- `a & b`   // AND
- `a << b`  // Left shift
- `a >> b`  // Right shift
- `~a`     // Bitwise NOT

## Compound Assignment Operators

Operators like `+=`, `-=`, and similar are not yet available in GLuaX, but are planned for future versions.

## Release Mode

When building in release mode, the GLuaX compiler aggressively strips out unused functions, variables, classes, and almost all unused code. This helps keep your final output lean.

## Standard Library (`std`)

GLuaX comes with a standard library (`std`), similar to what you’d find in other languages. While it’s currently limited, the goal is for it to become powerful and comprehensive over time. Community contributions can help make this happen faster!

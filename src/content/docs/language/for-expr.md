---
title: For Expressions
---

## For Loops in GLuaX

GLuaX provides two main kinds of `for` loops: the numeric `for` loop and the `for-in` loop.

### Numeric For Loop

The numeric `for` loop is similar to Lua's and is used for iterating over a range of numbers. You can optionally specify a step value.

```gluax
// Basic for loop
for i = 1, 10 {
    // body, i from 1 to 10
}

// With a step
for i = 1, 10, 2 {
    // body, i from 1 to 10, step 2
}
```

### For-In Loop

The `for-in` loop is used to iterate over collections like maps, vectors, or any class that implements the required iteration functions.

```gluax
let m = map{
    "a": 1,
    "b": 2,
    "c": 3
};
for k, v in m {
    print(k, v);
}

let v = vec{1, 2, 3};
for i, val in v {
    print(i, val);
}
```

You can also loop through strings, where each iteration gives you the index and the character at that position:

```gluax
for i, ch in "hello" {
    print(i, ch);
}
// Output:
// 1 h
// 2 e
// 3 l
// 4 l
// 5 o
```

<details>
<summary>Show generated code for string iteration</summary>

> **Note:**
> Although the generated code may look verbose or slow, it is actually very fast. All the output you see here consists of simple operations that LuaJIT handles extremely efficiently.

```lua
local __gluax_t_10, __gluax_t_12, __gluax_t_14, __gluax_t_15, __gluax_t_16;
do
    __gluax_t_10 = "hello";
    do -- inline __x_iter_range_bound
        local self = __gluax_t_10;
        __gluax_t_12 = (#self);
    end
    for i = 1, __gluax_t_12 do
        do -- inline __x_iter_range
            local self, idx = __gluax_t_10, i;
            __gluax_t_15 = self;
            __gluax_t_16 = idx;
            __gluax_t_14 = string.sub --[[str::sub]](__gluax_t_15, __gluax_t_16, idx);
        end
        local ch = __gluax_t_14;
        do
            do
                __gluax_t_16 = i;
                local _ = print(__gluax_t_16, ch);
            end
        end
        ::__gluax_continue_9::
    end
    ::__gluax_break_9::
end
```

</details>

#### Making Classes Iterable

You can make your own classes iterable in a `for-in` loop by implementing certain reserved functions. For example, when iterating over a `vec` using a `for-in` loop, it is compiled to a simple numeric loop (`for i = 1, #v do local v = #v[i] end`) for efficiency, instead of using `pairs` or `ipairs`. This is achieved by defining these functions:

```gluax
#[inline]
func __x_iter_range_bound(self) -> number { #self }

#[inline]
func __x_iter_range(self, idx: number) -> T {
    @raw("{@RETURN {@1@}[{@2@}] @}", self, idx) -> T
}
```

For maps, iteration is handled by:

```gluax
#[inline]
func __x_iter_pairs(self) -> (func(table, any) -> (K, V), Self) {
    (globals::base::next unsafe_cast_as func(table, any) -> (K, V), self)
}
```

By implementing these functions, any class can be made iterable in a `for-in` loop, allowing for efficient and flexible iteration patterns.

> **Note:**
> The way to define iterable functions for classes may change in the future. It’s possible that iteration could be handled using traits or another mechanism in later versions of GLuaX. This is still subject to change until the language reaches version 1.0.

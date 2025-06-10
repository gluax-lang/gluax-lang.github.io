---
title: Block Expression
---

Blocks in GLuaX can be used as expressions and statements. When used as an expression, the last value in the block is implicitly returned, similar to how Rust handles blocks.

```gluax
func main() {
    {
        let x = 10;
    }

    {
        let y = 20;
    }
}
```

As an expression, the block can be used to compute a value:

```gluax
let result = {
    let a = 5;
    let b = 10;
    a + b
};
```

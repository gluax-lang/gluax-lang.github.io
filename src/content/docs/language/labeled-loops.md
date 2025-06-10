---
title: Labeled Loops
---

Any loop in GLuaX can be labeled. This is particularly useful for nested loops where you want to control the flow more precisely.

```gluax
loop: label {
}

while: label; true {
}

for: label; i = 1, 10 {
}

let v = vec{1, 2, 3};
for: label; i, val in v {
    print(i, val);
}
```

## Example Usage

```gluax
loop: outer {
    for: inner; i = 1, 5 {
        if i == 3 {
            break outer; // Breaks out of the outer loop
        }
        print(i);
    }
}
```

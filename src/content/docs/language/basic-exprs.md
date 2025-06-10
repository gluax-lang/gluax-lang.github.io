---
title: Basic Expressions
---

## Literals

```gluax
42          // Number
"hello"     // String
true        // Boolean true
false       // Boolean false
nil         // Nil value
```

## Vararg

```gluax
...
```

## Arithmetic

```gluax
1 + 2   // Addition
3 - 4   // Subtraction
5 * 6   // Multiplication
7 / 8   // Division
9 % 2   // Modulus
2 ** 8  // Exponentiation
```

## Logical

```gluax
true && false
true || false
!true
```

## Relational

```gluax
a < b
a > b
a <= b
a >= b
a == b
a != b
```

## Bitwise

```gluax
a | b   // OR
a ^ b   // XOR
a & b   // AND
a << b  // Left shift
a >> b  // Right shift
~a      // Bitwise NOT
```

## Concatenation

```gluax
"foo" .. "bar"
```

## Unary

```gluax
-a          // Negation
!a          // Logical not
~a          // Bitwise not
#a          // Length
```

## Parenthesized

```gluax
(a + b)
```

## Unsafe Cast

```gluax
a unsafe_cast_as Type
```

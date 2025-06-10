---
title: Simple Expressions
sidebar:
  order: 1
---

## Literals

```gluax
42          // Number
"hello"     // String
true        // Boolean true
false       // Boolean false
nil         // Nil value
```

## Vararg Expression

```gluax
...
```

## Arithmetic Expressions

```gluax
1 + 2   // Addition
3 - 4   // Subtraction
5 * 6   // Multiplication
7 / 8   // Division
9 % 2   // Modulus
2 ** 8  // Exponentiation
```

## Logical Expressions

```gluax
true && false
true || false
!true
```

## Relational Expressions

```gluax
a < b
a > b
a <= b
a >= b
a == b
a != b
```

## Bitwise Expressions

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

## Unary Expressions

```gluax
-a          // Negation
!a          // Logical not
~a          // Bitwise not
#a          // Length
```

## Parenthesized and Tuple Expressions

```gluax
(a + b)
(a, b, c)   // Tuple
```

## Unsafe Cast

```gluax
a unsafe_cast_as Type
```

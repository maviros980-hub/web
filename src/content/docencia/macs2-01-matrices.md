---
title: Matrices
description: Resumen de definiciones, tipos de matrices y álgebra de matrices.
curso: 2º Bach. Matemáticas CCSS II · PAU
tipo: Resumen
orden: 1
date: 2026-09-17
---

## ¿Qué es una matriz?

Es un conjunto de $m\cdot n$ números colocados en **m filas** y **n columnas**. Su **dimensión** es nº de filas × nº de columnas $= m\times n$. Las matrices se nombran con letras mayúsculas: $A, B, C,\dots$

$$
A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}
$$

$a_{21}$ es el elemento que está en la fila 2, columna 1.

## Tipos de matrices

- **Matriz cuadrada:** tiene el mismo número de filas que de columnas.
- **Matriz fila:** solo tiene una fila.
- **Matriz columna:** solo tiene una columna.
- **Matriz nula:** todos sus elementos valen cero.
- **Matriz identidad ($I$):** cuadrada, con unos en la diagonal principal y ceros en el resto.
- **Matriz diagonal:** cuadrada, con ceros fuera de la diagonal principal.
- **Matriz traspuesta ($A^t$):** se obtiene cambiando filas por columnas en $A$.
- **Matriz simétrica:** cuadrada; los elementos simétricos respecto a la diagonal son iguales ($A = A^t$).

## Suma de matrices

Se suman los elementos que ocupan la misma posición, así que ambas matrices deben tener **la misma dimensión**.

- Conmutativa: $A + B = B + A$
- Asociativa: $A + (B + C) = (A + B) + C$
- Elemento neutro: la matriz nula, $A + 0 = A$
- Elemento opuesto: $A + (-A) = 0$

## Producto por un número

Se multiplican todos los elementos de la matriz por ese número $k$.

- $k\cdot(A + B) = k\cdot A + k\cdot B$
- $(k + t)\cdot A = k\cdot A + t\cdot A$
- $(k\cdot t)\cdot A = k\cdot(t\cdot A)$
- Elemento unidad: $1\cdot A = A$

## Producto de dos matrices

Para multiplicar $A\cdot B$ debe cumplirse que el **nº de columnas de A** coincida con el **nº de filas de B**. La matriz resultante tiene dimensión (filas de $A$) × (columnas de $B$):

$$
A_{m\times n}\cdot B_{n\times p} = C_{m\times p}
$$

Se multiplica **fila por columna**: la 1ª fila de $A$ y la 1ª columna de $B$ se multiplican término a término y se suman, y se obtiene el elemento $c_{11}$ de $C$.

## Propiedades del producto

- Asociativa: $A\cdot(B\cdot C) = (A\cdot B)\cdot C$
- Distributiva: $A\cdot(B+C) = A\cdot B + A\cdot C$
- Elemento neutro: $A\cdot I = I\cdot A = A$
- **¡Cuidado!** En general, $A\cdot B \neq B\cdot A$
- **¡Cuidado!** $(A+B)^2 \neq A^2 + 2AB + B^2$

## Matriz traspuesta

- $(A^t)^t = A$
- $(A+B)^t = A^t + B^t$
- $(k\cdot A)^t = k\cdot A^t$
- $(A\cdot B)^t = B^t\cdot A^t$ (**¡cambia el orden!**)
- Si $A$ es simétrica: $A = A^t$

## Matriz inversa

No toda matriz cuadrada tiene inversa. Si existe $A^{-1}$, debe cumplir:

$$
A^{-1}\cdot A = A\cdot A^{-1} = I
$$

- Si tiene inversa, la matriz se llama **regular** o **inversible**.
- Si no tiene inversa, se llama **singular** o **irregular**.
- $(A\cdot B)^{-1} = B^{-1}\cdot A^{-1}$ (**¡cambia el orden!**)
- $(k\cdot A)^{-1} = \frac{1}{k}\cdot A^{-1}$

**Método de Gauss para calcularla:**

$$
(A \mid I) \;\xrightarrow{\text{Gauss}}\; (I \mid A^{-1})
$$

Operaciones permitidas por fila: permutar filas, multiplicar o dividir una fila por un número, o sustituir una fila por una combinación de otras paralelas.

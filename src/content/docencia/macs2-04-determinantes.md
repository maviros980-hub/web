---
title: Determinantes
description: Definición, orden 2, regla de Sarrus, desarrollo por adjuntos y las propiedades que más caen en la PAU.
curso: 2º Bach. Matemáticas CCSS II · PAU
tipo: Resumen
orden: 4
date: 2026-10-04
---

## ¿Qué es un determinante?

Es un **número** que se calcula a partir de una matriz **cuadrada** y que da información sobre ella (por ejemplo, si tiene inversa o no). Se representa con barras verticales o con «det»: $\lvert A\rvert$ o $\det(A)$.

- Solo se puede calcular el determinante de matrices **cuadradas**.
- Si $\lvert A\rvert \neq 0$, la matriz $A$ tiene inversa (es regular).
- Si $\lvert A\rvert = 0$, la matriz $A$ no tiene inversa (es singular).

## Determinante de orden 2

Se multiplican los elementos de la diagonal principal y se resta el producto de la diagonal secundaria.

$$
\begin{vmatrix} a & b \\ c & d \end{vmatrix} = a\cdot d - b\cdot c
\qquad\qquad
\begin{vmatrix} 4 & 3 \\ 2 & 5 \end{vmatrix} = 4\cdot 5 - 3\cdot 2 = 20 - 6 = 14
$$

## Determinante de orden 3 · Regla de Sarrus

$$
\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix}
$$

Se forman dos triángulos a cada lado de la diagonal principal y otros dos a cada lado de la diagonal secundaria. Cada terna de elementos unidos es un producto de la fórmula:

- **Términos positivos** (diagonal principal y sus triángulos): $a\,e\,i$, $\;b\,f\,g$, $\;c\,d\,h$
- **Términos negativos** (diagonal secundaria y sus triángulos): $c\,e\,g$, $\;b\,d\,i$, $\;a\,f\,h$

$$
\lvert A\rvert = aei + bfg + cdh - ceg - bdi - afh
$$

## Menor complementario y adjunto

Para desarrollar un determinante por una fila o columna necesitamos dos ideas previas:

- **Menor complementario $M_{ij}$:** determinante que queda al eliminar la fila $i$ y la columna $j$.
- **Adjunto $A_{ij}$:** el menor con su signo, $A_{ij} = (-1)^{i+j}\,M_{ij}$.

$$
\text{signo } (-1)^{i+j}: \quad \begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix}
$$

## Desarrollo de un determinante por una fila o columna

El determinante es igual a la suma de cada elemento de una fila (o columna) multiplicado por su adjunto. Desarrollando por la fila $i$:

$$
\lvert A\rvert = a_{i1}A_{i1} + a_{i2}A_{i2} + a_{i3}A_{i3} + \cdots
$$

Conviene elegir la fila o columna con **más ceros**: cada cero elimina un adjunto por calcular.

**Ejemplo.** Desarrollamos por la 1ª fila:

$$
\begin{vmatrix} 1 & 2 & 0 \\ 3 & 1 & -1 \\ 0 & 2 & 1 \end{vmatrix}
$$

Como $a_{13} = 0$, ese término desaparece: $\lvert A\rvert = 1\cdot A_{11} + 2\cdot A_{12} + 0\cdot A_{13}$.

$$
A_{11} = +\begin{vmatrix} 1 & -1 \\ 2 & 1 \end{vmatrix} = 1\cdot 1 - (-1)\cdot 2 = 3
\qquad
A_{12} = -\begin{vmatrix} 3 & -1 \\ 0 & 1 \end{vmatrix} = -\big(3\cdot 1 - (-1)\cdot 0\big) = -3
$$

$$
\lvert A\rvert = 1\cdot 3 + 2\cdot(-3) + 0 = 3 - 6 = -3
$$

Es el mismo resultado que aplicando Sarrus directamente a esta matriz. ✓

## Propiedades: las que más caen en la PAU

Casi todos los ejercicios de «calcula un determinante a partir de otro, sin desarrollarlo» usan estas propiedades:

| Situación | Resultado |
| --- | --- |
| Una fila o columna de ceros, o dos filas/columnas iguales o proporcionales | $\lvert A\rvert = 0$ |
| Matriz triangular | $\lvert A\rvert$ = producto de la diagonal |
| Intercambiar 2 filas o columnas | $\lvert A'\rvert = -\lvert A\rvert$ |
| Multiplicar **una** fila/columna por $k$ | $\lvert A'\rvert = k\,\lvert A\rvert$ |
| Multiplicar **toda** la matriz (orden $n$) por $k$ | $\lvert kA\rvert = k^n\,\lvert A\rvert$ |
| Sumar a una fila una combinación de las otras | $\lvert A'\rvert = \lvert A\rvert$ |
| Trasponer la matriz | $\lvert A^t\rvert = \lvert A\rvert$ |
| Producto de matrices | $\lvert A B\rvert = \lvert A\rvert\,\lvert B\rvert$ |
| Matriz inversa | $\lvert A^{-1}\rvert = 1/\lvert A\rvert$ |

**Ejemplo tipo examen.** Sabiendo que $A$ es de orden 3 con filas $F_1, F_2, F_3$ y $\lvert A\rvert = 5$, calcula sin desarrollar:

- **a)** $B$ tiene las filas $F_2, F_1, F_3$ → $\lvert B\rvert = -5$ (se han cambiado dos filas).
- **b)** $C$ tiene la fila $F_1$ multiplicada por 3 → $\lvert C\rvert = 3\cdot 5 = 15$.
- **c)** $D = 2A$ → $\lvert D\rvert = 2^3\cdot 5 = 40$ (las 3 filas se multiplican por 2).
- **d)** $E$ tiene $F_1' = F_1 + 2F_2$ → $\lvert E\rvert = 5$ (no cambia).

---
title: "Matriz inversa: tres métodos"
description: Un mismo ejemplo resuelto por Gauss-Jordan, por la definición y con la matriz adjunta.
curso: 2º Bach. Matemáticas CCSS II · PAU
tipo: Resumen
orden: 2
date: 2026-09-17
---

## La matriz de partida

$$
A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}
$$

Antes de nada comprobamos que $\lvert A\rvert \neq 0$, porque si no, la matriz no tiene inversa:

$$
\lvert A\rvert = 2\cdot 1 - 1\cdot 1 = 1 \neq 0
$$

Como $\lvert A\rvert \neq 0$, $A$ es **regular** (tiene inversa).

## Método 1 · Gauss-Jordan

Escribimos $(A \mid I)$ y hacemos operaciones por filas hasta convertir la parte de $A$ en la identidad. Lo que quede a la derecha será $A^{-1}$.

$$
\left(\begin{array}{cc|cc} 2 & 1 & 1 & 0 \\ 1 & 1 & 0 & 1 \end{array}\right)
\xrightarrow{F_1 \leftrightarrow F_2}
\left(\begin{array}{cc|cc} 1 & 1 & 0 & 1 \\ 2 & 1 & 1 & 0 \end{array}\right)
$$

$$
\xrightarrow{F_2 \to 2F_1 - F_2}
\left(\begin{array}{cc|cc} 1 & 1 & 0 & 1 \\ 0 & 1 & -1 & 2 \end{array}\right)
\xrightarrow{F_1 \to F_1 - F_2}
\left(\begin{array}{cc|cc} 1 & 0 & 1 & -1 \\ 0 & 1 & -1 & 2 \end{array}\right)
$$

Ya tenemos $(I \mid A^{-1})$, así que:

$$
A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}
$$

## Método 2 · Por definición (sistema de ecuaciones)

Buscamos una matriz $X$ tal que $A\cdot X = I$ y planteamos las ecuaciones que salen de multiplicar fila por columna:

$$
\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} x_1 & x_2 \\ x_3 & x_4 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
$$

$$
\left\{\begin{array}{l} 2x_1 + x_3 = 1 \\ x_1 + x_3 = 0 \end{array}\right.
\qquad\qquad
\left\{\begin{array}{l} 2x_2 + x_4 = 0 \\ x_2 + x_4 = 1 \end{array}\right.
$$

Resolviendo cada sistema (por ejemplo, restando las dos ecuaciones): del primero, $x_1 = 1$, $x_3 = -1$; del segundo, $x_2 = -1$, $x_4 = 2$.

$$
A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}
$$

## Método 3 · Matriz adjunta (determinantes)

$$
A^{-1} = \frac{1}{\lvert A\rvert}\,\left(\operatorname{Adj} A\right)^t
$$

Calculamos el **adjunto** de cada elemento (el menor complementario con su signo):

- $A_{11} = +1 = 1$, $\quad A_{12} = -1$
- $A_{21} = -1$, $\quad A_{22} = +2 = 2$

Con ellos formamos la matriz adjunta y la trasponemos:

$$
\operatorname{Adj} A = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}
\qquad
(\operatorname{Adj} A)^t = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}
$$

Como $\lvert A\rvert = 1$, dividir entre $\lvert A\rvert$ no cambia nada:

$$
A^{-1} = \frac{1}{1}\begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}
$$

## Comprobación

Los tres métodos llevan al mismo resultado. Lo comprobamos multiplicando $A$ por $A^{-1}$: el resultado debe ser la matriz identidad.

$$
\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \quad ✓
$$

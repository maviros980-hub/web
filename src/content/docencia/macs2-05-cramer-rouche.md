---
title: Regla de Cramer y teorema de Rouché-Frobenius
description: Cómo clasificar y resolver sistemas de ecuaciones lineales, con un ejemplo tipo PAU con parámetro.
curso: 2º Bach. Matemáticas CCSS II · PAU
tipo: Resumen
orden: 5
date: 2026-10-04
---

## Sistema de ecuaciones en forma matricial

Un sistema de $m$ ecuaciones y $n$ incógnitas se escribe como $A\cdot X = B$. Usaremos este ejemplo en toda la ficha:

$$
\left\{\begin{array}{l} x + y + z = 6 \\ 2x - y + z = 3 \\ x + 2y - z = 2 \end{array}\right.
\qquad
A = \begin{pmatrix} 1 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 2 & -1 \end{pmatrix}
\quad
X = \begin{pmatrix} x \\ y \\ z \end{pmatrix}
\quad
B = \begin{pmatrix} 6 \\ 3 \\ 2 \end{pmatrix}
$$

- $A$ es la **matriz de coeficientes**; $B$ es la columna de términos independientes.
- $A^*$ es la **matriz ampliada**: la matriz $A$ con la columna $B$ añadida a la derecha, $A^* = (A \mid B)$.

## Regla de Cramer

Sirve para resolver un sistema **cuadrado** (tantas ecuaciones como incógnitas) cuando $\lvert A\rvert \neq 0$. Cada incógnita es un cociente de determinantes:

$$
x_i = \frac{\lvert A_i\rvert}{\lvert A\rvert}
$$

donde $A_i$ es la matriz $A$ en la que se ha sustituido la **columna $i$** por la columna de términos independientes $B$.

- **¡Cuidado!** Si $\lvert A\rvert = 0$, no se puede aplicar Cramer (hay que usar Rouché-Frobenius).
- Si $\lvert A\rvert \neq 0$, el sistema es compatible determinado (una única solución).

## Ejemplo resuelto paso a paso

**1. Determinante de A**

$$
\lvert A\rvert = \begin{vmatrix} 1 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 2 & -1 \end{vmatrix} = 7 \neq 0 \;\Rightarrow\; \text{se puede aplicar Cramer}
$$

**2. x (columna 1 → B)**

$$
\begin{vmatrix} \mathbf{6} & 1 & 1 \\ \mathbf{3} & -1 & 1 \\ \mathbf{2} & 2 & -1 \end{vmatrix} = 7 \;\Rightarrow\; x = \frac{7}{7} = 1
$$

**3. y (columna 2 → B)**

$$
\begin{vmatrix} 1 & \mathbf{6} & 1 \\ 2 & \mathbf{3} & 1 \\ 1 & \mathbf{2} & -1 \end{vmatrix} = 14 \;\Rightarrow\; y = \frac{14}{7} = 2
$$

**4. z (columna 3 → B)**

$$
\begin{vmatrix} 1 & 1 & \mathbf{6} \\ 2 & -1 & \mathbf{3} \\ 1 & 2 & \mathbf{2} \end{vmatrix} = 21 \;\Rightarrow\; z = \frac{21}{7} = 3
$$

**Solución:** $x = 1$, $y = 2$, $z = 3$.

## Teorema de Rouché-Frobenius

Permite **clasificar** cualquier sistema (cuadrado o no) comparando el rango de $A$, el rango de $A^*$ y el número de incógnitas $n$.

| Rangos | Tipo de sistema |
| --- | --- |
| $\operatorname{rg}(A) = \operatorname{rg}(A^*) = n$ | **Compatible determinado (SCD):** una única solución |
| $\operatorname{rg}(A) = \operatorname{rg}(A^*) < n$ | **Compatible indeterminado (SCI):** infinitas soluciones, con $n - \operatorname{rg}(A)$ parámetros |
| $\operatorname{rg}(A) \neq \operatorname{rg}(A^*)$ | **Incompatible (SI):** no tiene solución |

- Siempre se cumple $\operatorname{rg}(A) \le \operatorname{rg}(A^*)$ (al añadir una columna, el rango no baja).
- El rango se calcula con determinantes (mayor menor no nulo) o por el método de Gauss.

## Ejemplos SCI y SI

**Ejemplo SCI**

$$
\left\{\begin{array}{l} x + y = 3 \\ 2x + 2y = 6 \end{array}\right.
$$

$\operatorname{rg}(A) = 1$ y $\operatorname{rg}(A^*) = 1$; como $1 = 1 < 2$ incógnitas, es **SCI**. Solución: $y = \lambda$, $x = 3 - \lambda$ (1 parámetro, ya que $2 - 1 = 1$).

**Ejemplo SI**

$$
\left\{\begin{array}{l} x + y = 3 \\ 2x + 2y = 7 \end{array}\right.
$$

$\operatorname{rg}(A) = 1$ pero $\operatorname{rg}(A^*) = 2$; como $1 \neq 2$, es **SI** (no tiene solución). La 2ª ecuación contradice a la 1ª: $2x + 2y$ no puede valer 6 y 7 a la vez.

## Tipo PAU · Sistema con parámetro

Discute según los valores de $m$ el sistema:

$$
\left\{\begin{array}{l} m x + y = 1 \\ x + m y = 1 \end{array}\right.
$$

**1. Valores que anulan $\lvert A\rvert$**

$$
\begin{vmatrix} m & 1 \\ 1 & m \end{vmatrix} = m^2 - 1 = 0 \;\Rightarrow\; m = 1 \text{ o } m = -1
$$

- **$m \neq 1$ y $m \neq -1$:** $\lvert A\rvert \neq 0$, $\operatorname{rg}(A) = \operatorname{rg}(A^*) = 2 = n$ → **SCD** (se resuelve por Cramer).
- **$m = 1$:** las dos ecuaciones son $x + y = 1$, $\operatorname{rg}(A) = \operatorname{rg}(A^*) = 1 < 2$ → **SCI**.
- **$m = -1$:** $\operatorname{rg}(A) = 1$, pero el menor formado por las columnas 1 y 3 vale $-2 \neq 0$, luego $\operatorname{rg}(A^*) = 2$ → **SI**.

## Esquema para resolver un sistema

1. Escribe $A$ y $A^*$, y calcula $\operatorname{rg}(A)$ y $\operatorname{rg}(A^*)$.
2. Compara con el número de incógnitas $n$ y clasifica con Rouché-Frobenius.
3. **SCD y cuadrado** ($\lvert A\rvert \neq 0$): resuelve con Cramer, $x_i = \lvert A_i\rvert / \lvert A\rvert$.
4. **SCI:** elimina las ecuaciones sobrantes, pasa $n - \operatorname{rg}(A)$ incógnitas al segundo miembro como parámetros y resuelve el sistema restante (con Cramer, si es cuadrado).
5. **SI:** no hay solución; no se resuelve.

**Con parámetro:** busca primero los valores que anulan $\lvert A\rvert$ y estudia cada caso aparte.

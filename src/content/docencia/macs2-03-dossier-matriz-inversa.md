---
title: "Dossier PAU · Matriz inversa"
description: Definición, criterio de inversibilidad, los tres métodos de cálculo, ejemplos tipo PAU y ejercicios con soluciones.
curso: 2º Bach. Matemáticas CCSS II · PAU
tipo: Dossier
orden: 3
date: 2026-09-23
---

## 1. Definición

Una matriz cuadrada $A$ de orden $n$ es **inversible** (o **regular**) si existe otra matriz cuadrada del mismo orden, llamada **matriz inversa** y denotada $A^{-1}$, que cumple:

$$
A \cdot A^{-1} = A^{-1} \cdot A = I_n
$$

donde $I_n$ es la matriz identidad de orden $n$. Si $A$ no tiene inversa se dice que es **singular**.

Ideas clave:

- Solo las matrices **cuadradas** pueden tener inversa. Una matriz $2\times 3$ nunca es inversible.
- Si la inversa existe, es **única**.
- No toda matriz cuadrada tiene inversa: el criterio para saberlo se estudia en el apartado 2.

**Propiedades** ($A$ y $B$ inversibles del mismo orden, $k \neq 0$):

$$
\left(A^{-1}\right)^{-1} = A \qquad (A\cdot B)^{-1} = B^{-1}\cdot A^{-1} \qquad \left(A^{t}\right)^{-1} = \left(A^{-1}\right)^{t}
$$

$$
(k\,A)^{-1} = \frac{1}{k}\,A^{-1} \qquad\qquad \lvert A^{-1}\rvert = \frac{1}{\lvert A\rvert}
$$

Fíjate en que la inversa de un producto **invierte el orden** de los factores, porque el producto de matrices no es conmutativo.

**¿Para qué sirve?** Para despejar la incógnita en ecuaciones matriciales. Como no existe la división de matrices, se multiplica por $A^{-1}$ por el mismo lado en que está $A$:

$$
A\cdot X = B \;\Rightarrow\; X = A^{-1}\cdot B \qquad\qquad X\cdot A = B \;\Rightarrow\; X = B\cdot A^{-1}
$$

Error frecuente en la PAU: escribir $X = B\cdot A^{-1}$ cuando la ecuación es $A\cdot X = B$. El lado importa.

## 2. Criterio de inversibilidad: determinante y rango

Una matriz cuadrada $A$ de orden $n$ tiene inversa **si y solo si** su determinante es distinto de cero, o lo que es lo mismo, **si y solo si su rango es máximo** (igual a $n$).

$$
A \text{ es inversible} \iff \lvert A\rvert \neq 0 \iff \operatorname{rg}(A) = n
$$

Las tres afirmaciones son equivalentes. Cualquiera de ellas sirve para decidir, y conviene pensar en las tres a la vez:

|  | Matriz **regular** (inversible) | Matriz **singular** (no inversible) |
| --- | --- | --- |
| Determinante | $\lvert A\rvert \neq 0$ | $\lvert A\rvert = 0$ |
| Rango (orden $n$) | $\operatorname{rg}(A) = n$ | $\operatorname{rg}(A) < n$ |
| Filas y columnas | Linealmente independientes | Alguna es combinación lineal de las demás |
| Al aplicar Gauss | Se llega a la identidad | Aparece una fila de ceros |
| Sistema $A\cdot X = B$ | Solución única | Sin solución o con infinitas |

**¿Por qué el rango?** El rango es el número de filas (o columnas) linealmente independientes. Si $\operatorname{rg}(A) < n$, alguna fila depende de las otras: la matriz «contiene información repetida» y esa pérdida no se puede deshacer. Por eso no existe ninguna matriz que la devuelva a la identidad.

Se ve muy claro con Gauss-Jordan (apartado 4): si una fila es combinación de otras, al hacer ceros se anula entera. Con una fila de ceros a la izquierda es imposible obtener la identidad.

**Cómo se usa en la PAU.** Lo más habitual es una matriz con un parámetro y la pregunta «¿para qué valores tiene inversa?». El procedimiento es:

1. Calcular $\lvert A\rvert$ en función del parámetro.
2. Igualar $\lvert A\rvert = 0$ y resolver la ecuación.
3. Concluir: $A$ es inversible para todos los valores **excepto** las soluciones halladas.

**Ejemplo.** Estudia para qué valores de $k$ es inversible la matriz:

$$
A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & k & 1 \\ 1 & 0 & 1 \end{pmatrix}
$$

Desarrollando por la primera fila:

$$
\lvert A\rvert = 1\cdot(k\cdot 1 - 1\cdot 0) - 1\cdot(0\cdot 1 - 1\cdot 1) + 0 = k + 1
$$

$\lvert A\rvert = 0 \iff k = -1$. Por tanto:

| Valor de $k$ | $\lvert A\rvert$ | $\operatorname{rg}(A)$ | ¿Inversible? |
| --- | --- | --- | --- |
| $k \neq -1$ | $\neq 0$ | 3 | Sí |
| $k = -1$ | 0 | 2 | No |

Para $k = -1$ la tercera fila $(1, 0, 1)$ es la suma de las dos primeras, $(1, 1, 0) + (0, -1, 1)$. Hay solo dos filas independientes: rango $2 < 3$.

**Cuidado:** el rango se estudia en matrices de cualquier tamaño, pero el determinante y la inversa **solo en matrices cuadradas**.

## 3. Método 1: por la definición

Se plantea una matriz $X$ de incógnitas, se impone $A\cdot X = I$ y se resuelve el sistema resultante. Es el método más intuitivo, pero solo resulta práctico en matrices $2\times 2$ (una $3\times 3$ da un sistema de 9 incógnitas).

**Ejemplo.** Calcula la inversa de:

$$
A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}
$$

Planteamos:

$$
\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix} \begin{pmatrix} x & y \\ z & t \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \;\Rightarrow\; \begin{pmatrix} 2x+z & 2y+t \\ 5x+3z & 5y+3t \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}
$$

Igualando término a término se obtienen dos sistemas independientes:

$$
\left\{\begin{array}{l} 2x + z = 1 \\ 5x + 3z = 0 \end{array}\right. \qquad\qquad \left\{\begin{array}{l} 2y + t = 0 \\ 5y + 3t = 1 \end{array}\right.
$$

Del primero: $z = 1 - 2x$, luego $5x + 3 - 6x = 0$, así $x = 3$ y $z = -5$. Del segundo: $t = -2y$, luego $5y - 6y = 1$, así $y = -1$ y $t = 2$.

$$
A^{-1} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}
$$

**Comprobación** (recomendable siempre):

$$
A\cdot A^{-1} = \begin{pmatrix} 6 - 5 & -2 + 2 \\ 15 - 15 & -5 + 6 \end{pmatrix} = I \quad ✓
$$

**¿Qué pasa si la matriz no tiene inversa?** El sistema resulta **incompatible**. Por ejemplo, con

$$
B = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}
$$

el primer sistema es $x + 2z = 1$ y $2x + 4z = 0$. Multiplicando la primera ecuación por 2 se obtiene $2x + 4z = 2$, que contradice la segunda ($2 = 0$). No hay solución: $B$ no es inversible.

Es coherente con el criterio del apartado 2: la segunda fila de $B$ es el doble de la primera, así que $\lvert B\rvert = 4 - 4 = 0$ y $\operatorname{rg}(B) = 1 < 2$.

## 4. Método 2: Gauss-Jordan

Se escribe la matriz ampliada $(A \mid I)$ y se aplican transformaciones elementales **por filas** hasta que a la izquierda quede la identidad. Lo que aparezca entonces a la derecha es $A^{-1}$:

$$
\left( A \mid I \right) \;\longrightarrow\; \cdots \;\longrightarrow\; \left( I \mid A^{-1} \right)
$$

Transformaciones permitidas ($F_i$ indica la fila $i$):

- Intercambiar dos filas: $F_i \leftrightarrow F_j$.
- Multiplicar una fila por un número distinto de cero: $F_i \to k\cdot F_i$.
- Sumar a una fila un múltiplo de otra: $F_i \to F_i + k\cdot F_j$.

Orden recomendado: primero se hacen ceros **debajo** de la diagonal (Gauss), después **encima** (Jordan) y por último se divide cada fila para dejar unos en la diagonal.

**Ejemplo.** Calcula la inversa de:

$$
A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 0 \end{pmatrix}
$$

Paso 1. Ceros debajo de la diagonal:

$$
\left(\begin{array}{ccc|ccc} 1 & 0 & 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 & 1 & 0 \\ 1 & 1 & 0 & 0 & 0 & 1 \end{array}\right) \xrightarrow{F_3 - F_1} \left(\begin{array}{ccc|ccc} 1 & 0 & 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 & 1 & 0 \\ 0 & 1 & -1 & -1 & 0 & 1 \end{array}\right)
$$

$$
\xrightarrow{F_3 - F_2} \left(\begin{array}{ccc|ccc} 1 & 0 & 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 & 1 & 0 \\ 0 & 0 & -2 & -1 & -1 & 1 \end{array}\right)
$$

Paso 2. Un 1 en la posición (3,3) y ceros encima:

$$
\def\arraystretch{1.5}\xrightarrow{F_3 \,/\, (-2)} \left(\begin{array}{ccc|ccc} 1 & 0 & 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 & 1 & 0 \\ 0 & 0 & 1 & \tfrac12 & \tfrac12 & -\tfrac12 \end{array}\right)
$$

$$
\def\arraystretch{1.5}\xrightarrow[F_2 - F_3]{F_1 - F_3} \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & \tfrac12 & -\tfrac12 & \tfrac12 \\ 0 & 1 & 0 & -\tfrac12 & \tfrac12 & \tfrac12 \\ 0 & 0 & 1 & \tfrac12 & \tfrac12 & -\tfrac12 \end{array}\right)
$$

A la izquierda ya está la identidad, así que:

$$
A^{-1} = \frac{1}{2}\begin{pmatrix} 1 & -1 & 1 \\ -1 & 1 & 1 \\ 1 & 1 & -1 \end{pmatrix}
$$

**Gauss-Jordan y el rango.** Este método detecta por sí solo si la matriz es inversible. Si en algún paso aparece una **fila de ceros en la parte izquierda**, entonces $\operatorname{rg}(A) < n$ y la matriz no tiene inversa: hay que parar.

Por ejemplo, con la matriz del apartado 2 para $k = -1$:

$$
\begin{pmatrix} 1 & 1 & 0 \\ 0 & -1 & 1 \\ 1 & 0 & 1 \end{pmatrix} \xrightarrow{F_3 - F_1} \begin{pmatrix} 1 & 1 & 0 \\ 0 & -1 & 1 \\ 0 & -1 & 1 \end{pmatrix} \xrightarrow{F_3 - F_2} \begin{pmatrix} 1 & 1 & 0 \\ 0 & -1 & 1 \\ 0 & 0 & 0 \end{pmatrix}
$$

Fila de ceros: $\operatorname{rg}(A) = 2 < 3$, no existe $A^{-1}$. Coincide con lo obtenido con el determinante.

**Ventajas:** no requiere determinantes y sirve para cualquier orden. **Inconveniente:** es fácil equivocarse con las fracciones, así que conviene comprobar el resultado.

## 5. Método 3: determinantes y matriz adjunta

Si $\lvert A\rvert \neq 0$, la inversa se obtiene con la fórmula:

$$
A^{-1} = \frac{1}{\lvert A\rvert}\,\left(\operatorname{Adj} A\right)^{t}
$$

donde $\operatorname{Adj} A$ es la **matriz adjunta**: cada elemento $a_{ij}$ se sustituye por su adjunto $A_{ij}$, que es el menor complementario $M_{ij}$ (determinante que queda al suprimir la fila $i$ y la columna $j$) con el signo que indica su posición:

$$
A_{ij} = (-1)^{i+j}\,M_{ij} \qquad\qquad \text{signos: } \begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix}
$$

Nota: $(\operatorname{Adj} A)^t = \operatorname{Adj}(A^t)$. Da igual trasponer antes o después; lo importante es no olvidarlo.

**Pasos:**

1. Calcular $\lvert A\rvert$. Si vale 0, no hay inversa y se termina.
2. Calcular la matriz adjunta $\operatorname{Adj} A$.
3. Trasponerla.
4. Dividir por $\lvert A\rvert$.
5. Comprobar que $A\cdot A^{-1} = I$.

**Atajo para matrices 2×2.** Se intercambian los elementos de la diagonal principal y se cambia el signo de los otros dos:

$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$

**Ejemplo.** Calcula la inversa de:

$$
A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 1 \\ 2 & 0 & 1 \end{pmatrix}
$$

Paso 1. Por la regla de Sarrus: $\lvert A\rvert = 1 + 4 + 0 - 0 - 0 - 0 = 5 \neq 0$. Existe $A^{-1}$.

Paso 2. Adjuntos:

$$
\begin{array}{lll}
A_{11} = +\begin{vmatrix} 1 & 1 \\ 0 & 1 \end{vmatrix} = 1 & A_{12} = -\begin{vmatrix} 0 & 1 \\ 2 & 1 \end{vmatrix} = 2 & A_{13} = +\begin{vmatrix} 0 & 1 \\ 2 & 0 \end{vmatrix} = -2 \\[2ex]
A_{21} = -\begin{vmatrix} 2 & 0 \\ 0 & 1 \end{vmatrix} = -2 & A_{22} = +\begin{vmatrix} 1 & 0 \\ 2 & 1 \end{vmatrix} = 1 & A_{23} = -\begin{vmatrix} 1 & 2 \\ 2 & 0 \end{vmatrix} = 4 \\[2ex]
A_{31} = +\begin{vmatrix} 2 & 0 \\ 1 & 1 \end{vmatrix} = 2 & A_{32} = -\begin{vmatrix} 1 & 0 \\ 0 & 1 \end{vmatrix} = -1 & A_{33} = +\begin{vmatrix} 1 & 2 \\ 0 & 1 \end{vmatrix} = 1
\end{array}
$$

Pasos 3 y 4. Adjunta, traspuesta y división por $\lvert A\rvert$:

$$
\operatorname{Adj} A = \begin{pmatrix} 1 & 2 & -2 \\ -2 & 1 & 4 \\ 2 & -1 & 1 \end{pmatrix} \;\Rightarrow\; A^{-1} = \frac{1}{5}\begin{pmatrix} 1 & -2 & 2 \\ 2 & 1 & -1 \\ -2 & 4 & 1 \end{pmatrix}
$$

Paso 5. Comprobación: la primera fila de $A$ por las columnas de la matriz sin el $\frac15$ da $(1 + 4,\; -2 + 2,\; 2 - 2) = (5, 0, 0)$, y así con las demás. Al dividir entre 5 queda $I$. ✓

**Determinantes y rango.** Este método aplica directamente el criterio del apartado 2: el primer paso, calcular $\lvert A\rvert$, ya decide si la inversa existe. Además, el factor $1/\lvert A\rvert$ explica por qué no puede haber inversa cuando $\lvert A\rvert = 0$: la fórmula exigiría dividir entre cero.

**¿Qué método elegir?**

| Situación | Método recomendado |
| --- | --- |
| Matriz 2×2 | Atajo del apartado 5 (o definición) |
| Matriz 3×3 con números | Determinantes o Gauss-Jordan |
| Matriz con parámetro | Determinantes: $\lvert A\rvert$ en función del parámetro |
| Solo hay que decidir si existe | Determinante o rango, sin calcular $A^{-1}$ |

## 6. Ejemplos tipo PAU y ejercicios

### Ejemplo A: matriz con parámetro

Sea la matriz:

$$
A = \begin{pmatrix} 1 & m & 0 \\ 1 & 1 & m \\ 0 & 1 & 1 \end{pmatrix}
$$

a) Determina para qué valores de $m$ tiene inversa. b) Calcula $A^{-1}$ para $m = 0$.

**a)** Desarrollando por la primera fila:

$$
\lvert A\rvert = 1\cdot(1 - m) - m\cdot(1 - 0) + 0 = 1 - 2m
$$

$\lvert A\rvert = 0 \iff m = 1/2$. $A$ es inversible para todo $m \neq 1/2$. Para $m = 1/2$, $\lvert A\rvert = 0$ y $\operatorname{rg}(A) = 2$ (el menor formado por las filas 2 y 3 y las columnas 1 y 2 vale $1 \neq 0$), así que no tiene inversa.

**b)** Para $m = 0$, $\lvert A\rvert = 1$:

$$
A = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix} \qquad A^{-1} = \begin{pmatrix} 1 & 0 & 0 \\ -1 & 1 & 0 \\ 1 & -1 & 1 \end{pmatrix}
$$

Se puede obtener por cualquiera de los dos métodos; comprueba que $A\cdot A^{-1} = I$.

### Ejemplo B: ecuación matricial

Resuelve la ecuación $A\cdot X - B = X$, siendo:

$$
A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \qquad B = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}
$$

**Despeje.** Se agrupan los términos con $X$, sacando factor común **por la izquierda** y escribiendo $X = I\cdot X$:

$$
AX - X = B \;\Rightarrow\; (A - I)\,X = B \;\Rightarrow\; X = (A - I)^{-1}\,B
$$

Error típico: escribir $(A - 1)\cdot X$. No se puede restar un número a una matriz; hay que usar la identidad.

**Existencia de la inversa.** $\lvert A - I\rvert = 1\cdot 0 - 1\cdot 1 = -1 \neq 0$, luego $A - I$ es inversible:

$$
A - I = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix} \;\Rightarrow\; (A - I)^{-1} = \frac{1}{-1}\begin{pmatrix} 0 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & -1 \end{pmatrix}
$$

**Solución:**

$$
X = \begin{pmatrix} 0 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 3 & 4 \\ -2 & -2 \end{pmatrix}
$$

Comprobación: $A\cdot X = \begin{pmatrix} 4 & 6 \\ 1 & 2 \end{pmatrix}$ y $A\cdot X - B = \begin{pmatrix} 3 & 4 \\ -2 & -2 \end{pmatrix} = X$. ✓

### Ejercicios propuestos

1. Calcula la inversa de la matriz $\begin{pmatrix} 3 & 2 \\ 4 & 3 \end{pmatrix}$ por los tres métodos y comprueba que obtienes el mismo resultado.
2. Estudia, según los valores de $a$, el rango de la matriz $\begin{pmatrix} a & 1 & 1 \\ 1 & a & 1 \\ 1 & 1 & a \end{pmatrix}$. ¿Para qué valores es inversible?
3. Resuelve la ecuación $X\cdot A = B$, con $A = \begin{pmatrix} 1 & 2 \\ 1 & 3 \end{pmatrix}$ y $B = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$.
4. Sea $A$ una matriz cuadrada tal que $A^2 - 2A = I$. Demuestra que $A$ es inversible y expresa $A^{-1}$ en función de $A$.
5. Razona si es verdadero o falso: «Si $A$ es una matriz $3\times 3$ con $\operatorname{rg}(A) = 2$, entonces la ecuación $A\cdot X = B$ tiene siempre solución única».

<details>
<summary><strong>Ver soluciones</strong></summary>

| Ejercicio | Solución |
| --- | --- |
| 1 | $\lvert A\rvert = 1$; $A^{-1} = \begin{pmatrix} 3 & -2 \\ -4 & 3 \end{pmatrix}$ |
| 2 | $\lvert A\rvert = (a - 1)^2(a + 2)$. Si $a = 1$, rg = 1; si $a = -2$, rg = 2; en otro caso rg = 3. Inversible si $a \neq 1$ y $a \neq -2$ |
| 3 | $X = B\cdot A^{-1}$; $A^{-1} = \begin{pmatrix} 3 & -2 \\ -1 & 1 \end{pmatrix}$; $X = \begin{pmatrix} 3 & -2 \\ 5 & -3 \end{pmatrix}$ |
| 4 | $A\cdot(A - 2I) = I$, luego $A^{-1} = A - 2I$ |
| 5 | Falso: $\operatorname{rg}(A) = 2 < 3$ implica $\lvert A\rvert = 0$, $A$ no tiene inversa y no se puede despejar $X = A^{-1}\cdot B$ |

</details>

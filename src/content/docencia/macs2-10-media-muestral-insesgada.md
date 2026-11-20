---
title: La media muestral como estimador insesgado
description: Qué significa que un estimador sea insesgado, por qué lo es la media muestral y un contraejemplo con la varianza.
curso: 2º Bach. Matemáticas CCSS II · PAU
tipo: Informe
orden: 10
date: 2026-11-05
---

## 1. Qué significa

La media muestral acierta, **en promedio**, con la media de la población: no tiende a quedarse ni por encima ni por debajo de ella.

Al tomar muestras aleatorias de tamaño $n$ de una población con media $\mu$, cada muestra da una media $\bar{x}$ distinta. Por eso $\bar{X}$ es una **variable aleatoria**: su valor depende de la muestra que salga. Un *estimador* es una fórmula aplicada a la muestra para aproximar un parámetro desconocido de la población.

Que sea **insesgado** significa que su esperanza coincide con el parámetro que estima:

$$
E(\bar{X}) = \mu
$$

Una muestra concreta puede dar un valor algo mayor o menor que $\mu$. Pero la media de todas las medias muestrales posibles es exactamente $\mu$: el error de cada muestra es aleatorio, no sistemático.

## 2. Por qué ocurre

Se sigue de la linealidad de la esperanza:

$$
E(\bar{X}) = E\left(\frac{X_1+\cdots+X_n}{n}\right) = \frac{1}{n}\big(E(X_1)+\cdots+E(X_n)\big) = \frac{1}{n}\cdot n\mu = \mu
$$

## 3. Insesgado no significa preciso

Ser insesgado solo dice que el estimador «apunta al centro». Cuánto se dispersan las estimaciones alrededor de $\mu$ lo mide su desviación típica (error típico):

$$
\sigma_{\bar{X}} = \frac{\sigma}{\sqrt{n}}
$$

La distribución de las medias muestrales está centrada en $\mu$ (insesgadez) y es cada vez más estrecha al crecer $n$. Por eso se usa $\bar{x}$ como estimación puntual y se construye el intervalo de confianza:

$$
\bar{x} \pm z_{\alpha/2}\,\frac{\sigma}{\sqrt{n}}
$$

## 4. Un contraejemplo

No todo estimador «natural» es insesgado. La varianza muestral calculada dividiendo entre $n$ tiene esperanza menor que $\sigma^2$:

$$
E\left(\frac{1}{n}\sum_{i=1}^{n} (X_i-\bar{X})^2\right) = \frac{n-1}{n}\,\sigma^2
$$

Es decir, **subestima sistemáticamente** $\sigma^2$: eso es un sesgo. Por eso se define la cuasivarianza dividiendo entre $n - 1$, que sí es insesgada:

$$
S^2 = \frac{1}{n-1}\sum_{i=1}^{n} (X_i-\bar{X})^2, \qquad E(S^2) = \sigma^2
$$

**Analogía de la diana.** Un tirador insesgado reparte los disparos alrededor del centro, aunque ninguno dé justo en él. Uno sesgado los agrupa sistemáticamente desplazados hacia un lado.

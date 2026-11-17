# Web personal de Manuel Avilés

Hecha con [Astro](https://astro.build). Fórmulas con KaTeX (sintaxis LaTeX).

## Dónde se edita cada cosa

| Quiero…                         | Archivo / carpeta                     |
|---------------------------------|---------------------------------------|
| Escribir una entrada del blog   | `src/content/blog/*.md`               |
| Subir un material de docencia   | `src/content/docencia/*.md` (+ PDF en `public/materiales/`, campo `pdf: /materiales/archivo.pdf`) |
| Añadir un proyecto              | `src/pages/proyectos.astro`           |
| Cambiar nombre, correo, menú    | `src/consts.ts`                       |
| Cambiar colores y estilo        | `src/styles/global.css`               |

## En tu ordenador (opcional)

```bash
npm install
npm run dev      # vista previa en http://localhost:4321/web/
```

## Publicación

Cada cambio en la rama `main` se publica solo en GitHub Pages (`.github/workflows/deploy.yml`).

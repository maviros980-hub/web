import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const docencia = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/docencia' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    curso: z.enum(['4º ESO Matemáticas B', '4º ESO Diversificación (ACT)', '2º Bach. Matemáticas CCSS II · PAU', 'Otros']),
    date: z.coerce.date(),
    tipo: z.enum(['Resumen', 'Dossier', 'Informe', 'Ejercicios']).optional(),
    orden: z.number().optional(), // para ordenar los temas dentro del curso
    pdf: z.string().optional(), // ruta a un PDF en /public/materiales/
  }),
});

export const collections = { blog, docencia };

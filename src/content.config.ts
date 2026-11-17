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
    curso: z.enum(['4º ESO Matemáticas B', '4º ESO Diversificación (ACT)', 'Bachillerato CCSS · PAU', 'Otros']),
    date: z.coerce.date(),
    pdf: z.string().optional(), // ruta a un PDF en /public/materiales/
  }),
});

export const collections = { blog, docencia };

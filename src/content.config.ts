import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const guide = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/guide' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    month: z.string(),
    week: z.number(),
    date: z.coerce.date()
  })
});

export const collections = { guide };

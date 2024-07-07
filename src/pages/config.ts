/* import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    cover: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    coverAlt: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
}; */

//older stuff
//import { z, defineCollection } from "astro:content";
/* 
export const collections = {
  artworks: defineCollection({
    schema: ({ image }) => z.object({
      cover: image(),
    }),
  }),
}; */



// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const map = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string().optional(),
    cover: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  map,
};

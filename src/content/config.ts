// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

const productsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.string(),
      rating: z.number(),
      termsAndConditions: z.string().optional(),
      featuredOffer: z
        .object({
          investment: z.number().optional(),
          reward: z.number().optional(),
          rewardType: z.string().optional(),
          code: z.string().optional(),
          redeemLink: z.string().optional(),
        })
        .optional(),
      howToClaim: z
        .array(
          z.object({
            title: z.string(),
            content: z.string().optional(),
            image: image().optional(),
            imageAlt: z.string().optional(),
          }),
        )
        .optional(),
      main: z.object({
        id: z.number(),
        content: z.string(),
        imgMain: image(),
        imgAlt: z.string(),
      }),
      tabs: z.array(
        z.object({
          id: z.string(),
          dataTab: z.string(),
          title: z.string(),
        }),
      ),
      longDescription: z.object({
        title: z.string(),
        subTitle: z.string(),
        customerSupport: z.string().optional(),
        license: z.string().optional(),
        pros: z.array(z.string()).optional(),
        cons: z.array(z.string()).optional(),
        games: z.array(z.string()).optional(),
        countries: z.array(z.string()).optional(),
        depositMethods: z.array(z.string()).optional(),
      }),
    }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      contents: z.array(z.string()),
      author: z.string(),
      role: z.string().optional(),
      authorImage: image(),
      authorImageAlt: z.string(),
      pubDate: z.date(),
      cardImage: image(),
      cardImageAlt: z.string(),
      readTime: z.number(),
      tags: z.array(z.string()).optional(),
    }),
});

const insightsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // contents: z.array(z.string()),
      cardImage: image(),
      cardImageAlt: z.string(),
    }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  products: productsCollection,
  blog: blogCollection,
  insights: insightsCollection,
};

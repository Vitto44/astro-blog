// https://docs.astro.build/en/guides/content-collections/#defining-collections

import { z, defineCollection } from "astro:content";

const reviewsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      type: z.number(),
      description: z.string(),
      pubDate: z.string(),
      rating: z.number(),
      termsAndConditions: z.string(),
      reward: z.string(),
      rewardType: z.string(),
      redeemLink: z.string(),
      imgMain: image(),
      imgAlt: z.string(),
      btnURL: z.string(),
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
      }),
      tabs: z.array(
        z.object({
          id: z.string(),
          dataTab: z.string(),
          title: z.string(),
        }),
      ),
      longDescription: z.object({
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
      contents: z.array(
        z.object({
          type: z.enum(["text", "image", "table", "list", "heading"]),
          value: z.string().optional(), // Used for text content
          imgSrc: image().optional(), // Used for image content
          imgAlt: z.string().optional(), // Alt text for images
          caption: z.string().optional(), // Caption for images
          headers: z.array(z.string()).optional(), // Table headers
          rows: z.array(z.array(z.string())).optional(), // Table rows
          style: z.string().optional(), // Custom style for the content block
          items: z.array(z.string()).optional(), // List items
          level: z.number().optional(), // Heading power
        }),
      ),
      pubDate: z.date(),
      lastModified: z.date(),
      cardImage: image(),
      cardImageAlt: z.string(),
      readTime: z.number(),
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
  reviews: reviewsCollection,
  blog: blogCollection,
  insights: insightsCollection,
};

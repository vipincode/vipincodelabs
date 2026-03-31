import type { CollectionConfig } from "payload";

export const Videos: CollectionConfig = {
  slug: "videos",

  admin: {
    useAsTitle: "title",
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "youtubeUrl",
      type: "text",
      required: true,
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "duration",
      type: "number",
    },
    {
      // “Many videos belong to one user
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      // “Many videos belong to one category”
      name: "category",
      type: "relationship",
      relationTo: "categories",
      required: true,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
  ],
};

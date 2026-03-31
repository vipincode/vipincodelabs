import type { CollectionConfig } from "payload";

export const Contacts: CollectionConfig = {
  slug: "contacts",
  fields: [
    { name: "name", type: "text" },
    { name: "email", type: "email" },
    { name: "message", type: "textarea" },
  ],
};

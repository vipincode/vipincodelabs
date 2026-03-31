import type { CollectionConfig } from "payload";
import { USER_ROLES } from "@/types/roles";

export const Users: CollectionConfig = {
  slug: "users",

  auth: true,

  admin: {
    useAsTitle: "email",
  },

  access: {
    admin: ({ req }) => req.user?.role === USER_ROLES.ADMIN,
  },

  hooks: {
    beforeChange: [
      async ({ req, data }) => {
        const users = await req.payload.find({
          collection: "users",
        });

        if (users.totalDocs === 0) {
          data.role = USER_ROLES.ADMIN;
        }

        return data;
      },
    ],
  },

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: USER_ROLES.USER,
      options: [
        { label: "Admin", value: USER_ROLES.ADMIN },
        { label: "Creator", value: USER_ROLES.CREATOR },
        { label: "User", value: USER_ROLES.USER },
      ],
      access: {
        create: ({ req }) => req.user?.role === USER_ROLES.ADMIN,
        update: ({ req }) => req.user?.role === USER_ROLES.ADMIN,
      },
      admin: {
        condition: (_, { user }) => user?.role === USER_ROLES.ADMIN,
      },
    },
    {
      name: "avatar",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "isVerified",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};

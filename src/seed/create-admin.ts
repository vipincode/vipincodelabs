import { getPayload } from "payload";
import { env } from "@/lib/env";

const { default: config } = await import("../payload.config");

const createAdmin = async () => {
  const payload = await getPayload({ config });

  const existing = await payload.find({
    collection: "users",
    where: {
      email: {
        equals: env.ADMIN_EMAIL,
      },
    },
  });

  if (existing.totalDocs > 0) {
    console.log("⚠️ Admin already exists");
    process.exit(0);
  }

  await payload.create({
    collection: "users",
    data: {
      email: env.ADMIN_EMAIL,
      password: env.ADMIN_PASSWORD,
      role: "admin",
      name: env.ADMIN_NAME,
    },
  });

  console.log("✅ Admin created");
  process.exit(0);
};

createAdmin();

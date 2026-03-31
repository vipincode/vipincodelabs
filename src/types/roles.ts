export const USER_ROLES = {
  ADMIN: "admin",
  CREATOR: "creator",
  USER: "user",
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

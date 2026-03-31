import type { AccessArgs } from "payload";
import { USER_ROLES } from "@/types/roles";

export const isAdmin = ({ req }: AccessArgs) => {
  return req.user?.role === USER_ROLES.ADMIN;
};

export const isCreator = ({ req }: AccessArgs) => {
  return req.user?.role === USER_ROLES.CREATOR;
};

export const isLoggedIn = ({ req }: AccessArgs) => {
  return !!req.user;
};

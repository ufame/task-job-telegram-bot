import { prisma } from "../prisma";
import { createService as createUsersService } from "./users";

export const usersService = createUsersService(prisma);

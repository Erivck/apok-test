import { PrismaClient } from "@prisma/client";
import { DB_URL } from "../config";

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DB_URL
    }
  }
});
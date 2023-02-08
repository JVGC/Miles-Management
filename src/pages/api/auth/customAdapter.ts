import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { PrismaClient } from "@prisma/client";
import type { Adapter, AdapterUser } from "next-auth/adapters";
import { prisma } from "../../../server/db";

const pAdapter = PrismaAdapter(prisma)

// 113028026139832591388
export function customAdapter(prisma: PrismaClient): Adapter{
  return {
    ...pAdapter,
    getUserByAccount: async ({providerAccountId: googleId}) => {
      const user = await prisma.user.findUnique({
        where:{
          googleId: googleId
        }
      })
      return user as AdapterUser
    },
    linkAccount: (account) => {
      return account
    },
  }
}
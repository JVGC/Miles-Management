import NextAuth, { type NextAuthOptions } from "next-auth";
import type { GoogleProfile } from "next-auth/providers/google";
import GoogleProvider from "next-auth/providers/google"

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db";
import { customAdapter } from "./customAdapter";

export const authOptions: NextAuthOptions = {
  adapter: customAdapter(prisma),
  callbacks:{
    session({ session, user }) {
      if(session.user && user.role){
        session.user.role = user.role
      }
      return session
    }
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      profile(profile: GoogleProfile) {
        return {
          email: profile.email,
          name: profile.name,
          image: profile.picture,
          id: profile.sub,
          googleId: profile.sub
        }
      }
    })
  ],
};

export default NextAuth(authOptions);

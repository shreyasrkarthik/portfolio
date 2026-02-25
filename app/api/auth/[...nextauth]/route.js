import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

const googleConfigured = Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);

const providers = googleConfigured
  ? [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ]
  : [
      CredentialsProvider({
        name: "Disabled",
        credentials: {},
        async authorize() {
          return null;
        },
      }),
    ];

export const authOptions = {
  ...(clientPromise ? { adapter: MongoDBAdapter(clientPromise) } : {}),
  providers,
  session: { strategy: "jwt" },
  callbacks: {
    async signIn({ user }) {
      if (!process.env.ADMIN_USER_ACCOUNT) return false;
      return user?.email === `${process.env.ADMIN_USER_ACCOUNT}@gmail.com`;
    },
    async session({ session, token }) {
      if (session?.user) session.user.id = token?.sub;
      return session;
    },
    async redirect() {
      return "/admin";
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "dev-secret-change-me",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

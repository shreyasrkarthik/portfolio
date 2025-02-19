import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Only allow your Google account to sign in
      if (user.email === process.env.ADMIN_USER_ACCOUNT + "@gmail.com") {
        return true;
      }
      return false;
    },
    async session({ session, user }) {
      session.user.id = user.id; // Attach user ID to session
      return session;
    },
    async redirect({ url, baseUrl }) {
        return "/admin"; // Redirect to /admin after login
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

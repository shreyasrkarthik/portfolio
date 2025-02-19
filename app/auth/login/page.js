"use client";

import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign in to continue</h1>
      <button
        onClick={() => signIn("google")}
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;

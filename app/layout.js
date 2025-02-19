"use client";

import "./globals.css";
import NavBar from "./components/NavBar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white-100">
        <SessionProvider>
          <NavBar />
          <main className="container mx-auto p-6">{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}

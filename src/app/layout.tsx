import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shreyas R K | Senior Staff Engineer · Cloud & Distributed Systems",
  description:
    "Portfolio of Shreyas R K — Senior Member of Technical Staff at Salesforce. Specialist in distributed systems, cloud-native architecture, and high-scale backend engineering. 200K+ YouTube subscribers.",
  keywords: [
    "Shreyas R K",
    "distributed systems engineer",
    "senior software engineer",
    "cloud architecture",
    "Salesforce",
    "PayPal",
    "Go backend engineer",
    "GCP",
    "Kafka",
    "Kubernetes",
  ],
  openGraph: {
    title: "Shreyas R K | Senior Staff Engineer",
    description:
      "Cloud & Distributed Systems Engineer. Salesforce · PayPal · Northeastern. 100M+ daily transactions. 200K+ YouTube.",
    type: "website",
    url: "https://www.shreyasrk.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased bg-[#0C0A08] text-[#FAF9F7]">
        {children}
      </body>
    </html>
  );
}

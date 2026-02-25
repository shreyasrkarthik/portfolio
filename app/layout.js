import "./globals.css";
import NavBar from "./components/NavBar";
import Providers from "./providers";

export const metadata = {
  title: "ShreyasOS // Portfolio",
  description: "Interactive portfolio of Shreyas — software engineer, builder, creator.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-grid" aria-hidden="true" />
        <Providers>
          <NavBar />
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

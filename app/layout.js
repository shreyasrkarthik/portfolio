import "./globals.css";
import NavBar from "./components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white-100">
        <NavBar />
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body styles={{minHeight: '100vh'}}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
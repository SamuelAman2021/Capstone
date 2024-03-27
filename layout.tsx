import type { Metadata } from "next";

import './globals.css'
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import { Main } from "next/document";

export const metadata: Metadata = {
  title: "Prezently",
  description: "Great Things happening right now",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative 
        overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSearch from '@/components/HeroSearch';

export const metadata: Metadata = {
  title: "MagicBricks Clone",
  description: "Real Estate Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body className="bg-gray-100 text-black">

        <div className="min-h-screen flex flex-col">

          <Navbar />
          <HeroSearch />
          <main className="flex-1">
            {children}
          </main>

          <Footer />

        </div>

      </body>

    </html>
  );
}
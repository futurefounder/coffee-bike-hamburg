import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee-Bike Hamburg - Mobiler Kaffeeservice in Hamburg",
  description:
    "Entdecken Sie Coffee Bike Hamburg, Ihren mobilen Kaffeeservice. Genießen Sie frisch gebrühten Kaffee an verschiedenen Standorten in Hamburg und Umgebung – perfekt für den schnellen Kaffeegenuss unterwegs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

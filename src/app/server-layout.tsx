// src/app/server-layout.tsx (Server Component)

import type { Metadata } from "next";

// Meta information for the app
export const metadata: Metadata = {
  title: "Coffee-Bike Hamburg - Mobiler Kaffeeservice in Hamburg",
  description:
    "Entdecken Sie Coffee Bike Hamburg, Ihren mobilen Kaffeeservice. Genießen Sie frisch gebrühten Kaffee an verschiedenen Standorten in Hamburg und Umgebung – perfekt für den schnellen Kaffeegenuss unterwegs.",
};

export default function ServerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

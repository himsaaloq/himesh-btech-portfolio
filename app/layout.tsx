import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himesh Vaishnav | B.Tech Journey",
  description: "Personal portfolio of Himesh Vaishnav — B.Tech student, developer, and creator.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

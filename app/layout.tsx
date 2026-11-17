import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanchit Bharadwaj | AI & Software Developer",
  description:
    "Personal portfolio of Sanchit Bharadwaj, Computer Science student and AI enthusiast."
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
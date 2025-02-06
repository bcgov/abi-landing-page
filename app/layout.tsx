import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "ABI Landing Page",
  description: "Analytics and Business Intelligence Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Link href="/dashboards>">Dashboards</Link>
        <Link href="/development>">Services</Link>
        <Link href="/request>">Requests</Link>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}

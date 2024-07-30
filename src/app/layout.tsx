import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dynamic Impressions",
  description:
    "Dynamic Impressions is a collection of landings pages with diferent effects and animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className="goBack">
          <a href="/">Go to Home</a>
        </div>
      </body>
    </html>
  );
}

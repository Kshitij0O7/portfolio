import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kshitij Mahajan - Portfolio",
  description: "Developer Relations Engineer | Full-Stack Developer | Blockchain Enthusiast",
  openGraph: {
    title: "Kshitij Mahajan - Portfolio",
    description: "Explore my projects, experience, and skills in web3, full-stack development, and more.",
    images: ["/og-image.jpg"], // Add an OG image to /public if desired
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>{children}</body>
    </html>
  );
}
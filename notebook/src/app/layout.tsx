import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });
import { Providers } from "@/util/auth/authProvider";
export const metadata: Metadata = {
  title: "notebook",
  description: "A smarter notebook for students and professionals.",  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      {children}
      </Providers>
      </body>
    </html>
  );
}

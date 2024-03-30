import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
      appearance={{
        
        variables:{
          colorText:'#fff',
          colorPrimary:"#0E78F9",
          colorBackground:'#008080',
          colorInputBackground:'#20B2AA',
          colorInputText:'#fff'
        }
      }
      }>
      <body className={`${inter.className} bg-dark-2`}>{children}</body>
      </ClerkProvider>
      
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
import '@stream-io/video-react-sdk/dist/css/styles.css'
import "react-datepicker/dist/react-datepicker.css"
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vink",
  description: "Video Calling App",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="/icons/logo.svg" />
        <meta property="og:image:width" content="200" /> {/* Image width in pixels */}
        <meta property="og:image:height" content="200" /> {/* Image height in pixels */}
      </Head>
      <ClerkProvider
      appearance={{
        
        variables:{
          colorText:'#fff',
          colorPrimary:"#0E78F9",
          colorBackground:"#1C1F2E",
          colorInputBackground:'#30B2AA',
          colorInputText:'#fff'
        }
      }
      }>
      <body className={`${inter.className} bg-dark-2`}>
        
        {children} 
        <Toaster/>
        </body>
      </ClerkProvider>
      
    </html>
  );
}

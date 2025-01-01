
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import Head from 'next/head';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google'
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-diaplay",
  subsets: ["latin-ext"],
  weight: "500",
  // letterSpacing: "0.05em",
});
const sourceSans_3 = Source_Sans_3({
  variable: "--font-Source-Sans-3",
  subsets: ["latin-ext"],
  weight: "500",
  // letterSpacing: "0.05em",
});
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "OutsmartAI",
  description: "",
};

// ... rest of your imports
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      `,
          }}
        />
      </Head> */}

      <body
        className={`${playfairDisplay.variable} ${sourceSans_3.variable}  antialiased`}
      >

        {children}
        <Toaster />
      </body>
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    </html>
  );
}

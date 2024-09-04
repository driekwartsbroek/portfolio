import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import AnimatedLayout from "@/components/AnimatedLayout";
import { ThemeProvider } from "next-themes";
import Container from "@/components/Container";
import WindowPanel from "@/components/WindowPanel";
import LetterboxdLink from "@/components/LetterboxdLink";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bert Selleslagh | UX/UI Designer Portfolio",
  description: "clicks shouldn't cause headaches",
  keywords:
    "UX/UI designer, portfolio, Bert Selleslagh, Brussels, Belgium, interface design, user experience",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.bertselleslagh.com",
    siteName: "Bert Selleslagh Portfolio",
    images: [
      {
        url: "https://www.bertselleslagh.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bert Selleslagh UX/UI Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bertselleslagh",
    creator: "@bertselleslagh",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-screen overflow-hidden">
            <Navigation />
            <main className="flex-grow">
              <AnimatedLayout>{children}</AnimatedLayout>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Script id="show-banner" strategy="afterInteractive">
          {`...`} // Your existing script content
        </Script>
      </body>
    </html>
  );
}

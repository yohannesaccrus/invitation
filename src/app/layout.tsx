import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Tangerine, Playfair_Display, Italiana } from "next/font/google";
import "./globals.css";
import { MusicProvider } from "@/components/MusicProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const tangerine = Tangerine({
  variable: "--font-tangerine",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Yohannes & Chattleya | Wedding Invitation",
  description: "Join us to celebrate our wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${tangerine.variable} ${playfair.variable} ${italiana.variable} antialiased`}
    >
      <body className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-rose-200">
        <MusicProvider>
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}

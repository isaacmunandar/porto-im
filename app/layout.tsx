import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://isaacmunandar.com"),
  title: "Isaac Munandar — AI Expert & Entrepreneur",
  description:
    "I help enterprises implement AI for real growth — and train the next generation of leaders to lead it.",
  keywords: [
    "Isaac Munandar",
    "AI consultant",
    "AI trainer",
    "enterprise AI",
    "AI implementation",
    "AI automation",
    "MAXY Academy",
    "Indonesia AI",
    "artificial intelligence",
    "AI entrepreneur",
  ],
  authors: [{ name: "Isaac Munandar" }],
  openGraph: {
    title: "Isaac Munandar — AI Expert & Entrepreneur",
    description:
      "I help enterprises implement AI for real growth — and train the next generation of leaders to lead it.",
    url: "https://isaacmunandar.com",
    siteName: "Isaac Munandar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Munandar — AI Expert & Entrepreneur",
    description:
      "I help enterprises implement AI for real growth — and train the next generation of leaders to lead it.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://isaacmunandar.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body className="font-body antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

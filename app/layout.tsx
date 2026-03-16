import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peakforge — Build useful things",
  description:
    "Independent software studio building simple apps and useful tools.",
  metadataBase: new URL("https://peakforge.dev"),
  icons: {
    icon: [
      { url: "/images/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: "/images/logo-icon-256.png",
  },
  openGraph: {
    title: "Peakforge — Build useful things",
    description:
      "Independent software studio building simple apps and useful tools.",
    url: "https://peakforge.dev",
    siteName: "Peakforge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peakforge — Build useful things",
    description:
      "Independent software studio building simple apps and useful tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

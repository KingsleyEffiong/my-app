import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kingsley Effiong - Portfolio",
  description: "My portfolio Website",
  keywords: ["Portfolio"],
  icons: {
    icon: "/logo-portfolio.png", 
  },
  metadataBase: new URL("https://yourdeveloper.vercel.app/"),
  openGraph: {
    title: "kingsley",
    description: "My Portfolio Website",
    url: "https://yourdeveloper.vercel.app/",
    siteName: "portfolio",
    locale: "en_US",
    type: "website",
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

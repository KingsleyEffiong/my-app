import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your_Developer",
  description: "My portfolio Website",
  keywords: ["Portfolio"],
  icons: {
    icon: "/logo-portfolio.png", // favicon
  },
  metadataBase: new URL("https://yourdeveloper.vercel.app/"),
  openGraph: {
    title: "Your_Developer",
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

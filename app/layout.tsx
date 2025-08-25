import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Privit",
  description: "My portfolio Website",
  keywords: ["Portfolio"],
  metadataBase: new URL("https://privito.vercel.app"),
  openGraph: {
    title: "Privit",
    description: "My Porfolio Website",
    url: "https://privito.vercel.app",
    siteName: "portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

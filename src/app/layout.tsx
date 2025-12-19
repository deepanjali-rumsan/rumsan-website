import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Rumsan - Impact Innovation Company | Blockchain & AI Solutions",
    template: "%s | Rumsan",
  },
  description:
    "Rumsan is an impact innovation company using blockchain and AI to support governments, impact companies, and humanitarian organizations build trustworthy, scalable digital solutions for lasting change.",
  keywords: [
    "impact innovation",
    "blockchain solutions",
    "AI automation",
    "humanitarian technology",
    "digital transformation",
    "Web3 solutions",
    "social impact",
    "sustainable development",
  ],
  authors: [{ name: "Rumsan" }],
  creator: "Rumsan",
  publisher: "Rumsan",
  metadataBase: new URL("https://rumsan.com"),

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased font-sans`}
        style={{ fontFamily: "var(--font-open-sans)" }}
      >
        {children}
      </body>
    </html>
  );
}

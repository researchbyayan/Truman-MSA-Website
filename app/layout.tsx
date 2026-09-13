import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SITE } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.shortName} · ${SITE.university}`,
    template: `%s · ${SITE.shortName} at ${SITE.university}`,
  },
  description: SITE.description,
  keywords: [
    "Muslim Student Association",
    "MSA",
    "Truman State University",
    "Kirksville",
    "Jumu'ah",
    "Jummah",
    "Muslim students",
    "Islam",
  ],
  openGraph: {
    title: `${SITE.organizationName} · ${SITE.university}`,
    description: SITE.description,
    url: SITE.url,
    siteName: `${SITE.shortName} at ${SITE.university}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.organizationName} · ${SITE.university}`,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

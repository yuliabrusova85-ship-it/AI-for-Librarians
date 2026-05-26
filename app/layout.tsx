import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-in-academic-libraries.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI for Academic Libraries - taught by a librarian, not a vendor",
    template: "%s | AI for Academic Libraries",
  },
  description:
    "A structured learning path from AI basics to workflow automation and building your own tools - mapped to ACRL AI Competencies (2025). Taught by a practicing academic librarian.",
  keywords: [
    "AI for academic libraries",
    "AI training for librarians",
    "ACRL AI competencies",
    "AI workflow for librarians",
    "library AI tools",
    "information literacy AI",
  ],
  authors: [{ name: "Yulia Brusova" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AI for Academic Libraries",
    title: "AI for Academic Libraries - taught by a librarian, not a vendor",
    description:
      "A structured learning path from AI basics to workflow automation and building your own tools - mapped to ACRL AI Competencies (2025). Taught by a practicing academic librarian.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "AI for Academic Libraries - taught by a librarian, not a vendor",
    description:
      "A structured learning path from AI basics to workflow automation and building your own tools - mapped to ACRL AI Competencies (2025). Taught by a practicing academic librarian.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;1,14..32,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cliniqoerp.com"),
  title: { default: "Cliniqo ERP: hospital management software", template: "%s · Cliniqo ERP" },
  description:
    "Cliniqo ERP runs reception, clinical care, diagnostics, pharmacy, billing, HR and reporting for hospitals on one system. In the cloud or on your own servers.",
  icons: { icon: "/branding/cliniqo-icon.png" },
  openGraph: {
    title: "Cliniqo ERP: hospital management software",
    description: "Reception to reporting, on one system built for Nigerian hospitals.",
    url: "https://cliniqoerp.com",
    siteName: "Cliniqo ERP",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}

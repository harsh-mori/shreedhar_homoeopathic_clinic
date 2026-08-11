import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.shortName,
  authors: [{ name: site.doctor.name }],
  creator: site.doctor.name,
  publisher: site.doctor.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email || undefined,
  image: `${site.url}/logo.png`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.line2,
    addressRegion: "Gujarat",
    postalCode: "360007",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa 16:00-20:30",
  founder: {
    "@type": "Person",
    name: site.doctor.name,
    jobTitle: site.doctor.title,
  },
  physician: {
    "@type": "Physician",
    name: site.doctor.name,
    medicalSpecialty: "Homeopathic",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-20 lg:pb-0">
        <JsonLd data={jsonLd} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Homoeopathy } from "@/components/sections/Homoeopathy";
import { TreatmentGallery } from "@/components/sections/TreatmentGallery";
import { CtaBand } from "@/components/sections/CtaBand";
import { Faq } from "@/components/sections/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs, site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} — Classical Homoeopathy in Rajkot | Dr. Sumant Zankat`,
  description: `Homoeopathic clinic in Rajkot by Dr. Sumant Zankat (B.H.M.S, M.D). Classical homoeopathy for skin, diabetes, allergies & chronic illness. Book today.`,
  keywords: [
    "homoeopathy clinic Rajkot",
    "homeopathic doctor Rajkot Gujarat",
    "classical homoeopathy treatment",
    "best homeopathy doctor near me",
    "skin disease treatment Rajkot",
    "chronic disease homoeopathy",
    "Dr Sumant Zankat homoeopath",
    "natural medicine Rajkot",
    "homeopathic treatment for diabetes",
    "homeopathic treatment for skin problems",
    "gentle natural healing Rajkot",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `Shreedhar Homoeopathic Clinic — Best Homeopathy Doctor in Rajkot`,
    description: `Classical homoeopathy by Dr. Sumant Zankat in Rajkot, Gujarat. Safe, gentle & personalised treatment for skin diseases, diabetes, allergies, chronic conditions & whole family care.`,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Shreedhar Homoeopathic Clinic Rajkot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Shreedhar Homoeopathic Clinic — Best Homeopathy Doctor in Rajkot`,
    description: `Classical homoeopathy by Dr. Sumant Zankat in Rajkot, Gujarat. Safe, gentle & personalised treatment for skin diseases, diabetes, allergies, chronic conditions & whole family care.`,
    images: ["/logo.png"],
  },
};

export default function Home() {
  // Q&A pairs are already visible on the page, which is what FAQ rich
  // results require — the markup only describes what a reader can see.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${site.url}/#clinic` },
  };

  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />
      <Hero />
      <Homoeopathy />
      <TreatmentGallery />
      <Faq />
      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Homoeopathy } from "@/components/sections/Homoeopathy";
import { CtaBand } from "@/components/sections/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} — Classical Homoeopathy in Rajkot | Dr. Sumant Zankat`,
  description: `Best homoeopathic clinic in Rajkot, Gujarat. Dr. Sumant Zankat offers personalised classical homoeopathy treatment for skin diseases, diabetes, allergies, chronic illnesses & more. Book consultation today.`,
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
  return (
    <>
      <Hero />
      <Homoeopathy />
      <CtaBand />
    </>
  );
}

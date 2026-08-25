import type { Metadata } from "next";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About Dr. Sumant Zankat — Homoeopathic Physician in Rajkot`,
  description: `Meet Dr. Sumant Zankat (${site.doctor.qualification}), a trusted homoeopathic physician in Rajkot with ${site.doctor.experience.toLowerCase()}. Specialising in classical homoeopathy for chronic diseases, skin problems, diabetes, allergies & whole family care at ${site.name}.`,
  keywords: [
    "Dr Sumant Zankat homoeopath",
    "homoeopathic doctor Rajkot",
    "classical homoeopathy physician Gujarat",
    "BHMD doctor Rajkot",
    "best homeopathy doctor Rajkot",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Dr. Sumant Zankat — Homoeopathic Physician in Rajkot`,
    description: `Meet Dr. Sumant Zankat, a trusted homoeopathic physician in Rajkot with 7+ years of experience in classical homoeopathy.`,
  },
};

export default function AboutPage() {
  return <AboutDoctor />;
}

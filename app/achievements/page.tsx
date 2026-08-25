import type { Metadata } from "next";
import { Achievements } from "@/components/sections/Achievements";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Achievements & Research — Homoeopathic Publications | ${site.name}`,
  description: `Research, publications and case studies by Dr. Sumant Zankat at ${site.name}, Rajkot. Published papers in homoeopathic journals, treatment results & before-after photos showcasing classical homoeopathy success.`,
  keywords: [
    "homoeopathic research publications",
    "Dr Sumant Zankat publications",
    "homeopathy journal papers",
    "classical homoeopathy research",
    "homoeopathy treatment results Rajkot",
  ],
  alternates: { canonical: "/achievements" },
  openGraph: {
    title: `Achievements & Research — Homoeopathic Publications | ${site.name}`,
    description: `Research, publications and case studies by Dr. Sumant Zankat — published papers in homoeopathic journals.`,
  },
};

export default function AchievementsPage() {
  return <Achievements />;
}

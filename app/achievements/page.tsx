import type { Metadata } from "next";
import { Achievements } from "@/components/sections/Achievements";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Achievements & Publications",
  description: `Research, publications and case studies by ${site.doctor.name} at ${site.name}, Rajkot — including papers in homoeopathic journals and before-after treatment results.`,
  alternates: { canonical: "/achievements" },
};

export default function AchievementsPage() {
  return <Achievements />;
}

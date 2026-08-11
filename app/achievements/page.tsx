import type { Metadata } from "next";
import { Achievements } from "@/components/sections/Achievements";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Achievements",
  description: `Research, surveys and publications by ${site.doctor.name} at ${site.name}.`,
};

export default function AchievementsPage() {
  return <Achievements />;
}

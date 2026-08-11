import type { Metadata } from "next";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Doctor",
  description: `Learn more about ${site.doctor.name}, ${site.doctor.title} at ${site.name}.`,
};

export default function AboutPage() {
  return <AboutDoctor />;
}

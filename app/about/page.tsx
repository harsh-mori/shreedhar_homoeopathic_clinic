import type { Metadata } from "next";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Doctor",
  description: `About ${site.doctor.name} (${site.doctor.qualification}) — ${site.doctor.experience.toLowerCase()}. Learn about the doctor's approach to classical homoeopathy and the treatment areas covered at ${site.name}, Rajkot.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutDoctor />;
}

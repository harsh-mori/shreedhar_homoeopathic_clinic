import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Homoeopathy } from "@/components/sections/Homoeopathy";
import { CtaBand } from "@/components/sections/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = {
  description: site.description,
  alternates: { canonical: "/" },
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

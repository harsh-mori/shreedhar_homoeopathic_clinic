import type { Metadata } from "next";
import { DiseasesList } from "@/components/sections/DiseasesList";

export const metadata: Metadata = {
  title: "Diseases Information & Symptoms",
  description:
    "Information about common diseases and their symptoms, including skin, digestive, respiratory, women's health and other conditions.",
};

export default function DiseasesPage() {
  return <DiseasesList />;
}

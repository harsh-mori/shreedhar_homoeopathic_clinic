import type { Metadata } from "next";
import { DiseasesList } from "@/components/sections/DiseasesList";
import { JsonLd } from "@/components/seo/JsonLd";
import { diseases, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Diseases Information & Symptoms",
  description: `Information about common diseases and their symptoms at ${site.name}, Rajkot — skin, digestive, respiratory, women's health, bone & joint and other conditions treated with classical homoeopathy.`,
  alternates: { canonical: "/diseases" },
};

export default function DiseasesPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Diseases treated at Shreedhar Homoeopathic Clinic",
    numberOfItems: diseases.length,
    itemListElement: diseases.map((disease, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: disease.name,
      url: `${site.url}/diseases/${disease.slug}`,
    })),
  };

  return (
    <>
      <JsonLd data={itemList} />
      <DiseasesList />
    </>
  );
}

import type { Metadata } from "next";
import { DiseasesList } from "@/components/sections/DiseasesList";
import { JsonLd } from "@/components/seo/JsonLd";
import { diseases, site } from "@/data/site";

export const metadata: Metadata = {
  title: `Diseases & Symptoms — Homoeopathic Treatment Guide | ${site.name}`,
  description: `Complete guide to diseases treated with classical homoeopathy at ${site.name}, Rajkot. Learn about skin diseases, diabetes, digestive disorders, respiratory problems, women's health, hair loss, ENT disorders & their symptoms. Book consultation with Dr. Sumant Zankat.`,
  keywords: [
    "diseases treated by homeopathy",
    "homeopathic treatment for skin diseases",
    "homeopathic treatment for diabetes Rajkot",
    "symptoms of diseases homoeopathy",
    "chronic disease treatment Rajkot",
    "homeopathy for digestive disorders",
    "homeopathy for respiratory problems",
    "homeopathy for women health problems",
  ],
  alternates: { canonical: "/diseases" },
  openGraph: {
    title: `Diseases & Symptoms — Homoeopathic Treatment Guide | ${site.name}`,
    description: `Complete guide to diseases treated with classical homoeopathy at ${site.name}, Rajkot. Skin diseases, diabetes, digestive disorders & more.`,
  },
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

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { diseases, site } from "@/data/site";
import { DiseaseDetail } from "@/components/sections/DiseaseDetail";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return diseases.map((disease) => ({ slug: disease.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return { title: "Disease Not Found" };
  return {
    title: disease.name,
    description: `${disease.name} — causes, common symptoms and how homoeopathic treatment at ${site.name} can help. ${disease.about}`,
    alternates: { canonical: `/diseases/${disease.slug}` },
  };
}

export default async function DiseasePage({ params }: Props) {
  const { slug } = await params;
  const index = diseases.findIndex((d) => d.slug === slug);
  if (index === -1) notFound();

  const disease = diseases[index];
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Diseases Information & Symptoms",
        item: `${site.url}/diseases`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: disease.name,
        item: `${site.url}/diseases/${disease.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <DiseaseDetail disease={disease} index={index} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { diseases } from "@/data/site";
import { DiseaseDetail } from "@/components/sections/DiseaseDetail";

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
    description: `Information about ${disease.name}, common causes and symptoms.`,
  };
}

export default async function DiseasePage({ params }: Props) {
  const { slug } = await params;
  const index = diseases.findIndex((d) => d.slug === slug);
  if (index === -1) notFound();
  return <DiseaseDetail disease={diseases[index]} index={index} />;
}

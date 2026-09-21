import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { diseases, site } from "@/data/site";
import { DiseaseDetail } from "@/components/sections/DiseaseDetail";
import { JsonLd } from "@/components/seo/JsonLd";

/** Trims to a whole word within `max` chars so snippets never cut mid-word. */
function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

export function generateStaticParams() {
  return diseases.map((disease) => ({ slug: disease.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease)
    return { title: "Disease Not Found | Shreedhar Homoeopathic Clinic" };
  // Keep descriptions near ~155 chars so Google shows them in full instead
  // of truncating mid-sentence.
  const description = truncate(
    `${disease.name}: symptoms, causes & homoeopathic treatment in Rajkot by ${site.doctor.name}. ${disease.about}`,
    155
  );

  return {
    title: `${disease.name} — Homoeopathic Treatment in Rajkot`,
    description,
    keywords: [
      `${disease.name} treatment homeopathy`,
      `${disease.name} homoeopathic treatment Rajkot`,
      `homeopathy for ${disease.name.toLowerCase()}`,
      `symptoms of ${disease.name.toLowerCase()}`,
      `natural treatment ${disease.name.toLowerCase()}`,
    ],
    alternates: { canonical: `/diseases/${disease.slug}` },
    openGraph: {
      title: `${disease.name} — Homeopathic Treatment | ${site.name}`,
      description,
      url: `${site.url}/diseases/${disease.slug}`,
      type: "article",
    },
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

  // Every symptom shown on the page, flat or grouped.
  const allSymptoms = [
    ...(disease.symptoms ?? []),
    ...(disease.groups ?? []).flatMap((group) => group.symptoms),
  ];

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${site.url}/diseases/${disease.slug}#page`,
    url: `${site.url}/diseases/${disease.slug}`,
    name: `${disease.name} — Homoeopathic Treatment`,
    description: disease.about,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${site.url}/#website` },
    about: {
      "@type": "MedicalCondition",
      name: disease.name,
      description: disease.about,
      signOrSymptom: allSymptoms.map((symptom) => ({
        "@type": "MedicalSignOrSymptom",
        name: symptom,
      })),
      possibleTreatment: {
        "@type": "MedicalTherapy",
        name: "Classical Homoeopathy",
        description: `Personalised classical homoeopathic treatment for ${disease.name.toLowerCase()} at ${site.name}, ${site.address.line2}.`,
        provider: { "@id": `${site.url}/#clinic` },
      },
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main",
    },
  };

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={conditionSchema} />
      <DiseaseDetail disease={disease} index={index} />
    </>
  );
}

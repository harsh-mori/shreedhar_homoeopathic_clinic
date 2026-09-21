import { Stethoscope, Leaf } from "lucide-react";
import { diseases, diseaseCategories, diseasesPage, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { DiseaseSearch } from "@/components/sections/DiseaseSearch";
import { CtaBand } from "@/components/sections/CtaBand";

export function DiseasesList() {
  const stats = [
    { value: `${diseases.length}`, label: "Conditions covered" },
    { value: `${diseaseCategories.length}`, label: "Areas of treatment" },
    { value: site.doctor.experience.replace(" of practice", ""), label: "Doctor's experience" },
  ];

  return (
    <>
      {/* ── Header ── */}
      <section className="relative overflow-hidden border-b border-grey-200/70 bg-primary">
        <Stethoscope className="absolute -right-6 top-6 size-40 rotate-12 text-secondary-200" aria-hidden />
        <Leaf className="absolute -bottom-8 left-4 size-32 -rotate-12 text-secondary-200/70" aria-hidden />
        <Container className="relative py-16 lg:py-20">
          <p className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-surface px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-secondary-700">
            <Stethoscope className="size-3.5" aria-hidden />
            {diseasesPage.eyebrow}
          </p>
          <h1
            className="animate-fade-up max-w-2xl text-4xl font-bold tracking-tight text-balance text-black sm:text-5xl"
            style={{ animationDelay: "100ms" }}
          >
            {diseasesPage.title}
          </h1>
          <p
            className="animate-fade-up mt-5 max-w-2xl text-lg leading-relaxed text-grey-600"
            style={{ animationDelay: "200ms" }}
          >
            {diseasesPage.description}
          </p>

          {/* Quick stats */}
          <dl
            className="animate-fade-up mt-10 grid max-w-2xl grid-cols-3 gap-4"
            style={{ animationDelay: "300ms" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-grey-200/70 bg-surface px-4 py-4 text-center sm:px-6"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-2xl font-bold text-secondary-700 sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs font-medium leading-snug text-grey-500">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Search, filters & grouped list ── */}
      <section className="border-b border-grey-200/70 bg-primary-light">
        <DiseaseSearch />
      </section>

      {/* ── CTA band ── */}
      <CtaBand />
    </>
  );
}

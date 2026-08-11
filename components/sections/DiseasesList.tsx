import { Stethoscope } from "lucide-react";
import { diseasesPage } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { DiseaseSearch } from "@/components/sections/DiseaseSearch";
import { CtaBand } from "@/components/sections/CtaBand";

export function DiseasesList() {
  return (
    <>
      {/* ── Header ── */}
      <section className="relative overflow-hidden border-b border-grey-200/70 bg-primary">
        <Stethoscope className="absolute -right-6 top-6 size-40 rotate-12 text-secondary-200" aria-hidden />
        <Container className="relative py-16 lg:py-20">
          <p className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-surface px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-secondary-700">
            <Stethoscope className="size-3.5" aria-hidden />
            {diseasesPage.eyebrow}
          </p>
          <h1 className="animate-fade-up max-w-2xl text-4xl font-bold tracking-tight text-balance text-black sm:text-5xl" style={{ animationDelay: "100ms" }}>
            {diseasesPage.title}
          </h1>
          <p className="animate-fade-up mt-5 max-w-2xl text-lg leading-relaxed text-grey-600" style={{ animationDelay: "200ms" }}>
            {diseasesPage.description}
          </p>
        </Container>
      </section>

      {/* ── Disease search ── */}
      <section className="border-b border-grey-200/70 bg-primaryLight">
        <DiseaseSearch />
      </section>

      {/* ── CTA band ── */}
      <CtaBand />
    </>
  );
}

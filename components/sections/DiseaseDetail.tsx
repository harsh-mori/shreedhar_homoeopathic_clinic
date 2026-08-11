import Link from "next/link";
import { ArrowLeft, ArrowRight, Stethoscope, Check, AlertTriangle, Lightbulb } from "lucide-react";
import type { DiseaseInfo } from "@/data/site";
import { diseases, diseasesPage } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/sections/CtaBand";

type DiseaseDetailProps = {
  disease: DiseaseInfo;
  index: number;
};

function SymptomList({ symptoms, dark = false }: { symptoms: string[]; dark?: boolean }) {
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2">
      {symptoms.map((symptom) => (
        <li key={symptom} className="flex items-start gap-2.5">
          <span
            className={cn(
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
              dark ? "bg-white/15 text-secondary-200" : "bg-secondary-100 text-secondary-800"
            )}
          >
            <Check className="size-3" aria-hidden />
          </span>
          <span className={cn("text-sm leading-relaxed", dark ? "text-white/90" : "text-grey-700")}>{symptom}</span>
        </li>
      ))}
    </ul>
  );
}

export function DiseaseDetail({ disease, index }: DiseaseDetailProps) {
  const prev = diseases[(index - 1 + diseases.length) % diseases.length];
  const next = diseases[(index + 1) % diseases.length];
  const hasGroups = !!disease.groups;

  return (
    <>
      {/* ── Header ── */}
      <section className="relative overflow-hidden border-b border-grey-200/70 bg-primary">
        <Stethoscope className="absolute -right-6 top-6 size-40 rotate-12 text-secondary-200" aria-hidden />
        <Container className="relative pt-10 pb-2.5 lg:pt-14 lg:pb-2.5">
          <Link
            href="/diseases"
            className="animate-fade-up mb-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary-700 transition-colors hover:text-secondary-800"
          >
            <ArrowLeft className="size-4" aria-hidden />
            {diseasesPage.backLabel}
          </Link>
          <div className="animate-fade-up flex items-center gap-3" style={{ animationDelay: "100ms" }}>
            <span className="flex size-12 items-center justify-center rounded-xl bg-secondary-100 text-secondary-800">
              <Stethoscope className="size-6" aria-hidden />
            </span>
            <p className="text-xs font-semibold tracking-widest uppercase text-secondary-700">
              {diseasesPage.eyebrow}
            </p>
          </div>
          <h1 className="animate-fade-up mt-4 max-w-3xl text-4xl font-bold tracking-tight text-balance text-black sm:text-5xl" style={{ animationDelay: "200ms" }}>
            {disease.name}
          </h1>
        </Container>
      </section>

      {/* ── Content ── */}
      <section className="border-b border-grey-200/70 bg-primaryLight">
        <Container className="pt-0 pb-12 lg:pb-16">
          <div className="max-w-3xl space-y-6">
            {/* About */}
            <div className="animate-fade-up">
              <h2 className="text-xl font-bold text-black sm:text-2xl">{diseasesPage.aboutLabel}</h2>
              <p className="mt-4 text-lg leading-relaxed text-grey-700">{disease.about}</p>
              {disease.examples && (
                <div className="mt-6 flex items-start gap-3 rounded-2xl bg-primary p-4">
                  <Lightbulb className="mt-0.5 size-5 shrink-0 text-secondary-700" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-secondary-700">
                      {diseasesPage.examplesLabel}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-grey-700">{disease.examples}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Symptoms (single condition) */}
            {!hasGroups && disease.symptoms && (
              <div className="animate-fade-up">
                <h2 className="text-xl font-bold text-black sm:text-2xl">{diseasesPage.symptomsLabel}</h2>
                <div className="mt-5">
                  <SymptomList symptoms={disease.symptoms} />
                </div>
              </div>
            )}

            {/* Multi-condition groups */}
            {hasGroups && (
              <div className="space-y-8">
                {disease.groups!.map((group, i) => (
                  <div key={group.title} className="animate-fade-up">
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary-100 text-sm font-bold text-secondary-800">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl font-bold text-black sm:text-2xl">{group.title}</h3>
                    </div>
                    {group.about && (
                      <p className="mt-3 text-lg leading-relaxed text-grey-700">{group.about}</p>
                    )}
                    <div className="mt-4">
                      <SymptomList symptoms={group.symptoms} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Note */}
            {disease.note && (
              <div className="animate-fade-up flex items-start gap-4 rounded-3xl border border-secondary-200 bg-primary p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary-100 text-secondary-800">
                  <AlertTriangle className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary-700">
                    {diseasesPage.noteLabel}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-grey-700">{disease.note}</p>
                </div>
              </div>
            )}

            {/* Prev / Next */}
            <div className="animate-fade-up grid grid-cols-2 gap-4">
              <Link
                href={`/diseases/${prev.slug}`}
                className="group flex items-center gap-3 rounded-2xl bg-secondary-700 p-4 transition-colors hover:bg-secondary-800"
              >
                <ArrowLeft className="size-4 shrink-0 text-secondary-200" aria-hidden />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-secondary-200">
                    {diseasesPage.prevLabel}
                  </p>
                  <p className="truncate text-sm font-bold text-white">{prev.name}</p>
                </div>
              </Link>
              <Link
                href={`/diseases/${next.slug}`}
                className="group flex items-center gap-3 rounded-2xl bg-secondary-700 p-4 transition-colors hover:bg-secondary-800"
              >
                <div className="min-w-0 flex-1 text-right">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-secondary-200">
                    {diseasesPage.nextLabel}
                  </p>
                  <p className="truncate text-sm font-bold text-white">{next.name}</p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-secondary-200" aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA band ── */}
      <CtaBand />
    </>
  );
}

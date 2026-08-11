import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";
import { diseases, diseasesPage } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
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

      {/* ── Disease grid ── */}
      <section className="border-b border-grey-200/70 bg-primaryLight">
        <Container className="py-16 lg:py-24">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {diseases.map((disease, i) => {
              const featured = i % 3 === 1;
              const excerpt = disease.examples ?? disease.about;
              return (
                <Link
                  key={disease.slug}
                  href={`/diseases/${disease.slug}`}
                  className={cn(
                    "animate-fade-up group flex flex-col rounded-2xl border p-6 transition-colors",
                    featured
                      ? "border-secondary-700 bg-secondary-700"
                      : "border-grey-200/70 bg-surface hover:border-secondary-200 hover:bg-secondary-50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "flex size-9 items-center justify-center rounded-lg text-xs font-bold",
                        featured ? "bg-white/10 text-secondary-200" : "bg-secondary-100 text-secondary-800"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowRight
                      className={cn(
                        "size-4 transition-transform group-hover:translate-x-1",
                        featured ? "text-secondary-200" : "text-grey-400"
                      )}
                      aria-hidden
                    />
                  </div>
                  <h2 className={cn("mt-5 text-lg font-bold leading-snug", featured ? "text-white" : "text-black")}>
                    {disease.name}
                  </h2>
                  <p
                    className={cn(
                      "mt-2 line-clamp-2 text-sm leading-relaxed",
                      featured ? "text-white/80" : "text-grey-500"
                    )}
                  >
                    {excerpt}
                  </p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── CTA band ── */}
      <CtaBand />
    </>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, SearchX } from "lucide-react";
import { diseases, diseasesPage } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

function buildSearchableText(disease: (typeof diseases)[number]): string {
  const parts = [
    disease.name,
    disease.about,
    disease.examples,
    ...(disease.symptoms ?? []),
    ...(disease.groups ?? []).flatMap((group) => [
      group.title,
      group.about,
      ...group.symptoms,
    ]),
  ];
  return parts.filter(Boolean).join(" ").toLowerCase();
}

export function DiseaseSearch() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return diseases;
    return diseases.filter((disease) => buildSearchableText(disease).includes(q));
  }, [query]);

  return (
    <Container className="py-16 lg:py-24">
      {/* ── Search box ── */}
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-grey-400" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={diseasesPage.searchPlaceholder}
            aria-label={diseasesPage.searchLabel}
            autoComplete="off"
            className="w-full rounded-full border border-grey-200/70 bg-surface py-3.5 pr-10 pl-12 text-sm text-black placeholder:text-grey-400 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-200 focus:outline-none"
          />
        </div>
        <p className="mt-3 text-center text-sm text-grey-500">
          {query.trim()
            ? `${filtered.length} of ${diseases.length} ${filtered.length === 1 ? diseasesPage.conditionSingular : diseasesPage.conditionPlural}`
            : `${diseases.length} ${diseasesPage.conditionPlural}`}
        </p>
      </div>

      {/* ── Results grid ── */}
      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((disease, i) => {
            const featured = i % 3 === 1;
            const excerpt = disease.examples ?? disease.about;
            return (
              <Link
                key={disease.slug}
                href={`/diseases/${disease.slug}`}
                className={cn(
                  "group flex flex-col rounded-2xl border p-6 transition-colors",
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
      ) : (
        <div className="mt-16 flex flex-col items-center rounded-2xl border border-grey-200/70 bg-surface p-10 text-center">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary-100 text-secondary-800">
            <SearchX className="size-7" aria-hidden />
          </span>
          <p className="mt-5 text-lg font-bold text-black">{diseasesPage.noResultsTitle}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-grey-500">{diseasesPage.noResultsText}</p>
        </div>
      )}
    </Container>
  );
}

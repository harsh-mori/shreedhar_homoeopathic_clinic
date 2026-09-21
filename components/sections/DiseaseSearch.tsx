"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  SearchX,
  X,
  Phone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { diseases, diseaseCategories, diseasesPage, site } from "@/data/site";
import type { DiseaseCategoryId, DiseaseInfo } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { diseaseIcons, categoryIcons } from "@/constants/diseaseIcons";

/** Everything a disease can be matched on when searching. */
function buildSearchableText(disease: DiseaseInfo): string {
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

/** Total symptoms across a disease, whether flat or grouped. */
function countSymptoms(disease: DiseaseInfo): number {
  return (
    (disease.symptoms?.length ?? 0) +
    (disease.groups ?? []).reduce((sum, group) => sum + group.symptoms.length, 0)
  );
}

function DiseaseCard({ disease, icon: Icon }: { disease: DiseaseInfo; icon: LucideIcon }) {
  const excerpt = disease.examples ?? disease.about;
  const symptomCount = countSymptoms(disease);

  return (
    <Link
      href={`/diseases/${disease.slug}`}
      className="group flex flex-col rounded-2xl border border-grey-200/70 bg-surface p-6 transition-colors hover:border-secondary-300 hover:bg-secondary-50"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary-100 text-secondary-800 transition-colors group-hover:bg-secondary-600 group-hover:text-white">
          <Icon className="size-5" aria-hidden />
        </span>
        <ArrowRight
          className="mt-1 size-4 shrink-0 text-grey-400 transition-transform group-hover:translate-x-1 group-hover:text-secondary-700"
          aria-hidden
        />
      </div>

      <h3 className="mt-4 text-lg font-bold leading-snug text-black">{disease.name}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-grey-500">{excerpt}</p>

      {symptomCount > 0 && (
        <p className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary-50 px-2.5 py-1 text-[11px] font-semibold text-secondary-700">
          {symptomCount} {diseasesPage.symptomsCountLabel}
        </p>
      )}
    </Link>
  );
}

export function DiseaseSearch() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<DiseaseCategoryId | "all">("all");

  const trimmed = query.trim();

  const filtered = useMemo(() => {
    const q = trimmed.toLowerCase();
    return diseases.filter((disease) => {
      const matchesCategory = category === "all" || disease.category === category;
      const matchesQuery = !q || buildSearchableText(disease).includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [trimmed, category]);

  /** Results split into the category groups that actually have matches. */
  const groups = useMemo(
    () =>
      diseaseCategories
        .map((cat) => ({
          category: cat,
          items: filtered.filter((disease) => disease.category === cat.id),
        }))
        .filter((group) => group.items.length > 0),
    [filtered]
  );

  /** How many conditions sit in each category, for the chip counts. */
  const counts = useMemo(() => {
    const map = new Map<DiseaseCategoryId, number>();
    for (const disease of diseases) {
      map.set(disease.category, (map.get(disease.category) ?? 0) + 1);
    }
    return map;
  }, []);

  const isFiltered = category !== "all" || trimmed.length > 0;

  const reset = () => {
    setQuery("");
    setCategory("all");
  };

  return (
    <Container className="py-16 lg:py-24">
      {/* ── Search box ── */}
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <Search
            className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-grey-400"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={diseasesPage.searchPlaceholder}
            aria-label={diseasesPage.searchLabel}
            autoComplete="off"
            className="w-full rounded-full border border-grey-200/70 bg-surface py-3.5 pr-12 pl-12 text-sm text-black placeholder:text-grey-400 focus:border-secondary-400 focus:ring-2 focus:ring-secondary-200 focus:outline-none"
          />
          {trimmed && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute top-1/2 right-3 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-full bg-grey-200 text-grey-600 transition-colors hover:bg-grey-300"
            >
              <X className="size-3.5" aria-hidden />
            </button>
          )}
        </div>
      </div>

      {/* ── Category filter chips ── */}
      <div className="mt-6" role="group" aria-label={diseasesPage.filterLabel}>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            aria-pressed={category === "all"}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
              category === "all"
                ? "border-secondary-700 bg-secondary-700 text-white"
                : "border-grey-200/70 bg-surface text-grey-700 hover:border-secondary-300 hover:text-secondary-700"
            )}
          >
            {diseasesPage.allFilterLabel}
            <span
              className={cn(
                "rounded-full px-1.5 text-[11px] font-bold tabular-nums",
                category === "all" ? "bg-white/15 text-secondary-100" : "bg-secondary-100 text-secondary-800"
              )}
            >
              {diseases.length}
            </span>
          </button>

          {diseaseCategories.map((cat) => {
            const isActive = category === cat.id;
            const Icon = categoryIcons[cat.id];
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                aria-pressed={isActive}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-secondary-700 bg-secondary-700 text-white"
                    : "border-grey-200/70 bg-surface text-grey-700 hover:border-secondary-300 hover:text-secondary-700"
                )}
              >
                <Icon className="size-4" aria-hidden />
                {cat.label}
                <span
                  className={cn(
                    "rounded-full px-1.5 text-[11px] font-bold tabular-nums",
                    isActive ? "bg-white/15 text-secondary-100" : "bg-secondary-100 text-secondary-800"
                  )}
                >
                  {counts.get(cat.id) ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* Result count + reset */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-grey-500">
          <p>
            {isFiltered
              ? `${filtered.length} of ${diseases.length} ${
                  filtered.length === 1
                    ? diseasesPage.conditionSingular
                    : diseasesPage.conditionPlural
                }`
              : `${diseases.length} ${diseasesPage.conditionPlural}`}
          </p>
          {isFiltered && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-full border border-grey-200/70 bg-surface px-3 py-1 text-xs font-semibold text-secondary-700 transition-colors hover:border-secondary-300"
            >
              <X className="size-3" aria-hidden />
              {diseasesPage.clearLabel}
            </button>
          )}
        </div>
      </div>

      {/* ── Grouped results ── */}
      {groups.length > 0 ? (
        <div className="mt-14 space-y-14">
          {groups.map(({ category: cat, items }) => {
            const Icon = categoryIcons[cat.id];
            return (
              <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
                <div className="flex items-start gap-4 border-b border-grey-200/70 pb-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary-100 text-secondary-800">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h2 id={`cat-${cat.id}`} className="text-xl font-bold text-black sm:text-2xl">
                        {cat.label}
                      </h2>
                      <span className="rounded-full bg-secondary-50 px-2.5 py-0.5 text-xs font-bold tabular-nums text-secondary-700">
                        {items.length}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-grey-500">{cat.description}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((disease) => (
                    <DiseaseCard
                      key={disease.slug}
                      disease={disease}
                      icon={diseaseIcons[disease.slug] ?? categoryIcons[disease.category]}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="mt-14 flex flex-col items-center rounded-3xl border border-grey-200/70 bg-surface p-10 text-center">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary-100 text-secondary-800">
            <SearchX className="size-7" aria-hidden />
          </span>
          <p className="mt-5 text-lg font-bold text-black">{diseasesPage.noResultsTitle}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-grey-500">
            {diseasesPage.noResultsText}
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-700"
          >
            <X className="size-4" aria-hidden />
            {diseasesPage.clearLabel}
          </button>
        </div>
      )}

      {/* ── Help prompt ── */}
      <div className="mt-16 flex flex-col items-start gap-6 rounded-3xl border border-secondary-200 bg-primary p-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary-100 text-secondary-800">
            <Sparkles className="size-6" aria-hidden />
          </span>
          <div>
            <p className="text-lg font-bold text-black">{diseasesPage.helpTitle}</p>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-grey-600">
              {diseasesPage.helpText}
            </p>
          </div>
        </div>
        <a
          href={site.phoneHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-secondary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary-700"
        >
          <Phone className="size-4" aria-hidden />
          {diseasesPage.helpCta}
        </a>
      </div>
    </Container>
  );
}

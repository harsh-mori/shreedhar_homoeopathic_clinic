import { FileText, Newspaper, ExternalLink, Leaf, Globe } from "lucide-react";
import { achievements } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { CtaBand } from "@/components/sections/CtaBand";
import { TreatmentGallery } from "@/components/sections/TreatmentGallery";

export function Achievements() {
  return (
    <>
      {/* ── Header ── */}
      <section className="relative overflow-hidden border-b border-grey-200/70 bg-primaryLight">
        <Leaf className="absolute -right-6 top-4 size-32 rotate-12 text-secondary-100" aria-hidden />
        <Container className="relative py-16 lg:py-20">
          <p className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-surface px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-secondary-700">
            <Globe className="size-3.5" aria-hidden />
            {achievements.eyebrow}
          </p>
          <h1 className="animate-fade-up max-w-2xl text-4xl font-bold tracking-tight text-balance text-black sm:text-5xl" style={{ animationDelay: "100ms" }}>
            {achievements.title}
          </h1>
          <p className="animate-fade-up mt-5 max-w-2xl text-lg leading-relaxed text-grey-600" style={{ animationDelay: "200ms" }}>
            {achievements.description}
          </p>
        </Container>
      </section>

      {/* ── Publications ── */}
      <section className="border-b border-grey-200/70 bg-primaryLight">
        <Container className="py-16 lg:py-24">
          <div className="flex items-center gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary-50 text-secondary-700">
              <FileText className="size-7" aria-hidden />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-secondary-700">01 · Journals</p>
              <h2 className="text-3xl font-bold text-black">{achievements.publications.title}</h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {achievements.publications.items.map((pub, i) => {
              const featured = i === 0;
              return (
                <article
                  key={pub.title}
                  className={cn(
                    "animate-fade-up flex flex-col rounded-3xl p-7",
                    featured
                      ? "bg-secondary-700"
                      : "border border-grey-200/70 bg-surface transition-colors hover:border-secondary-200 hover:bg-white"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "flex size-10 items-center justify-center rounded-xl text-sm font-bold",
                        featured ? "bg-white/10 text-secondary-200" : "bg-secondary-50 text-secondary-700"
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {pub.journal && (
                      <span
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold",
                          featured ? "bg-white/10 text-secondary-200" : "bg-secondary-50 text-secondary-700"
                        )}
                      >
                        <Newspaper className="size-3.5" aria-hidden />
                        Journal
                      </span>
                    )}
                  </div>

                  <h3 className={cn("mt-6 text-lg font-bold leading-snug", featured ? "text-white" : "text-black")}>
                    {pub.title}
                  </h3>

                  {pub.journal && (
                    <p className={cn("mt-2 text-sm font-medium", featured ? "text-secondary-200" : "text-secondary-700")}>
                      {pub.journal}
                    </p>
                  )}

                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold",
                        featured ? "text-white hover:text-primary" : "text-secondary-700 hover:text-secondary-800"
                      )}
                    >
                      View Paper
                      <ExternalLink className="size-3.5" aria-hidden />
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Before & After gallery ── */}
      <TreatmentGallery />

      {/* ── CTA band ── */}
      <CtaBand />
    </>
  );
}

import { FlaskConical, UserRound, ScrollText, History, Sparkles } from "lucide-react";
import { aboutHomoeopathy } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const factIcons = {
  "Establishment of homoeopathy.": History,
  "Founder of homoeopathy": UserRound,
  Principle: ScrollText,
  "Over 200 years of practice.": FlaskConical,
} as const;

const featuredFact = "Principle";

export function Homoeopathy() {
  return (
    <section className="border-b border-grey-200/70">
      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <SectionHeading
              eyebrow={aboutHomoeopathy.eyebrow}
              title={aboutHomoeopathy.title}
              align="left"
            />
            <div className="mt-6 space-y-4">
              {aboutHomoeopathy.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-grey-600">
                  {paragraph}
                </p>
              ))}
            </div>

            <blockquote className="mt-6 rounded-2xl bg-secondary-700 p-5">
              <p className="flex items-start gap-3 font-semibold text-white">
                <Sparkles className="mt-0.5 size-5 shrink-0 text-secondary-200" aria-hidden />
                {aboutHomoeopathy.conclusion}
              </p>
            </blockquote>
          </div>

          {/* Facts */}
          <div className="lg:pt-12">
            <div className="grid gap-4 sm:grid-cols-2">
              {aboutHomoeopathy.facts.map((fact) => {
                const Icon = factIcons[fact.label as keyof typeof factIcons];
                const featured = fact.label === featuredFact;
                return (
                  <div
                    key={fact.label}
                    className={cn(
                      "rounded-2xl border p-6 transition-colors",
                      featured
                        ? "border-secondary-700 bg-secondary-700"
                        : "border-grey-200/70 bg-surface hover:border-secondary-200"
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-11 items-center justify-center rounded-xl",
                        featured ? "bg-white/10 text-secondary-200" : "bg-secondary-100 text-secondary-800"
                      )}
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <p
                      className={cn(
                        "mt-4 text-xs font-semibold uppercase tracking-wide",
                        featured ? "text-secondary-200" : "text-grey-500"
                      )}
                    >
                      {fact.label}
                    </p>
                    <p className={cn("mt-1 text-lg font-bold", featured ? "text-white" : "text-secondary-900")}>
                      {fact.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

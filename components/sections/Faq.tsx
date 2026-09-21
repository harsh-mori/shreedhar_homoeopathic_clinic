import { HelpCircle, Phone } from "lucide-react";
import { faqs, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Frequently asked questions.
 *
 * Rendered as plain, always-visible text (native <details> would hide the
 * answers behind a click — visible content is the safer signal for search
 * engines, and these answers are short enough to read inline).
 *
 * The matching FAQPage JSON-LD lives in `app/page.tsx`.
 */
export function Faq() {
  return (
    <section className="border-b border-grey-200/70">
      <Container className="py-16 lg:py-24">
        <SectionHeading
          eyebrow="Common Questions"
          title="Frequently asked questions"
          description="Answers to the questions patients ask most before their first consultation."
        />

        <dl className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-grey-200/70 bg-surface p-6 transition-colors hover:border-secondary-200"
            >
              <dt className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary-100 text-secondary-800">
                  <HelpCircle className="size-4" aria-hidden />
                </span>
                <span className="text-base font-bold leading-snug text-black">{faq.question}</span>
              </dt>
              <dd className="mt-3 text-sm leading-relaxed text-grey-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>

        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-4 rounded-2xl bg-primary p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm font-medium text-grey-700">
            Have a question that is not answered here? Speak to {site.doctor.name} directly.
          </p>
          <a
            href={site.phoneHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-secondary-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-700"
          >
            <Phone className="size-4" aria-hidden />
            {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}

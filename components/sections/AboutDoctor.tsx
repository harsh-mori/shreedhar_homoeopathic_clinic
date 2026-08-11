import Image from "next/image";
import {
  GraduationCap,
  Check,
  ArrowRight,
  Sparkles,
  Award,
  MapPin,
  Leaf,
  Clock,
  Phone,
  MessageCircle,
} from "lucide-react";
import { aboutDoctor, site, hero, timings, treatmentAreas } from "@/data/site";
import { assets } from "@/constants/assets";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/sections/CtaBand";

const factIcons = {
  Qualification: GraduationCap,
  Experience: Award,
  Location: MapPin,
  Specialty: Leaf,
} as const;

export function AboutDoctor() {
  return (
    <>
      {/* ── Intro ── */}
      <section className="relative overflow-hidden border-b border-grey-200/70 bg-primary">
        <Leaf className="absolute -top-6 right-8 size-40 rotate-12 text-secondary-200" aria-hidden />
        <Container className="relative py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
            {/* Photo */}
            <div className="animate-fade-up relative mx-auto w-fit">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-secondary-200" aria-hidden />
              <div className="relative aspect-[4/5] w-72 overflow-hidden rounded-[2rem] border border-grey-200/70 bg-surface sm:w-80">
                <Image
                  src={assets.doctorImage.src}
                  alt={assets.doctorImage.alt}
                  fill
                  sizes="(min-width: 640px) 20rem, 18rem"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative mt-5 text-center">
                <p className="text-xl font-bold text-black">{site.doctor.name}</p>
                <p className="text-sm font-medium text-secondary-700">{site.doctor.title}</p>
                <p className="text-sm font-medium text-grey-500">
                  {site.doctor.location} · {site.doctor.experience}
                </p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p
                className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-surface px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-secondary-700"
                style={{ animationDelay: "100ms" }}
              >
                <Sparkles className="size-3.5" aria-hidden />
                {aboutDoctor.eyebrow}
              </p>
              <h1
                className="animate-fade-up text-4xl font-bold tracking-tight text-black sm:text-5xl"
                style={{ animationDelay: "200ms" }}
              >
                {aboutDoctor.title}
              </h1>
              <p
                className="animate-fade-up mt-5 text-lg font-medium text-secondary-700"
                style={{ animationDelay: "300ms" }}
              >
                {site.doctor.name} · {site.doctor.qualification}
              </p>

              <div className="mt-6 space-y-4" style={{ animationDelay: "400ms" }}>
                {aboutDoctor.bio.map((paragraph) => (
                  <p key={paragraph} className="animate-fade-up leading-relaxed text-grey-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {aboutDoctor.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="animate-fade-up flex items-center gap-2.5 text-sm font-medium text-black"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-secondary-700">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-4">
                <ButtonLink href={hero.primaryCta.href} size="lg">
                  {aboutDoctor.cta.buttonLabel}
                  <ArrowRight className="size-4" aria-hidden />
                </ButtonLink>
                <ButtonLink href={site.phoneHref} size="lg" variant="outline">
                  <Phone className="size-4" aria-hidden />
                  Call {site.phone}
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* Quick facts */}
          <dl className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {aboutDoctor.facts.map((fact) => {
              const Icon = factIcons[fact.label as keyof typeof factIcons];
              return (
                <div
                  key={fact.label}
                  className="animate-fade-up flex items-center gap-4 rounded-2xl border border-grey-200/70 bg-surface px-6 py-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary-100 text-secondary-800">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-grey-500">{fact.label}</dt>
                    <dd className="mt-1 text-base font-bold text-black">{fact.value}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </Container>
      </section>

      {/* ── Qualifications & Philosophy ── */}
      <section className="border-b border-grey-200/70">
        <Container className="py-16 lg:py-24">
          <SectionHeading
            eyebrow="Credentials & Philosophy"
            title="Qualified, compassionate care"
            description="A classical homoeopath committed to treating the person, not just the disease."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Qualifications */}
            <div className="animate-fade-up rounded-3xl border border-grey-200/70 bg-surface p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-secondary-100 text-secondary-800">
                <GraduationCap className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-bold text-black">Qualifications</h3>
              <ul className="mt-5 space-y-5">
                {aboutDoctor.qualifications.map((qual) => (
                  <li key={qual.degree} className="flex items-start gap-4">
                    <span className="mt-1 size-2.5 shrink-0 rounded-full bg-secondary-500" aria-hidden />
                    <div>
                      <p className="font-bold text-black">{qual.degree}</p>
                      <p className="text-sm text-grey-500">{qual.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Philosophy */}
            <div className="animate-fade-up rounded-3xl bg-secondary-700 p-8">
              <span className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-secondary-200">
                <Leaf className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 text-xl font-bold text-white">{aboutDoctor.philosophy.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {aboutDoctor.philosophy.description}
              </p>
              <ul className="mt-5 space-y-3">
                {aboutDoctor.philosophy.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm font-medium text-white">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-secondary-200">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Areas of practice ── */}
      <section className="border-b border-grey-200/70 bg-primaryLight">
        <Container className="py-16 lg:py-24">
          <SectionHeading
            eyebrow="Areas of Practice"
            title="Specialised, gentle treatment"
            description="Common conditions treated at the clinic with classical homoeopathy."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {treatmentAreas.map((area, i) => {
              const featured = i % 3 === 1;
              return (
                <div
                  key={area.title}
                  className={cn(
                    "animate-fade-up flex items-start gap-4 rounded-2xl border p-6",
                    featured
                      ? "border-secondary-700 bg-secondary-700"
                      : "border-grey-200/70 bg-surface transition-colors hover:border-secondary-200 hover:bg-secondary-50"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                      featured ? "bg-white/10 text-secondary-200" : "bg-secondary-100 text-secondary-800"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className={cn("font-bold", featured ? "text-white" : "text-black")}>{area.title}</h3>
                    <p className={cn("mt-1 text-sm leading-relaxed", featured ? "text-white/80" : "text-grey-500")}>
                      {area.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Visit the clinic ── */}
      <section className="border-b border-grey-200/70">
        <Container className="py-16 lg:py-24">
          <SectionHeading
            eyebrow="Visit the Clinic"
            title="We're here for you"
            description={`Find the clinic at ${site.address.line1}, ${site.address.line2}, ${site.address.city}.`}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Timings */}
            <div className="animate-fade-up rounded-3xl border border-grey-200/70 bg-surface p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary-100 text-secondary-800">
                  <Clock className="size-6" aria-hidden />
                </span>
                <h3 className="text-xl font-bold text-black">Clinic Hours</h3>
              </div>
              <ul className="mt-6 divide-y divide-grey-200/70">
                {timings.map((t) => (
                  <li key={t.day} className="flex items-center justify-between py-3">
                    <span className="text-sm font-semibold text-black">{t.day}</span>
                    <span className={t.hours === "Closed" ? "text-sm font-medium text-grey-400" : "text-sm font-semibold text-secondary-700"}>
                      {t.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location & contact */}
            <div className="animate-fade-up flex flex-col justify-between rounded-3xl bg-secondary-700 p-8">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-white/10 text-secondary-100">
                    <MapPin className="size-6" aria-hidden />
                  </span>
                  <h3 className="text-xl font-bold text-white">Location & Contact</h3>
                </div>
                <p className="mt-6 text-base leading-relaxed text-white/80">
                  {site.address.line1}
                  <br />
                  {site.address.line2}, {site.address.city}
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-6 flex items-center gap-3 text-base font-semibold text-white transition-colors hover:text-primary"
                >
                  <Phone className="size-5 text-secondary-200" aria-hidden />
                  {site.phone}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={site.whatsappHref} size="md" variant="secondary" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" aria-hidden />
                  WhatsApp Us
                </ButtonLink>
                <ButtonLink
                  href={hero.primaryCta.href}
                  size="md"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  Book an Appointment
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA band ── */}
      <CtaBand
        title={aboutDoctor.cta.title}
        description={aboutDoctor.cta.subtitle}
        buttonLabel={aboutDoctor.cta.buttonLabel}
      />
    </>
  );
}

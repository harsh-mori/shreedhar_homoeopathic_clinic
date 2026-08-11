import Image from "next/image";
import { Sparkles, ArrowRight, Leaf } from "lucide-react";
import { hero, site } from "@/data/site";
import { assets } from "@/constants/assets";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-grey-200/70">
      {/* Background + decorative shapes */}
      <div className="absolute inset-0 bg-primary" aria-hidden />
      <Leaf
        className="absolute -top-6 left-8 size-40 -rotate-12 text-secondary-200"
        aria-hidden
      />
      <Leaf
        className="absolute right-6 top-24 size-24 rotate-12 text-secondary-200"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-24 size-96 rounded-full bg-secondary-200/60"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-14 py-16 lg:grid-cols-2 lg:gap-8 lg:py-24">
          {/* ── Copy ── */}
          <div>
            <p
              className="animate-fade-up mb-5 inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-surface px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-secondary-700"
              style={{ animationDelay: "0ms" }}
            >
              <Sparkles className="size-3.5" aria-hidden />
              {hero.eyebrow}
            </p>

            <h1
              className="animate-fade-up text-4xl font-bold tracking-tight text-balance text-black sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "100ms" }}
            >
              {hero.title.split(hero.highlight)[0]}
              <span className="text-secondary-700">{hero.highlight}</span>
              {hero.title.split(hero.highlight)[1]}
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-grey-600"
              style={{ animationDelay: "200ms" }}
            >
              {hero.subtitle}
            </p>

            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "300ms" }}
            >
              <ButtonLink href={hero.primaryCta.href} size="lg" className="w-full sm:w-auto">
                {hero.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} size="lg" variant="outline" className="w-full sm:w-auto">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>

          </div>

          {/* ── Doctor photo ── */}
          <div className="animate-fade-up relative mx-auto w-fit lg:mx-0 lg:justify-self-end" style={{ animationDelay: "200ms" }}>
            <div className="absolute -inset-4 rounded-[2.5rem] bg-secondary-200" aria-hidden />
            <div className="relative aspect-[4/5] w-72 overflow-hidden rounded-[2rem] border border-grey-200/70 bg-surface sm:w-80">
              <Image
                src={assets.doctorImage.src}
                alt={assets.doctorImage.alt}
                fill
                sizes="(min-width: 640px) 20rem, 18rem"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="relative mt-5 text-center">
              <p className="text-lg font-bold text-black">{site.doctor.name}</p>
              <p className="text-sm font-medium text-grey-500">{site.doctor.title}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import { diseaseCases } from "@/constants/assets";
import { achievements } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function TreatmentGallery() {
  const [active, setActive] = useState(0);
  const current = diseaseCases[active];

  const goTo = (index: number) => {
    setActive((index + diseaseCases.length) % diseaseCases.length);
  };

  return (
    <section className="border-b border-grey-200/70">
      <Container className="py-16 lg:py-24">
        <div className="flex items-center gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary-100 text-secondary-800">
            <Images className="size-7" aria-hidden />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-secondary-700">
              {achievements.gallery.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-black">{achievements.gallery.title}</h2>
          </div>
        </div>
        <p className="mt-4 max-w-2xl leading-relaxed text-grey-600">
          {achievements.gallery.description}
        </p>

        {/* Horizontal tab bar */}
        <div
          role="tablist"
          aria-label="Treatment cases"
          className="mt-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {diseaseCases.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-secondary-700 bg-secondary-700 text-white"
                    : "border-grey-200/70 bg-surface text-grey-700 hover:border-secondary-200 hover:text-secondary-700"
                )}
              >
                <span
                  className={cn(
                    "flex size-6 items-center justify-center rounded-full text-xs font-bold",
                    isActive ? "bg-white/15 text-secondary-200" : "bg-secondary-100 text-secondary-800"
                  )}
                >
                  {i + 1}
                </span>
                {item.title ?? "Case Study"}
              </button>
            );
          })}
        </div>

        {/* Image panel */}
        <div className="mt-4 overflow-hidden rounded-3xl border border-grey-200/70 bg-secondary-950">
          <div className="relative flex min-h-[300px] items-center justify-center p-3 sm:min-h-[420px] sm:p-8">
            <Image
              key={current.key}
              src={current.src}
              alt={current.alt}
              width={current.src.width}
              height={current.src.height}
              className="h-auto max-h-[62vh] w-auto rounded-xl object-contain"
            />

            {/* Prev / Next */}
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              className="absolute left-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
              aria-label="Previous case"
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              className="absolute right-3 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
              aria-label="Next case"
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
          </div>

          {/* Panel footer */}
          <div className="flex items-center justify-between gap-4 border-t border-white/10 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-secondary-200">
                <Images className="size-3.5" aria-hidden />
                Before & After
              </span>
              {current.title && (
                <p className="text-sm font-semibold text-white">{current.title}</p>
              )}
            </div>
            <p className="text-xs font-medium tabular-nums text-white/60">
              {String(active + 1).padStart(2, "0")} / {String(diseaseCases.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

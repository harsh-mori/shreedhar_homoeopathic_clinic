"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Check,
  Images,
  ArrowRight,
  X,
  Expand,
} from "lucide-react";
import { diseaseCases } from "@/constants/assets";
import type { DiseaseCase } from "@/constants/assets";
import { achievements } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

/** Single photo inside the viewer — keeps every aspect ratio intact. */
function CaseImage({
  src,
  alt,
  priority,
  className,
}: {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      sizes="(min-width: 1024px) 45vw, 90vw"
      priority={priority}
      className={cn("h-auto w-auto rounded-xl object-contain", className)}
    />
  );
}

/** Caption pill shown under each half of a before/after pair. */
function PairLabel({ label, tone }: { label: string; tone: "before" | "after" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider",
        tone === "before" ? "bg-white/10 text-white/70" : "bg-secondary-500 text-white"
      )}
    >
      {label}
    </span>
  );
}

function CaseViewer({ item, maxH }: { item: DiseaseCase; maxH: string }) {
  if (item.kind === "pair") {
    return (
      <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
        <figure className="flex min-w-0 flex-1 flex-col items-center gap-2.5">
          <CaseImage
            src={item.before}
            alt={`${item.title} — before treatment`}
            className={maxH}
            priority
          />
          <figcaption>
            <PairLabel label="Before" tone="before" />
          </figcaption>
        </figure>

        <ArrowRight className="mx-auto hidden size-6 shrink-0 text-secondary-200 sm:block" aria-hidden />

        <figure className="flex min-w-0 flex-1 flex-col items-center gap-2.5">
          <CaseImage src={item.after} alt={`${item.title} — after treatment`} className={maxH} />
          <figcaption>
            <PairLabel label="After" tone="after" />
          </figcaption>
        </figure>
      </div>
    );
  }

  return <CaseImage src={item.src} alt={item.alt} className={maxH} priority />;
}

export function TreatmentGallery() {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const current = diseaseCases[active];

  const goTo = useCallback((index: number) => {
    setActive((index + diseaseCases.length) % diseaseCases.length);
  }, []);

  // Arrow keys move through cases; Escape closes the zoomed view.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoom(false);
        setPickerOpen(false);
      } else if (e.key === "ArrowLeft") goTo(active - 1);
      else if (e.key === "ArrowRight") goTo(active + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  useEffect(() => {
    if (!zoom) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [zoom]);

  return (
    <section className="border-b border-grey-200/70 bg-primary-light">
      <Container className="py-16 lg:py-24">
        {/* ── Heading ── */}
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

        {/* ── Case picker (mobile) ── */}
        <div className="relative mt-8 sm:hidden">
          <button
            type="button"
            onClick={() => setPickerOpen((v) => !v)}
            aria-expanded={pickerOpen}
            aria-haspopup="listbox"
            aria-label="Select a treatment case"
            className="flex w-full items-center justify-between gap-3 rounded-2xl border border-grey-200/70 bg-surface px-4 py-3.5 text-left transition-colors"
          >
            <span className="flex min-w-0 items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary-600 text-sm font-bold text-white">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-bold text-black">{current.title}</span>
                <span className="block truncate text-xs text-grey-500">{current.category}</span>
              </span>
            </span>
            <ChevronDown
              className={cn(
                "size-5 shrink-0 text-grey-500 transition-transform duration-200",
                pickerOpen && "rotate-180"
              )}
              aria-hidden
            />
          </button>

          {pickerOpen && (
            <>
              {/* Click-away layer */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setPickerOpen(false)}
                aria-hidden
              />
              <ul
                role="listbox"
                aria-label="Treatment cases"
                className="absolute inset-x-0 top-full z-20 mt-2 max-h-80 overflow-y-auto rounded-2xl border border-grey-200/70 bg-white p-2"
              >
                {diseaseCases.map((item, i) => {
                  const isActive = i === active;
                  return (
                    <li key={item.key}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={isActive}
                        onClick={() => {
                          setActive(i);
                          setPickerOpen(false);
                        }}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors",
                          isActive ? "bg-secondary-50" : "hover:bg-grey-50"
                        )}
                      >
                        <span
                          className={cn(
                            "flex size-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold",
                            isActive
                              ? "bg-secondary-600 text-white"
                              : "bg-secondary-100 text-secondary-800"
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span
                            className={cn(
                              "block truncate text-sm font-bold",
                              isActive ? "text-secondary-800" : "text-black"
                            )}
                          >
                            {item.title}
                          </span>
                          <span className="block truncate text-xs text-grey-500">
                            {item.category}
                          </span>
                        </span>
                        {isActive && (
                          <span className="flex size-5 shrink-0 items-center justify-center rounded-md bg-secondary-600 text-white">
                            <Check className="size-3.5" aria-hidden />
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>

        {/* ── Case tabs (tablet & up) ── */}
        <div
          role="tablist"
          aria-label="Treatment cases"
          className="mt-8 hidden gap-2 overflow-x-auto pb-2 sm:flex [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                {item.title}
              </button>
            );
          })}
        </div>

        {/* ── Viewer panel ── */}
        <div className="mt-4 overflow-hidden rounded-3xl border border-grey-200/70 bg-secondary-950">
          <div className="relative flex min-h-[300px] items-center justify-center px-3 py-5 sm:min-h-[420px] sm:px-16 sm:py-8">
            <CaseViewer item={current} maxH="max-h-[46vh] sm:max-h-[56vh]" />

            {/* Zoom */}
            <button
              type="button"
              onClick={() => setZoom(true)}
              className="absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
              aria-label="View larger"
            >
              <Expand className="size-4" aria-hidden />
            </button>

            {/* Prev / Next */}
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              className="absolute left-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 sm:left-3"
              aria-label="Previous case"
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              className="absolute right-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 sm:right-3"
              aria-label="Next case"
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
          </div>

          {/* Panel footer */}
          <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-secondary-200 sm:inline-flex">
                <Images className="size-3.5" aria-hidden />
                Before &amp; After
              </span>
              <p className="truncate text-sm font-semibold text-white">
                {current.title}
                <span className="ml-2 font-medium text-white/50">{current.category}</span>
              </p>
            </div>
            <p className="shrink-0 text-xs font-medium tabular-nums text-white/60">
              {String(active + 1).padStart(2, "0")} / {String(diseaseCases.length).padStart(2, "0")}
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-grey-500">
          Photographs are shared with patient consent. Results vary from person to person.
        </p>
      </Container>

      {/* ── Zoomed viewer ── */}
      {zoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} — enlarged view`}
          className="fixed inset-0 z-[60] flex flex-col bg-black/90 backdrop-blur-sm"
          onClick={() => setZoom(false)}
        >
          <div className="flex items-center justify-between px-5 py-4">
            <p className="text-sm font-semibold text-white">
              {current.title}
              <span className="ml-2 font-medium text-white/50">{current.category}</span>
            </p>
            <button
              type="button"
              onClick={() => setZoom(false)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>
          <div
            className="flex flex-1 items-center justify-center overflow-auto px-4 pb-8"
            onClick={(e) => e.stopPropagation()}
          >
            <CaseViewer item={current} maxH="max-h-[80vh]" />
          </div>
        </div>
      )}
    </section>
  );
}

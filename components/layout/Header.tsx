"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, Clock, ArrowRight, X } from "lucide-react";
import { site, navLinks, headerCta } from "@/data/site";
import { assets } from "@/constants/assets";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Utility bar — contact info & hours (desktop only) */}
      <div className="hidden bg-secondary-700 text-white md:block">
        <Container>
          <div className="flex h-10 items-center justify-between text-xs font-medium">
            <div className="flex items-center gap-6">
              <a href={site.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-white/80">
                <Phone className="size-3.5" aria-hidden />
                {site.phone}
              </a>
              {site.email && (
                <a href={site.emailHref} className="flex items-center gap-1.5 transition-colors hover:text-white/80">
                  <Mail className="size-3.5" aria-hidden />
                  {site.email}
                </a>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-secondary-200" aria-hidden />
              {site.hoursSummary}
            </div>
          </div>
        </Container>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-colors duration-300",
          scrolled ? "bg-primary/95 backdrop-blur" : "bg-primary"
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
            {/* Brand */}
            <Link href="/" className="flex shrink-0 items-center gap-3">
              <Image
                src={assets.logo.src}
                alt={assets.logo.alt}
                width={assets.logo.width}
                height={assets.logo.height}
                className="size-12 shrink-0 object-contain lg:size-14"
                priority
              />
              <span className="hidden leading-tight sm:block">
                <span className="block text-base font-bold text-black lg:text-lg">{site.name}</span>
                <span className="block text-xs font-medium text-grey-500">{site.tagline}</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-6 lg:flex xl:gap-8" aria-label="Main">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative pb-1 text-sm font-semibold transition-colors",
                      "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:rounded-full after:bg-secondary-600 after:transition-transform after:duration-300",
                      active
                        ? "text-secondary-700 after:scale-x-100"
                        : "text-grey-700 after:scale-x-0 hover:text-secondary-700 hover:after:scale-x-100"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 lg:flex">
              <ButtonLink href={headerCta.href} size="md">
                {headerCta.label}
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
            </div>

            {/* Mobile toggle — animated hamburger */}
            <button
              type="button"
              className="relative inline-flex size-11 items-center justify-center rounded-xl border border-grey-200/70 bg-surface transition-colors lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute block h-0.5 w-5 rounded-full bg-black transition-all duration-300 ease-out",
                  open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "absolute block h-0.5 w-5 rounded-full bg-black transition-all duration-300 ease-out",
                  open ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "absolute block h-0.5 w-5 rounded-full bg-black transition-all duration-300 ease-out",
                  open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
                )}
              />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col border-l border-grey-200/70 bg-primary transition-transform duration-300 ease-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!open}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-grey-200/70 px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src={assets.logo.src}
              alt={assets.logo.alt}
              width={assets.logo.width}
              height={assets.logo.height}
              className="size-10 object-contain"
            />
            <div className="leading-tight">
              <p className="text-sm font-bold text-black">{site.name}</p>
              <p className="text-xs text-grey-500">{site.tagline}</p>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full bg-secondary-50 text-secondary-700 transition-colors hover:bg-secondary-100"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile">
          <ul className="space-y-1">
            {navLinks.map((link, i) => {
              const active = pathname === link.href;
              return (
                <li
                  key={link.href}
                  style={{ transitionDelay: open ? `${i * 60 + 80}ms` : "0ms" }}
                  className={cn(
                    "transition-all duration-300 ease-out",
                    open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                  )}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors",
                      active
                        ? "bg-secondary-600 text-white"
                        : "text-grey-800 hover:bg-secondary-50 hover:text-secondary-700"
                    )}
                  >
                    {link.label}
                    <ArrowRight className={cn("size-4", active ? "text-white" : "text-grey-400")} aria-hidden />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer footer */}
        <div className="border-t border-grey-200/70 px-6 py-5">
          <a href={site.phoneHref} className="flex items-center gap-3 rounded-xl bg-surface px-4 py-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-secondary-100 text-secondary-700">
              <Phone className="size-4" aria-hidden />
            </span>
            <div className="leading-tight">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-grey-500">Call us</p>
              <p className="text-sm font-bold text-black">{site.phone}</p>
            </div>
          </a>
          <div className="mt-3 flex items-center gap-2 px-2 text-xs font-medium text-grey-500">
            <Clock className="size-3.5 text-secondary-600" aria-hidden />
            {site.hoursSummary}
          </div>
          <ButtonLink href={headerCta.href} className="mt-4 w-full" size="md" onClick={() => setOpen(false)}>
            {headerCta.label}
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
        </div>
      </div>
    </>
  );
}

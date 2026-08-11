import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site, navLinks, timings } from "@/data/site";
import { assets } from "@/constants/assets";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src={assets.logo.src}
                alt={assets.logo.alt}
                width={assets.logo.width}
                height={assets.logo.height}
                className="size-12 shrink-0 object-contain"
              />
              <span className="text-lg font-bold">{site.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{site.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Clinic Hours</h3>
            <ul className="mt-4 space-y-2.5">
              {timings.map((t) => (
                <li key={t.day} className="text-sm text-white/70">
                  <p className="font-semibold text-white">{t.day}</p>
                  <p className="flex items-center gap-1.5">
                    <Clock className="size-3.5 text-secondary-200" aria-hidden />
                    {t.hours}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary-200" aria-hidden />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}
                </span>
              </li>
              <li>
                <a href={site.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-white">
                  <Phone className="size-4 shrink-0 text-secondary-200" aria-hidden />
                  {site.phone}
                </a>
              </li>
              {site.email && (
                <li>
                  <a href={site.emailHref} className="flex items-center gap-2.5 transition-colors hover:text-white">
                    <Mail className="size-4 shrink-0 text-secondary-200" aria-hidden />
                    {site.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
          © {year} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

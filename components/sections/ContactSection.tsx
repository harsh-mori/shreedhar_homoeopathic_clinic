import { Phone, MessageCircle, MapPin, Clock, Sparkles } from "lucide-react";
import { contact, site, timings } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ContactForm } from "@/components/sections/ContactForm";

export function ContactSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;

  return (
    <>
      {/* ── Header ── */}
      <section className="border-b border-grey-200/70 bg-primaryLight">
        <Container className="py-12 lg:py-16">
          <p className="animate-fade-up mb-3 inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-surface px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-secondary-700">
            <Sparkles className="size-3.5" aria-hidden />
            {contact.eyebrow}
          </p>
          <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-black sm:text-5xl" style={{ animationDelay: "100ms" }}>
            {contact.title}
          </h1>
          <p className="animate-fade-up mt-4 max-w-2xl text-lg leading-relaxed text-grey-600" style={{ animationDelay: "200ms" }}>
            {contact.subtitle}
          </p>
        </Container>
      </section>

      {/* ── Colored panel: info + form ── */}
      <section className="bg-primaryLight">
        <Container className="py-12 lg:py-16">
          <div className="animate-fade-up grid overflow-hidden rounded-3xl border border-grey-200/70 lg:grid-cols-5">
            {/* Dark green info panel */}
            <div className="flex flex-col bg-secondary-700 p-8 lg:col-span-2 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-white">
                  <Phone className="size-5" aria-hidden />
                </span>
                <h2 className="text-xl font-bold text-white">{contact.infoTitle}</h2>
              </div>

              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-secondary-100">
                    <Phone className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase text-secondary-200">Call us</p>
                    <a href={site.phoneHref} className="mt-1 block font-semibold text-white hover:text-primary">
                      {site.phone}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-secondary-100">
                    <MessageCircle className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase text-secondary-200">WhatsApp</p>
                    <a
                      href={site.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-semibold text-white hover:text-primary"
                    >
                      {site.whatsapp}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-secondary-100">
                    <MapPin className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase text-secondary-200">Address</p>
                    <p className="mt-1 font-semibold leading-relaxed text-white">
                      {site.address.line1}
                      <br />
                      {site.address.line2}, {site.address.city}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-secondary-200" aria-hidden />
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white">{contact.hoursTitle}</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {timings.map((t) => (
                    <li key={t.day} className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-secondary-200">{t.day}</span>
                      <span className={t.hours === "Closed" ? "text-sm font-medium text-secondary-300/70" : "text-sm font-semibold text-white"}>
                        {t.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <ButtonLink href={site.phoneHref} size="sm" variant="secondary">
                  <Phone className="size-4" aria-hidden />
                  Call Now
                </ButtonLink>
                <ButtonLink
                  href={site.whatsappHref}
                  size="sm"
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  WhatsApp
                </ButtonLink>
              </div>
            </div>

            {/* Cream form panel */}
            <div className="bg-primaryLight p-8 lg:col-span-3 lg:p-10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Map ── */}
      <section className="border-t border-grey-200/70 bg-primaryLight">
        <Container className="py-12 lg:py-16">
          <div className="animate-fade-up overflow-hidden rounded-3xl border border-grey-200/70">
            <div className="flex items-center justify-between gap-4 border-b border-grey-200/70 bg-surface px-8 py-4">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <h2 className="text-lg font-bold text-black">{contact.mapTitle}</h2>
              </div>
              <a
                href={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden text-sm font-semibold text-secondary-700 hover:text-secondary-800 sm:block"
              >
                Open in Google Maps
              </a>
            </div>
            <iframe
              src={mapSrc}
              title={`Map to ${site.name}`}
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
    </>
  );
}

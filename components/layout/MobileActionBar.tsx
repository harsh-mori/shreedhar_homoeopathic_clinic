import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { site, headerCta } from "@/data/site";

export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-grey-200/70 bg-primary/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-3 gap-2 p-3">
        <a
          href={site.phoneHref}
          className="flex h-11 items-center justify-center gap-2 rounded-full border border-secondary-600 bg-surface text-sm font-semibold text-secondary-700 transition-colors active:bg-secondary-50"
        >
          <Phone className="size-4" aria-hidden />
          Call
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 items-center justify-center gap-2 rounded-full border border-secondary-600 bg-surface text-sm font-semibold text-secondary-700 transition-colors active:bg-secondary-50"
        >
          <MessageCircle className="size-4" aria-hidden />
          WhatsApp
        </a>
        <Link
          href={headerCta.href}
          className="flex h-11 items-center justify-center gap-2 rounded-full bg-secondary-600 text-sm font-semibold text-white transition-colors active:bg-secondary-700"
        >
          <CalendarCheck className="size-4" aria-hidden />
          Book Now
        </Link>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} in Rajkot — call ${site.phone}, WhatsApp, or visit us at ${site.address.line1}.`,
};

export default function ContactPage() {
  return <ContactSection />;
}

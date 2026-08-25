import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Book Consultation — Contact ${site.name} Rajkot`,
  description: `Book your homoeopathic consultation at ${site.name}, Rajkot. Call ${site.phone}, WhatsApp or visit us at ${site.address.line1}. Dr. Sumant Zankat — personalised classical homoeopathy treatment for all ages.`,
  keywords: [
    "book homeopathy consultation Rajkot",
    "homoeopathic clinic contact Rajkot",
    "Dr Sumant Zankat appointment",
    "homeopathy doctor phone number Rajkot",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Book Consultation — Contact ${site.name} Rajkot`,
    description: `Book your homoeopathic consultation at ${site.name}, Rajkot. Call, WhatsApp or visit us.`,
  },
};

export default function ContactPage() {
  return <ContactSection />;
}

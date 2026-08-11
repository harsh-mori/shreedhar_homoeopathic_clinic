"use client";

import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { contact, site } from "@/data/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Hello ${site.doctor.name}, I would like to book an appointment.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="flex h-full flex-col">
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-xl bg-secondary-100 text-secondary-700">
          <Mail className="size-5" aria-hidden />
        </span>
        <div>
          <h3 className="text-lg font-bold text-black">{contact.form.title}</h3>
          <p className="text-sm text-grey-500">{contact.form.subtitle}</p>
        </div>
      </div>

      <div className="mt-6 flex-1 space-y-4">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-grey-800">
            {contact.form.nameLabel}
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={contact.form.namePlaceholder}
            className="w-full rounded-xl border border-grey-200/70 bg-white px-4 py-3 text-sm text-black placeholder:text-grey-400 focus:border-secondary-400 focus:outline-2 focus:outline-secondary-200"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm font-semibold text-grey-800">
            {contact.form.phoneLabel}
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={contact.form.phonePlaceholder}
            className="w-full rounded-xl border border-grey-200/70 bg-white px-4 py-3 text-sm text-black placeholder:text-grey-400 focus:border-secondary-400 focus:outline-2 focus:outline-secondary-200"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-grey-800">
            {contact.form.messageLabel}
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={contact.form.messagePlaceholder}
            className="w-full resize-none rounded-xl border border-grey-200/70 bg-white px-4 py-3 text-sm text-black placeholder:text-grey-400 focus:border-secondary-400 focus:outline-2 focus:outline-secondary-200"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-secondary-600 px-8 text-base font-semibold text-white transition-colors hover:bg-secondary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600"
      >
        <Send className="size-4" aria-hidden />
        {contact.form.submitLabel}
      </button>
      <p className="mt-3 text-center text-xs text-grey-400">
        Opens WhatsApp with your message — no account needed.
      </p>
    </form>
  );
}

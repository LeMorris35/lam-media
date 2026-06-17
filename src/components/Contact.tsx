"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { bookHref, bookExternal } from "@/lib/site";
import { Mail, Phone, MapPin, Calendar, ArrowRight, Check } from "./icons";

type Status = "idle" | "submitting" | "success" | "error";

const telHref = `tel:${site.phone.replace(/[^\d]/g, "")}`;

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // No form service connected yet → open the visitor's email app pre-filled
    if (!site.formspreeEndpoint) {
      const subject = `Website inquiry from ${data.get("name")}`;
      const body =
        `Business: ${data.get("business")}\n` +
        `Email: ${data.get("email")}\n` +
        `Phone: ${data.get("phone")}\n\n` +
        `${data.get("message")}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Left: heading + contact info */}
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-brand-light">
            Get Started
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something that grows your business
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Tell me a little about your business and what you need. I&apos;ll get
            back to you within one business day — no pressure, no obligation.
          </p>

          {site.bookingUrl && (
            <a
              href={bookHref}
              {...(bookExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-white/90"
            >
              <Calendar className="h-5 w-5 text-brand" />
              Book a free consult call
            </a>
          )}

          <div className="mt-10 space-y-4">
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-white/80 transition-colors hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-light">
                <Mail className="h-5 w-5" />
              </span>
              {site.email}
            </a>
            <a href={telHref} className="flex items-center gap-3 text-white/80 transition-colors hover:text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-light">
                <Phone className="h-5 w-5" />
              </span>
              {site.phone}
            </a>
            <p className="flex items-center gap-3 text-white/80">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-light">
                <MapPin className="h-5 w-5" />
              </span>
              {site.serviceArea}
            </p>
          </div>
        </div>

        {/* Right: the form */}
        <div className="rounded-3xl border border-line bg-white p-7 shadow-2xl sm:p-9">
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <Check className="h-8 w-8" />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-ink">Thanks — message sent!</h3>
              <p className="mt-2 text-slate">
                I&apos;ll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" name="name" required />
                <Field label="Business name" name="business" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
                  What do you need? <span className="text-brand">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your business and what you're looking for…"
                  className="w-full rounded-xl border border-line bg-mist px-4 py-3 text-ink outline-none transition-colors placeholder:text-slate/60 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
                />
              </div>

              {status === "error" && (
                <p className="text-sm font-medium text-red-600">
                  Something went wrong. Please email me directly at {site.email}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-semibold text-white shadow-md shadow-brand/20 transition-colors hover:bg-brand-dark disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Send Message"}
                {status !== "submitting" && <ArrowRight className="h-5 w-5" />}
              </button>
              <p className="text-center text-xs text-slate">
                Prefer to talk? Call or text {site.phone}.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {required && <span className="text-brand">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-line bg-mist px-4 py-3 text-ink outline-none transition-colors placeholder:text-slate/60 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}

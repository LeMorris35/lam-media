"use client";

import { useState } from "react";
import { Check } from "./LawnIcons";

const head = "[font-family:var(--font-poppins)]";

const services = [
  "Lawn Mowing & Edging",
  "Landscape Design",
  "Yard & Leaf Cleanup",
  "Mulch & Garden Beds",
  "Tree & Shrub Trimming",
  "Snow Removal",
  "Something else",
];

const sizes = [
  "Under 1/4 acre",
  "1/4 – 1/2 acre",
  "1/2 – 1 acre",
  "More than 1 acre",
];

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl border border-green-200 bg-white p-8 text-center shadow-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
          <Check className="h-8 w-8" />
        </div>
        <h3 className={`${head} mt-5 text-2xl font-bold text-green-950`}>Request received!</h3>
        <p className="mt-3 text-gray-600">
          Thanks! We&apos;ll reach out within one business day to confirm your free
          estimate.
        </p>
        <p className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-800">
          This is a concept demo — no real request was sent.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 rounded-full border border-green-700 px-6 py-2.5 font-semibold text-green-700 transition-colors hover:bg-green-700 hover:text-white"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-green-200 bg-white p-6 shadow-xl sm:p-8"
    >
      <h3 className={`${head} text-2xl font-bold text-green-950`}>Get your free quote</h3>
      <p className="mt-1 text-sm text-gray-500">No obligation — takes about 30 seconds.</p>

      <div className="mt-6 space-y-4">
        <Field label="Service needed">
          <select required className="lawn-input" defaultValue="">
            <option value="" disabled>
              Choose a service…
            </option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Property size">
            <select required className="lawn-input" defaultValue="">
              <option value="" disabled>
                Select…
              </option>
              {sizes.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>
          <Field label="Preferred start">
            <input type="date" required className="lawn-input" />
          </Field>
        </div>

        <Field label="Name">
          <input type="text" required placeholder="Your name" className="lawn-input" />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email">
            <input type="email" required placeholder="you@email.com" className="lawn-input" />
          </Field>
          <Field label="Phone">
            <input type="tel" placeholder="(555) 000-0000" className="lawn-input" />
          </Field>
        </div>

        <Field label="Anything else? (optional)">
          <textarea rows={2} placeholder="Tell us about your yard…" className="lawn-input" />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-green-700 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-green-800"
      >
        Request My Free Quote
      </button>

      {/* component-scoped input styling */}
      <style>{`
        .lawn-input {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 0.75rem;
          background: #f9fafb;
          padding: 0.65rem 0.85rem;
          color: #1f2937;
          outline: none;
          transition: border-color .15s, box-shadow .15s, background .15s;
        }
        .lawn-input:focus {
          border-color: #15803d;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(21,128,61,.15);
        }
      `}</style>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-green-950">{label}</span>
      {children}
    </label>
  );
}

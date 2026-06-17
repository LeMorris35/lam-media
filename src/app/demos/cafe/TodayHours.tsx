"use client";

import { useEffect, useState } from "react";
import { schedule, dayNames, formatMins } from "./data";

type Info = { open: boolean; text: string; day: string };

export default function TodayHours() {
  const [info, setInfo] = useState<Info | null>(null);

  // Runs in the browser after load, so it reflects the visitor's real day/time.
  useEffect(() => {
    const now = new Date();
    const d = now.getDay();
    const s = schedule[d];
    const mins = now.getHours() * 60 + now.getMinutes();

    let open = false;
    let text: string;
    if (!s) {
      text = "Closed today";
    } else if (mins < s.open) {
      text = `Opens today at ${formatMins(s.open)}`;
    } else if (mins < s.close) {
      open = true;
      text = `Open now · until ${formatMins(s.close)}`;
    } else {
      text = "Closed for the day";
    }
    setInfo({ open, text, day: dayNames[d] });
  }, []);

  // Render nothing until mounted, to avoid a server/client mismatch.
  if (!info) return null;

  return (
    <a
      href="#hours"
      className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-5 py-3 shadow-sm transition-colors hover:border-amber-700"
    >
      <span className="relative flex h-3 w-3">
        {info.open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex h-3 w-3 rounded-full ${
            info.open ? "bg-green-500" : "bg-stone-400"
          }`}
        />
      </span>
      <span className="text-left">
        <span className="block font-semibold text-stone-900">{info.text}</span>
        <span className="block text-xs text-stone-500">
          {info.day} · see all hours →
        </span>
      </span>
    </a>
  );
}

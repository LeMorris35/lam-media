"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { asset } from "@/lib/site";

/**
 * A gentle cross-fading gallery of real app screenshots used in the app cards.
 * Auto-advances; pauses on hover so people can actually look. Falls back to a
 * single static image when only one screenshot is provided.
 */
export default function AppShots({
  images,
  alt,
}: {
  images: readonly string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = setInterval(
      () => setActive((p) => (p + 1) % images.length),
      2800
    );
    return () => clearInterval(id);
  }, [paused, images.length]);

  return (
    <div
      className="relative h-56 w-full overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={asset(src)}
          alt={`${alt} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 440px"
          priority={i === 0}
          className={`object-cover object-top transition-opacity duration-700 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show screenshot ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

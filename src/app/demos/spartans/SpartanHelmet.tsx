import { asset } from "@/lib/site";

/*
  The Missouri Spartans' real logo. Used as the team mark across the demo
  (nav, page headers, footer, hero watermark). object-contain keeps the
  logo from distorting no matter what height/width classes are passed.
  asset() prefixes the base path so the image also works on GitHub Pages.
*/
export default function SpartanHelmet({ className }: { className?: string }) {
  return (
    <img
      src={asset("/spartans/logo.png")}
      alt="Missouri Spartans logo"
      className={`object-contain ${className ?? ""}`}
    />
  );
}

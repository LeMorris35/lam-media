/*
  Shared data for the Cobble & Bean café demo — used by both the main page
  and the "Order Ahead" cart page so there's a single source of truth.
*/

export type MenuItem = { name: string; price: number; desc: string };
export type MenuCategory = { name: string; items: MenuItem[] };

export const cafe = {
  name: "Cobble & Bean Coffee Co.",
  address: "120 Market Street · Your Town, MO",
  phone: "(555) 012-3456",
};

export const menu: MenuCategory[] = [
  {
    name: "Espresso",
    items: [
      { name: "Espresso", price: 3.0, desc: "A rich, classic double shot." },
      { name: "Cappuccino", price: 4.5, desc: "Espresso, steamed milk, airy foam." },
      { name: "Latte", price: 4.75, desc: "Smooth espresso with silky milk." },
      { name: "Mocha", price: 5.25, desc: "Espresso, chocolate, steamed milk." },
      { name: "Cortado", price: 4.25, desc: "Equal parts espresso and warm milk." },
    ],
  },
  {
    name: "Brewed",
    items: [
      { name: "Drip Coffee", price: 2.75, desc: "Our daily small-batch roast." },
      { name: "Pour Over", price: 4.5, desc: "Hand-poured, single origin." },
      { name: "Cold Brew", price: 4.75, desc: "Steeped 18 hours, smooth & bold." },
      { name: "Nitro Cold Brew", price: 5.5, desc: "Creamy, cascading, no dairy." },
    ],
  },
  {
    name: "Not Coffee",
    items: [
      { name: "Chai Latte", price: 4.75, desc: "Spiced black tea & steamed milk." },
      { name: "Matcha Latte", price: 5.0, desc: "Stone-ground ceremonial matcha." },
      { name: "Hot Cocoa", price: 3.75, desc: "Real chocolate, house whip." },
      { name: "Loose-Leaf Tea", price: 3.0, desc: "Ask about today's selection." },
    ],
  },
  {
    name: "From the Bakery",
    items: [
      { name: "Butter Croissant", price: 3.5, desc: "Flaky, baked fresh each morning." },
      { name: "Cinnamon Roll", price: 4.25, desc: "Warm, gooey, cream-cheese glaze." },
      { name: "Blueberry Muffin", price: 3.75, desc: "Bursting with real berries." },
      { name: "Seasonal Scone", price: 3.95, desc: "Rotating flavor — ask our staff." },
    ],
  },
];

// Human-readable hours for the Hours section
export const hours: [string, string][] = [
  ["Monday – Friday", "6:30a – 6:00p"],
  ["Saturday", "7:00a – 6:00p"],
  ["Sunday", "8:00a – 2:00p"],
];

// Machine-readable schedule for the live "open now" check.
// Index 0 = Sunday ... 6 = Saturday. Times are minutes since midnight.
export const schedule: ({ open: number; close: number } | null)[] = [
  { open: 8 * 60, close: 14 * 60 }, // Sun 8:00a – 2:00p
  { open: 6 * 60 + 30, close: 18 * 60 }, // Mon
  { open: 6 * 60 + 30, close: 18 * 60 }, // Tue
  { open: 6 * 60 + 30, close: 18 * 60 }, // Wed
  { open: 6 * 60 + 30, close: 18 * 60 }, // Thu
  { open: 6 * 60 + 30, close: 18 * 60 }, // Fri
  { open: 7 * 60, close: 18 * 60 }, // Sat 7:00a – 6:00p
];

export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const formatPrice = (n: number) => `$${n.toFixed(2)}`;

export function formatMins(m: number) {
  const h24 = Math.floor(m / 60);
  const mm = m % 60;
  const ap = h24 < 12 ? "a" : "p";
  let hh = h24 % 12;
  if (hh === 0) hh = 12;
  return `${hh}:${mm.toString().padStart(2, "0")}${ap}`;
}

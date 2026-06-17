"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { menu, cafe, formatPrice } from "../data";

const serif = "[font-family:var(--font-playfair)]";
const TAX_RATE = 0.081;

// Flat lookup of price by item name (for cart math)
const priceOf: Record<string, number> = Object.fromEntries(
  menu.flatMap((c) => c.items.map((i) => [i.name, i.price]))
);

export default function OrderClient() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [placed, setPlaced] = useState(false);

  const add = (name: string) => setCart((c) => ({ ...c, [name]: (c[name] || 0) + 1 }));
  const dec = (name: string) =>
    setCart((c) => {
      const n = (c[name] || 0) - 1;
      const next = { ...c };
      if (n <= 0) delete next[name];
      else next[name] = n;
      return next;
    });

  const lines = useMemo(
    () => Object.entries(cart).map(([name, qty]) => ({ name, qty, total: qty * priceOf[name] })),
    [cart]
  );
  const itemCount = lines.reduce((s, l) => s + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.total, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  if (placed) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-5 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
          ✓
        </div>
        <h1 className={`${serif} mt-6 text-4xl font-extrabold text-stone-900`}>Order placed!</h1>
        <p className="mt-4 text-lg text-stone-600">
          Thanks for your order — it’ll be ready for pickup in about 15 minutes at{" "}
          {cafe.address}.
        </p>
        <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
          This is a concept demo — no real order was placed and no payment was taken.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => {
              setCart({});
              setPlaced(false);
            }}
            className="rounded-full bg-amber-700 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-amber-800"
          >
            Start a new order
          </button>
          <Link
            href="/demos/cafe"
            className="rounded-full border border-stone-300 bg-white px-7 py-3.5 font-semibold text-stone-800 transition-colors hover:border-amber-700 hover:text-amber-700"
          >
            Back to site
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <header className="border-b border-stone-200 bg-stone-50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link href="/demos/cafe" className="text-sm font-medium text-stone-600 hover:text-amber-700">
            ← Back to Cobble &amp; Bean
          </Link>
          <span className={`${serif} text-lg font-bold text-stone-900`}>Order Ahead</span>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-3">
        {/* Menu */}
        <div className="lg:col-span-2">
          <h1 className={`${serif} text-3xl font-extrabold text-stone-900`}>Build your order</h1>
          <p className="mt-1 text-stone-500">Pickup at {cafe.address}</p>

          <div className="mt-8 space-y-10">
            {menu.map((cat) => (
              <div key={cat.name}>
                <h2 className={`${serif} mb-4 text-2xl font-bold text-stone-900`}>{cat.name}</h2>
                <ul className="space-y-3">
                  {cat.items.map((item) => {
                    const qty = cart[item.name] || 0;
                    return (
                      <li
                        key={item.name}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white p-4"
                      >
                        <div className="min-w-0">
                          <p className="font-semibold text-stone-900">{item.name}</p>
                          <p className="truncate text-sm text-stone-500">{item.desc}</p>
                          <p className="mt-0.5 text-sm font-semibold text-amber-700">
                            {formatPrice(item.price)}
                          </p>
                        </div>
                        {qty === 0 ? (
                          <button
                            onClick={() => add(item.name)}
                            className="shrink-0 rounded-full border border-amber-700 px-5 py-2 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-700 hover:text-white"
                          >
                            Add
                          </button>
                        ) : (
                          <Stepper qty={qty} onAdd={() => add(item.name)} onDec={() => dec(item.name)} />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div id="cart" className="scroll-mt-6 lg:col-span-1">
          <div className="lg:sticky lg:top-6">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className={`${serif} text-2xl font-bold text-stone-900`}>Your order</h2>

              {lines.length === 0 ? (
                <p className="mt-6 text-stone-500">Your cart is empty. Add something tasty! ☕</p>
              ) : (
                <>
                  <ul className="mt-5 space-y-4">
                    {lines.map((l) => (
                      <li key={l.name} className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <p className="truncate font-medium text-stone-900">{l.name}</p>
                          <p className="text-sm text-stone-500">{formatPrice(priceOf[l.name])} each</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Stepper qty={l.qty} onAdd={() => add(l.name)} onDec={() => dec(l.name)} small />
                          <span className="w-14 text-right font-semibold text-stone-900">
                            {formatPrice(l.total)}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 space-y-2 border-t border-stone-100 pt-4 text-sm">
                    <Row label="Subtotal" value={formatPrice(subtotal)} />
                    <Row label="Tax" value={formatPrice(tax)} />
                    <div className="flex justify-between pt-2 text-base font-bold text-stone-900">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>
                </>
              )}

              <button
                disabled={itemCount === 0}
                onClick={() => setPlaced(true)}
                className="mt-6 w-full rounded-full bg-amber-700 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-amber-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Place Order{itemCount > 0 ? ` · ${formatPrice(total)}` : ""}
              </button>
              <p className="mt-3 text-center text-xs text-stone-400">
                Demo only — no payment is taken.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky summary */}
      {itemCount > 0 && (
        <div className="sticky bottom-0 z-30 border-t border-stone-200 bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] lg:hidden">
          <a
            href="#cart"
            className="flex items-center justify-between rounded-full bg-amber-700 px-6 py-3 font-semibold text-white"
          >
            <span>
              {itemCount} item{itemCount > 1 ? "s" : ""}
            </span>
            <span>View order · {formatPrice(total)}</span>
          </a>
        </div>
      )}
    </>
  );
}

function Stepper({
  qty,
  onAdd,
  onDec,
  small,
}: {
  qty: number;
  onAdd: () => void;
  onDec: () => void;
  small?: boolean;
}) {
  const btn = `flex items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800 transition-colors hover:bg-amber-200 ${
    small ? "h-7 w-7 text-sm" : "h-9 w-9"
  }`;
  return (
    <div className="flex shrink-0 items-center gap-2">
      <button onClick={onDec} className={btn} aria-label="Remove one">
        −
      </button>
      <span className={`text-center font-semibold text-stone-900 ${small ? "w-4 text-sm" : "w-5"}`}>
        {qty}
      </span>
      <button onClick={onAdd} className={btn} aria-label="Add one">
        +
      </button>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-stone-600">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

import type { Metadata } from "next";
import OrderClient from "./OrderClient";

export const metadata: Metadata = {
  title: "Order Ahead — Cobble & Bean Coffee Co. (Concept Demo)",
  description: "Sample online ordering experience built by LAM Media & Web Company.",
};

export default function OrderPage() {
  return <OrderClient />;
}

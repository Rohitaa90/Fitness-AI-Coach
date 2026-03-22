import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - FITCOACH AI Plans & Features",
  description: "Explore FITCOACH AI pricing options. Get started with personalized fitness coaching at affordable rates. Choose the plan that fits your goals.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

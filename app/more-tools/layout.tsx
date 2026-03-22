import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "More Tools - FITCOACH AI Resources & Utilities",
  description: "Discover additional fitness tools, resources, and utilities from FITCOACH AI to enhance your fitness journey and maximize your results.",
};

export default function MoreToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

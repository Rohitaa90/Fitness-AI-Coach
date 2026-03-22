import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About FITCOACH AI - Our Mission & Vision",
  description: "Learn about FITCOACH AI, our mission to democratize fitness coaching, and how our AI-powered platform helps you achieve your fitness goals with personalized guidance.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

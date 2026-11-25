import type { Metadata } from "next";

import { AboutView } from "@/features/about";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return <AboutView />;
}

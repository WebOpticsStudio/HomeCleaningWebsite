import type { Metadata } from "next";

import { ServicesView } from "@/features/services";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return <ServicesView />;
}

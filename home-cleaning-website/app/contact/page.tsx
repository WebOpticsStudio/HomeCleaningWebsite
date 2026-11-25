import type { Metadata } from "next";

import { ContactView } from "@/features/contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return <ContactView />;
}

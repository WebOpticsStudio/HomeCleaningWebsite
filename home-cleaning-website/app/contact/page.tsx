import type { Metadata } from "next";
import { ContactView } from "@/features/contact";

export const metadata: Metadata = {
  title: "Contact Us | CleanHome — Let's Make Your Home Sparkle Together",
  description: "Get in touch with CleanHome. Have a question or need a cleaning service? Call, WhatsApp, email, or send us a message today!",
};

export default function ContactPage() {
  return <ContactView />;
}

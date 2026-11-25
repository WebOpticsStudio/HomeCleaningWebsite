import Link from "next/link";

import { routes } from "@/config/routes";

export default function NotFound() {
  return (
    <main>
      <h1>Page not found</h1>
      <Link href={routes.services}>Go to services</Link>
    </main>
  );
}

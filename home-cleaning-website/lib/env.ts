/**
 * Centralised access to public environment variables.
 * NEXT_PUBLIC_* values must be referenced statically so Next.js can inline them.
 */
export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? "Home Cleaning",
} as const;

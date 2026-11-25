import { env } from "@/lib/env";
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: env.siteName,
  url: env.siteUrl,
};

import type { routes } from "@/config/routes";

export type SiteConfig = {
  name: string;
  url: string;
};

export type AppRoute = (typeof routes)[keyof typeof routes];

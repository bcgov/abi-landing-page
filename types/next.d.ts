// Type fixes for Next.js dynamic route components
import type { NextPage } from "next";

declare module "next" {
  export type PageProps = {
    params?: Record<string, string>;
    searchParams?: Record<string, string | string[]>;
  };
}

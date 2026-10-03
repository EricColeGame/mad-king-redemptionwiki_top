import type { LucideIcon } from "lucide-react";

export const NAVIGATION_CONFIG: ReadonlyArray<{
  key: string;
  path: string;
  icon: LucideIcon;
  isContentType: boolean;
}> = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));

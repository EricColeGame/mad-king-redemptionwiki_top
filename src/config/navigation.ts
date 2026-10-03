import type { LucideIcon } from "lucide-react";
import { BookOpen, CalendarClock, Gamepad2, MessageCircle, MonitorSmartphone, Swords, Users } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "release", path: "/release", icon: CalendarClock, isContentType: true },
  { key: "platforms", path: "/platforms", icon: MonitorSmartphone, isContentType: true },
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "combat", path: "/combat", icon: Swords, isContentType: true },
  { key: "modes", path: "/modes", icon: Gamepad2, isContentType: true },
  { key: "community", path: "/community", icon: MessageCircle, isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));

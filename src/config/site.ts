export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Mad King Redemption Wiki",
  shortName: "Mad King Redemption",
  logoText: "MK",
  tagline: "Guides, Heroes, Bosses & Builds",
  description: "Your ultimate guide to Mad King Redemption! Explore heroes, bosses, builds, Forbidden Powers, progression tips and strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mad-king-redemptionwiki.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mad-king-redemptionwiki.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/2369580/Mad_King_Redemption/",
  heroVideoId: "Goohtr3TzVk", // Mad King Redemption - Official Gameplay Trailer (SECRET MISSION GAMES)
  social: {
    discord: "https://discord.gg/r2Ywd8aywt",
    youtube: "https://www.youtube.com/@secret_mission_games",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};

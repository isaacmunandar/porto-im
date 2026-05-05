export interface NavLink {
  label: string;
  href: string;
  isCta?: boolean;
}

export interface HeroStat {
  num: string;
  suffix: string;
  label: string;
}

export interface MarqueeItem {
  text: string;
}

export interface Credential {
  title: string;
  detail: string;
}

export interface Service {
  num: string;
  tag: string;
  title: string;
  desc: string;
  pills: string[];
}

export interface MaxyStat {
  num: string;
  label: string;
}

export interface Resource {
  type: string;
  title: string;
  desc: string;
  cta: string;
}

export interface SocialPost {
  id: string;
  platform: "instagram" | "tiktok" | "youtube" | "linkedin";
  photo: string;
  url: string;
  handle: string;
  caption: string;
}

export interface ThoughtPost {
  id: string;
  platform: "linkedin";
  photo: string;
  url: string;
  handle: string;
  caption: string;
  tag: string;
  title: string;
  excerpt?: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export type Platform = "instagram" | "tiktok" | "youtube" | "linkedin";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinksMap {
  services: FooterLink[];
  content: FooterLink[];
  company: FooterLink[];
}

export interface FooterSocial {
  label: string;
  href: string;
  aria: string;
}

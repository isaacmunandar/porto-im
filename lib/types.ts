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

export interface Thought {
  tag: string;
  title: string;
  excerpt?: string;
  meta: string;
  isFeatured?: boolean;
  gradient?: string;
}

export interface Resource {
  type: string;
  title: string;
  desc: string;
  cta: string;
}

export interface SocialPost {
  text: string;
  bg: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinksMap {
  services: FooterLink[];
  content: FooterLink[];
  company: FooterLink[];
}

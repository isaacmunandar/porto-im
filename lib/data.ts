import type {
  NavLink,
  HeroStat,
  MarqueeItem,
  Credential,
  Service,
  MaxyStat,
  Resource,
  SocialPost,
  ThoughtPost,
  Platform,
  FooterLink,
  FooterLinksMap,
  FooterSocial,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "MAXY", href: "#maxy" },
  { label: "Thoughts", href: "#thoughts" },
  { label: "Resources", href: "#resources" },
  { label: "Work With Me", href: "#contact", isCta: true },
];

export const HERO_STATS: HeroStat[] = [
  { num: "3", suffix: "K+", label: "Talents Empowered" },
  { num: "$1", suffix: "M+", label: "Startup Revenue" },
  { num: "5", suffix: "+", label: "Years in AI" },
];

export const MARQUEE_ITEMS: MarqueeItem[] = [
  { text: "AI Transformation" },
  { text: "Agentic AI" },
  { text: "AI Automation Workflows" },
  { text: "Enterprise AI Training" },
  { text: "AI Talent Supply" },
  { text: "MAXY Academy" },
  { text: "Southeast Asia" },
  { text: "Gen Z Leadership" },
];

export const CREDENTIALS: Credential[] = [
  { title: "CEO & Co-Founder — MAXY Academy", detail: "2021 — Present" },
  { title: "Serial Entrepreneur", detail: "Multiple Ventures" },
  { title: "AI & Automation Practitioner", detail: "5+ Years" },
  { title: "TBN Indonesia — Social Impact", detail: "Active" },
  { title: "University of Portland", detail: "Alumni" },
];

export const SERVICES: Service[] = [
  {
    num: "01",
    tag: "Enterprise",
    title: "Enterprise AI Transformation",
    desc: "End-to-end AI implementation for organizations. From strategy and roadmap to team training and deployment.",
    pills: ["AI Strategy", "Roadmap", "Training"],
  },
  {
    num: "02",
    tag: "Automation",
    title: "AI Automation Workflows",
    desc: "Custom agentic AI systems and automation workflows for your specific operations. Systems that work while you sleep.",
    pills: ["Agentic AI", "Automation", "Systems"],
  },
  {
    num: "03",
    tag: "Talent",
    title: "AI Talent Supply",
    desc: "Plug-ready AI talent from MAXY Academy's pipeline. Trained, certified, and ready to contribute from day one.",
    pills: ["Placement", "AI Skills", "Pipeline"],
  },
];

export const MAXY_STATS: MaxyStat[] = [
  { num: "3K+", label: "Talents Trained & Placed" },
  { num: "B2C", label: "Students & Young Talent" },
  { num: "B2B", label: "Enterprise & Government" },
  { num: "SEA", label: "Regional Expansion" },
];

export const LINKEDIN_POSTS: ThoughtPost[] = [
  {
    id: "li-1",
    platform: "linkedin",
    photo: "/sosmed/linkedin/linkedin-1.jpg",
    url: "https://www.linkedin.com/posts/isaacmunandar_two-weeks-ago-we-opened-maxy-ai-hub-the-activity-7455572990756556801-x63y",
    handle: "@isaac.munandar",
    caption:
      "Standing in that room on opening day, I realised: the building was never the achievement. The people who built it were.",
    tag: "Leadership",
    title: "MAXY AI Hub: The Building Was Never the Achievement",
    excerpt:
      "Standing in that room on opening day, I realised: the building was never the achievement. The people who built it were.",
    date: "May 2026",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: "li-2",
    platform: "linkedin",
    photo: "/sosmed/linkedin/linkedin-2.jpg",
    url: "https://www.linkedin.com/posts/isaacmunandar_most-people-use-claude-like-a-search-engine-activity-7456568225254875136-Gluo",
    handle: "@isaac.munandar",
    caption:
      "The people pulling real value from Claude in 2026 are building systems, not asking questions. Five inputs. Sharper output. Every time.",
    tag: "AI Productivity",
    title: "Most People Use Claude Like a Search Engine. Here's the Fix.",
    excerpt:
      "The people pulling real value from Claude in 2026 are building systems, not asking questions. Five inputs. Sharper output. Every time.",
    date: "May 2026",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: "li-3",
    platform: "linkedin",
    photo: "/sosmed/linkedin/linkedin-3.jpg",
    url: "https://www.linkedin.com/posts/isaacmunandar_three-years-ago-maxy-academy-almost-didn-activity-7440668465050529792-txcR",
    handle: "@isaac.munandar",
    caption:
      "We saw companies struggling to hire practical talent. We saw students graduating with no applied skills. There was a clear gap. So we built something.",
    tag: "Entrepreneurship",
    title: "Three Years Ago, MAXY Academy Almost Didn't Exist",
    excerpt:
      "We saw companies struggling to hire practical talent. We saw students graduating with no applied skills. There was a clear gap. So we built something.",
    date: "April 2026",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: "li-4",
    platform: "linkedin",
    photo: "/sosmed/linkedin/linkedin-4.jpg",
    url: "https://www.linkedin.com/posts/isaacmunandar_1-training-day-20000-saved-90-days-later-activity-7457051503493783553-UJJF",
    handle: "@isaac.munandar",
    caption:
      "Not from new software. Not from a consultant. From training leaders to work differently. The team follows what the top does.",
    tag: "Enterprise AI",
    title: "1 Training Day. $20,000 Saved. 90 Days Later.",
    excerpt:
      "Not from new software. Not from a consultant. From training leaders to work differently. The team follows what the top does.",
    date: "May 2026",
    readTime: "4 min read",
    featured: false,
  },
];

export const INSTAGRAM_POSTS: SocialPost[] = [
  {
    id: "ig-1",
    platform: "instagram",
    photo: "/sosmed/instagram/instagram-1.jpg",
    url: "https://www.instagram.com/reel/DXzQTzfPC0j/",
    handle: "@isaac.munandar",
    caption:
      "Masalah umum saat bikin slide: mulai dari desain, lalu stuck di tengah jalan. Dengan NotebookLM, prosesnya dibalik.",
  },
  {
    id: "ig-2",
    platform: "instagram",
    photo: "/sosmed/instagram/instagram-2.jpg",
    url: "https://www.instagram.com/reel/DXwG8GbvXBd/",
    handle: "@isaac.munandar",
    caption:
      "Budget iklan mahal itu opsional sekarang. Aku cuma pakai Claude buat nulis prompt sinematik, terus paste ke Higgsfield.",
  },
  {
    id: "ig-3",
    platform: "instagram",
    photo: "/sosmed/instagram/instagram-3.jpg",
    url: "https://www.instagram.com/reel/DXMJ2tEj5CS/",
    handle: "@isaac.munandar",
    caption:
      "China mulai hapus jurusan kuliah… karena AI. Gelar aja nggak cukup. Yang menang bisa kerja bareng AI.",
  },
  {
    id: "ig-4",
    platform: "instagram",
    photo: "/sosmed/instagram/instagram-4.jpg",
    url: "https://www.instagram.com/reel/DXZZ0Fjj8Eu/",
    handle: "@isaac.munandar",
    caption:
      "Aku pernah kehilangan orang terbaik di tim. Bukan karena gaji — tapi karena mereka nggak ngerasa dihargai.",
  },
];

export const TIKTOK_POSTS: SocialPost[] = [
  {
    id: "tt-1",
    platform: "tiktok",
    photo: "/sosmed/tiktok/tiktok-1.png",
    url: "https://vt.tiktok.com/ZS9XqGPco/",
    handle: "@isaac.munandar",
    caption:
      "AI teks terbaik 2026: Gemini vs Claude vs alternatif. Banyak orang pilih AI karena hype — bukan karena kebutuhan.",
  },
  {
    id: "tt-2",
    platform: "tiktok",
    photo: "/sosmed/tiktok/tiktok-2.png",
    url: "https://vt.tiktok.com/ZS9XqxBgY/",
    handle: "@isaac.munandar",
    caption:
      "Google baru rilis AI gratis yang bisa jalan di HP tanpa internet. Namanya Gemma 4. Ini bukan update biasa.",
  },
  {
    id: "tt-3",
    platform: "tiktok",
    photo: "/sosmed/tiktok/tiktok-3.png",
    url: "https://vt.tiktok.com/ZS9Xqtcks/",
    handle: "@isaac.munandar",
    caption:
      "China mulai hapus jurusan kuliah karena AI. Skill AI sekarang bukan keunggulan — itu syarat minimum.",
  },
  {
    id: "tt-4",
    platform: "tiktok",
    photo: "/sosmed/tiktok/tiktok-4.png",
    url: "https://vt.tiktok.com/ZS9XqES2t/",
    handle: "@isaac.munandar",
    caption:
      "Robot udah masuk pabrik. Toyota, BMW — mereka udah pakai. Skill apa yang bikin kamu masih relevan?",
  },
];

export const YOUTUBE_POSTS: SocialPost[] = [
  {
    id: "yt-1",
    platform: "youtube",
    photo: "/sosmed/youtube/youtube-1.jpg",
    url: "https://youtube.com/shorts/NM7tJ8WCD74",
    handle: "@isaac.munandar",
    caption:
      "NotebookLM jadi otak kamu buat riset. AI Tools untuk produktivitas.",
  },
  {
    id: "yt-2",
    platform: "youtube",
    photo: "/sosmed/youtube/youtube-2.jpg",
    url: "https://youtube.com/shorts/dFUBiR-XjQE",
    handle: "@isaac.munandar",
    caption: "Kamu mahasiswa, mau hasilin uang dari AI? Ini caranya.",
  },
  {
    id: "yt-3",
    platform: "youtube",
    photo: "/sosmed/youtube/youtube-3.jpg",
    url: "https://youtube.com/shorts/TYgNpREJydM",
    handle: "@isaac.munandar",
    caption:
      "China mulai hapus jurusan kuliah karena AI. Future of work berubah drastis.",
  },
  {
    id: "yt-4",
    platform: "youtube",
    photo: "/sosmed/youtube/youtube-4.jpg",
    url: "https://youtube.com/shorts/uiNLHbp5teM",
    handle: "@isaac.munandar",
    caption:
      "Solusi lulus kuliah nggak dapat kerjaan. Di era AI, perusahaan cari yang bisa deliver value.",
  },
];

interface SocialPlatformEntry {
  key: Platform;
  label: string;
  posts: (SocialPost | ThoughtPost)[];
}

export const SOCIAL_PLATFORMS: SocialPlatformEntry[] = [
  { key: "instagram", label: "Instagram", posts: INSTAGRAM_POSTS },
  { key: "tiktok", label: "TikTok", posts: TIKTOK_POSTS },
  { key: "youtube", label: "YouTube", posts: YOUTUBE_POSTS },
  { key: "linkedin", label: "LinkedIn", posts: LINKEDIN_POSTS },
];

export const RESOURCES: Resource[] = [
  {
    type: "AI Tools Guide",
    title: "20 AI Tools Every Business Leader Needs in 2026",
    desc: "Curated list of production-ready AI tools by function — marketing, ops, finance, HR. No fluff, just what works.",
    cta: "Download Free Guide →",
  },
  {
    type: "Automation Workflow",
    title: "5 AI Automation Workflows to Implement This Week",
    desc: "Step-by-step automation blueprints for content, sales, customer support, reporting, and HR onboarding.",
    cta: "Download Workflows →",
  },
  {
    type: "Prompt Library",
    title: "Custom AI Prompts for CEOs, HR, Marketing & Sales",
    desc: "Battle-tested prompts organized by role and function. Copy, customize, use. Built from real enterprise work.",
    cta: "Access Prompt Library →",
  },
];

export const FOOTER_LINKS: FooterLinksMap = {
  services: [
    { label: "Enterprise AI Transformation", href: "#" },
    { label: "AI Automation Workflows", href: "#" },
    { label: "AI Talent Supply", href: "#" },
    { label: "AI Training Programs", href: "#" },
  ] as FooterLink[],
  content: [
    { label: "Thoughts on AI", href: "#" },
    { label: "Free Resources", href: "#" },
    { label: "Newsletter", href: "#" },
    { label: "Social Feed", href: "#" },
  ] as FooterLink[],
  company: [
    { label: "About Isaac", href: "#" },
    { label: "MAXY Academy", href: "https://maxy.academy" },
    { label: "Work With Me", href: "#" },
    { label: "Contact", href: "#" },
  ] as FooterLink[],
};

export const FOOTER_SOCIALS: FooterSocial[] = [
  {
    label: "in",
    href: "https://linkedin.com/in/isaacmunandar",
    aria: "LinkedIn",
  },
  {
    label: "ig",
    href: "https://instagram.com/isaac.munandar",
    aria: "Instagram",
  },
  { label: "tt", href: "https://tiktok.com/@isaac.munandar", aria: "TikTok" },
  { label: "yt", href: "https://youtube.com/@isaac.munandar", aria: "YouTube" },
];

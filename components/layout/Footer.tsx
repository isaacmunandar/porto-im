"use client";
import { FOOTER_LINKS } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-5 md:px-10 lg:px-20 pt-20 pb-10 border-t border-brand-border">
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-15 mb-1.5">
        {/* {Brand column} */}
        <div>
          <div className="font-condensed font-black text-[28px] uppercase tracking-[0.04em] text-brand-black mb-4">
            Isaac <span className="text-brand-blue">Munandar</span>
          </div>
          <div className="font-condensed font-bold text-[12px] tracking-[0.12em] uppercase text-brand-muted mb-7">
            AI Expert · Serial Entrepreneur · Builder of People
          </div>
          <p>
            Building AI-ready organizations and the next generation of leaders
            across Southeast Asia.
          </p>
          <div className="flex gap-2">
            {[
              {
                label: "in",
                href: "https://linkedin.com/in/isaacmunandar",
                ariaLabel: "LinkedIn",
              },
              {
                label: "ig",
                href: "https://instagram.com/isaac.munandar",
                ariaLabel: "Instagram",
              },
              {
                label: "tt",
                href: "https://tiktok.com/@isaac.munandar",
                ariaLabel: "TikTok",
              },
              {
                label: "yt",
                href: "https://youtube.com/@isaac.munandar",
                ariaLabel: "YouTube",
              },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.ariaLabel}
                className="w-9 h-9 border border-brand-border flex items-center justify-center font-condensed text-[11px] font-bold tracking-[0.05em] text-brand-muted uppercase no-underline hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-200"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* {Services} */}
        <div>
          <div className="font-condensed font-bold text-[12px] tracking-[0.15em] uppercase text-brand-black mb-5">
            Services
          </div>
          <ul className="flex flex-col gap-[10px] list-none">
            {FOOTER_LINKS.services.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.label}
                  className="text-[14px] font-light text-brand-muted no-underline hover:text-brand-blue transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div>
          <div className="font-condensed font-bold text-[12px] tracking-[0.15em] uppercase text-brand-black mb-5">
            Content
          </div>
          <ul className="flex flex-col gap-[10px] list-none">
            {FOOTER_LINKS.content.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-[14px] font-light text-brand-muted no-underline hover:text-brand-blue transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="font-condensed font-bold text-[12px] tracking-[0.15em] uppercase text-brand-black mb-5">
            Company
          </div>
          <ul className="flex flex-col gap-[10px] list-none">
            {FOOTER_LINKS.company.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-[14px] font-light text-brand-muted no-underline hover:text-brand-blue transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-brand-border">
        <div className="text-[12px] text-brand-muted tracking-[0.05em]">
          © 2026 Isaac Munandar. All rights reserved.
        </div>
        <div className="font-condensed font-bold text-[13px] tracking-[0.1em] uppercase text-brand-muted">
          Driven by AI.{" "}
          <span className="text-brand-blue">Led by Humanity.</span>
        </div>
      </div>
    </footer>
  );
}

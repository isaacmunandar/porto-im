import Link from "next/link";
import { FOOTER_LINKS, FOOTER_SOCIALS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-5 md:px-10 lg:px-20 pt-20 pb-10 border-t border-brand-border">
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-15 mb-10 md:mb-15">
        {/* Brand column */}
        <div>
          <div className="font-condensed font-black text-[28px] uppercase tracking-[0.04em] text-brand-black mb-4">
            Isaac <span className="text-brand-blue">Munandar</span>
          </div>
          <div className="font-condensed font-bold text-[12px] tracking-[0.12em] uppercase text-brand-muted mb-7">
            AI Expert · Serial Entrepreneur · Builder of People
          </div>
          <p className="text-[14px] font-light text-brand-muted leading-[1.7] mb-8 max-w-[280px]">
            Building AI-ready organizations and the next generation of leaders
            across Southeast Asia.
          </p>
          <div className="flex gap-2">
            {FOOTER_SOCIALS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.aria}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-brand-border flex items-center justify-center font-condensed text-[11px] font-bold tracking-[0.05em] text-brand-muted uppercase no-underline hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-200"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="font-condensed font-bold text-[12px] tracking-[0.15em] uppercase text-brand-black mb-5">
            Services
          </div>
          <ul className="flex flex-col gap-[10px] list-none">
            {FOOTER_LINKS.services.map((l) => (
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

      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 pt-8 border-t border-brand-border">
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

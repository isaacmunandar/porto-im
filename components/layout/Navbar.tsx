"use client";
import { NAV_LINKS } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between h-[68px] px-5 md:px-10 lg:px-20 bg-white border-b border-brand-border">
      <Link
        href="#home"
        className="font-condensed font-black text-[22px] uppercase tracking-[0.04em] text-brand-black no-underline"
      >
        Isaac <span className="text-brand-blue">Mundandar</span>
      </Link>

      {/* {Desktop Nav} */}
      <ul className="hidden md:flex items-center gap-10 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={
                link.isCta
                  ? "text-[12px] font-medium tracking-[0.12em] uppercase no-underline bg-brand-blue text-white px-[22px] py-[10px] hover:bg-brand-black transition-colors duration-200"
                  : "text-[12px] font-medium tracking-[0.12em] uppercase text-brand-muted no-underline hover:text-brand-black transition-colors duration-200"
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* {Mobile Hamburger} */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        aria-label="Toggle menu"
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span className="block w-5 h-[2px] bg-brand-black"></span>
        <span className="block w-5 h-[2px] bg-brand-black"></span>
        <span className="block w-5 h-[2px] bg-brand-black"></span>
      </button>

      {/* {Mobile Dropdown} */}
      {mobileOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-white border-b border-brand-border flex flex-col md:hidden z-[99]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[13px] font-medium tracking-[0.12em] uppercase text-brand-muted hover:text-brand-black px-5 py-4 border-b border-brand-border no-underline transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

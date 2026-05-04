"use client";

import { useRevealChildren } from "@/hooks/useRevealChildren";
import SectionLabel from "../ui/SectionLabel";
import Link from "next/link";
import { THOUGHTS } from "@/lib/data";

export default function ThoughtsSection() {
  const sectionRef = useRevealChildren<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="thoughts"
      className="bg-white px-5 md:px-10 lg:px-20 py-[120px]"
    >
      {/* {Top bar} */}
      <div className="fade-up flex flex-col sm:flex-row justify-between sm:items-end gap-8 mb-16">
        <div>
          <SectionLabel>Thougts on AI</SectionLabel>
          <h2 className="font-condensed font-black text-section leading-[0.95] uppercase tracking-[-0.5px] text-brand-black">
            What I&apos;m
            <br />
            <span className="text-brand-blue">Thinking</span>
            <br />
            <span className="text-outline-black">About AI</span>
          </h2>
        </div>
        <Link
          href="#"
          className="font-condensed font-bold text-[13px] tracking-[0.12em] uppercase text-brand-black no-underline inline-flex items-center gap-[10px] border-b-2 border-brand-black pb-[2px] hover:text-brand-blue hover:border-brand-blue transition-colors duration-200 shrink-0 self-end"
        >
          View All <span className="text-[16px]">→</span>
        </Link>
      </div>

      {/* {Grid} */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-[2px] bg-brand-border">
        {THOUGHTS.map((thought, i) => (
          <div
            key={thought.title}
            data-cursor-hover
            className={`group bg-white hover:bg-brand-gray cursor-pointer overflow-hidden transition-colors duration-200 fade-up ${
              i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""
            }`}
          >
            <div
              className={
                thought.isFeatured
                  ? "w-full aspect-[4/3]"
                  : "w-full aspect-[16/9]"
              }
              style={
                thought.gradient
                  ? { background: thought.gradient }
                  : { background: "linear-gradient(135deg, #D8D8D8, #B0B0B0)" }
              }
            />
            <div className="px-8 pt-8 pb-10">
              <div className="font-condensed font-bold text-[11px] tracking-[0.18em] uppercase text-brand-blue mb-3">
                {thought.tag}
              </div>
              <h3
                className={`font-condensed font-extrabold uppercase leading-[1.15] tracking-[0.01em] text-brand-black group-hover:text-brand-blue transition-colors duration-200 mb-3 ${
                  thought.isFeatured ? "text-[36px]" : "text-[24px]"
                }`}
              >
                {thought.title}
              </h3>
              {thought.excerpt && (
                <p className="text-[14px] font-light text-brand-muted leading-[1.6] mb-4">
                  {thought.excerpt}
                </p>
              )}
              <div className="text-[11px] tracking-[0.08em] text-brand-muted uppercase">
                {thought.meta}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

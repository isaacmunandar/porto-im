"use client";

import { useRevealChildren } from "@/hooks/useRevealChildren";
import SectionLabel from "../ui/SectionLabel";
import { RESOURCES } from "@/lib/data";
import Link from "next/link";

export default function ResourcesSection() {
  const sectionRef = useRevealChildren<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="resources"
      className="bg-brand-yellow px-5 md:px-10 lg:px-20 py-[120px]"
    >
      <div className="fade-up">
        <SectionLabel>Free Resources</SectionLabel>
      </div>

      <h2 className="fade-up delay-1 font-condensed font-black text-section leading-[0.95] uppercase tracking-[-0.5px] text-brand-black">
        Tools &amp; Workflows
        <br />
        You Can Use
        <br />
        Today.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-16 bg-black/15">
        {RESOURCES.map((resource, i) => (
          <div
            key={resource.title}
            data-cursor-hover
            className={`group bg-brand-yellow hover:bg-brand-black px-11 py-[52px] relative cursor-pointer transition-colors duration-300 fade-up ${
              i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""
            }`}
          >
            <div className="inline-block bg-brand-black group-hover:bg-brand-yellow text-brand-yellow group-hover:text-brand-black font-condensed text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-7 transition-colors duration-300">
              Free
            </div>

            <div className="text-[11px] font-medium tracking-[0.15em] uppercase text-black/50 group-hover:text-brand-yellow mb-4 transition-colors duration-300">
              {resource.type}
            </div>

            <h3 className="font-condensed font-extrabold text-[28px] uppercase leading-[1.1] tracking-[0.01em] text-brand-black group-hover:text-white mb-4 transition-colors duration-300">
              {resource.title}
            </h3>

            <p className="text-[14px] font-light text-black/60 group-hover:text-white/50 leading-[1.7] mb-9 transition-colors duration-300">
              {resource.desc}
            </p>

            <Link
              href="#"
              className="font-condensed font-bold text-[13px] tracking-[0.12em] uppercase text-brand-black group-hover:text-brand-yellow border-b-2 border-brand-black group-hover:border-brand-yellow pb-[2px] no-underline transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {resource.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

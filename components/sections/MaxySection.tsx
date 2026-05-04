import { useRevealChildren } from "@/hooks/useRevealChildren";
import React from "react";
import SectionLabel from "../ui/SectionLabel";
import Link from "next/link";
import { MAXY_STATS } from "@/lib/data";

export default function MaxySection() {
  const sectionRef = useRevealChildren<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="maxy"
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]"
    >
      {/* {Left — dark } */}
      <div className="bg-brand-black px-5 md:px-10 lg:px-20 py-[120px] flex flex-col justify-center">
        <div className="fade-up">
          <SectionLabel className="text-brand-yellow">
            MAXY Academy
          </SectionLabel>

          <h2 className="fade-up delay-1 font-condensed font-black text-maxy leading-[0.92] uppercase tracking-[-1px] text-white mb-12">
            Building
            <br />
            <span className="text-brand-yellow">A</span>
            <br />
            <span className="text-outline-white">Generation.</span>
          </h2>

          <div className="fade-up delay-2 text-[17px] font-light text-white/55 leading-[1.8] mb-10">
            <p className="mb-[18px]">
              MAXY Academy is an AI-driven edtech company focused on upskilling
              the next generation of Indonesian talent for the AI era.
            </p>
            <p>
              Trough bootcamps, certifications, and talent placement —
              we&apos;re closing the gap between what universities teach and
              what the economy needs.
            </p>
          </div>

          <blockquote className="fade-up delay-2 border-l-[3px] border-brand-yellow pl-6 mb-[52px] font-condensed font-bold text-[28px] uppercase text-white leading-[1.3] tracking-[0.02em]">
            &ldquo;Driven by AI.
            <br />
            Led by Humanity.&rdquo;
          </blockquote>

          <div className="fade-up delay-3">
            <Link
              href="https://maxy.academy"
              className="inline-block bg-brand-yellow text-brand-black font-condensed font-extrabold text-[14px] tracking-[0.15em] uppercase px-9 py-[15px] hover:bg-white transition-colors duration-200 no-underline"
            >
              Visit MAXY Academy
            </Link>
          </div>
        </div>

        {/* {Right — stat grid} */}
        <div className="bg-brand-gray grid grid-cols-2 grid-rows-2">
          {MAXY_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                "px-12 py-14 flex flex-col justify-end",
                i % 2 === 0 ? "border-r border-brand-border" : "",
                i < 2 ? "border-b border-brand-border" : "",
                i === 1 ? "bg-brand-blue" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div
                className={`font-condensed font-black text-[64px] leading-none mb-2 ${
                  i === 1 ? "text-brand-yellow" : "text-brand-black"
                }`}
              >
                {stat.num}
              </div>
              <div
                className={`text-[12px] font-normal tracking-[0.1em] uppercase ${
                  i === 1 ? "text-white/50" : "text-brand-muted"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

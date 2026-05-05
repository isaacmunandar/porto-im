"use client";

import { useRevealChildren } from "@/hooks/useRevealChildren";
import SectionLabel from "../ui/SectionLabel";
import { SERVICES } from "@/lib/data";

export default function ServicesSection() {
  const secetionRef = useRevealChildren<HTMLElement>();

  return (
    <section
      ref={secetionRef}
      id="services"
      className="bg-brand-blue px-5 md:px-10 lg:px-20 py-[120px]"
    >
      <div className="fade-up">
        <SectionLabel className="text-brand-yellow">What I Do</SectionLabel>

        <h2 className="fade-up delay-1 font-condensed font-black text-section leading-[0.95] uppercase tracking-[-0.5px] text-white">
          AI That Moves
          <br />
          <span className="text-outline-white">The Business</span>
          <br />
          Forward.
        </h2>

        <p className="fade-up delay-2 text-[18px] font-light text-white/60 max-w-[500px] leading-[1.7] mt-6">
          Not AI for the sake of AI. Practical implementation that reduces cost,
          scales output and builds competitive advantage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-[72px] bg-white/[0.12]">
          {SERVICES.map((service, i) => (
            <div
              key={service.num}
              data-num={service.num}
              className={`service-card fade-up bg-brand-blue hover:bg-brand-blue-dark px-11 py-[52px] relative overflow-hidden transition-colors duration-300 ${
                i === 1 ? "delay-1" : i === 2 ? "delay-2" : ""
              }`}
            >
              <div className="inline-block bg-brand-yellow text-brand-black font-condensed text-[11px] font-bold tracking-[0.15em] uppercase px-3 py-1 mb-7">
                {service.tag}
              </div>

              <h3 className="font-condensed font-extrabold text-[32px] uppercase leading-[1.1] tracking-[0.02em] text-white mb-5">
                {service.title}
              </h3>

              <p className="text-[15px] font-light text-white/55 leading-[1.7] mb-9">
                {service.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.pills.map((pill) => (
                  <span
                    key={pill}
                    className="text-[11px] font-medium tracking-[0.1em] uppercase border border-white/25 text-white/70 px-[14px] py-[5px]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

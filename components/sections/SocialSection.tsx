"use client";

import { useRevealChildren } from "@/hooks/useRevealChildren";
import { useState } from "react";
import SectionLabel from "../ui/SectionLabel";
import { SOCIAL_POSTS, SOCIAL_TABS } from "@/lib/data";

export default function SocialSection() {
  const [activeTab, setActiveTab] = useState<string>("Instagram");
  const sectionRef = useRevealChildren<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="social"
      className="bg-white px-5 md:px-10 lg:px-20 py-[120px]"
    >
      <div className="fade-up">
        <SectionLabel>Follow Along</SectionLabel>
      </div>

      <h2 className="fade-up delay-1 font-condensed font-black text-section leading-[0.95] uppercase tracking-[-0.5px] text-brand-black">
        Daily AI Insights
        <br />
        <span className="text-brand-blue">Across</span>
        <br />
        <span className="text-outline-black">Platforms.</span>
      </h2>

      {/* {Tabs} */}
      <div className="fade-up delay-2 flex border-b border-brand-border mt-10 mb-12">
        {SOCIAL_TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-7 py-[14px] font-condensed font-bold text-[14px] tracking-[0.12em] uppercase cursor-pointer border-b-[3px] -mb-px transition-colors duration-200 ${
              activeTab === tab
                ? "text-brand-blue border-brand-blue"
                : "text-brand-muted border-transparent hover:text-brand-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* {Posts grid} */}
      <div className="fade-up grid grid-cols-2 md:grid-cols-4 gap-[2px] bg-brand-border">
        {SOCIAL_POSTS.map((post, i) => (
          <div
            key={i}
            data-cursor-hover
            className="group relative aspect-square overflow-hidden cursor-pointer"
            style={{ background: post.bg }}
          >
            <span className="absolute top-3 right-3 bg-brand-black text-white font-condensed font-bold text-[10px] tracking-[0.1em] uppercase px-[10px] py-1 z-10">
              @isaac.munandar
            </span>
            <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/[0.88] flex flex-col justify-end p-5 transition-colors duration-300">
              <p className="font-condensed font-bold text-[16px] uppercase text-white leading-[1.3] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {post.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

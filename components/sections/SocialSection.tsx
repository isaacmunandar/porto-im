"use client";
import { useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { useRevealChildren } from "@/hooks/useRevealChildren";
import { SOCIAL_PLATFORMS } from "@/lib/data";
import type { Platform } from "@/lib/types";

export default function SocialSection() {
  const [active, setActive] = useState<Platform>("instagram");
  const sectionRef = useRevealChildren<HTMLElement>();

  const current = SOCIAL_PLATFORMS.find((p) => p.key === active)!;

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

      {/* Tabs */}
      <div className="fade-up delay-2 flex border-b border-brand-border mt-10 mb-12">
        {SOCIAL_PLATFORMS.map((platform) => (
          <button
            key={platform.key}
            onClick={() => setActive(platform.key)}
            className={`px-7 py-[14px] font-condensed font-bold text-[14px] tracking-[0.12em] uppercase cursor-pointer border-b-[3px] -mb-px transition-colors duration-200 ${
              active === platform.key
                ? "text-brand-blue border-brand-blue"
                : "text-brand-muted border-transparent hover:text-brand-black"
            }`}
          >
            {platform.label}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      <div className="fade-up grid grid-cols-2 md:grid-cols-4 gap-[2px] bg-brand-border">
        {current.posts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden block bg-brand-gray"
            aria-label={post.caption}
          >
            <Image
              src={post.photo}
              alt={post.caption}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/60 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
              <span className="text-[11px] text-brand-blue font-medium tracking-widest uppercase">
                {post.handle}
              </span>
              <p className="text-white text-[13px] font-light leading-snug mt-1 line-clamp-3">
                {post.caption}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

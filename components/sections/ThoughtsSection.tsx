"use client";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { useRevealChildren } from "@/hooks/useRevealChildren";
import { LINKEDIN_POSTS } from "@/lib/data";

const featured = LINKEDIN_POSTS.find((p) => p.featured)!;
const secondary = LINKEDIN_POSTS.filter((p) => !p.featured).slice(0, 2);

export default function ThoughtsSection() {
  const sectionRef = useRevealChildren<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="thoughts"
      className="bg-white px-5 md:px-10 lg:px-20 py-[120px]"
    >
      {/* Top bar */}
      <div className="fade-up flex flex-col sm:flex-row justify-between sm:items-end gap-8 mb-16">
        <div>
          <SectionLabel>Thoughts on AI</SectionLabel>
          <h2 className="font-condensed font-black text-section leading-[0.95] uppercase tracking-[-0.5px] text-brand-black">
            What I&apos;m
            <br />
            <span className="text-brand-blue">Thinking</span>
            <br />
            <span className="text-outline-black">About.</span>
          </h2>
        </div>
        <a
          href="https://www.linkedin.com/in/isaacmunandar"
          target="_blank"
          rel="noopener noreferrer"
          className="font-condensed font-bold text-[13px] tracking-[0.12em] uppercase text-brand-black no-underline inline-flex items-center gap-[10px] border-b-2 border-brand-black pb-[2px] hover:text-brand-blue hover:border-brand-blue transition-colors duration-200 shrink-0 self-end"
        >
          View All <span className="text-[16px]">→</span>
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-[2px] bg-brand-border">
        {/* Featured card */}
        <a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white hover:bg-brand-gray overflow-hidden transition-colors duration-200 fade-up block"
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src={featured.photo}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 56vw"
            />
          </div>
          <div className="px-8 pt-8 pb-10">
            <div className="font-condensed font-bold text-[11px] tracking-[0.18em] uppercase text-brand-blue mb-3">
              {featured.tag}
            </div>
            <h3 className="font-condensed font-extrabold uppercase leading-[1.15] tracking-[0.01em] text-brand-black group-hover:text-brand-blue transition-colors duration-200 mb-3 text-[36px]">
              {featured.title}
            </h3>
            {featured.excerpt && (
              <p className="text-[14px] font-light text-brand-muted leading-[1.6] mb-4">
                {featured.excerpt}
              </p>
            )}
            <div className="text-[11px] tracking-[0.08em] text-brand-muted uppercase">
              {featured.date} · {featured.readTime}
            </div>
          </div>
        </a>

        {/* Secondary cards */}
        {secondary.map((post, i) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group bg-white hover:bg-brand-gray overflow-hidden transition-colors duration-200 block fade-up ${
              i === 0 ? "delay-1" : "delay-2"
            }`}
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={post.photo}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
            <div className="px-8 pt-8 pb-10">
              <div className="font-condensed font-bold text-[11px] tracking-[0.18em] uppercase text-brand-blue mb-3">
                {post.tag}
              </div>
              <h3 className="font-condensed font-extrabold uppercase leading-[1.15] tracking-[0.01em] text-brand-black group-hover:text-brand-blue transition-colors duration-200 mb-3 text-[24px]">
                {post.title}
              </h3>
              <div className="text-[11px] tracking-[0.08em] text-brand-muted uppercase">
                {post.date} · {post.readTime}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

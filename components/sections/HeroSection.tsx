"use client";
import { useEffect } from "react";
import Button from "@/components/ui/Button";
import { HERO_STATS } from "@/lib/data";
import Image from "next/image";

export default function HeroSection() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("#home .fade-up");
    elements.forEach((el, i) => {
      setTimeout(
        () => {
          el.classList.add("is-visible");
        },
        150 + i * 150,
      );
    });
  }, []);

  return (
    <section
      id="home"
      className="pt-[68px] min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
    >
      {/* Left panel */}
      <div className="px-5 md:px-10 lg:px-20 py-[72px] md:py-[100px] flex flex-col justify-center bg-white relative z-[2]">
        {/* Tag */}
        <div className="fade-up inline-flex items-center gap-[10px] text-[11px] font-medium tracking-[0.2em] uppercase text-brand-blue mb-10">
          <span className="w-[6px] h-[6px] rounded-full bg-brand-blue flex-shrink-0" />
          AI Expert &amp; Serial Entrepreneur
        </div>

        {/* Headline */}
        <h1 className="fade-up delay-1 font-condensed font-black text-hero leading-[0.9] tracking-[-1px] uppercase text-brand-black mb-12">
          Building
          <br />
          <span className="text-brand-blue">The AI</span>
          <br />
          <span className="text-outline-black">Generation.</span>
        </h1>

        {/* Subtext */}
        <p className="fade-up delay-2 text-[17px] font-light text-brand-muted leading-[1.7] max-w-[400px] mb-14">
          I help enterprises implement AI for real growth — and train the next
          generation of leaders to lead it.
        </p>

        {/* CTAs */}
        <div className="fade-up delay-3 flex gap-4 items-center flex-wrap">
          <Button href="#services" variant="solid">
            Explore Services
          </Button>
          <Button href="#about" variant="outline">
            My Story
          </Button>
        </div>
      </div>

      {/* Right panel */}
      <div className="relative overflow-hidden bg-brand-gray min-h-[500px] lg:min-h-0">
        {/* Photo placeholder */}
        <div className="w-full h-full">
          <Image
            src="/isaac-1.jpeg"
            alt="Isaac Munandar"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-brand-blue grid grid-cols-3">
          {HERO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-3 py-4 sm:px-6 sm:py-6 md:px-8 md:py-7 ${i < HERO_STATS.length - 1 ? "border-r border-white/15" : ""}`}
            >
              <div className="font-condensed font-black text-[28px] sm:text-[36px] md:text-[48px] leading-none text-white mb-1">
                {stat.num}
                <span className="text-brand-yellow">{stat.suffix}</span>
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-[11px] font-normal tracking-[0.08em] md:tracking-[0.1em] uppercase text-white/55">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

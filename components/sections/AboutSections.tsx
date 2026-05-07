"use client";
import SectionLabel from "@/components/ui/SectionLabel";
import { useRevealChildren } from "@/hooks/useRevealChildren";
import { CREDENTIALS } from "@/lib/data";
import Image from "next/image";

export default function AboutSection() {
  const sectionRef = useRevealChildren<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="about"
      className="px-5 md:px-10 lg:px-20 py-[80px] md:py-[120px]"
    >
      <div className="fade-up">
        <SectionLabel>About Isaac</SectionLabel>
      </div>

      <h2 className="fade-up delay-1 font-condensed font-black text-section leading-[0.95] uppercase tracking-[-0.5px] text-brand-black">
        Serial Entrepreneur.
        <br />
        <span className="text-brand-blue">AI Operator.</span>
        <br />
        <span className="text-outline-black">Builder of People.</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 mt-[48px] md:mt-[72px] items-start">
        {/* Photo block */}
        <div className="fade-up relative">
          <div className="w-full aspect-[3/4] bg-brand-gray flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-[#D0D0D0] to-[#A8A8A8] flex items-center justify-center">
              <Image
                src="/isaac-2.jpeg"
                alt="Isaac Munandar"
                fill
                priority
                quality={80}
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-[-1px] right-[-1px] bg-brand-yellow px-6 py-4">
            <div className="font-condensed font-bold text-[13px] tracking-[0.1em] uppercase text-brand-black leading-[1.5]">
              CEO &amp; Co-Founder
              <br />
              MAXY Academy
              <br />
              Jakarta, Indonesia
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="fade-up delay-1">
          <div className="text-[17px] font-light text-[#444] leading-[1.8] mb-10">
            <p className="mb-5">
              I&apos;ve built businesses, lost everything, and rebuilt stronger.
              That moment in 2020 didn&apos;t break me — it gave me clarity on
              what actually matters:{" "}
              <strong className="text-brand-black font-medium">
                building people.
              </strong>
            </p>
            <p className="mb-5">
              Today I lead MAXY Academy, an AI-driven edtech company preparing
              the next generation for the future of work — while helping
              enterprises implement AI through training, automation, and agentic
              AI solutions.
            </p>
            <p>
              My work sits at the intersection of technology and human
              potential. AI is not a threat to people — it&apos;s the greatest
              opportunity we&apos;ve ever had,{" "}
              <strong className="text-brand-black font-medium">
                if you know how to use it.
              </strong>
            </p>
          </div>

          {/* <div className="border-t border-brand-border">
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.title}
                className="flex justify-between items-center py-[18px] border-b border-brand-border"
              >
                <span className="text-[15px] font-medium text-brand-black">
                  {cred.title}
                </span>
                <span className="text-[12px] text-brand-muted tracking-[0.05em]">
                  {cred.detail}
                </span>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}

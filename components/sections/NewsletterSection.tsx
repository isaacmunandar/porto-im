"use client";
import { useRevealChildren } from "@/hooks/useRevealChildren";
import React, { useState } from "react";
import SectionLabel from "../ui/SectionLabel";

export default function NewsletterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const sectionRef = useRevealChildren<HTMLElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      className="bg-brand-black px-5 md:px-10 lg:px-20 py-[120px] grid grid-cols-1 lg:grid-cols-2 gap-[100px] items-center"
    >
      {/* {Left — copy} */}
      <div className="fade-up">
        <SectionLabel className="text-brand-yellow">
          Weekly Intelligence
        </SectionLabel>
        <h2>
          Stay Ahead
          <br />
          Of The
          <br />
          <span className="text-brand-yellow">AI Curve.</span>
        </h2>
        <p className="text-[16px] font-light text-white/45 leading-[1.7]">
          One email per week. AI Trends, automation workflows, and leadership
          insights for enterprise decision-makers and the next generation of
          builders.
        </p>
      </div>

      {/* {Right — form} */}
      <div className="fade-up delay-1">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-4">
          <label htmlFor="nl-name" className="sr-only">
            Your name
          </label>
          <input
            id="nl-name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white/[0.06] border border-white/15 outline-none px-6 py-[18px] font-body text-[15px] font-light text-white placeholder:text-white/30 focus:border-brand-yellow transition-colors duration-200"
          />

          <label htmlFor="nl-email" className="sr-only">
            Your email
          </label>
          <input
            id="nl-email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/[0.06] border border-white/15 outline-none px-6 py-[18px] font-body text-[15px] font-light text-white placeholder:text-white/30 focus:border-brand-yellow transition-colors duration-200"
          />
          <button
            type="submit"
            className="w-full bg-brand-yellow border-none px-9 py-[18px] font-condensed font-extrabold text-[14px] tracking-[0.15em] uppercase text-brand-black cursor-pointer hover:bg-brand-blue hover:text-white transition-colors duration-200"
          >
            Subscribe Now
          </button>
        </form>
        <p className="text-[11px] text-white/25 tracking-[0.06em]">
          No spam. Unsubscribe anytime. Read by 500+ leaders across SEA
        </p>
      </div>
    </section>
  );
}

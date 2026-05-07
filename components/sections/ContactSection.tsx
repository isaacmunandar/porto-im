"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import SectionLabel from "@/components/ui/SectionLabel";
import { useRevealChildren } from "@/hooks/useRevealChildren";

const initialState: ContactState = { status: "idle", message: "" };

export default function ContactSection() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );
  const sectionRef = useRevealChildren<HTMLElement>();

  const isDisabled = isPending || state.status === "success";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0A0A0A] text-white px-5 md:px-10 lg:px-20 py-[80px] md:py-[120px] grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start"
    >
      {/* Left */}
      <div className="fade-up">
        <div
          className={`text-[11px] font-medium tracking-[0.2em] uppercase text-[#FFD600] mb-6}`}
        >
          Work With Me
        </div>

        <h2 className="font-condensed font-black text-section uppercase mt-4 leading-none text-white">
          LET&apos;S BUILD
          <br />
          <span className="text-white">SOMETHING</span>
          <br />
          <span className="text-[#FFD600]">TOGETHER.</span>
        </h2>

        <p className="text-[17px] font-light text-white/60 leading-[1.8] mt-8 max-w-[400px]">
          Whether it&apos;s enterprise AI transformation, a strategic
          partnership, or bringing AI capability into your organisation — send a
          brief and Isaac will review it personally.
        </p>
      </div>

      {/* Right */}
      <div className="fade-up delay-1">
        {state.status === "success" ? (
          <div className="border border-white/10 p-10 bg-[#111111]">
            <div className="w-10 h-10 bg-[#FFD600] flex items-center justify-center mb-6">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path
                  d="M1 7L6.5 12.5L17 1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="font-condensed font-black text-[28px] uppercase mb-3 text-white">
              Message Received.
            </h3>

            <p className="text-[15px] font-light text-white/60 leading-[1.7]">
              {state.message}
            </p>
          </div>
        ) : (
          <form action={formAction} className="flex flex-col gap-4" noValidate>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              required
              disabled={isDisabled}
              className="bg-[#111111] border border-white/10 w-full px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD600] transition-colors disabled:opacity-50"
            />

            <input
              name="email"
              type="email"
              placeholder="your@email.com"
              required
              disabled={isDisabled}
              className="bg-[#111111] border border-white/10 w-full px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD600] transition-colors disabled:opacity-50"
            />

            <textarea
              name="brief"
              placeholder="Tell me what you'd like to work on together..."
              required
              rows={5}
              disabled={isDisabled}
              className="bg-[#111111] border border-white/10 w-full px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFD600] transition-colors resize-none disabled:opacity-50"
            />

            {(state.status === "error" || state.status === "rate_limited") && (
              <p className="text-[13px] text-red-400">{state.message}</p>
            )}

            <button
              type="submit"
              disabled={isDisabled}
              className="bg-[#FFD600] text-black font-condensed font-bold text-[14px] tracking-[0.15em] uppercase px-9 py-4 hover:bg-[#e6c200] transition-colors disabled:opacity-50 disabled:cursor-not-allowed self-start"
            >
              {isPending ? "Sending..." : "SEND MESSAGE →"}
            </button>

            <p className="text-[12px] text-white/40">
              Isaac reviews every message personally. High-fit inquiries hear
              back within a few business days.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

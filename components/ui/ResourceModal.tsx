"use client";

import { useActionState, useEffect, useRef } from "react";
import { claimResource, type ClaimState } from "@/app/actions/claim-resource";
import type { Resource } from "@/lib/data";

interface ResourceModalProps {
  resource: Resource | null;
  onClose: () => void;
}

const initialState: ClaimState = { status: "idle", message: "" };

export default function ResourceModal({
  resource,
  onClose,
}: ResourceModalProps) {
  const [state, formAction, isPending] = useActionState(
    claimResource,
    initialState,
  );
  const downloadRef = useRef<HTMLAnchorElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // ── Trigger browser download on success ────────────────────────────────────
  useEffect(() => {
    if (state.status === "success" && state.pdfPath && downloadRef.current) {
      downloadRef.current.href = state.pdfPath;
      downloadRef.current.download = state.pdfFilename ?? "resource.pdf";
      downloadRef.current.click();
      setTimeout(onClose, 800);
    }
  }, [state, onClose]);

  // ── Close on Escape ────────────────────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // ── Lock body scroll when open ─────────────────────────────────────────────
  useEffect(() => {
    if (resource) {
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [resource]);

  if (!resource) return null;

  const isDisabled = isPending || state.status === "success";

  return (
    <>
      {/* Hidden download anchor — never visible */}
      <a ref={downloadRef} className="hidden" aria-hidden="true" />

      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-black/70 z-[200] flex items-center justify-center px-5"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
        aria-label={`Download ${resource.type}`}
      >
        {/* Panel */}
        <div
          className="bg-white w-full max-w-[480px] relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Blue top bar */}
          <div className="h-1 w-full bg-brand-blue" />

          <div className="p-10">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-brand-muted hover:text-brand-black transition-colors"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M1 1L17 17M17 1L1 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Header */}
            <p className="text-[11px] text-brand-blue tracking-[0.15em] uppercase font-medium mb-3">
              {resource.badge} · {resource.type}
            </p>
            <h3 className="font-condensed font-black text-[26px] uppercase text-brand-black leading-tight mb-2">
              {resource.title}
            </h3>
            <p className="text-[13px] font-light text-brand-muted leading-relaxed mb-8">
              Enter your details below to get instant access.
            </p>

            {/* Form */}
            <form
              action={formAction}
              className="flex flex-col gap-4"
              noValidate
            >
              <input type="hidden" name="resourceId" value={resource.id} />

              <div>
                <label htmlFor="modal-name" className="sr-only">
                  Your name
                </label>
                <input
                  ref={firstInputRef}
                  id="modal-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  disabled={isDisabled}
                  className="border border-brand-border w-full px-4 py-3.5 text-[14px] font-light text-brand-black placeholder:text-brand-muted focus:outline-none focus:border-brand-blue transition-colors bg-transparent disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="modal-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  disabled={isDisabled}
                  className="border border-brand-border w-full px-4 py-3.5 text-[14px] font-light text-brand-black placeholder:text-brand-muted focus:outline-none focus:border-brand-blue transition-colors bg-transparent disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="modal-whatsapp" className="sr-only">
                  WhatsApp number
                </label>
                <input
                  id="modal-whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="WhatsApp number (e.g. +62 812 3456 7890)"
                  required
                  disabled={isDisabled}
                  className="border border-brand-border w-full px-4 py-3.5 text-[14px] font-light text-brand-black placeholder:text-brand-muted focus:outline-none focus:border-brand-blue transition-colors bg-transparent disabled:opacity-50"
                />
              </div>

              {state.status === "success" && (
                <p className="text-[13px] text-brand-blue font-medium">
                  ✓ {state.message}
                </p>
              )}
              {(state.status === "error" ||
                state.status === "rate_limited") && (
                <p
                  className={`text-[13px] ${state.status === "rate_limited" ? "text-brand-blue" : "text-red-500"}`}
                >
                  {state.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isDisabled}
                className="bg-brand-blue text-white font-condensed font-bold text-[13px] tracking-[0.15em] uppercase px-8 py-4 hover:bg-brand-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full mt-1"
              >
                {isPending
                  ? "Processing..."
                  : state.status === "success"
                    ? "Downloading..."
                    : "Get Free Access →"}
              </button>

              <p className="text-[11px] text-brand-muted text-center">
                No spam. Your data is used only to send you this resource.
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

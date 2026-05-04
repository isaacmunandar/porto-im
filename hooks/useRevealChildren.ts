"use client";

import { useEffect, useRef } from "react";

export function useRevealChildren<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    const fadeEls = container.querySelectorAll<HTMLElement>(".fade-up");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    fadeEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return ref;
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Placeholder matches the form's rendered height so nothing moves when it swaps in
const placeholder = <div className="min-h-[1120px] sm:min-h-[748px]" aria-hidden="true" />;

const AssessmentForm = dynamic(
  () => import("./assessment-form").then((m) => m.AssessmentForm),
  { ssr: false, loading: () => placeholder }
);

/**
 * Loads the assessment form only when it scrolls near the viewport.
 * Used where the form sits far below the fold (home page) to keep its
 * JavaScript and markup out of the initial page load.
 */
export function DeferredAssessmentForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{visible ? <AssessmentForm /> : placeholder}</div>;
}

"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQEntry {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
}

interface FAQAccordionProps {
  items: FAQEntry[];
  title?: string;
  subtitle?: string;
  category?: string;
  outputSchema?: boolean;
}

export function FAQAccordion({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about Colorado ESA laws, therapist evaluations, and housing rights.",
  category,
  outputSchema = true,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question || item.q || "",
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer || item.a || "",
      },
    })),
  };

  return (
    <section className="section-padding bg-[#F7F5F0]">
      {outputSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="text-center mb-10">
            <h2 className="text-h2 text-[#19354A]">{title}</h2>
            {subtitle && (
              <p className="text-body-large text-[#52616A] mt-2 max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="space-y-4">
          {items.map((item, idx) => {
            const isOpen = openIndex === idx;
            const qText = item.question || item.q || "";
            const aText = item.answer || item.a || "";
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#D5DFDB] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-[#347C78] group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold leading-snug transition-colors ${
                    isOpen ? "text-[#19354A]" : "text-[#19354A] group-hover:text-[#347C78]"
                  }`}>
                    {qText}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#19354A] text-white shadow-xs"
                        : "bg-[#E8F0ED] text-[#19354A] group-hover:bg-[#D5DFDB]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>
                {isOpen && (
                  <div className="text-base px-6 pb-6 pt-1 text-[#52616A] leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                    <p>{aText}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const FaqAccordion = FAQAccordion;

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

interface InlineCtaProps {
  headline?: string;
  subhead?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "navy" | "ivory" | "teal";
}

export function InlineCta({
  headline,
  subhead,
  title,
  description,
  buttonText = "Get Your Colorado ESA Letter ($149)",
  variant = "navy",
}: InlineCtaProps) {
  const displayHeadline =
    headline || title || "Ready to Protect Your Housing Rights in Colorado?";
  const displaySubhead =
    subhead ||
    description ||
    "Complete a confidential telehealth evaluation with an active Colorado-licensed therapist. 100% money-back guarantee.";
  const isNavy = variant === "navy";

  return (
    <section
      className={`my-12 rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-xl ${
        isNavy
          ? "bg-gradient-to-br from-[#19354A] via-[#1E425E] to-[#152B3C] text-white border border-[#347C78]/30"
          : "bg-gradient-to-br from-[#E8F0ED] to-[#F7F5F0] text-[#19354A] border border-[#D5DFDB]"
      }`}
    >
      {/* Ambient background glow elements */}
      {isNavy && (
        <>
          <div
            className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#347C78]/25 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#A65331]/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
        </>
      )}

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Trust Badge Pill */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-xs ${
            isNavy
              ? "bg-[#347C78]/25 text-[#E8F0ED] border border-[#347C78]/50"
              : "bg-white text-[#19354A] border border-[#D5DFDB]"
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-[#347C78]" />
          <span>Legitimate Housing Accommodation Guarantee</span>
        </div>

        {/* Headline — Explicit high-contrast white text */}
        <h3
          className={`font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-tight ${
            isNavy ? "text-white" : "text-[#19354A]"
          }`}
        >
          {displayHeadline}
        </h3>

        {/* Subhead */}
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${
            isNavy ? "text-[#E8F0ED]" : "text-[#52616A]"
          }`}
        >
          {displaySubhead}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
          <Link
            href="/how-it-works/#get-started"
            className="btn-primary w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 shadow-lg hover:shadow-xl gap-2 font-bold text-center justify-center text-white"
          >
            <span className="leading-snug">{buttonText}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
          <Link
            href="/how-it-works/"
            className={`w-full sm:w-auto inline-flex items-center justify-center min-h-[52px] px-6 sm:px-8 py-3.5 rounded-[9px] text-sm sm:text-base font-bold transition-all text-center ${
              isNavy
                ? "bg-white/10 hover:bg-white/20 text-white border-2 border-white/60 hover:border-white shadow-sm"
                : "bg-transparent text-[#19354A] border-2 border-[#19354A] hover:bg-[#E8F0ED]"
            }`}
          >
            <span className={isNavy ? "text-white font-bold" : "text-[#19354A] font-bold"}>
              See How It Works
            </span>
          </Link>
        </div>

        {/* Trust Signals Footer Strip */}
        <div
          className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-sm font-medium ${
            isNavy
              ? "border-white/15 text-[#E8F0ED]"
              : "border-[#D5DFDB] text-[#52616A]"
          }`}
        >
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
            <span>Fair Housing Act Compliant</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
            <span>Colorado HB26-1045 Standard</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
            <span>No Pet Rent or Pet Deposits</span>
          </span>
        </div>
      </div>
    </section>
  );
}

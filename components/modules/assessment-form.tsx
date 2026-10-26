import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";

// Intake now lives on the external survey; this card just sends visitors there.
export function AssessmentForm() {
  return (
    <div className="max-w-3xl mx-auto my-12">
      <div className="card-theme bg-white border-2 border-[#347C78] shadow-lg p-6 sm:p-10 text-center">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-[#347C78] uppercase tracking-wide sm:tracking-wider whitespace-nowrap bg-[#E8F0ED] px-2.5 py-1 rounded-full mb-3">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          <span>Confidential <span className="hidden sm:inline">Colorado </span>Telehealth Intake</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#19354A]">
          Start Your Colorado ESA Assessment
        </h3>
        <p className="text-sm sm:text-base text-[#52616A] mt-2 max-w-xl mx-auto">
          Takes about 3 minutes. Your answers are confidential and reviewed by a Colorado-licensed provider.
        </p>

        <Link
          href={siteConfig.surveyUrl}
          className="btn-primary mt-8 inline-flex w-full sm:w-auto text-sm sm:text-base px-8 py-3.5 sm:py-4 shadow-md hover:shadow-lg gap-2 justify-center whitespace-nowrap"
        >
          Start the Assessment
          <ArrowRight className="w-4 h-4 shrink-0" />
        </Link>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#52616A]">
          <Lock className="w-3.5 h-3.5 text-[#347C78]" />
          256-Bit SSL Encrypted
        </p>
      </div>
    </div>
  );
}

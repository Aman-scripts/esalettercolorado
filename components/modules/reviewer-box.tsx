import React from "react";
import Link from "next/link";
import { Calendar, CheckCircle2, ShieldCheck } from "lucide-react";
import { defaultReviewer } from "@/data/therapists-data";

interface ReviewerBoxProps {
  reviewerName?: string;
  credentials?: string;
  reviewedDate?: string;
  profileUrl?: string;
}

export function ReviewerBox({
  reviewerName = defaultReviewer.name,
  credentials = defaultReviewer.credentials,
  reviewedDate = defaultReviewer.reviewedDate,
  profileUrl = reviewerName === defaultReviewer.name ? defaultReviewer.profileUrl : undefined,
}: ReviewerBoxProps) {
  const initials =
    reviewerName
      .replace(/^Dr\.\s*/i, "")
      .split(" ")
      .slice(0, 2)
      .map((n) => n[0])
      .join("") || "CO";

  return (
    <div className="my-8 rounded-2xl border border-[#D5DFDB] bg-white p-5 sm:p-6 shadow-xs transition-shadow hover:shadow-sm">
      {/* 1. Top Trust & Verification Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#D5DFDB]">
        {/* Verification Status Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F0ED] text-[#27654F] border border-[#347C78]/25 shadow-2xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#27654F] shrink-0" />
          <span>Medically &amp; Legally Reviewed</span>
        </div>

        {/* Date and Verification Link */}
        <div className="flex items-center flex-wrap gap-x-4 gap-y-1.5 text-xs sm:text-sm text-[#52616A]">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#347C78] shrink-0" />
            <span>
              Last reviewed:{" "}
              <strong className="text-[#19354A] font-semibold">{reviewedDate}</strong>
            </span>
          </span>
          {profileUrl && (
            <>
              <span className="text-[#D5DFDB] hidden sm:inline" aria-hidden="true">
                •
              </span>
              <Link
                href={profileUrl}
                className="inline-flex items-center gap-1 font-semibold text-[#347C78] hover:text-[#19354A] hover:underline"
              >
                View Reviewer Profile →
              </Link>
            </>
          )}
        </div>
      </div>

      {/* 2. Clinician Profile Section */}
      <div className="pt-4 flex items-center gap-4">
        {/* Clinician Avatar */}
        <div
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#19354A] to-[#347C78] text-white font-serif font-bold text-base flex items-center justify-center shrink-0 shadow-xs ring-4 ring-[#E8F0ED]"
          aria-hidden="true"
        >
          {initials}
        </div>

        {/* Name and Credentials */}
        <div className="min-w-0">
          <h4 className="font-bold text-base sm:text-lg text-[#19354A] leading-snug">
            {reviewerName}
          </h4>
          <p className="text-xs sm:text-sm text-[#52616A] mt-1 leading-snug">
            {credentials}
          </p>
        </div>
      </div>

      {/* 3. Statutory Compliance Footer Note */}
      <div className="mt-4 pt-3.5 border-t border-[#D5DFDB]/70 flex items-start gap-2.5 text-xs text-[#52616A] leading-relaxed">
        <ShieldCheck className="w-4 h-4 text-[#347C78] shrink-0 mt-0.5" />
        <span>
          Clinical and legal statements are reviewed against Colorado HB26-1045, C.R.S. 24-34-502,
          and HUD FHEO-2020-01 to ensure full accuracy and compliance with current state and
          federal regulations.
        </span>
      </div>
    </div>
  );
}

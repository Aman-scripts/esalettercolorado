import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, CheckCircle2, ArrowRight, Star, Clock, Lock, Sparkles } from "lucide-react";

interface HeroProps {
  variant?: "full" | "compact";
  h1: string;
  subhead: string;
  badge?: string;
  /** Shorter label shown below sm so the badge stays on one line */
  mobileBadge?: string;
  ctaText?: string;
  ctaHref?: string;
  showReviews?: boolean;
  bgImage?: string;
  bgOverlay?: "ivory" | "navy";
}

const DEFAULT_BADGE = "State-Licensed Colorado Telehealth Evaluation";
const DEFAULT_MOBILE_BADGE = "State-Licensed Telehealth Evaluation";

export function Hero({
  variant = "compact",
  h1,
  subhead,
  badge = DEFAULT_BADGE,
  mobileBadge,
  ctaText = "Get Your ESA Letter ($149)",
  ctaHref = "/how-it-works/#get-started",
  showReviews = true,
  bgImage,
  bgOverlay = "ivory",
}: HeroProps) {
  const shortBadge = mobileBadge ?? (badge === DEFAULT_BADGE ? DEFAULT_MOBILE_BADGE : badge);
  const isFull = variant === "full";
  const resolvedBgImage = bgImage || "/images/colorado-apartment-peaceful-esa.webp";

  return (
    <section
      className={`relative overflow-hidden ${
        isFull
          ? "pt-12 pb-16 sm:pt-20 sm:pb-24 bg-[#F7F5F0]"
          : "py-12 sm:py-20 bg-[#F7F5F0] border-b border-[#D5DFDB]"
      }`}
    >
      {/* Background Image with Depth & Editorial Scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Image
          src={resolvedBgImage}
          alt=""
          fill
          sizes="100vw"
          quality={80}
          className="object-cover object-center opacity-30"
          priority
          fetchPriority="high"
        />
        <div
          className={`absolute inset-0 ${
            bgOverlay === "navy"
              ? "bg-gradient-to-r from-[#19354A]/95 via-[#19354A]/90 to-[#19354A]/85"
              : "bg-gradient-to-r from-[#F7F5F0]/95 via-[#F7F5F0]/92 to-[#F7F5F0]/85"
          }`}
        />
        {/* Soft atmospheric gradient accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#347C78]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#A65331]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {isFull ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 text-left">
              {badge && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap max-w-full mb-6 bg-white border border-[#D5DFDB] text-[#19354A] shadow-2xs">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-[#2A6763]" />
                  <span className="sm:hidden truncate">{shortBadge}</span>
                  <span className="hidden sm:inline">{badge}</span>
                </div>
              )}

              <h1 className="text-h1 text-[#19354A] tracking-tight leading-tight">
                {h1}
              </h1>

              <p className="text-body-large text-[#52616A] mt-5 leading-relaxed">
                {subhead}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-center gap-3 w-full sm:w-auto">
                <Link
                  href={ctaHref}
                  className="btn-primary w-full sm:w-auto text-base px-6 sm:px-5 py-3.5 sm:py-4 shadow-md hover:shadow-lg gap-2 text-center justify-center sm:whitespace-nowrap"
                >
                  <span className="leading-snug">{ctaText}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link href="/how-it-works/" className="btn-secondary w-full sm:w-auto text-base px-6 sm:px-5 py-3.5 sm:py-4 text-center justify-center sm:whitespace-nowrap">
                  How the Evaluation Works
                </Link>
              </div>

              {/* Trust Guarantees Strip */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-[#52616A]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#2A6763] shrink-0" />
                  Colorado HB26-1045 Compliant
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#2A6763] shrink-0" />
                  100% Money-Back Guarantee
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#2A6763] shrink-0" />
                  Delivered within 24–48 Hours
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Lock className="w-4 h-4 text-[#2A6763] shrink-0" />
                  Encrypted &amp; HIPAA Compliant
                </span>
              </div>

              {/* Social Proof Star Rating */}
              {showReviews && (
                <div className="mt-6 pt-6 border-t border-[#D5DFDB]/60 flex items-center gap-3">
                  <div className="flex text-[#A65331]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#19354A]">
                    4.9/5 Rating
                  </span>
                  <span className="text-xs text-[#52616A]">
                    based on 840+ verified Colorado renters
                  </span>
                </div>
              )}
            </div>

            {/* Right Column: Hero Visual with Real Colorado Photograph (50% Width on Desktop) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D5DFDB] shadow-2xl bg-[#E8F0ED]">
                <Image
                  src="/images/colorado-esa-hero.webp"
                  alt="Colorado resident with emotional support golden retriever in sunlit Denver apartment"
                  width={1376}
                  height={768}
                  sizes="(min-width: 1024px) 580px, 100vw"
                  quality={85}
                  priority
                  fetchPriority="high"
                  className="w-full h-auto object-cover object-center max-h-[500px] transform hover:scale-102 transition-transform duration-500"
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#19354A]/80 to-transparent pointer-events-none" />

                {/* Bottom caption overlay */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10 flex items-center gap-2 bg-[#19354A]/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/15 shadow-md">
                  <div className="w-6 h-6 rounded-full bg-[#347C78] flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold leading-tight text-white whitespace-nowrap">
                      Denver, CO
                    </span>
                    <span className="text-[11px] font-medium text-[#E8F0ED] leading-tight whitespace-nowrap">
                      Protected under FHA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Compact Subpage Variant */
          <div className="max-w-3xl mx-auto">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap max-w-full mb-6 bg-white border border-[#D5DFDB] text-[#19354A] shadow-2xs">
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#2A6763]" />
                <span className="sm:hidden truncate">{shortBadge}</span>
                <span className="hidden sm:inline">{badge}</span>
              </div>
            )}

            <h1 className="text-h1 text-[#19354A] tracking-tight leading-tight">
              {h1}
            </h1>

            <p className="text-body-large text-[#52616A] mt-5 leading-relaxed">
              {subhead}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-center gap-3 w-full sm:w-auto">
              <Link
                href={ctaHref}
                className="btn-primary w-full sm:w-auto text-base px-6 sm:px-5 py-3.5 sm:py-4 shadow-md hover:shadow-lg gap-2 text-center justify-center sm:whitespace-nowrap"
              >
                <span className="leading-snug">{ctaText}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link href="/how-it-works/" className="btn-secondary w-full sm:w-auto text-base px-6 sm:px-5 py-3.5 sm:py-4 text-center justify-center sm:whitespace-nowrap">
                How the Evaluation Works
              </Link>
            </div>

            {/* Trust Guarantees Strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-[#52616A]">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2A6763]" />
                Colorado HB26-1045 Compliant
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#2A6763]" />
                100% Money-Back Guarantee
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-[#2A6763]" />
                Delivered within 24–48 Hours
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Lock className="w-4 h-4 text-[#2A6763]" />
                Encrypted &amp; HIPAA Compliant
              </span>
            </div>

            {/* Social Proof Star Rating */}
            {showReviews && (
              <div className="mt-6 pt-6 border-t border-[#D5DFDB]/60 flex items-center gap-3">
                <div className="flex text-[#A65331]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#19354A]">
                  4.9/5 Rating
                </span>
                <span className="text-xs text-[#52616A]">
                  based on 840+ verified Colorado renters
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

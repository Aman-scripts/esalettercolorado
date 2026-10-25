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
          sizes="(max-width: 768px) 200px, 1920px"
          quality={50}
          fetchPriority="high"
          className="object-cover object-center opacity-30"
          priority
        />
        <div
          className={`absolute inset-0 ${
            bgOverlay === "navy"
              ? "bg-gradient-to-r from-[#19354A]/95 via-[#19354A]/90 to-[#19354A]/85"
              : "bg-gradient-to-r from-[#F7F5F0]/95 via-[#F7F5F0]/92 to-[#F7F5F0]/85 backdrop-blur-[1px]"
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
                  <ShieldCheck className="w-4 h-4 shrink-0 text-[#347C78]" />
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

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  href={ctaHref}
                  className="btn-primary w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 shadow-md hover:shadow-lg gap-2 text-center justify-center"
                >
                  <span className="leading-snug">{ctaText}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link href="/how-it-works/" className="btn-secondary w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 text-center justify-center">
                  How the Evaluation Works
                </Link>
              </div>

              {/* Trust Guarantees Strip */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-[#52616A]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  Colorado HB26-1045 Compliant
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  100% Money-Back Guarantee
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#347C78] shrink-0" />
                  Delivered within 24–48 Hours
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Lock className="w-4 h-4 text-[#347C78] shrink-0" />
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

            {/* Right Column: Hero Visual with Real Colorado Photograph & Trust Floating Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#D5DFDB] shadow-2xl bg-[#E8F0ED]">
                <Image
                  src="/images/colorado-esa-hero.webp"
                  alt="Colorado resident with emotional support golden retriever in sunlit Denver apartment"
                  width={1376}
                  height={768}
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="w-full h-auto object-cover object-center max-h-[460px] transform hover:scale-102 transition-transform duration-500"
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#19354A]/80 to-transparent pointer-events-none" />

                {/* Bottom caption overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-2 text-white text-xs">
                  <span className="font-medium drop-shadow-md flex items-center gap-1.5 min-w-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#347C78] shrink-0" />
                    <span className="truncate">Denver, CO &bull; Protected under FHA</span>
                  </span>
                  {/* Hidden from sm up, where the floating bottom badge covers this corner */}
                  <span className="sm:hidden shrink-0 bg-[#347C78]/90 text-white font-bold px-2 py-0.5 rounded text-[11px] shadow-xs">
                    Fair Housing Act
                  </span>
                </div>
              </div>

              {/* Trust badges: a row below the photo on mobile, floating over its corners from sm up */}
              <div className="mt-3 grid grid-cols-2 gap-2 sm:contents">
              {/* Floating Top Trust Pill */}
              <div className="sm:absolute sm:-top-3 sm:-left-4 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-2 rounded-2xl border border-[#D5DFDB] shadow-sm sm:shadow-lg flex items-center gap-2 min-w-0">
                <div className="w-7 h-7 shrink-0 rounded-full bg-[#E8F0ED] text-[#347C78] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-[#19354A] leading-tight">
                    100% Legal In Colorado
                  </p>
                  <p className="text-[10px] text-[#52616A] leading-tight">
                    C.R.S. 24-34-502 &amp; HB26-1045
                  </p>
                </div>
              </div>

              {/* Floating Bottom Right Badge */}
              <div className="sm:absolute sm:-bottom-3 sm:-right-4 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-2 rounded-2xl border border-[#D5DFDB] shadow-sm sm:shadow-lg flex items-center gap-2 min-w-0">
                <div className="w-7 h-7 shrink-0 rounded-full bg-[#E8F0ED] text-[#A65331] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#347C78]" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-[#19354A] leading-tight">
                    Licensed Providers
                  </p>
                  <p className="text-[10px] text-[#52616A] leading-tight">
                    Verifiable DORA Credentials
                  </p>
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
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#347C78]" />
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

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href={ctaHref}
                className="btn-primary w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 shadow-md hover:shadow-lg gap-2 text-center justify-center"
              >
                <span className="leading-snug">{ctaText}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <Link href="/how-it-works/" className="btn-secondary w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 text-center justify-center">
                How the Evaluation Works
              </Link>
            </div>

            {/* Trust Guarantees Strip */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-[#52616A]">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#347C78]" />
                Colorado HB26-1045 Compliant
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#347C78]" />
                100% Money-Back Guarantee
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-[#347C78]" />
                Delivered within 24–48 Hours
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Lock className="w-4 h-4 text-[#347C78]" />
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

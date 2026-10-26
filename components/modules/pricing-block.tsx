import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, ArrowRight, HeartHandshake, FileText, Clock } from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface PricingBlockProps {
  showSnapshotOnly?: boolean;
}

export function PricingBlock({ showSnapshotOnly = false }: PricingBlockProps) {
  const inclusions = [
    "Full clinical telehealth evaluation by an active Colorado-licensed therapist",
    "Official, signed Colorado ESA letter on professional clinical letterhead",
    "100% compliant with Colorado HB26-1045, C.R.S. 24-34-502 & Fair Housing Act",
    "24/7 Landlord verification support via secure digital verification portal",
    "Waives pet security deposits, monthly pet rent & breed/weight restrictions",
    "Fast 24–48 hour digital delivery via encrypted PDF",
    "Zero recurring monthly fees or hidden subscription charges",
    "100% money-back guarantee if not clinically approved",
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Colorado ESA Letter Telehealth Evaluation",
    description: "Official emotional support animal housing evaluation and recommendation letter by a licensed Colorado mental health professional.",
    image: `${siteConfig.url}/esa-letter-colorado-logo-image.webp`,
    offers: {
      "@type": "Offer",
      price: siteConfig.pricing.single,
      priceCurrency: siteConfig.pricing.currency,
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/cost/`,
    },
  };

  return (
    <section className="section-padding bg-white border-y border-[#D5DFDB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-h2 text-[#19354A]">
            Colorado ESA Letter Pricing &amp; Inclusions
          </h2>
          <p className="text-body-large text-[#52616A] mt-2">
            No surprise add-ons. No monthly subscriptions. Just real licensed clinical care.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Plan 1: First-Time Evaluation (Featured) */}
          <div className="card-theme relative border-2 border-[#347C78] shadow-lg flex flex-col justify-between bg-white">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#347C78] text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-xs whitespace-nowrap">
              Most Popular • Colorado Housing
            </div>

            <div>
              <div className="pt-4 border-b border-[#D5DFDB] pb-6 text-center">
                <span className="text-xs font-semibold text-[#52616A] uppercase tracking-wider block">
                  New Client Clinical Evaluation
                </span>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="text-[28px] md:text-[32px] lg:text-[36px] leading-none font-serif font-bold text-[#19354A]">
                    ${siteConfig.pricing.single}
                  </span>
                  <span className="text-sm font-medium text-[#52616A]">/ one-time</span>
                </div>
                <p className="text-xs text-[#27654F] font-semibold mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Money-Back Guarantee If Not Approved
                </p>
              </div>

              <div className="py-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#19354A]">
                  Everything Included:
                </h4>
                <ul className="text-base space-y-2.5 text-[#24333B]">
                  {inclusions.slice(0, 6).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#E8F0ED] text-[#27654F] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D5DFDB]">
              <Link
                href="/how-it-works/#get-started"
                className="btn-primary w-full text-center gap-2"
              >
                <span>Start Your Evaluation ($149)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-sm text-[#52616A] text-center mt-2">
                24–48h Turnaround • Fully Encrypted &amp; HIPAA Compliant
              </p>
            </div>
          </div>

          {/* Plan 2: Annual Renewal */}
          <div className="card-theme flex flex-col justify-between bg-[#F7F5F0] border border-[#D5DFDB]">
            <div>
              <div className="pt-4 border-b border-[#D5DFDB] pb-6 text-center">
                <span className="text-xs font-semibold text-[#52616A] uppercase tracking-wider block">
                  Annual Lease Renewal
                </span>
                <div className="mt-2 flex items-baseline justify-center gap-1">
                  <span className="text-[28px] md:text-[32px] lg:text-[36px] leading-none font-serif font-bold text-[#19354A]">
                    ${siteConfig.pricing.renewal}
                  </span>
                  <span className="text-sm font-medium text-[#52616A]">/ annual</span>
                </div>
                <p className="text-xs text-[#52616A] font-medium mt-2">
                  For existing clients updating documentation for a new lease year
                </p>
              </div>

              <div className="py-6 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#19354A]">
                  Renewal Features:
                </h4>
                <ul className="text-base space-y-2.5 text-[#24333B]">
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#E8F0ED] text-[#27654F] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>Abbreviated annual clinical reassessment</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#E8F0ED] text-[#27654F] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>Updated letter date &amp; active Colorado provider credentials</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#E8F0ED] text-[#27654F] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>Continuous protection under Colorado Fair Housing laws</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#E8F0ED] text-[#27654F] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>Expedited priority processing within 24 hours</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-[#D5DFDB]">
              <Link
                href="/renewal/"
                className="btn-secondary w-full text-center"
              >
                Learn About Renewals ($129)
              </Link>
              <p className="text-sm text-[#52616A] text-center mt-2">
                Available to any renter needing an updated 12-month letter
              </p>
            </div>
          </div>
        </div>

        {/* Why Cheap $29 Letters Fail Note */}
        <div className="mt-12 max-w-3xl mx-auto rounded-xl p-5 bg-[#E8F0ED] border border-[#D5DFDB] flex items-start gap-3.5">
          <HeartHandshake className="w-5 h-5 text-[#347C78] shrink-0 mt-0.5" />
          <div className="text-base text-[#24333B] leading-relaxed">
            <strong className="text-[#19354A] block mb-1">
              Why Free or Very Cheap $29 Letters Frequently Get Rejected:
            </strong>
            Instant online certificate generators do not conduct a legitimate clinical evaluation by a Colorado-licensed healthcare provider. Under Colorado HB26-1045, housing providers are legally trained to identify and reject fake registry printouts. Our flat fee ensures a verified, legitimate medical evaluation with dedicated landlord verification support.
          </div>
        </div>
      </div>
    </section>
  );
}

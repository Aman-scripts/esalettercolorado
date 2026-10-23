import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/modules/hero";
import { PricingBlock } from "@/components/modules/pricing-block";
import { InlineCta } from "@/components/modules/inline-cta";
import { CalloutBox } from "@/components/modules/callout-box";
import { FAQAccordion } from "@/components/modules/faq-accordion";
import { RelatedPages } from "@/components/modules/related-pages";
import { ReviewerBox } from "@/components/modules/reviewer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/data/site-config";
import { CheckCircle2, ShieldCheck, AlertCircle, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "ESA Letter Cost in Colorado: Pricing & Inclusions [49 chars]",
  description:
    "See what an ESA letter costs in Colorado, what is included, the refund policy, and why free or very cheap letters often get rejected by landlords. [146 chars]",
  alternates: {
    canonical: `${siteConfig.url}/cost/`,
  },
};

export default function CostPage() {
  const faqs = [
    {
      question: "Are there any recurring monthly charges or subscription fees?",
      answer: "No. Our $149 clinical evaluation and letter fee is a one-time charge covering your full 12-month housing accommodation letter. We never charge monthly subscription fees.",
    },
    {
      question: "What happens if my landlord refuses to accept the letter?",
      answer: "Our legal and clinical team provides full verification and landlord support. If your landlord has questions, our clinicians authenticate the letter. If your accommodation is unlawfully denied, we assist you with our formal legal response letter.",
    },
    {
      question: "How does the 100% money-back guarantee work?",
      answer: "If our evaluating Colorado-licensed clinician determines that an emotional support animal is not clinically appropriate for your mental health condition, you receive an immediate 100% refund.",
    },
  ];

  const related = [
    { title: "Colorado ESA Letter Requirements", href: "/requirements/", note: "Checklist of mandatory elements" },
    { title: "ESA Letter Renewal Guide", href: "/renewal/", note: "Annual renewal process ($99)" },
    { title: "Pet Deposits & Pet Rent in Colorado", href: "/rights/pet-deposits-and-fees/", note: "Compare savings" },
    { title: "How to Get an ESA Letter", href: "/how-to-get-an-esa-letter-in-colorado/", note: "Step-by-step process" },
  ];

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Core Guides", href: "/how-it-works/" }, { label: "Cost & Pricing" }]}
      />

      <Hero
        variant="compact"
        h1="ESA Letter Cost in Colorado: Transparent Pricing & Inclusions"
        subhead="Clear, flat-rate pricing. $149 for first-time evaluations, $99 for annual lease renewals. No subscriptions, no hidden fees, and a 100% money-back guarantee."
        ctaText="Start Evaluation ($149)"
      />

      {/* Main Pricing Module */}
      <PricingBlock />

      <article className="section-padding bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <CalloutBox type="takeaway" title="Cost Comparison: Pet Fees vs. Valid ESA Letter">
            The average Colorado apartment charges $350 in pet deposits plus $45/month in pet rent ($540/year), totaling <strong>$890 in the first year</strong>. A legitimate Colorado ESA letter costs a flat $149 and legally eliminates all of these fees under the Fair Housing Act, saving you over $740 annually.
          </CalloutBox>

          <div className="space-y-10 text-base text-[#24333B] leading-relaxed mt-10">
            {/* What is included */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                What Is Included in Your $149 Colorado Evaluation
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <h3 className="font-bold text-base text-[#19354A] mb-1">Colorado Clinical Evaluation</h3>
                  <p className="text-xs sm:text-sm text-[#52616A]">Assessment by an active state-licensed therapist (Psy.D., LCSW, or LPC) compliant with Colorado HB26-1045.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <h3 className="font-bold text-base text-[#19354A] mb-1">Official Clinical Housing Letter</h3>
                  <p className="text-xs sm:text-sm text-[#52616A]">Signed on professional letterhead with the clinician&apos;s active DORA license number and practice details.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <h3 className="font-bold text-base text-[#19354A] mb-1">24/7 Landlord Verification Desk</h3>
                  <p className="text-xs sm:text-sm text-[#52616A]">Secure document ID for property manager portals and direct verification support.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <h3 className="font-bold text-base text-[#19354A] mb-1">100% Refund Guarantee</h3>
                  <p className="text-xs sm:text-sm text-[#52616A]">If you do not qualify for an assistance animal, your entire evaluation fee is refunded immediately.</p>
                </div>
              </div>
            </section>

            <InlineCta
              headline="Secure Your Colorado Housing Rights Today"
              subhead="Flat $149 fee. Zero subscriptions. 100% refund if not approved by your clinician."
            />

            {/* Why cheap letters fail */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Why Free or Very Cheap ($29) Letters Fail in Colorado
              </h2>
              <p>
                The internet is saturated with websites offering &ldquo;instant ESA letters&rdquo; for $29 or $39. Here is why Colorado property managers reject them:
              </p>
              <div className="space-y-3 mt-4 text-xs sm:text-sm text-[#52616A]">
                <div className="p-4 rounded-xl bg-[#FDF0EE] border border-[#A33E35]/30">
                  <strong className="text-[#A33E35] block mb-1">No Colorado In-State License</strong>
                  <p>Cheap websites use out-of-state clinicians with no Colorado credentials. Colorado HB26-1045 gives landlords the explicit right to reject out-of-state letters.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FDF0EE] border border-[#A33E35]/30">
                  <strong className="text-[#A33E35] block mb-1">No Legitimate Patient-Provider Relationship</strong>
                  <p>An automated quiz cannot establish a clinical relationship. Landlords verify providers through the Colorado DORA database; letters lacking active licenses are dismissed.</p>
                </div>
              </div>
            </section>
          </div>

          <RelatedPages links={related} />
          <ReviewerBox />
        </div>
      </article>

      <FAQAccordion items={faqs} title="Pricing & Refund Questions" outputSchema={false} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <InlineCta
          headline="Start Your Assessment with Complete Confidence"
          subhead="100% money-back guarantee. State-licensed Colorado clinicians."
        />
      </div>
    </>
  );
}

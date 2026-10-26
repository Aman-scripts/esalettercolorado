import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/modules/hero";
import { InlineCta } from "@/components/modules/inline-cta";
import { CalloutBox } from "@/components/modules/callout-box";
import { FAQAccordion } from "@/components/modules/faq-accordion";
import { RelatedPages } from "@/components/modules/related-pages";
import { ReviewerBox } from "@/components/modules/reviewer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { Calendar, RefreshCw, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/renewal/");

export const metadata: Metadata = buildMetadata(seo);

export default function RenewalPage() {
  const faqs = [
    {
      question: "Do Colorado landlords require an annual ESA letter renewal?",
      answer: "Yes. While the Fair Housing Act does not specify an expiration date, HUD guidance and Colorado property management standards require letters to reflect current functional need (within the last 12 months). Most landlords request updated documentation upon annual lease renewal.",
    },
    {
      question: "How much does a renewal cost?",
      answer: "Our annual Colorado ESA renewal evaluation is discounted to $99 for returning clients and renters with an existing 12-month letter.",
    },
    {
      question: "What if I got my original letter from a different therapist?",
      answer: "You can renew through our Colorado-licensed clinical team even if your previous letter was issued elsewhere. You will complete our intake, and our Colorado clinicians will conduct your re-evaluation.",
    },
  ];

  const related = [
    { title: "Colorado ESA Letter Requirements", href: "/requirements/", note: "Essential legal checklist" },
    { title: "ESA Letter Cost in Colorado", href: "/cost/", note: "Pricing and inclusions" },
    { title: "Moving With an ESA in Colorado", href: "/rights/moving-with-an-esa/", note: "New lease transfer tips" },
    { title: "What to Do If Landlord Denies", href: "/rights/landlord-denials/", note: "Tenant defense steps" },
  ];

  return (
    <>
      <JsonLd
        type="article"
        title={seo.h1}
        description={seo.description}
        url={seo.canonical}
      />

      <Breadcrumbs
        items={[{ label: "Core Guides", href: "/how-it-works/" }, { label: "ESA Letter Renewal" }]}
      />

      <Hero
        variant="compact"
        h1={seo.h1}
        subhead="Avoid gaps in housing documentation. Maintain uninterrupted protections against pet rent, deposits, and animal restrictions across Colorado."
        ctaText="Renew Your Colorado Letter ($99)"
        ctaHref="/how-it-works/#get-started"
      />

      <article className="section-padding bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <CalloutBox type="quick-answer" title="When Does an ESA Letter Need Renewal?">
            In Colorado, housing providers typically require an ESA letter to be renewed every 12 months. An annual renewal re-establishes that your emotional or mental health condition remains active and that your companion animal continues to provide essential therapeutic support.
          </CalloutBox>

          <div className="space-y-10 text-base text-[#24333B] leading-relaxed mt-10">
            {/* When needed */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                When Is ESA Letter Renewal Needed?
              </h2>
              <p>
                Under HUD administrative policy and standard Colorado residential lease agreements, landlords are entitled to verify that a tenant&apos;s accommodation need is current. Key times to renew include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] text-center">
                  <Calendar className="w-6 h-6 text-[#347C78] mx-auto mb-2" />
                  <strong className="text-sm text-[#19354A] block">Annual Lease Renewal</strong>
                  <p className="text-base text-[#52616A] mt-1">30–60 days before your current lease term expires.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] text-center">
                  <RefreshCw className="w-6 h-6 text-[#347C78] mx-auto mb-2" />
                  <strong className="text-sm text-[#19354A] block">Moving to a New Rental</strong>
                  <p className="text-base text-[#52616A] mt-1">When signing a new lease with a different Colorado landlord.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] text-center">
                  <Clock className="w-6 h-6 text-[#347C78] mx-auto mb-2" />
                  <strong className="text-sm text-[#19354A] block">Management Transition</strong>
                  <p className="text-base text-[#52616A] mt-1">When a new property management company audits animal files.</p>
                </div>
              </div>
            </section>

            {/* Renewal Process */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                How the Re-Evaluation Process Works
              </h2>
              <p>
                Renewing an existing letter is faster than your initial assessment. Because your clinical baseline has already been established:
              </p>
              <ol className="text-base mt-3 space-y-3 list-decimal list-inside text-[#24333B]">
                <li><strong>Submit an Annual Check-In:</strong> Complete an abbreviated questionnaire detailing how your animal supported you over the past year.</li>
                <li><strong>Telehealth Clinician Reassessment:</strong> An active Colorado-licensed therapist reviews your ongoing functional need.</li>
                <li><strong>Receive Your Updated Letter:</strong> Get a newly dated letter with updated clinician credentials and a fresh 12-month validity window.</li>
              </ol>
            </section>

            <InlineCta
              headline="Renew Your Colorado ESA Letter for $99"
              subhead="Ensure uninterrupted housing protection before your upcoming lease renewal."
              buttonText="Renew Your Letter ($99)"
            />

            {/* Cost */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Renewal Cost vs. New Client Cost
              </h2>
              <p>
                While first-time comprehensive clinical evaluations are $149, our annual renewal fee is discounted to a flat <strong>$99</strong>. This includes:
              </p>
              <ul className="text-base mt-3 space-y-2 text-[#24333B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27654F]" />
                  <span>Newly dated official letter valid for another 12 months.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27654F]" />
                  <span>Updated Document ID for 24/7 landlord verification.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27654F]" />
                  <span>Expedited priority processing within 24 hours.</span>
                </li>
              </ul>
            </section>
          </div>

          <RelatedPages links={related} />
          <ReviewerBox />
        </div>
      </article>

      <FAQAccordion items={faqs} title="Renewal Questions &amp; Answers" outputSchema={false} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <InlineCta
          headline="Keep Your Colorado ESA Documentation Current"
          subhead="Protect yourself from landlord pushback and unauthorized pet fees."
          buttonText="Start Your $99 Renewal"
        />
      </div>
    </>
  );
}

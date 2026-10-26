import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/modules/hero";
import { ProcessSteps } from "@/components/modules/process-steps";
import { InlineCta } from "@/components/modules/inline-cta";
import { CalloutBox } from "@/components/modules/callout-box";
import { FAQAccordion } from "@/components/modules/faq-accordion";
import { RelatedPages } from "@/components/modules/related-pages";
import { ReviewerBox } from "@/components/modules/reviewer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { CheckCircle2, Clock, FileCheck, ArrowRight, AlertTriangle } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/how-to-get-an-esa-letter-in-colorado/");

export const metadata: Metadata = buildMetadata(seo);

export default function HowToGetAnEsaLetterPage() {
  const faqs = [
    {
      question: "How long does it take to get an ESA letter in Colorado?",
      answer: "With our streamlined telehealth process, your evaluation is typically reviewed and completed within 24 to 48 business hours after you submit your intake assessment.",
    },
    {
      question: "Can I use an out-of-state therapist for a Colorado apartment?",
      answer: "No. Colorado HB26-1045 mandates that mental health professionals issuing ESA letters must hold an active license issued by the Colorado Department of Regulatory Agencies (DORA). Out-of-state letters are frequently rejected by Colorado landlords.",
    },
    {
      question: "What happens if I don't qualify during the evaluation?",
      answer: "We offer a 100% money-back guarantee. If our clinician determines an ESA is not clinically appropriate for your condition, your entire fee is promptly refunded.",
    },
  ];

  const related = [
    { title: "Colorado ESA Letter Requirements", href: "/requirements/", note: "Essential legal checklist" },
    { title: "What Is an ESA Letter?", href: "/what-is-an-esa-letter/", note: "Colorado renter guide" },
    { title: "ESA Letter Cost & Pricing", href: "/cost/", note: "Transparent pricing details" },
    { title: "Colorado HB26-1045 Law", href: "/rights/colorado-hb26-1045-explained/", note: "State statute review" },
  ];

  return (
    <>
      <JsonLd
        type="howto"
        title={seo.h1}
        description={seo.description}
        url={seo.canonical}
      />

      <Breadcrumbs
        items={[{ label: "Core Guides", href: "/how-it-works/" }, { label: "How to Get One in Colorado" }]}
      />

      <Hero
        variant="compact"
        h1={seo.h1}
        subhead="Follow Colorado's legal process to complete a clinical evaluation with a state-licensed therapist and secure compliant housing documentation."
        ctaText="Start Your 5-Minute Intake ($149)"
      />

      <article className="section-padding bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <CalloutBox type="quick-answer" title="Quick Answer: 3 Steps to a Valid Letter">
            <p>To get a valid ESA letter in Colorado:</p>
            <ol className="list-decimal pl-6 mt-2 space-y-1.5 marker:font-bold marker:text-[#347C78]">
              <li>Complete an online clinical intake describing your symptoms and companion animal bond.</li>
              <li>Meet with or have your intake reviewed by an active Colorado-licensed mental health professional.</li>
              <li>Receive your signed official recommendation letter on clinical letterhead containing the provider&apos;s DORA license number.</li>
            </ol>
          </CalloutBox>

          <div className="space-y-10 text-base text-[#24333B] leading-relaxed">
            {/* Eligibility Check */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Step 1: Eligibility Check (Do You Qualify?)
              </h2>
              <p>
                Before scheduling an evaluation, verify whether your mental or emotional health challenges meet the threshold for a reasonable accommodation under the Fair Housing Act and Colorado law.
              </p>
              <p className="mt-3">
                Qualifying conditions include generalized anxiety, social anxiety, major depressive disorder, PTSD, panic disorder, ADHD, OCD, and emotional distress that substantially interferes with major life activities like sleeping, concentrating, or maintaining a stable home routine.
              </p>
            </section>

            {/* Step-by-Step Process */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Step 2: The Telehealth Evaluation Process
              </h2>
              <p>
                In Colorado, a valid ESA evaluation must establish a bona fide patient-provider clinical relationship. Through our secure HIPAA-compliant platform:
              </p>
              <ol className="mt-4 space-y-4 list-decimal list-inside text-sm text-[#24333B]">
                <li className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <strong>Complete the Assessment:</strong> Answer structured questions about your emotional challenges, medical history, and how your animal provides therapeutic comfort.
                </li>
                <li className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <strong>Clinical Telehealth Review:</strong> A psychologist, LCSW, or LPC licensed by the Colorado Department of Regulatory Agencies (DORA) reviews your assessment against DSM-5 criteria.
                </li>
                <li className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <strong>Formal Determination:</strong> If an ESA is clinically indicated, the provider drafts your official letter on professional letterhead with full licensing disclosures.
                </li>
              </ol>
            </section>

            <InlineCta
              headline="Ready to Begin Your Colorado Evaluation?"
              subhead="Our state-licensed clinicians review intakes in 24–48 hours. 100% refund if you do not qualify."
            />

            {/* Timeline */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Step 3: Timeline — What to Expect
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] text-center">
                  <Clock className="w-6 h-6 text-[#347C78] mx-auto mb-2" />
                  <span className="font-bold text-sm text-[#19354A] block">Day 1</span>
                  <span className="text-xs text-[#52616A]">Complete online intake (3–5 minutes)</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] text-center">
                  <FileCheck className="w-6 h-6 text-[#347C78] mx-auto mb-2" />
                  <span className="font-bold text-sm text-[#19354A] block">Hours 24–48</span>
                  <span className="text-xs text-[#52616A]">Clinician review &amp; letter generation</span>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] text-center">
                  <CheckCircle2 className="w-6 h-6 text-[#27654F] mx-auto mb-2" />
                  <span className="font-bold text-sm text-[#19354A] block">Immediate Delivery</span>
                  <span className="text-xs text-[#52616A]">Download secure signed PDF</span>
                </div>
              </div>
            </section>

            {/* What you receive */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                What You Receive With Your Colorado ESA Letter
              </h2>
              <ul className="space-y-2.5 text-sm text-[#24333B]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0 mt-0.5" />
                  <span>Official clinical letter signed by an active Colorado-licensed therapist (Psy.D., LCSW, or LPC).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0 mt-0.5" />
                  <span>Complete clinician licensing credentials (DORA license number, board, office address).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0 mt-0.5" />
                  <span>24/7 Landlord Verification ID for property manager verification portals.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0 mt-0.5" />
                  <span>Free copy-ready Landlord Accommodation Request template.</span>
                </li>
              </ul>
            </section>

            {/* Common mistakes */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Common Mistakes to Avoid
              </h2>
              <div className="p-5 rounded-xl bg-[#FDF0EE] border border-[#A33E35]/30 space-y-3 text-xs sm:text-sm text-[#24333B]">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#A33E35] shrink-0 mt-0.5" />
                  <span><strong>Do not buy online registry certificates:</strong> Certificates and ID cards have zero legal standing under the Fair Housing Act and will be rejected.</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#A33E35] shrink-0 mt-0.5" />
                  <span><strong>Do not use out-of-state clinicians:</strong> Colorado HB26-1045 requires your healthcare provider to hold a valid license to practice in Colorado.</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#A33E35] shrink-0 mt-0.5" />
                  <span><strong>Do not wait until eviction notice:</strong> Request your accommodation as early as possible before signing a lease or when moving in.</span>
                </div>
              </div>
            </section>
          </div>

          <RelatedPages links={related} />
          <ReviewerBox />
        </div>
      </article>

      <FAQAccordion items={faqs} title="Frequently Asked Questions" outputSchema={false} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <InlineCta
          headline="Start Your Colorado Telehealth Intake Today"
          subhead="Join hundreds of Colorado renters living peacefully with their assistance animals."
        />
      </div>
    </>
  );
}

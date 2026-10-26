import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/modules/hero";
import { SampleLetterViewer } from "@/components/modules/sample-letter-viewer";
import { InlineCta } from "@/components/modules/inline-cta";
import { CalloutBox } from "@/components/modules/callout-box";
import { FAQAccordion } from "@/components/modules/faq-accordion";
import { RelatedPages } from "@/components/modules/related-pages";
import { ReviewerBox } from "@/components/modules/reviewer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { FileCheck, ShieldCheck, CheckCircle2 } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/sample-letter/");

export const metadata: Metadata = buildMetadata(seo);

export default function SampleLetterPage() {
  const faqs = [
    {
      question: "Can I download this sample letter and use it with my landlord?",
      answer: "No. This sample letter is an educational preview showing the required legal structure. An actual valid ESA letter must be issued specifically to you following a clinical evaluation by an active Colorado-licensed mental health professional.",
    },
    {
      question: "Will my real letter look identical to this sample?",
      answer: "Yes. Your letter will feature official clinical letterhead, the licensed provider's active Colorado license number, practice address, phone number, issue date, your name, and your companion animal's information.",
    },
    {
      question: "Does the sample letter reveal a medical diagnosis?",
      answer: "Notice that the sample letter does NOT state any specific psychiatric diagnostic code (such as DSM-5 codes). Federal privacy laws (HIPAA) protect your specific diagnosis from landlord disclosure.",
    },
  ];

  const related = [
    { title: "Colorado ESA Letter Requirements", href: "/requirements/", note: "Review full checklist" },
    { title: "ESA Letter Cost & Pricing", href: "/cost/", note: "Pricing & refund terms" },
    { title: "What Is an ESA Letter?", href: "/what-is-an-esa-letter/", note: "Legal overview" },
    { title: "Verify an ESA Letter Tool", href: "/verify-esa-letter/", note: "Landlord verification" },
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
        items={[{ label: "Core Guides", href: "/how-it-works/" }, { label: "Sample Letter" }]}
      />

      <Hero
        variant="compact"
        h1={seo.h1}
        subhead="Inspect an authentic, compliant Colorado emotional support animal letter. Learn how every legal element is structured to ensure 100% landlord acceptance."
        ctaText="Get Your Official Letter ($149)"
      />

      <article className="section-padding bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <CalloutBox type="info" title="Educational Preview Only">
            The document below is an annotated educational sample. A legally valid ESA letter cannot be copied or self-certified; it must be custom-issued by a licensed Colorado healthcare provider following a confidential evaluation.
          </CalloutBox>

          {/* Interactive M12 Sample Letter Viewer */}
          <section className="my-8">
            <h2 className="text-h2 text-[#19354A] mb-4 text-center">
              Annotated Colorado ESA Letter Preview
            </h2>
            <p className="text-body-normal text-[#52616A] text-center max-w-2xl mx-auto mb-8">
              Click any of the numbered markers on the letter to learn why each specific element is required by Colorado landlords and the Fair Housing Act.
            </p>
            <SampleLetterViewer />
          </section>

          <div className="space-y-10 text-base text-[#24333B] leading-relaxed mt-12 max-w-[860px] mx-auto">
            {/* Element by Element Breakdown */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Element-by-Element Breakdown of a Compliant Letter
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <h3 className="font-bold text-base text-[#19354A] mb-1">
                    1. Professional Practice Letterhead
                  </h3>
                  <p className="text-base text-[#52616A]">
                    Contains the clinician&apos;s legal practice name, physical Colorado office location, professional email, and phone number so housing managers can verify authenticity.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <h3 className="font-bold text-base text-[#19354A] mb-1">
                    2. State Regulatory Board &amp; License Number
                  </h3>
                  <p className="text-base text-[#52616A]">
                    Explicitly states the clinician&apos;s license type (Psy.D., LCSW, LPC), issuing state (Colorado), and active license number, enabling 24/7 verification via DORA.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <h3 className="font-bold text-base text-[#19354A] mb-1">
                    3. Protected Disability Need Statement
                  </h3>
                  <p className="text-base text-[#52616A]">
                    Confirms you are under clinical care and experience an emotional impairment that substantially limits major life activities without disclosing confidential medical details.
                  </p>
                </div>
              </div>
            </section>

            <InlineCta
              headline="Ready for Your Official Signed Letter?"
              subhead="Evaluated by Colorado-licensed psychologists. Fast 24–48 hour turnaround with 100% money-back guarantee."
            />

            {/* What landlords look for */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                What Colorado Landlords &amp; Verification Services Look For
              </h2>
              <p>
                Institutional property managers across Denver, Boulder, and Colorado Springs frequently submit ESA letters to screening companies (such as PetScreening.com). These services check for three key things:
              </p>
              <ul className="text-base mt-3 space-y-2 text-[#24333B]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27654F] shrink-0 mt-0.5" />
                  <span><strong>Active In-State License:</strong> They verify the license is current in the Colorado DORA database.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27654F] shrink-0 mt-0.5" />
                  <span><strong>Recent Issue Date:</strong> They ensure the letter is dated within the preceding 12 months.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#27654F] shrink-0 mt-0.5" />
                  <span><strong>No Fraudulent Registries:</strong> They check that the letter is from an individual healthcare provider rather than an automated registry.</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="max-w-[860px] mx-auto mt-10">
            <RelatedPages links={related} />
            <ReviewerBox />
          </div>
        </div>
      </article>

      <FAQAccordion items={faqs} title="Sample Letter Questions" outputSchema={false} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <InlineCta
          headline="Get Your Own Legitimate Colorado ESA Letter"
          subhead="Simple 3-step evaluation. Fast digital delivery via secure PDF."
        />
      </div>
    </>
  );
}

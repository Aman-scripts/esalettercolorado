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
import { siteConfig } from "@/data/site-config";
import { CheckCircle2, ShieldCheck, AlertCircle, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Colorado ESA Letter Requirements: Valid Letter Checklist [56 chars]",
  description:
    "See what a valid Colorado ESA letter must include, who can write it, how long it lasts, and the red flags that landlords use to spot invalid letters. [149 chars]",
  alternates: {
    canonical: `${siteConfig.url}/requirements/`,
  },
};

export default function RequirementsPage() {
  const checklist = [
    "Official practice letterhead with provider's Colorado business address & telephone number",
    "Healthcare provider's full name, professional title, and credentials (e.g. Psy.D., LCSW, LPC)",
    "Active Colorado Department of Regulatory Agencies (DORA) license number and license type",
    "Date of clinical issuance (must be current within the last 12 months)",
    "Explicit statement that the client has an impairment recognized under the Fair Housing Act",
    "Clinical determination that the emotional support animal provides therapeutic benefit easing symptoms",
    "Identification of the specific companion animal (name, species, and breed if applicable)",
    "Original handwritten or secure cryptographic digital signature of the Colorado provider",
  ];

  const faqs = [
    {
      question: "Can a landlord require my therapist to fill out a custom medical form?",
      answer: "No. HUD guidance (FHEO-2020-01) clarifies that landlords cannot demand that your provider complete proprietary, extensive questionnaires or sign liability waivers. A standard, compliant clinical letter containing all required elements is legally sufficient.",
    },
    {
      question: "Does the letter need to state my exact mental health diagnosis?",
      answer: "No. Federal privacy laws (HIPAA) and HUD rules explicitly protect your medical privacy. The letter only needs to confirm that you have an impairment meeting FHA criteria; it should never reveal your private psychiatric diagnosis.",
    },
    {
      question: "Can a Colorado landlord reject a letter from a telehealth therapist?",
      answer: "No. Telehealth is legally recognized in Colorado. As long as your evaluating therapist holds an active Colorado license and conducted a bona fide clinical evaluation, telehealth documentation carries the exact same legal weight as an in-person letter.",
    },
  ];

  const related = [
    { title: "Sample ESA Letter (Annotated)", href: "/sample-letter/", note: "Visual element breakdown" },
    { title: "Colorado HB26-1045 Law", href: "/rights/colorado-hb26-1045-explained/", note: "Statutory standards" },
    { title: "What to Do If Landlord Denies", href: "/rights/landlord-denials/", note: "Legal response steps" },
    { title: "Why ESA Registries Are Not Valid", href: "/rights/fake-registries-warning/", note: "Avoid scam red flags" },
  ];

  return (
    <>
      <JsonLd
        type="article"
        title="Colorado ESA Letter Requirements: Valid Letter Checklist"
        description="See what a valid Colorado ESA letter must include, who can write it, how long it lasts, and the red flags that landlords use to spot invalid letters."
        url={`${siteConfig.url}/requirements/`}
      />

      <Breadcrumbs
        items={[{ label: "Core Guides", href: "/how-it-works/" }, { label: "Requirements Checklist" }]}
      />

      <Hero
        variant="compact"
        h1="Colorado ESA Letter Requirements: Valid Letter Checklist"
        subhead="Ensure your emotional support animal documentation meets all state and federal standards under Colorado HB26-1045, C.R.S. 24-34-502, and HUD guidance."
        ctaText="Get a Compliant Letter ($149)"
      />

      <article className="section-padding bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          <CalloutBox type="legal-warning" title="Colorado Legal Standard: Active In-State License Required">
            Under Colorado HB26-1045, letters for housing accommodations must be authored by a healthcare professional holding an active, unencumbered license issued by the State of Colorado. Letters from out-of-state clinicians with no Colorado credentials can be legally rejected by Colorado landlords.
          </CalloutBox>

          <div className="space-y-10 text-base text-[#24333B] leading-relaxed">
            {/* Mandatory checklist */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Mandatory Elements Checklist (The 8 Legal Requirements)
              </h2>
              <p>
                To withstand legal scrutiny from Colorado landlords, attorneys, and property management verification services, your ESA letter must include each of the following elements:
              </p>
              <div className="my-6 space-y-3">
                {checklist.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#27654F] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-[#19354A]">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Provider rules */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Licensed Provider Rules in Colorado
              </h2>
              <p>
                Only professionals licensed under Title 12 of the Colorado Revised Statutes can issue valid assistance animal recommendations. This includes:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#24333B]">
                <li>• <strong>Licensed Clinical Psychologists (Psy.D., Ph.D.)</strong></li>
                <li>• <strong>Licensed Clinical Social Workers (LCSW)</strong></li>
                <li>• <strong>Licensed Professional Counselors (LPC)</strong></li>
                <li>• <strong>Licensed Marriage and Family Therapists (LMFT)</strong></li>
                <li>• <strong>Licensed Physicians &amp; Psychiatrists (MD, DO)</strong></li>
              </ul>
              <p className="mt-3 text-xs text-[#52616A]">
                Note: Letters from life coaches, energy healers, or unaccredited counselors are not legally recognized under Colorado housing statutes.
              </p>
            </section>

            <InlineCta
              headline="Ensure 100% Landlord Acceptance with a Real Colorado Clinician"
              subhead="All evaluations conducted by Colorado-licensed therapists. Full refund if not approved."
            />

            {/* Validity period */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Validity Period: How Long Does an ESA Letter Last?
              </h2>
              <p>
                Under standard HUD administrative practice and Colorado landlord lease review policies, an emotional support animal recommendation letter should be issued or renewed annually (within the previous 12 months).
              </p>
              <p className="mt-3">
                When your annual lease renews, your property manager has the legal right to request updated documentation confirming that your therapeutic need for the assistance animal is ongoing.
              </p>
            </section>

            {/* Red flags */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Red Flags That Cause Landlords to Reject Letters
              </h2>
              <div className="space-y-3 text-sm">
                <div className="p-4 rounded-xl bg-[#FDF0EE] border border-[#A33E35]/30">
                  <strong className="text-[#A33E35] block mb-1">1. Missing Colorado License Credentials</strong>
                  <p className="text-xs text-[#52616A]">Letters that omit the clinician&apos;s license number or state of licensing fail state statutory requirements under HB26-1045.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FDF0EE] border border-[#A33E35]/30">
                  <strong className="text-[#A33E35] block mb-1">2. Instant Purchase Without Clinical Review</strong>
                  <p className="text-xs text-[#52616A]">Websites that sell downloadable letters within 2 minutes without clinician review provide invalid documents that property management portals flag immediately.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#FDF0EE] border border-[#A33E35]/30">
                  <strong className="text-[#A33E35] block mb-1">3. Registry IDs and Certificates Attached</strong>
                  <p className="text-xs text-[#52616A]">Attaching a &ldquo;National ESA Registry&rdquo; certificate or badge is a primary indicator to landlords of a fraudulent online purchase.</p>
                </div>
              </div>
            </section>
          </div>

          <RelatedPages links={related} />
          <ReviewerBox />
        </div>
      </article>

      <FAQAccordion items={faqs} title="Requirements FAQ" outputSchema={false} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <InlineCta
          headline="Get an ESA Letter That Meets Every Colorado Requirement"
          subhead="Evaluated by Colorado-licensed psychologists and counselors. 100% refund guarantee."
        />
      </div>
    </>
  );
}

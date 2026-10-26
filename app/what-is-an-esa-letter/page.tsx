import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/modules/hero";
import { InlineCta } from "@/components/modules/inline-cta";
import { CalloutBox } from "@/components/modules/callout-box";
import { FAQAccordion } from "@/components/modules/faq-accordion";
import { RelatedPages } from "@/components/modules/related-pages";
import { ReviewerBox } from "@/components/modules/reviewer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { CheckCircle2, AlertTriangle, ShieldCheck, FileText, ArrowRight, Sparkles } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/what-is-an-esa-letter/");

export const metadata: Metadata = buildMetadata(seo);

export default function WhatIsAnEsaLetterPage() {
  const faqs = [
    {
      question: "What is an emotional support animal letter?",
      answer: "An ESA letter is an official clinical document written and signed by a state-licensed mental health professional. It certifies that the recipient has an emotional or psychological condition and that having a companion animal provides necessary therapeutic relief.",
    },
    {
      question: "Is an ESA letter the same as a pet certification or registration?",
      answer: "No. Federal HUD guidelines and Colorado HB26-1045 state that registries, ID badges, and certification websites are not recognized legal proof. Only a letter from an actively licensed healthcare provider who evaluated you is valid.",
    },
    {
      question: "Do landlords in Colorado have to accept an ESA letter?",
      answer: "Yes, under the Fair Housing Act and Colorado C.R.S. 24-34-502, landlords must grant reasonable accommodations for legitimate assistance animals, waiving pet bans, pet rent, and pet deposits.",
    },
    {
      question: "How long is an ESA letter valid in Colorado?",
      answer: "Most Colorado property managers require an ESA letter to be issued or renewed within the preceding 12 months to reflect your current functional condition.",
    },
  ];

  const related = [
    { title: "Colorado ESA Letter Requirements", href: "/requirements/", note: "Mandatory letter checklist" },
    { title: "Fair Housing Act & Your ESA", href: "/rights/fair-housing-act/", note: "Federal housing protections" },
    { title: "Sample ESA Letter (Annotated)", href: "/sample-letter/", note: "Inspect legal elements" },
    { title: "ESA vs Service Animal in Colorado", href: "/rights/esa-vs-service-animal/", note: "Compare rights & access" },
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
        items={[{ label: "Core Guides", href: "/how-it-works/" }, { label: "What Is an ESA Letter?" }]}
      />

      <Hero
        variant="compact"
        h1={seo.h1}
        subhead="Learn the legal definition, statutory basis under the Fair Housing Act and Colorado HB26-1045, who can write a valid letter, and how to use it with your landlord."
        ctaText="Get Evaluated in Colorado ($149)"
        bgImage="/images/colorado-esa-hero.webp"
      />

      {/* Visual Showcase: The Real Difference of a Compliant Colorado Letter */}
      <section className="bg-white border-b border-[#D5DFDB] py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col">
              <div className="rounded-3xl overflow-hidden border-2 border-[#D5DFDB] shadow-xl bg-[#E8F0ED] relative flex-1 min-h-[360px] sm:min-h-[420px]">
                <Image
                  src="/images/colorado-esa-hero.webp"
                  alt="Colorado resident with emotional support golden retriever in sunlit Denver apartment"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-xl text-xs font-semibold text-[#19354A] flex items-center justify-between border border-[#D5DFDB] shadow-sm z-10">
                  <span className="flex items-center gap-1.5 text-[#347C78]">
                    <ShieldCheck className="w-4 h-4" />
                    Bona Fide Healthcare Provider Letter
                  </span>
                  <span className="text-[#52616A] font-mono">DORA Registered</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold text-[#347C78] bg-[#E8F0ED] px-3 py-1 rounded-full border border-[#D5DFDB] uppercase tracking-wider inline-block mb-3 self-start">
                Legal Housing Instrument
              </span>
              <h2 className="text-h2 text-[#19354A]">
                An Official Medical Recommendation, Not a Plastic ID Badge
              </h2>
              <p className="text-body-large text-[#52616A] mt-3 leading-relaxed">
                An ESA letter is not an online registry entry, ID card, or decorative vest. In Colorado, an emotional support animal is only legally verified when supported by an authentic clinical letter issued by a healthcare provider actively licensed by DORA.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-xs text-[#24333B]">
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>Clinical Letterhead:</strong> Clinician DORA license &amp; phone.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>HUD FHEO-2020-01:</strong> 100% federal compliance format.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>Direct Verification:</strong> Landlord calls clinician to verify.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>12-Month Coverage:</strong> Meets annual Colorado housing standards.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Answer Callout */}
          <CalloutBox type="quick-answer" title="In Brief: Definition & Purpose">
            An Emotional Support Animal (ESA) letter is a formal medical document issued by a licensed mental health professional (such as a psychologist, clinical social worker, or LPC) certifying that a tenant has a diagnosed mental or emotional health condition and that an animal is necessary to afford them equal opportunity to use and enjoy their home.
          </CalloutBox>

          <div className="space-y-10 text-base text-[#24333B] leading-relaxed">
            {/* Section 1: Definition */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Definition of an ESA Letter
              </h2>
              <p>
                An emotional support animal letter serves as legal verification under federal and state civil rights laws that an individual requires an assistance animal for therapeutic purposes. Unlike pets, which landlords can restrict or charge fees for, assistance animals are recognized by law as auxiliary aids essential for daily functional stability.
              </p>
              <p className="mt-3">
                The letter connects a person&apos;s diagnosed condition (such as chronic anxiety, major depressive disorder, PTSD, panic disorder, or ADHD) with the specific therapeutic support provided by the animal, such as emotional grounding, tactile calming, or disruption of acute distress.
              </p>
            </section>

            {/* Section 2: Legal Basis */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Legal Basis: Fair Housing Act &amp; Colorado Law
              </h2>
              <p>
                Two primary statutes protect tenants seeking an ESA accommodation in Colorado:
              </p>
              <div className="my-4 space-y-3">
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <h3 className="font-bold text-base text-[#19354A]">1. The Federal Fair Housing Act (FHA)</h3>
                  <p className="text-base text-[#52616A] mt-1">
                    Enforced by HUD, the FHA prohibits discrimination against individuals with disabilities in all private and public housing. It mandates that housing providers grant &ldquo;reasonable accommodations&rdquo; by waiving pet prohibitions and fees.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <h3 className="font-bold text-base text-[#19354A]">2. Colorado HB26-1045 &amp; C.R.S. § 24-34-502</h3>
                  <p className="text-base text-[#52616A] mt-1">
                    Colorado state law explicitly defines assistance animals and requires that documentation be issued by healthcare providers who hold an active license in Colorado and have conducted a bona fide clinical assessment.
                  </p>
                </div>
              </div>
            </section>

            {/* Inline CTA after section 2 */}
            <InlineCta
              headline="Need a Legitimate Colorado ESA Letter?"
              subhead="Complete your confidential telehealth intake today. Evaluated by active Colorado-licensed psychologists and counselors."
            />

            {/* Section 3: What It Is NOT */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                What an ESA Letter Is NOT (Scam Red Flags)
              </h2>
              <p>
                Misconceptions about emotional support animals are widespread due to aggressive online marketing. Understanding what a letter is not protects renters from legal rejection:
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#A33E35] shrink-0 mt-0.5" />
                  <span><strong>Not an Online Registry or Badge:</strong> There is no government registry for ESAs. Websites selling registration numbers or laminated badges are selling novelty items with zero legal validity in Colorado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#A33E35] shrink-0 mt-0.5" />
                  <span><strong>Not a Service Dog Certification:</strong> ESAs are not service animals. They do not require task training and do not have public access rights to stores, offices, or airplanes under the ADA.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#A33E35] shrink-0 mt-0.5" />
                  <span><strong>Not an Automated Quiz Download:</strong> Under Colorado law, an evaluation must involve a legitimate clinical assessment with a state-licensed professional. Instant automated downloads fail landlord review.</span>
                </li>
              </ul>
            </section>

            {/* Section 4: Who Can Write One */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                Who Can Legally Write an ESA Letter in Colorado?
              </h2>
              <p>
                Under Colorado HB26-1045 and HUD guidelines, your ESA letter must be issued by a healthcare provider licensed to practice in Colorado. Qualified professionals include:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="p-3.5 rounded-lg border border-[#D5DFDB] bg-[#F7F5F0]">
                  <span className="font-bold text-sm text-[#19354A] block">Licensed Psychologists (Psy.D., Ph.D.)</span>
                  <span className="text-xs text-[#52616A]">CO State Board of Psychologist Examiners</span>
                </div>
                <div className="p-3.5 rounded-lg border border-[#D5DFDB] bg-[#F7F5F0]">
                  <span className="font-bold text-sm text-[#19354A] block">Licensed Clinical Social Workers (LCSW)</span>
                  <span className="text-xs text-[#52616A]">CO State Board of Social Work Examiners</span>
                </div>
                <div className="p-3.5 rounded-lg border border-[#D5DFDB] bg-[#F7F5F0]">
                  <span className="font-bold text-sm text-[#19354A] block">Licensed Professional Counselors (LPC)</span>
                  <span className="text-xs text-[#52616A]">CO State Board of LPC Examiners</span>
                </div>
                <div className="p-3.5 rounded-lg border border-[#D5DFDB] bg-[#F7F5F0]">
                  <span className="font-bold text-sm text-[#19354A] block">Licensed Psychiatrists &amp; Physicians (MD, DO)</span>
                  <span className="text-xs text-[#52616A]">Colorado Medical Board</span>
                </div>
              </div>
            </section>

            {/* Section 5: How Used With Landlords */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-4">
                How It Is Used With Landlords &amp; Property Managers
              </h2>
              <p>
                When you rent an apartment or house in Colorado, provide a copy of your official ESA letter alongside a written request for reasonable accommodation. Once submitted:
              </p>
              <ul className="text-base mt-3 space-y-2 text-[#24333B]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78]" />
                  <span>The landlord must waive all pet deposits and monthly pet rent.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78]" />
                  <span>The landlord cannot enforce breed or weight restrictions on your ESA.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78]" />
                  <span>The landlord cannot ask for your medical diagnosis or therapy notes.</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Related Pages */}
          <RelatedPages links={related} />

          {/* Reviewer Box */}
          <ReviewerBox />
        </div>
      </article>

      {/* FAQ */}
      <FAQAccordion items={faqs} title="Questions About ESA Letters" outputSchema={false} />

      {/* Final CTA */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <InlineCta
          headline="Get Your Legitimate Colorado ESA Letter Today"
          subhead="Evaluated by Colorado-licensed clinicians. Fast 24–48h digital delivery with full landlord verification."
        />
      </div>
    </>
  );
}

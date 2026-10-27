import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/modules/hero";
import { SiloChildGrid, SiloChildItem } from "@/components/modules/silo-child-grid";
import { InlineCta } from "@/components/modules/inline-cta";
import { LatestBlog } from "@/components/modules/latest-blog";
import { FAQAccordion } from "@/components/modules/faq-accordion";
import { ReviewerBox } from "@/components/modules/reviewer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { conditionsList } from "@/data/conditions-data";
import { Heart, Stethoscope, ShieldCheck, CheckCircle2, Sparkles, Brain } from "lucide-react";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/conditions/");

export const metadata: Metadata = buildMetadata(seo);

export default function ConditionsHubPage() {
  const childGridItems: SiloChildItem[] = conditionsList.map((cond) => ({
    title: cond.name,
    slug: cond.slug,
    href: `/conditions/${cond.slug}/`,
    shortDesc: cond.shortDesc,
    badge: cond.slug === "eligible-animals" ? "Species Guide" : "Mental Health Condition",
  }));

  const faqs = [
    {
      question: "Which conditions qualify for an ESA in Colorado?",
      answer: "Colorado law does not list specific qualifying conditions. What matters is whether you have a disability, such as a mental or emotional health condition that substantially limits a major life activity, and whether the animal is necessary to address a disability-related need. A licensed professional evaluates this individually.",
    },
    {
      question: "Do I need a formal diagnosis or prior records to qualify for an ESA in Colorado?",
      answer: "You do not need prior psychiatric records to apply. A licensed mental health professional evaluates whether you have a disability-related need. Your landlord may request reasonable documentation but is not entitled to your diagnosis or treatment details.",
    },
    {
      question: "Can I get an ESA letter in Colorado for mild or situational stress?",
      answer: "It depends on your individual situation. A licensed professional decides whether your symptoms amount to a disability that substantially limits a major life activity. Everyday or temporary stress alone may not meet that standard.",
    },
    {
      question: "Does my ESA in Colorado need to be trained?",
      answer: "No. Under Colorado law, an emotional support animal is an animal that provides solely emotional support to alleviate a symptom or effect of a disability, and it does not need task training. Service animals, by contrast, must be individually trained to perform specific tasks.",
    },
  ];

  return (
    <>
      <JsonLd
        type="article"
        title={seo.h1}
        description={seo.description}
        url={seo.canonical}
      />

      <Breadcrumbs items={[{ label: "Qualifying Conditions" }]} />

      <Hero
        variant="compact"
        h1={seo.h1}
        subhead="Explore mental and emotional health conditions that may qualify as disabilities under Colorado housing law, how our clinicians evaluate clinical need, and how companion animals may provide daily support."
        ctaText="Check Your Eligibility ($149)"
        bgImage="/images/colorado-apartment-peaceful-esa.webp"
      />

      {/* Visual Feature: Therapeutic Living & Co-Regulation */}
      <section className="bg-white border-b border-[#D5DFDB] py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col">
              <div className="rounded-3xl overflow-hidden border-2 border-[#D5DFDB] shadow-xl bg-[#E8F0ED] relative flex-1 min-h-[360px] sm:min-h-[420px]">
                <Image
                  src="/images/colorado-apartment-peaceful-esa.webp"
                  alt="Colorado resident resting peacefully with their emotional support dog with Rocky Mountain views"
                  fill
                  sizes="(min-width: 1024px) 650px, 100vw"
                  quality={90}
                  priority
                  fetchPriority="high"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs px-4 py-2.5 rounded-xl text-xs font-semibold text-[#19354A] flex items-center justify-between border border-[#D5DFDB] shadow-sm z-10">
                  <span className="flex items-center gap-1.5 text-[#347C78]">
                    <Heart className="w-4 h-4 fill-current text-[#A65331]" />
                    Therapeutic Co-Regulation &amp; Rest
                  </span>
                  <span className="text-[#52616A] font-mono">DSM-5 Nexus</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold text-[#347C78] bg-[#E8F0ED] px-3 py-1 rounded-full border border-[#D5DFDB] uppercase tracking-wider inline-block mb-3 self-start">
                Clinical Qualification Standard
              </span>
              <h2 className="text-h2 text-[#19354A]">
                How Emotional Support Animals Provide Vital Home Stability
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-xs text-[#24333B]">
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>Tactile Grounding:</strong> May help ease physical anxiety symptoms.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>Routine Support:</strong> May help encourage consistent daily routines.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>Sensory Soothing:</strong> May offer a sense of calm and safety.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0" />
                  <span><strong>No Prior Records:</strong> Evaluation assesses your individual needs.</span>
                </div>
              </div>
              <p className="text-body-large text-[#52616A] mt-6 leading-relaxed">
                Under Colorado House Bill 26-1045, an emotional support animal is an animal that provides solely emotional support to alleviate a symptom or effect of a disability and does not require task-training. Federal enforcement for untrained ESAs has narrowed since HUD&apos;s May 2026 guidance. The standard is whether a tenant has a disability and the animal is necessary to address a disability-related need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <article className="section-padding bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* 200-300 word intro */}
          <div className="space-y-4 text-base text-[#24333B] leading-relaxed">
            <p className="text-lg font-medium text-[#19354A] leading-relaxed">
              Living with chronic anxiety, depression, trauma, or neurodevelopmental challenges can significantly impact how an individual functions in their private living space. In Colorado, individuals experiencing these emotional impairments have the legal right to request an emotional support animal as a reasonable accommodation in housing.
            </p>
            <p>
              Below is an overview of qualifying criteria, the clinical evaluation process conducted by our state-licensed mental health professionals, and detailed guides for each recognized condition.
            </p>
          </div>

          <div className="my-10 space-y-10 text-base text-[#24333B] leading-relaxed">
            {/* Criteria */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                1. Qualifying Criteria (Disability-Related Need)
              </h2>
              <p>
                To request an assistance animal accommodation under Colorado law, two core criteria generally apply:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <h3 className="text-lg font-bold text-[#19354A] mb-1">Functional Impairment</h3>
                  <p className="text-base text-[#52616A]">A mental or emotional health condition that substantially limits life functions such as sleep, social interaction, mood stability, or concentration.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB]">
                  <h3 className="text-lg font-bold text-[#19354A] mb-1">Therapeutic Nexus</h3>
                  <p className="text-base text-[#52616A]">A direct clinical connection showing that the animal&apos;s companion presence mitigates functional symptoms and allows equal enjoyment of the dwelling.</p>
                </div>
              </div>
            </section>

            {/* Role of a licensed provider */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                2. Role of a Licensed Colorado Healthcare Provider
              </h2>
              <p>
                Housing providers may request reasonable documentation of a disability and disability-related need, typically a letter from a licensed healthcare professional. A genuine clinical evaluation by a licensed professional, such as a psychologist, clinical social worker (LCSW), or licensed professional counselor (LPC), helps support your request. Letters generated by automated quizzes alone may be questioned.
              </p>
            </section>

            {/* Evaluation process */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                3. The Confidential Evaluation Process
              </h2>
              <p>
                Our telehealth process is designed to be compassionate, respectful, and confidential. You will complete an intake assessment covering your symptoms, daily routines, and companion animal bond. A Colorado clinician reviews your information, validates criteria against DSM-5 clinical standards, and issues your official letter if clinically appropriate.
              </p>
            </section>
          </div>

          <ReviewerBox />
        </div>
      </article>

      {/* M6 Silo Child Grid */}
      <SiloChildGrid
        items={childGridItems}
        title="Common Conditions That May Qualify for an ESA in Colorado"
        subtitle="Have a look at the most common mental health conditions that could qualify an individual to get an ESA in Colorado."
        type="conditions"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="card-theme text-sm sm:text-base text-[#52616A] leading-relaxed">
          <strong className="text-[#19354A]">Note:</strong> Having any of the conditions listed above does not automatically qualify you for an ESA letter in Colorado. Eligibility requires an individualized clinical assessment by a Colorado-licensed mental health professional, who determines whether you have a qualifying disability-related need for an emotional support animal. An ESA letter is issued only if the professional finds it clinically appropriate.
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <InlineCta
          headline="Take the Free Colorado Pre-Screening Assessment"
          subhead="Confidential 3-minute intake. 100% money-back guarantee if not approved by your evaluating clinician."
        />
      </div>

      {/* M7 Latest from Blog */}
      <LatestBlog categorySlug="qualifying-conditions" title="Articles on Qualifying Conditions" />

      {/* M5 FAQ */}
      <FAQAccordion
        items={faqs}
        title="FAQs About ESA Qualifying Conditions in Colorado"
        subtitle="Answers to common questions about qualifying conditions, clinical evaluations, and the disability-related need for an assistance animal in Colorado housing"
        outputSchema={false}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <InlineCta
          headline="Speak With a Colorado-Licensed Mental Health Professional"
          subhead="Legitimate telehealth evaluations. Zero risk with our 100% refund guarantee."
        />
      </div>
    </>
  );
}

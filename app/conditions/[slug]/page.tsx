import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/modules/hero";
import { CalloutBox } from "@/components/modules/callout-box";
import { InlineCta } from "@/components/modules/inline-cta";
import { FAQAccordion } from "@/components/modules/faq-accordion";
import { RelatedPages } from "@/components/modules/related-pages";
import { ReviewerBox } from "@/components/modules/reviewer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { conditionsList, ConditionPage } from "@/data/conditions-data";
import { getPageSeo, pageMetadata } from "@/lib/seo";
import { Heart, Stethoscope, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";

interface ConditionSpokeProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return conditionsList.map((cond) => ({
    slug: cond.slug,
  }));
}

export async function generateMetadata({ params }: ConditionSpokeProps): Promise<Metadata> {
  const { slug } = await params;
  const cond = conditionsList.find((c) => c.slug === slug);
  if (!cond) return {};

  return pageMetadata(`/conditions/${cond.slug}/`);
}

export default async function ConditionSpokePage({ params }: ConditionSpokeProps) {
  const { slug } = await params;
  const cond = conditionsList.find((c) => c.slug === slug);

  if (!cond) {
    notFound();
  }

  const seo = getPageSeo(`/conditions/${cond.slug}/`);

  // Cross-silo mandatory internal linking rules:
  // Must link up to /conditions/, across to /requirements/ and /how-it-works/
  const relatedLinks = [
    { title: "Who Qualifies for an ESA in Colorado? (Conditions Hub)", href: "/conditions/", note: "Silo Hub Overview" },
    { title: "Colorado ESA Letter Requirements", href: "/requirements/", note: "Mandatory Checklist" },
    { title: "How It Works: Step-by-Step Telehealth", href: "/how-it-works/", note: "Evaluation Process" },
    ...cond.relatedConditions.map((relSlug) => {
      const found = conditionsList.find((c) => c.slug === relSlug);
      return found ? { title: `Can You Get an ESA Letter for ${found.name}?`, href: `/conditions/${found.slug}/`, note: "Related Condition Guide" } : null;
    }).filter(Boolean) as { title: string; href: string; note: string }[],
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
        items={[
          { label: "Do I Qualify?", href: "/conditions/" },
          { label: cond.name },
        ]}
      />

      <Hero
        variant="compact"
        h1={seo.h1}
        subhead={cond.shortDesc}
        ctaText="Check Your Eligibility ($149)"
      />

      <article className="section-padding bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* M9 Quick Answer Box (40–60 words) [REQUIRED] */}
          <CalloutBox type="quick-answer" title={`Quick Answer: Can ${cond.name} Qualify You for an ESA?`}>
            {cond.quickAnswer}
          </CalloutBox>

          <div className="space-y-10 text-base text-[#24333B] leading-relaxed mt-10">
            {/* How Condition qualifies */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                How {cond.name} Qualifies Under Federal and Colorado Law
              </h2>
              <p>{cond.howQualifies}</p>
              <p className="mt-3">
                Under HUD regulations implementing the Fair Housing Act, a disability is defined broadly as a physical or mental impairment that substantially limits one or more major life activities. When symptoms impair sleeping, working, concentrating, or maintaining emotional stability in the home, the legal threshold for accommodation is satisfied.
              </p>
            </section>

            {/* How an ESA may help */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                How an Emotional Support Animal May Help
              </h2>
              <p>{cond.howEsaHelps}</p>
              <div className="my-4 p-4 rounded-xl bg-[#F7F5F0] border border-[#D5DFDB] space-y-2 text-sm text-[#24333B]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0 mt-0.5" />
                  <span>Provides physiological co-regulation and lowers acute sympathetic arousal.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0 mt-0.5" />
                  <span>Establishes daily anchors and positive routines that mitigate emotional withdrawal.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#347C78] shrink-0 mt-0.5" />
                  <span>Delivers non-judgmental companionship that relieves isolation in private housing.</span>
                </div>
              </div>
            </section>

            {/* M4 Inline CTA */}
            <InlineCta
              headline={`Get Evaluated for a Colorado ESA Letter`}
              subhead="Complete a confidential telehealth assessment with a Colorado-licensed therapist. 100% money-back guarantee."
            />

            {/* What the therapist will ask */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                What the Evaluating Therapist Will Ask
              </h2>
              <p>{cond.therapistQuestions}</p>
              <p className="mt-3">
                Our Colorado-licensed clinicians approach evaluations with compassion and respect. You will not be interrogated or forced to recount traumatic memories in excessive detail. The focus remains on your current functional well-being and how an animal helps you navigate daily living.
              </p>
            </section>

            {/* Landlord considerations */}
            <section>
              <h2 className="text-h2 text-[#19354A] mb-3">
                Documentation and Landlord Considerations
              </h2>
              <p>{cond.landlordConsiderations}</p>
              <div className="p-4 rounded-xl bg-[#E8F0ED] border border-[#D5DFDB] text-xs sm:text-sm text-[#19354A] mt-3">
                <strong className="block mb-1">HIPAA Privacy Reminder:</strong>
                Your official ESA letter confirms that you are under the care of a licensed professional and have an impairment supporting an assistance animal. It deliberately does NOT disclose your confidential diagnosis or therapy history to your landlord.
              </div>
            </section>

            {/* M9 Legal callout */}
            <CalloutBox type="legal-warning" title="Non-Diagnostic & Fair Housing Legal Notice">
              This guide provides educational information regarding assistance animal housing accommodations and does not constitute medical advice or a formal diagnostic finding. Eligibility determinations are made solely through individual clinical assessment by an actively licensed mental health provider.
            </CalloutBox>
          </div>

          {/* M8 Related Pages (linking up to /conditions/, across to /requirements/ and /how-it-works/) */}
          <RelatedPages links={relatedLinks} title="Related Colorado Guides &amp; Resources" />

          {/* M11 Reviewer Box */}
          <ReviewerBox />
        </div>
      </article>

      {/* M5 FAQ */}
      <FAQAccordion items={cond.faqs} title={`Frequently Asked Questions: ${cond.name}`} outputSchema={false} />

      {/* Final CTA */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <InlineCta
          headline="Start Your Confidential Colorado Assessment Today"
          subhead="100% money-back guarantee if an ESA is not clinically indicated. Fast 24–48h digital delivery."
        />
      </div>
    </>
  );
}

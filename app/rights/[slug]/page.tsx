import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Hero } from "@/components/modules/hero";
import { CalloutBox } from "@/components/modules/callout-box";
import { RichText } from "@/components/modules/rich-text";
import { InlineCta } from "@/components/modules/inline-cta";
import { FAQAccordion } from "@/components/modules/faq-accordion";
import { RelatedPages } from "@/components/modules/related-pages";
import { ReviewerBox } from "@/components/modules/reviewer-box";
import { JsonLd } from "@/components/seo/json-ld";
import { rightsSpokes, RightsPage } from "@/data/rights-data";
import { getPageSeo, pageMetadata } from "@/lib/seo";

interface SpokeProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return rightsSpokes.map((spoke) => ({
    slug: spoke.slug,
  }));
}

export async function generateMetadata({ params }: SpokeProps): Promise<Metadata> {
  const { slug } = await params;
  const spoke = rightsSpokes.find((s) => s.slug === slug);
  if (!spoke) return {};

  return pageMetadata(`/rights/${spoke.slug}/`);
}

export default async function RightsSpokePage({ params }: SpokeProps) {
  const { slug } = await params;
  const spoke = rightsSpokes.find((s) => s.slug === slug);

  if (!spoke) {
    notFound();
  }

  const seo = getPageSeo(`/rights/${spoke.slug}/`);

  // Related pages: must link up to hub (/rights/) plus matching sibling spokes
  const relatedLinks = [
    { title: "Colorado ESA Laws & Housing Rights (Pillar Guide)", href: "/rights/", note: "Silo Hub Overview" },
    ...spoke.relatedSlugs
      .map((relSlug) => {
        const found = rightsSpokes.find((s) => s.slug === relSlug);
        return found ? { title: found.title, href: `/rights/${found.slug}/`, note: "Related Rights Guide" } : null;
      })
      .filter(Boolean) as { title: string; href: string; note: string }[],
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
          { label: "Your Rights", href: "/rights/" },
          { label: spoke.title },
        ]}
      />

      <Hero
        variant="compact"
        h1={seo.h1}
        subhead={spoke.shortDesc}
        ctaText="Get Your Colorado ESA Letter ($149)"
      />

      <article className="section-padding bg-white">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* M9 Quick Answer Box (40–60 words) [REQUIRED] */}
          <CalloutBox type="quick-answer" title="Quick Answer: Essential Legal Takeaway">
            {spoke.quickAnswer}
          </CalloutBox>

          <div className="space-y-10 text-base text-[#24333B] leading-relaxed mt-10">
            {spoke.sections.map((section, idx) => (
              <section key={idx}>
                <h2 className="text-h2 text-[#19354A] mb-3">
                  {section.title}
                </h2>
                <div className="text-base text-[#24333B] leading-relaxed whitespace-pre-line space-y-3">
                  <RichText text={section.content} />
                </div>
              </section>
            ))}

            {/* M9 Legal Callout (cite statute / regulation) */}
            <CalloutBox type="legal-warning" title="Colorado & Federal Legal Authority" cite={spoke.statuteCitation}>
              Assistance animal protections in Colorado housing are enforceable civil rights. Landlords who unlawfully deny qualified tenants or levy illegal pet fees are subject to administrative remedies through HUD and the Colorado Civil Rights Division.
            </CalloutBox>
          </div>

          {/* M4 Inline CTA */}
          <InlineCta
            headline="Protect Your Rental Housing Rights in Colorado"
            subhead="Evaluated by active Colorado-licensed mental health professionals. Fast 24–48 hour turnaround with 100% money-back guarantee."
          />

          {/* M8 Related Pages (includes link up to hub [REQUIRED]) */}
          <RelatedPages links={relatedLinks} title="Related Colorado Housing Rights Guides" />

          {/* M11 Reviewer Box */}
          <ReviewerBox />
        </div>
      </article>

      {/* M5 FAQ */}
      <FAQAccordion
        items={spoke.faqs}
        title={spoke.faqTitle || "Frequently Asked Questions"}
        subtitle={spoke.faqSubtitle}
        outputSchema={false}
      />

      {/* Final CTA */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <InlineCta
          headline="Get Evaluated by a State-Licensed Colorado Clinician"
          subhead="100% money-back guarantee if not clinically approved. Legitimate Colorado housing letters."
        />
      </div>
    </>
  );
}

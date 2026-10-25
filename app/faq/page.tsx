import { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FaqAccordion } from "@/components/modules/faq-accordion";
import { InlineCta } from "@/components/modules/inline-cta";
import { RelatedPages } from "@/components/modules/related-pages";
import { JsonLd } from "@/components/seo/json-ld";
import { allFaqs } from "@/data/faq-data";
import Link from "next/link";
import { buildMetadata, getPageSeo } from "@/lib/seo";

const seo = getPageSeo("/faq/");

export const metadata: Metadata = buildMetadata(seo);

const categories = ["Basics", "Qualifying", "Cost & Refunds", "Housing Rights", "Renewal"] as const;

export default function FaqPage() {
  const jsonLdData = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: allFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <div className="bg-ivory min-h-screen">
        <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

        {/* Hero Section */}
        <section className="section-padding pt-6 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="h1 mb-4">{seo.h1}</h1>
            <p className="body-large text-muted max-w-2xl mx-auto">
              Clear answers to the most common questions regarding emotional support animal evaluations, Colorado tenant housing protections, and state laws.
            </p>

            {/* Quick jump nav */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`#${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white border border-line text-navy hover:bg-softBlue transition"
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Grouped Accordions */}
        <main className="section-padding py-10 bg-white border-y border-line">
          <div className="max-w-4xl mx-auto space-y-16">
            {categories.map((category) => {
              const categoryFaqs = allFaqs
                .filter((f) => f.category === category)
                .map((f) => ({ q: f.question, a: f.answer }));

              return (
                <section
                  key={category}
                  id={category.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                  className="scroll-mt-24"
                >
                  <div className="border-b border-line pb-4 mb-6">
                    <h2 className="h2">{category} Questions</h2>
                  </div>
                  <FaqAccordion items={categoryFaqs} />
                </section>
              );
            })}
          </div>
        </main>

        {/* M4 Inline CTA */}
        <div className="section-padding py-12">
          <div className="max-w-4xl mx-auto">
            <InlineCta
              title="Still have questions about your situation?"
              description="Our Colorado-licensed clinicians review your specific living arrangements and mental health needs with zero obligation."
            />
          </div>
        </div>

        {/* M8 Related pages */}
        <div className="section-padding py-8 bg-ivory">
          <div className="max-w-4xl mx-auto">
            <RelatedPages
              title="Explore In-Depth Colorado Guides"
              pages={[
                {
                  title: "Colorado ESA Laws & Housing Rights",
                  href: "/rights/",
                  description: "Full review of Fair Housing Act rights, Colorado HB26-1045, and tenant protections.",
                },
                {
                  title: "Who Qualifies for an ESA in Colorado?",
                  href: "/conditions/",
                  description: "Diagnostic conditions, clinical standards, and therapist evaluation guidelines.",
                },
                {
                  title: "Colorado ESA Letter Requirements",
                  href: "/requirements/",
                  description: "Mandatory elements every legitimate Colorado housing letter must have.",
                },
              ]}
            />
          </div>
        </div>

        {/* Final CTA band */}
        <section className="p-12 bg-navy text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-4 text-white">Get Verified for Colorado Housing</h2>
            <p className="text-line text-sm max-w-xl mx-auto mb-8">
              Start your free confidential screening today. Guaranteed Colorado DORA therapist review.
            </p>
            <Link href="/how-it-works/#get-started" className="btn-primary">
              Get Your ESA Letter
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
